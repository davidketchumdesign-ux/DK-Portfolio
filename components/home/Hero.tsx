'use client';

import { Eyebrow } from '@/components/shared/Eyebrow';

export function Hero() {
  return (
    <section className="hero">
      <style jsx>{`
        .hero {
          padding: var(--section-pad-hero-top) var(--gutter) var(--section-pad-hero-bottom);
          max-width: var(--container);
          margin: 0 auto;
        }

        h1 {
          font-family: 'Space Grotesk', sans-serif;
          font-weight: 700;
          font-size: clamp(2.6rem, 7vw, 6.4rem);
          line-height: 1;
          letter-spacing: -0.03em;
          max-width: 1180px;
          color: var(--text);
        }

        h1 span {
          color: var(--text-muted);
        }

        .hero-sub {
          margin-top: var(--space-10);
          font-size: clamp(1.1rem, 1.8vw, 1.4rem);
          color: var(--text-muted);
          max-width: 680px;
          line-height: 1.55;
        }
      `}</style>

      <Eyebrow>Senior UX Designer / Strategist</Eyebrow>
      <h1>
        People first. Problems second. <span>Pixels last.</span>
      </h1>
      <p className="hero-sub">
        Design isn&apos;t the finish, it&apos;s the foundation. I humanize technology by understanding how people actually behave before I start pushing pixels.
      </p>
    </section>
  );
}
