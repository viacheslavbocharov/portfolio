import FeatureWorks from '@/components/FeatureWorks';
import Hero from '@/components/Hero';
import RecentPosts from '@/components/RecentPosts';
import { postsMock } from '@/mocks/posts';
import { worksMock } from '@/mocks/works';

export default function Home() {
  return (
    <>
      <Hero />
      <RecentPosts posts={postsMock} />
      <FeatureWorks works={worksMock} />
    </>
  );
}
