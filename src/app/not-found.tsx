import Link from "next/link";

export default function NotFound() {
  return (
    <article className="py-32 bg-[var(--bone)] text-center">
      <div className="site-container max-w-xl">
        <div className="font-mono text-xs tracking-[0.24em] uppercase text-[var(--gold)] mb-4">
          404 · Page Not Found
        </div>
        <h1 className="serif-title text-4xl sm:text-6xl font-normal text-[var(--ink)] mb-6">
          Nothing Here
        </h1>
        <p className="font-serif text-lg text-[var(--ink-soft)] mb-8">
          The requested path does not exist or has been relocated.
        </p>
        <Link href="/" className="btn btn-primary">
          Return to Home →
        </Link>
      </div>
    </article>
  );
}
