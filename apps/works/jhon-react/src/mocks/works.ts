import type { Work } from '../types/work';

export const worksMock: Work[] = [
  {
    id: 'w1',
    slug: 'designing-dashboards',
    title: 'Designing Dashboards',
    year: 2020,
    category: 'Dashboard',
    excerpt:
      'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.',
    article: `Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. 
Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.

In this case study I describe the approach to information hierarchy, card states, and layout consistency across screens. 
We iterated on components, built a small design system and validated solutions with stakeholders.

As a result, navigation became simpler and key actions were surfaced which reduced the average time-to-complete by ~25%.`,
    image: {
      url: 'https://picsum.photos/id/1011/1200/720',
      width: 1200,
      height: 720,
      alt: 'Dashboard preview',
    },
  },
  {
    id: 'w2',
    slug: 'vibrant-portraits-2020',
    title: 'Vibrant Portraits of 2020',
    year: 2018,
    category: 'Illustration',
    excerpt:
      'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.',
    article: `This series explores color harmony and bold shapes.
Each piece started as a pencil sketch and then was finalized in digital tools.

The main challenge was to keep the style consistent while experimenting with palettes.`,
    image: {
      url: 'https://picsum.photos/id/1025/1200/720',
      width: 1200,
      height: 720,
      alt: 'Portrait illustration',
    },
  },
  {
    id: 'w3',
    slug: '36-days-of-malayalam-type',
    title: '36 Days of Malayalam type',
    year: 2018,
    category: 'Typography',
    excerpt:
      'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.',
    article: `A typographic challenge where every day a new letterform was created.
Focus was on rhythm, negative space and readability at small sizes.

The project later evolved into a variable font experiment.`,
    image: {
      url: 'https://picsum.photos/id/100/1200/720',
      width: 1200,
      height: 720,
      alt: 'Typography sample',
    },
  },
];
