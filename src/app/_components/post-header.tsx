import Avatar from "./avatar";
import DateFormatter from "./date-formatter";
import { PostTitle } from "@/app/_components/post-title";
import Image from "next/image";

type Props = {
  title: string;
  coverImage: {
    src: string;
    isVideo?: boolean;
    poster?: string;
  };
  date: string;
  author: any;
};

export function PostHeader({ title, coverImage, date, author }: Props) {
  const basePath = process.env.NODE_ENV === 'production' ? '/llama-homeassistant-blog' : '';
  const videoSrc = coverImage.src.startsWith('/') ? `${basePath}${coverImage.src}` : coverImage.src;
  const posterSrc = coverImage.poster && coverImage.poster.startsWith('/') 
    ? `${basePath}${coverImage.poster}` 
    : coverImage.poster;

  return (
    <section className="mt-20 mb-6 md:mb-6">
      <PostTitle>{title}</PostTitle>
      <div className="mb-8 md:mb-16 sm:mx-0 flex justify-center">
        {coverImage.isVideo ? (
          <video 
            controls
            poster={posterSrc || `${basePath}/assets/images/video-thumbnail.png`}
            className="w-6/7 md:w-5/6 lg:w-4/6 rounded-lg bg-gray-100 dark:bg-gray-800"
            preload="metadata"
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
        ) : (
          <Image
            src={videoSrc}
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
