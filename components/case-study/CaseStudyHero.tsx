'use client';

import { Eyebrow } from '@/components/shared/Eyebrow';

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
          padding: clamp(var(--space-7), 3vw, var(--space-8)) var(--gutter) clamp(var(--space-11), 5vw, var(--space-13));
        }

        h1 {
          font-family: 'Space Grotesk', sans-serif;
          font-weight: 700;
          font-size: clamp(2.4rem, 5.5vw, 4.6rem);
          line-height: 1.03;
          letter-spacing: -0.03em;
          max-width: 900px;
          margin-bottom: var(--space-8);
          color: var(--text);
        }

        .cs-hero-sub {
          font-size: clamp(1.05rem, 1.6vw, 1.25rem);
          color: var(--text-muted);
          max-width: 640px;
          line-height: 1.6;
        }
      `}</style>

      <Eyebrow>{eyebrow}</Eyebrow>
      <h1>{subtitle}</h1>
      <p className="cs-hero-sub">{description}</p>
    </section>
  );
}
