import React from 'react';
import { PortableText, PortableTextComponents } from '@portabletext/react';

const components: PortableTextComponents = {
  block: {
    h2: ({ children }) => (
      <h2 className="font-serif text-3xl md:text-4xl font-medium text-[var(--ink)] mt-12 mb-6 tracking-tight">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="font-serif text-2xl font-medium text-[var(--ink)] mt-8 mb-4">
        {children}
      </h3>
    ),
    normal: ({ children }) => (
      <p className="font-sans text-base text-[var(--ink-soft)] leading-relaxed mb-6">
        {children}
      </p>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-3 border-[var(--gold)] pl-6 py-2 my-8 font-serif italic text-xl text-[var(--ink)] bg-[var(--bone-warm)]">
        {children}
      </blockquote>
    ),
  },
  marks: {
    em: ({ children }) => <em className="italic text-[var(--rosewood)] font-normal">{children}</em>,
    strong: ({ children }) => <strong className="font-semibold text-[var(--ink)]">{children}</strong>,
    link: ({ value, children }) => {
      const isExternal = (value?.href || '').startsWith('http');
      return (
        <a
          href={value?.href}
          target={isExternal ? '_blank' : undefined}
          rel={isExternal ? 'noopener noreferrer' : undefined}
          className="text-[var(--rosewood)] border-b border-[var(--rosewood)] hover:text-[var(--rosewood-soft)] transition-colors"
        >
          {children}
        </a>
      );
    },
  },
  types: {
    marginalia: ({ value }) => (
      <aside className="marginalia my-6">
        <div className="font-mono text-[11px] tracking-widest uppercase text-[var(--gold)] mb-1">
          {value?.label || 'Aside'}
        </div>
        <p>{value?.text}</p>
      </aside>
    ),
    dataCallout: ({ value }) => (
      <div className="inline-block px-3 py-1 bg-[var(--parchment)] border border-[rgba(29,42,74,0.15)] font-mono text-xs text-[var(--ink)] font-medium rounded-sm mx-1">
        <strong>{value?.metric}</strong>: {value?.description}
      </div>
    ),
  },
};

export function PortableTextRenderer({ value }: { value: any }) {
  if (!value) return null;
  return (
    <div className="prose max-w-none">
      <PortableText value={value} components={components} />
    </div>
  );
}
