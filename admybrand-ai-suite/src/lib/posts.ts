import fs from 'fs';
import path from 'path';

export interface PostMeta {
  slug: string;
  title: string;
  excerpt: string;
}

interface Parsed {
  data: Record<string, string>;
  content: string;
}

function parseFrontMatter(raw: string): Parsed {
  const match = /^---\n([\s\S]+?)\n---\n([\s\S]*)$/m.exec(raw);
  if (!match) return { data: {}, content: raw };
  const data: Record<string, string> = {};
  for (const line of match[1].split(/\n/)) {
    const [k, ...rest] = line.split(":");
    if (k) data[k.trim()] = rest.join(":").trim();
  }
  return { data, content: match[2] };
}

export function getAllPosts(): PostMeta[] {
  const postsDir = path.join(process.cwd(), 'src', 'posts');
  const files = fs.readdirSync(postsDir);
  return files.filter(f => f.endsWith('.md')).map(file => {
    const slug = file.replace(/\.md$/, '');
    const raw = fs.readFileSync(path.join(postsDir, file), 'utf-8');
    const { data, content } = parseFrontMatter(raw);
    return {
      slug,
      title: data.title || slug,
      excerpt: data.excerpt || content.slice(0, 100) + '...',
    };
  });
}

export function getPost(slug: string): { meta: PostMeta; html: string } {
  const file = path.join(process.cwd(), 'src', 'posts', `${slug}.md`);
  const raw = fs.readFileSync(file, 'utf-8');
  const { data, content } = parseFrontMatter(raw);
  const html = markdownToHtml(content);
  return {
    meta: {
      slug,
      title: data.title || slug,
      excerpt: data.excerpt || '',
    },
    html,
  };
}

function markdownToHtml(md: string): string {
  return md
    .trim()
    .split(/\n\n+/)
    .map(block => {
      if (/^# (.*)/.test(block)) {
        return `<h1 class="text-3xl font-bold mb-4">${block.slice(2)}</h1>`;
      }
      if (/^## (.*)/.test(block)) {
        return `<h2 class="text-2xl font-semibold mb-4">${block.slice(3)}</h2>`;
      }
      return `<p class="mb-4">${block}</p>`;
    })
    .join('');
}
