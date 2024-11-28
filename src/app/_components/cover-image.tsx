import cn from "classnames";
import Link from "next/link";
import Image from "next/image";

type Props = {
  title: string;
  src: string;
  slug?: string;
  isVideo?: boolean;
};

const CoverImage = ({ title, src, slug, isVideo = false }: Props) => {
  const media = isVideo ? (
    <video
      autoPlay
      loop
      muted
      playsInline
      className={cn("shadow-sm w-full object-cover", {
        "hover:shadow-lg transition-shadow duration-200": slug,
      })}
    >
      <source src={src} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  ) : (
    <Image
      src={src}
      alt={`Cover Image for ${title}`}
      className={cn("shadow-sm w-full", {
        "hover:shadow-lg transition-shadow duration-200": slug,
      })}
      width={1300}
      height={630}
    />
  );

  return (
    <div className="sm:mx-0">
      {slug ? (
        <Link href={`/posts/${slug}`} aria-label={title}>
          {media}
        </Link>
      ) : (
        media
      )}
    </div>
  );
};

export default CoverImage;
