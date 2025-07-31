import Link from 'next/link';
import { getAllPosts } from '../../lib/posts';

export const metadata = { title: 'Blog' };

export default function BlogPage() {
  const posts = getAllPosts();
  return (
    <div className="max-w-3xl mx-auto p-4 space-y-6">
      <h1 className="text-3xl font-bold mb-4">Blog</h1>
      <ul className="space-y-2">
        {posts.map(p => (
          <li key={p.slug}>
            <Link href={`/blog/${p.slug}`} className="text-blue-600 underline">
              {p.title}
            </Link>
            <p className="text-sm text-gray-600">{p.excerpt}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
