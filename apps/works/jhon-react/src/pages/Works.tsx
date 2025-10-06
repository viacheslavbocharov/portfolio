import Container from '@/components/Container';
import type { Work } from '@/types/work';
import { worksMock } from '@/mocks/works';
import WorkCard from '@/components/WorkCard';

export default function Works() {
  return (
    <section>
      <Container>
        <h1 className="text-page-title mb-8 md:mb-14">Works</h1>
        {worksMock.map((work: Work) => (
          <WorkCard work={work} />
        ))}
      </Container>
    </section>
  );
}
