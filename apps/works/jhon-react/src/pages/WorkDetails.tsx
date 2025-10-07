import type { Work } from '@/types/work';
import { useParams } from 'react-router-dom';
import { worksMock } from '@/mocks/works';
import Container from '@/components/Container';

export default function WorkDetails() {
  const { slug } = useParams();
  const work = worksMock.find((w: Work) => w.slug === slug);

  if (!work) {
    return <div>Work not found</div>;
  }

  return (
    <Container>
      <article className=" pb-10 md:pb-20">
        <h1 className="inline-block text-page-title mb-3.5 md:mb-6">
          {work.title}
        </h1>
        <div className="flex items-center gap-7 mb-3.5 md:mb-6">
          <span className="font-black text-white bg-accent inline-flex items-center justify-center px-3 py-0.5 rounded-full">
            {work.year}
          </span>
          <div className="text-mute text-[#8695A4]">{work.category}</div>
        </div>
        <img
          src={work.image.url}
          alt={work.image.alt}
          className="w-full h-auto rounded-sm object-cover shrink-0 mb-3.5 md:mb-6"
        />
        <p>{work.article}</p>
      </article>
    </Container>
  );
}
