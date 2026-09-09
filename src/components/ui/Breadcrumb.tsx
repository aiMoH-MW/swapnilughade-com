import React from 'react';
import Link from 'next/link';

export interface BreadcrumbItem {
  label: string;
  href?: string;
  icon?: string;
}

export interface BreadcrumbProps {
  parent: BreadcrumbItem;
  current: string;
  subtitle?: string;
  className?: string;
}

export function Breadcrumb({ parent, current, subtitle, className = '' }: BreadcrumbProps) {
  return (
    <nav className={`editorial-breadcrumb ${className}`} aria-label="Breadcrumb">
      {parent.href ? (
        <Link href={parent.href} className="eb-link">
          {parent.label}
        </Link>
      ) : (
        <span className="eb-parent">{parent.label}</span>
      )}
      <span className="eb-sep" aria-hidden="true">·</span>
      <span className="eb-current">
        {current}
        {subtitle && <span className="eb-subtitle"> ({subtitle})</span>}
      </span>
    </nav>
  );
}
