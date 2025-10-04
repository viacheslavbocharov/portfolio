import Container from '@/components/Container';
import WorkCard from '@/components/WorkCard';
import type { Work } from '@/types/work';

export default function FeatureWorks({ works }: { works: Work[] }) {
  return (
    <section className="pt-8 pb-6 sm:pb-10">
      <Container>
        <h2 className="text-block-title mb-10">Feature works</h2>
        {works.map((work) => (
          <WorkCard work={work} />
        ))}
      </Container>
    </section>
  );
}
