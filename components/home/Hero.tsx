'use client';

export function Hero() {
  return (
    <section className="hero">
      <style jsx>{`
        .hero {
          padding: var(--section-pad-hero-top) var(--gutter) var(--section-pad-hero-bottom);
          max-width: var(--container);
          margin: 0 auto;
        }

        .eyebrow {
          font-family: 'JetBrains Mono', monospace;
          font-size: 13px;
          color: var(--accent);
          text-transform: uppercase;
          letter-spacing: 0.06em;
          margin-bottom: var(--space-8);
          display: flex;
          align-items: center;
          gap: var(--space-3);
        }

        .eyebrow::before {
          content: '';
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--accent);
          display: inline-block;
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

      <div className="eyebrow">Senior UX Designer / Strategist</div>
      <h1>
        I serve empathy and design craft, <span>across a dozen industries and counting.</span>
      </h1>
      <p className="hero-sub">
        Currently at Slalom Consulting. Located in Central, PA.
      </p>
    </section>
  );
}
