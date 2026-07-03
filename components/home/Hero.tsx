'use client';

export function Hero() {
  return (
    <section className="hero">
      <style jsx>{`
        .hero {
          padding: 160px var(--gutter) 90px;
          max-width: var(--container);
          margin: 0 auto;
        }

        .eyebrow {
          font-family: 'JetBrains Mono', monospace;
          font-size: 13px;
          color: var(--accent);
          text-transform: uppercase;
          letter-spacing: 0.06em;
          margin-bottom: 28px;
          display: flex;
          align-items: center;
          gap: 10px;
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
          margin-top: 36px;
          font-size: clamp(1.1rem, 1.8vw, 1.4rem);
          color: var(--text-muted);
          max-width: 680px;
          line-height: 1.55;
        }

        @media (max-width: 860px) {
          .hero {
            padding: 96px 22px 64px;
          }
        }
      `}</style>

      <div className="eyebrow">UX Designer / Strategist</div>
      <h1>
        I design systems that make <span>complexity</span> feel obvious.
      </h1>
      <p className="hero-sub">
        Six years partnering with enterprise teams on design systems, research, and product strategy — plus a handful of my own products built for fun on the side.
      </p>
    </section>
  );
}
