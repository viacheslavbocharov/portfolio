export interface Work {
  id: string;
  title: string;
  year: number;
  category: string;
  excerpt: string;
  image: { url: string; width?: number; height?: number; alt?: string };
}