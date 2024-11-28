import Avatar from "./avatar";
import CoverImage from "./cover-image";
import DateFormatter from "./date-formatter";
import { PostTitle } from "@/app/_components/post-title";
import { type Author } from "@/interfaces/author";
import Image from "next/image";

type Props = {
  title: string;
  coverImage: {
    src: string;
    isVideo?: boolean;
  };
  date: string;
  author: any;
};

export function PostHeader({ title, coverImage, date, author }: Props) {
  return (
    <section className="mt-20 mb-6 md:mb-6">
      <PostTitle>{title}</PostTitle>
      <div className="mb-8 md:mb-16 sm:mx-0 flex justify-center">
        {coverImage.isVideo ? (
          <video 
            controls
            className="w-6/7 md:w-5/6 lg:w-4/6 rounded-lg"
          >
            <source src={coverImage.src} type="video/mp4" />
          </video>
        ) : (
          <Image
            src={coverImage.src}
            alt={title}
            // ... other Image props
          />
        )}
      </div>
      <div className="max-w-2xl mx-auto">
        <div className="block mb-6">
          <Avatar name={author.name} />
        </div>
        <div className="mb-4 text-lg">
          <DateFormatter dateString={date} />
        </div>
      </div>
    </section>
  );
}
