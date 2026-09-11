import React from 'react';
import Link from 'next/link';

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface BreadcrumbProps {
  items?: BreadcrumbItem[];
  // Backwards compatibility for previous usages
  parent?: BreadcrumbItem;
  current?: string;
  subtitle?: string;
  className?: string;
}

export function Breadcrumb({ items, parent, current, subtitle, className = '' }: BreadcrumbProps) {
  let resolvedItems: BreadcrumbItem[] = [];

  if (items && items.length > 0) {
    resolvedItems = items;
  } else if (parent && current) {
    resolvedItems = [
      { label: 'Home', href: '/' },
      ...(parent.href ? [{ label: parent.label, href: parent.href }] : [{ label: parent.label }]),
      { label: subtitle ? `${current} · ${subtitle}` : current },
    ];
  }

  if (resolvedItems.length === 0) return null;

  return (
    <nav className={`editorial-breadcrumb ${className}`} aria-label="Breadcrumb">
      <ol className="eb-list">
        {resolvedItems.map((item, index) => {
          const isLast = index === resolvedItems.length - 1;
          const isClickable = Boolean(item.href) && !isLast;

          return (
            <li key={`${item.label}-${index}`} className="eb-item">
              {isClickable && item.href ? (
                <Link href={item.href} className="eb-link">
                  {item.label}
                </Link>
              ) : (
                <span className="eb-current" aria-current={isLast ? 'page' : undefined}>
                  {item.label}
                </span>
              )}
              {!isLast && (
                <span className="eb-sep" aria-hidden="true">
                  /
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
