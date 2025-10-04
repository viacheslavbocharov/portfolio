import Hero from '@/components/Hero';
import RecentPosts from '@/components/RecentPosts';
import { mockPosts } from '@/mocks/posts';

export default function Home() {
  return (
    <>
      <Hero />
      <RecentPosts posts={mockPosts} />
    </>
  );
}
