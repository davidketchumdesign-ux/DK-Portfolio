'use client';

import { Eyebrow } from '@/components/shared/Eyebrow';
import { Reveal } from '@/components/shared/Reveal';

interface AboutHeroProps {
  eyebrow: string;
  heading: string;
  bio: string;
  mission: string;
}

export function AboutHero({ eyebrow, heading, bio, mission }: AboutHeroProps) {
  return (
    <section className="about-hero">
      <style jsx>{`
        .about-hero {
          padding: var(--section-pad-hero-top) var(--gutter) var(--section-pad-hero-bottom);
          max-width: var(--container);
          margin: 0 auto;
        }

        h1 {
          font-family: 'Space Grotesk', sans-serif;
          font-weight: 700;
          font-size: clamp(2.2rem, 5vw, 4rem);
          line-height: 1.08;
          letter-spacing: -0.03em;
          max-width: 900px;
          color: var(--text);
        }

        .bio {
          margin-top: var(--space-9);
          font-size: clamp(1.05rem, 1.6vw, 1.25rem);
          color: var(--text-muted);
          max-width: 680px;
          line-height: 1.6;
        }

        :global(.mission) {
          margin-top: var(--space-12);
          padding: clamp(var(--space-7), 4vw, var(--space-9)) clamp(var(--space-7), 3vw, var(--space-11));
          border-left: 3px solid var(--accent);
          background: color-mix(in srgb, var(--accent) 6%, var(--bg-elevated));
          border-radius: 0 var(--radius) var(--radius) 0;
          max-width: 780px;
        }

        .mission-label {
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px;
          color: var(--accent);
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-bottom: var(--space-6);
          display: block;
        }

        :global(.mission) p {
          font-family: 'Space Grotesk', sans-serif;
          font-weight: 500;
          font-size: clamp(1.15rem, 2vw, 1.5rem);
          line-height: 1.4;
          letter-spacing: -0.01em;
          color: var(--text);
          margin: 0;
        }

      `}</style>

      <Reveal>
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1>{heading}</h1>
        <p className="bio">{bio}</p>
      </Reveal>

      <Reveal className="mission" custom={1}>
        <span className="mission-label">Mission</span>
        <p>{mission}</p>
      </Reveal>
    </section>
  );
}
