'use client';
import markdownStyles from "./markdown-styles.module.css";
import { ClockIcon } from 'lucide-react';
import { useEffect } from 'react';

type Props = {
  content: string;
};

function estimateReadTime(text: string, wordsPerMinute: number = 110): string {
  const words = text.trim().split(/\s+/).length;
  const minutes = words / wordsPerMinute;
  const roundedMinutes = Math.ceil(minutes);
  return `${roundedMinutes} minute${roundedMinutes > 1 ? 's' : ''}`;
}

export function PostBody({ content }: Props) {
  useEffect(() => {
    const codeBlocks = document.querySelectorAll('pre code');
    
    codeBlocks.forEach((codeBlock) => {
      const pre = codeBlock.parentElement;
      if (!pre) return;

      const wrapper = document.createElement('div');
      wrapper.className = 'relative group';
      pre.parentNode?.insertBefore(wrapper, pre);
      wrapper.appendChild(pre);

      const copyButton = document.createElement('button');
      copyButton.className = 
        'absolute right-2 top-2 p-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity ' +
        'dark:bg-gray-800/50 dark:hover:bg-gray-700/50 bg-gray-100/50 hover:bg-gray-200/50 ' +
        'dark:text-gray-300 text-gray-700';

      const copyIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" 
        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4">
        <rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>`;
      
      const checkIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" 
        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4">
        <polyline points="20 6 9 17 4 12"/></svg>`;

      copyButton.innerHTML = copyIcon;

      copyButton.addEventListener('click', async () => {
        const code = codeBlock.textContent || '';
        await navigator.clipboard.writeText(code);
        
        copyButton.innerHTML = checkIcon;
        
        setTimeout(() => {
          copyButton.innerHTML = copyIcon;
        }, 2000);
      });

      wrapper.appendChild(copyButton);
    });
  }, [content]);

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
