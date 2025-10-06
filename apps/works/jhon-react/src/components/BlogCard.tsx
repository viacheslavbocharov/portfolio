import type { Post } from '@/types/post';

export default function PostCard({ post }: { post: Post }) {
  return (
    <article key={post.id} className="rounded-sm flex-1 border-b-1 border-[#E0E0E0] pb-4 sm:pb-8 mb-4 sm:mb-8">
      <h3 className="text-item-title mb-3.5">
        <a href="/" className="cursor-pointer">
          {post.title}
        </a>
      </h3>
      <div className="flex gap-6 items-center text-lg mb-3.5">
        <span>{post.date}</span>
        <span className="w-px h-6 bg-[var(--color-dark)]"></span>
        <span className='text-muted'>{post.topic}</span>
      </div>
      <div>{post.description}</div>
    </article>
  );
}
