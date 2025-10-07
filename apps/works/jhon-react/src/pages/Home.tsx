import FeatureWorks from '@/components/FeatureWorks';
import Hero from '@/components/Hero';
import RecentPosts from '@/components/RecentPosts';
import { postsMock } from '@/mocks/posts';
import { worksMock } from '@/mocks/works';
import { useDocumentTitle } from '@/hooks/useDocumentTitle';

export default function Home() {
  useDocumentTitle('John Portfolio');

  return (
    <>
      <Hero />
      <RecentPosts posts={postsMock} />
      <FeatureWorks works={worksMock} />
    </>
  );
}
