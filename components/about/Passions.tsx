'use client';

import { motion } from 'framer-motion';
import { revealVariants } from '@/lib/animation';
import type { Passion } from '@/content/about';

interface PassionsProps {
  passions: Passion[];
}

export function Passions({ passions }: PassionsProps) {
  return (
    <section className="passions">
      <style jsx>{`
        .passions {
          max-width: var(--container);
          margin: 0 auto;
          padding: var(--section-pad-top) var(--gutter) var(--space-12);
          border-top: 1px solid var(--border);
        }

        h2 {
          font-family: 'Space Grotesk', sans-serif;
          font-weight: 700;
          font-size: clamp(1.8rem, 3.2vw, 2.6rem);
          letter-spacing: -0.02em;
          max-width: 640px;
          color: var(--text);
        }

        .section-sub {
          margin-top: var(--space-4);
          color: var(--text-muted);
          font-size: 14.5px;
          max-width: 480px;
        }

        .passions-grid {
          margin-top: var(--section-head-gap);
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: clamp(var(--space-6), 2vw, var(--space-8));
        }

        :global(.passion-card) {
          padding: var(--space-8) var(--space-7);
          background: var(--bg-elevated);
          border: 1px solid var(--border);
          border-radius: var(--radius);
        }

        .passion-title {
          font-family: 'Space Grotesk', sans-serif;
          font-weight: 600;
          font-size: 18px;
          letter-spacing: -0.01em;
          color: var(--text);
        }

        .passion-desc {
          margin-top: var(--space-3);
          color: var(--text-muted);
          font-size: 14px;
          line-height: 1.6;
        }

        @media (max-width: 860px) {
          .passions-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <h2>Outside of work</h2>
      <p className="section-sub">A few things that keep me curious and recharged when I&apos;m away from the screen.</p>

      <div className="passions-grid">
        {passions.map((passion, i) => (
          <motion.div
            key={passion.title}
            className="passion-card"
            custom={i}
            variants={revealVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
          >
            <div className="passion-title">{passion.title}</div>
            <p className="passion-desc">{passion.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
