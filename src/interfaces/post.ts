import { type Author } from "./author";

type CoverMedia = {
  src: string;
  isVideo?: boolean;
}

export type Post = {
  slug: string;
  title: string;
  date: string;
  coverImage: CoverMedia;
  author: Author;
  excerpt: string;
  ogImage: {
    url: string;
  };
  content: string;
  preview?: boolean;
};
