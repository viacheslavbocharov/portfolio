import type { Post } from '@/types/post';

export default function PostCard({ post }: { post: Post }) {
  return (
    <article key={post.id} className="p-4 md:p-6 bg-white rounded-sm flex-1">
      <h3 className="text-item-title mb-8">
        <a href="/" className="cursor-pointer">
          {post.title}
        </a>
      </h3>
      <div className="flex gap-6 items-center text-lg mb-7">
        <span>{post.date}</span>
        <span className="w-px h-6 bg-[var(--color-dark)]"></span>
        <span>{post.topic}</span>
      </div>
      <div>{post.description}</div>
    </article>
  );
}
