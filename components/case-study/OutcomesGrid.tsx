'use client';

import { motion } from 'framer-motion';
import { revealVariants } from '@/lib/animation';

interface OutcomesGridProps {
  outcomes: Array<{
    number: string;
    label: string;
  }>;
}

export function OutcomesGrid({ outcomes }: OutcomesGridProps) {
  return (
    <section className="outcomes">
      <style jsx>{`
        .outcomes {
          max-width: var(--container);
          margin: 0 auto;
          padding: var(--section-pad-top) var(--gutter) var(--section-pad-bottom);
          border-top: 1px solid var(--border);
        }

        .outcomes h2 {
          font-family: 'Space Grotesk', sans-serif;
          font-weight: 700;
          font-size: clamp(1.8rem, 3.2vw, 2.6rem);
          letter-spacing: -0.02em;
          max-width: 640px;
          margin-bottom: var(--section-head-gap);
          color: var(--text);
        }

        .outcomes-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: var(--space-7);
        }

        :global(.outcome-item) {
          display: flex;
          flex-direction: column;
        }

        .outcome-num {
          font-family: 'Space Grotesk', sans-serif;
          font-weight: 700;
          font-size: clamp(2rem, 3.4vw, 3rem);
          letter-spacing: -0.02em;
          color: var(--accent);
        }

        .outcome-label {
          font-family: 'JetBrains Mono', monospace;
          font-size: 12px;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 0.04em;
          margin-top: var(--space-3);
        }

        @media (max-width: 900px) {
          .outcomes-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: var(--space-8) var(--space-6);
          }
        }
      `}</style>

      <h2>What shipped</h2>
      <div className="outcomes-grid">
        {outcomes.map((outcome) => (
          <motion.div
            key={outcome.label}
            className="outcome-item"
            custom={outcomes.indexOf(outcome)}
            variants={revealVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
          >
            <div className="outcome-num">{outcome.number}</div>
            <div className="outcome-label">{outcome.label}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
