import { notFound } from 'next/navigation';
import { getPost } from '../../../lib/posts';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default async function PostPage(props: any) {
  const { params } = props as { params: { slug: string } };
  let post;
  try {
    post = getPost(params.slug);
  } catch {
    notFound();
  }
  return (
    <article className="max-w-3xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">{post.meta.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </article>
  );
}
