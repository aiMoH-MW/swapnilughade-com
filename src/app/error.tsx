"use client";

import Link from "next/link";

export default function ErrorPage({ reset }: { error: Error; reset: () => void }) {
  return (
    <article className="py-32 bg-[var(--bone)] text-center">
      <div className="site-container max-w-xl">
        <div className="font-mono text-xs tracking-[0.24em] uppercase text-[var(--rosewood)] mb-4">
          Error · Exception
        </div>
        <h1 className="serif-title text-4xl sm:text-6xl font-normal text-[var(--ink)] mb-6">
          System Interruption
        </h1>
        <p className="font-serif text-lg text-[var(--ink-soft)] mb-8">
          An error occurred while loading this page.
        </p>
        <div className="flex justify-center gap-4">
          <button onClick={() => reset()} className="btn btn-primary">
            Try Again
          </button>
          <Link href="/" className="btn btn-ghost">
            Return Home
          </Link>
        </div>
      </div>
    </article>
  );
}
