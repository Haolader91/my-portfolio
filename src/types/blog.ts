export type BlogContentSection =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "code"; language: string; code: string };

export interface BlogPost {
  id: number;
  title: string;
  slug: string;
  subtitle: string;
  date: string;
  readTime: string;
  description: string;
  image: string;
  coverImage: string;
  author: string;
  authorRole: string;
  authorImage: string;
  tags: string[];
  content: BlogContentSection[];
  keyTakeaways: string[];
}
