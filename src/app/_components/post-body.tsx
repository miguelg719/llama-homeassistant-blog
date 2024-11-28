import markdownStyles from "./markdown-styles.module.css";
import { ClockIcon } from 'lucide-react';

type Props = {
  content: string;
};

function estimateReadTime(text: string, wordsPerMinute: number = 250): string {
  const words = text.trim().split(/\s+/).length;
  const minutes = words / wordsPerMinute;
  const roundedMinutes = Math.ceil(minutes);
  return `${roundedMinutes} minute${roundedMinutes > 1 ? 's' : ''}`;
}

export function PostBody({ content }: Props) {
  return (
    <div className="max-w-2xl mx-auto">
      <div className="mb-8 flex items-center italic">
        <ClockIcon className="w-5 h-5 mr-2" />
        {estimateReadTime(content)}
      </div>
      <div
        className={markdownStyles["markdown"]}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  );
}
