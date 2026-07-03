'use client';

interface CaseStudyHeroProps {
  eyebrow: string;
  subtitle: string;
  description: string;
}

export function CaseStudyHero({ eyebrow, subtitle, description }: CaseStudyHeroProps) {
  return (
    <section className="cs-hero">
      <style jsx>{`
        .cs-hero {
          max-width: var(--container);
          margin: 0 auto;
          padding: 28px var(--gutter) 56px;
        }

        .eyebrow {
          font-family: 'JetBrains Mono', monospace;
          font-size: 13px;
          color: var(--accent);
          text-transform: uppercase;
          letter-spacing: 0.06em;
          margin-bottom: 24px;
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
          font-size: clamp(2.4rem, 5.5vw, 4.6rem);
          line-height: 1.03;
          letter-spacing: -0.03em;
          max-width: 900px;
          margin-bottom: 28px;
          color: var(--text);
        }

        .cs-hero-sub {
          font-size: clamp(1.05rem, 1.6vw, 1.25rem);
          color: var(--text-muted);
          max-width: 640px;
          line-height: 1.6;
        }

        @media (max-width: 860px) {
          .cs-hero {
            padding: 24px 22px 40px;
          }
        }
      `}</style>

      <div className="eyebrow">{eyebrow}</div>
      <h1>{subtitle}</h1>
      <p className="cs-hero-sub">{description}</p>
    </section>
  );
}
