import type { Work } from '@/types/work';

export default function WorkCard({ work }: { work: Work }) {
  return (
    <article className="flex flex-col sm:flex-row gap-2.5 md:gap-5 border-b-1 border-[#E0E0E0] pb-4 sm:pb-8 mb-4 sm:mb-8">
      <img
        src={work.image.url}
        alt={work.image.alt}
        className="w-full h-auto rounded-sm object-cover shrink-0 sm:w-[246px] sm:h-[180px]"
      />
      <div className="flex-1 min-w-0">
        <a className="inline-block text-item-title mb-3.5 md:mb-6" href="/">
          {work.title}
        </a>

        <div className="flex items-center gap-7 mb-3.5 md:mb-6">
          <span className="font-black text-white bg-[#142850] inline-flex items-center justify-center px-3 py-0.5 rounded-full">
            {work.year}
          </span>
          <div className="text-mute text-[#8695A4]">{work.category}</div>
        </div>
        <p>{work.excerpt}</p>
      </div>
    </article>
  );
}
