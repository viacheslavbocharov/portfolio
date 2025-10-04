import type {Work} from '../types/work'

export const worksMock: Work[] = [
  {
    id: "w1",
    title: "Designing Dashboards",
    year: 2020,
    category: "Dashboard",
    excerpt: "Amet minim mollit non deserunt ullamco...",
    image: {
      url: "https://picsum.photos/id/1011/480/360",
      width: 480,
      height: 360,
      alt: "Dashboard preview"
    }
  },
  {
    id: "w2",
    title: "Vibrant Portraits of 2020",
    year: 2018,
    category: "Illustration",
    excerpt: "Velit officia consequat duis...",
    image: { url: "https://picsum.photos/id/1025/480/360", alt: "Portrait" }
  },
  {
    id: "w3",
    title: "36 Days of Malayalam type",
    year: 2018,
    category: "Typography",
    excerpt: "Exercitation veniam consequat...",
    image: { url: "https://picsum.photos/id/100/480/360", alt: "Typography sample" }
  }
];