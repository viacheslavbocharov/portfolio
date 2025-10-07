export interface Work {
  id: string;
  slug: string;
  title: string;
  year: number;
  category: string;
  excerpt: string;
  article: string;
  image: { url: string; width?: number; height?: number; alt?: string };
}
