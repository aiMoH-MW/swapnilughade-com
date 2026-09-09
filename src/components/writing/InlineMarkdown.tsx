import React from 'react';
import Link from 'next/link';

interface InlineMarkdownProps {
  text: string;
}

export function InlineMarkdown({ text }: InlineMarkdownProps) {
  if (!text) return null;

  // Split text by markdown tokens: [link text](url), **bold**, *italic*
  const tokenRegex = /(\[[^\]]+\]\([^)]+\)|\*\*[^*]+\*\*|\*[^*]+\*)/g;
  const parts = text.split(tokenRegex);

  return (
    <>
      {parts.map((part, index) => {
        if (!part) return null;

        // Check for Markdown link: [text](href)
        const linkMatch = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
        if (linkMatch) {
          const rawLabel = linkMatch[1];
          const href = linkMatch[2];

          // Check if link label itself has italics like [*Two Algorithms, One Strategy*]
          let labelContent: React.ReactNode = rawLabel;
          if (rawLabel.startsWith('*') && rawLabel.endsWith('*')) {
            labelContent = <em>{rawLabel.slice(1, -1)}</em>;
          }

          const isInternal = href.startsWith('/') || href.startsWith('#');
          if (isInternal) {
            return (
              <Link key={index} href={href}>
                {labelContent}
              </Link>
            );
          }
          return (
            <a key={index} href={href} target="_blank" rel="noopener noreferrer">
              {labelContent}
            </a>
          );
        }

        // Check for **bold**
        if (part.startsWith('**') && part.endsWith('**') && part.length >= 4) {
          const inner = part.slice(2, -2);
          return <strong key={index}>{inner}</strong>;
        }

        // Check for *italic*
        if (part.startsWith('*') && part.endsWith('*') && part.length >= 2) {
          const inner = part.slice(1, -1);
          return <em key={index}>{inner}</em>;
        }

        return <React.Fragment key={index}>{part}</React.Fragment>;
      })}
    </>
  );
}
