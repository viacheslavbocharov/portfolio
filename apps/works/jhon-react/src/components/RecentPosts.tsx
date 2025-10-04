import type { Post } from '../types/post';
import Container from './Container';
import PostCard from './PostCard';

export default function RecentPosts({ posts }: { posts: Post[] }) {
  return (
    <section className="bg-bg pb-8">
      <Container>
        <div className="flex justify-between items-center py-5 ">
          <h2 className="text-block-title">Recent posts</h2>
          <a className="text-base text-sky-400" href="/">
            View all
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {posts.map((post: Post) => (
            <PostCard post={post} />
          ))}
        </div>
      </Container>
    </section>
  );
}
