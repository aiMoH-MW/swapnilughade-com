"use client";

import { useState } from "react";

export function NewsletterBand() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [msg, setMsg] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setStatus("loading");

    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, source: "homepage_newsletter_band" }),
      });
      const data = await res.json();
      if (res.ok) {
        setStatus("success");
        setMsg("You are subscribed to The Letter. Check your inbox.");
        setEmail("");
      } else {
        setStatus("error");
        setMsg(data.error || "Subscription failed. Please try again.");
      }
    } catch {
      setStatus("error");
      setMsg("An error occurred. Please try again.");
    }
  }

  return (
    <section id="the-letter" className="bg-[var(--bg-indigo)] text-[var(--bone)] py-20 border-y border-[var(--line-indigo)]">
      <div className="site-container max-w-3xl text-center">
        <div className="font-mono text-xs tracking-[0.24em] uppercase text-[var(--gold-light)] mb-4">
          Every second Sunday
        </div>
        <h2 className="font-serif text-4xl md:text-5xl font-normal text-[var(--bone)] mb-4">
          The <em className="italic text-[var(--gold-light)] font-normal">Letter</em>
        </h2>
        <p className="font-serif text-lg text-[rgba(239,235,227,0.8)] max-w-xl mx-auto mb-8 leading-relaxed">
          Long-form notes on AI-first marketing, portals, and the founder's operating thesis. Reply to any issue to reach Swapnil directly.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            required
            className="flex-1 px-4 py-3.5 bg-[var(--bg-indigo-deep)] border border-[var(--line-indigo)] text-[var(--bone)] placeholder:text-[rgba(239,235,227,0.4)] text-sm font-sans focus:outline-none focus:border-[var(--gold-light)]"
          />
          <button
            type="submit"
            disabled={status === "loading"}
            className="btn btn-gold text-xs py-3.5 px-6"
          >
            {status === "loading" ? "Subscribing..." : "Subscribe to The Letter"}
          </button>
        </form>

        {status === "success" && (
          <p className="font-sans text-sm text-[var(--gold-light)] mt-4 font-medium">{msg}</p>
        )}
        {status === "error" && (
          <p className="font-sans text-sm text-red-300 mt-4">{msg}</p>
        )}

        <p className="font-mono text-[11px] text-[rgba(239,235,227,0.5)] tracking-wider uppercase mt-4">
          No spam. Clean text format. Unsubscribe in one click.
        </p>
      </div>
    </section>
  );
}
