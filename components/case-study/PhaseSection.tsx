'use client';

import { motion } from 'framer-motion';
import { revealVariants } from '@/lib/animation';

interface PhaseSectionProps {
  number: number;
  totalPhases?: number;
  title: string;
  description: string;
  chips?: string[];
  hmw?: string;
  gallery?: Array<{
    label: string;
    gradient?: string;
    image?: string;
    twoCol?: boolean;
  }>;
}

export function PhaseSection({ number, totalPhases = 5, title, description, chips, hmw, gallery }: PhaseSectionProps) {
  return (
    <section className="phase">
      <style jsx>{`
        .phase {
          max-width: var(--container);
          margin: 0 auto;
          padding: 110px var(--gutter) 0;
          display: grid;
          grid-template-columns: 280px 1fr;
          gap: 64px;
        }

        .phase:last-of-type {
          padding-bottom: 110px;
        }

        .phase-label {
          position: sticky;
          top: 140px;
          align-self: start;
        }

        .phase-num {
          font-family: 'JetBrains Mono', monospace;
          font-size: 13px;
          color: var(--accent);
          letter-spacing: 0.04em;
          margin-bottom: 10px;
        }

        .phase-title {
          font-family: 'Space Grotesk', sans-serif;
          font-weight: 700;
          font-size: clamp(1.5rem, 2.4vw, 2rem);
          letter-spacing: -0.02em;
          color: var(--text);
        }

        .phase-content p {
          font-size: 16.5px;
          color: var(--text-muted);
          line-height: 1.7;
          max-width: 680px;
        }

        .phase-content p + p {
          margin-top: 18px;
        }

        .chip-row {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-top: 28px;
        }

        .chip {
          font-family: 'JetBrains Mono', monospace;
          font-size: 12px;
          color: var(--text);
          background: var(--bg-elevated);
          border: 1px solid var(--border);
          padding: 8px 14px;
          border-radius: 999px;
        }

        .hmw-box {
          margin-top: 36px;
          padding: 32px 36px;
          background: var(--bg-elevated);
          border: 1px solid var(--border);
          border-left: 3px solid var(--accent);
          border-radius: var(--radius);
        }

        .hmw-label {
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px;
          color: var(--accent);
          text-transform: uppercase;
          letter-spacing: 0.04em;
          margin-bottom: 12px;
        }

        .hmw-box p {
          font-family: 'Space Grotesk', sans-serif;
          font-weight: 600;
          font-size: clamp(1.15rem, 1.8vw, 1.5rem);
          color: var(--text);
          line-height: 1.4;
        }

        .phase-gallery {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
          margin-top: 36px;
        }

        .phase-gallery.two-col {
          grid-template-columns: repeat(2, 1fr);
        }

        .gallery-tile {
          border-radius: 12px;
          overflow: hidden;
          border: 1px solid var(--border);
        }

        .gallery-tile-inner {
          height: 200px;
          background-size: cover;
          background-position: center;
        }

        .gallery-tile-label {
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px;
          color: var(--text-muted);
          padding: 12px 4px 0;
          text-transform: uppercase;
          letter-spacing: 0.03em;
        }

        @media (max-width: 900px) {
          .phase {
            grid-template-columns: 1fr;
            gap: 24px;
            padding-top: 72px;
          }

          .phase-label {
            position: static;
          }

          .phase-gallery {
            grid-template-columns: 1fr;
          }

          .phase-gallery.two-col {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 860px) {
          .phase {
            padding-left: 22px;
            padding-right: 22px;
          }
        }
      `}</style>

      <motion.div className="phase-label" variants={revealVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <div className="phase-num">
          {String(number).padStart(2, '0')} / {String(totalPhases).padStart(2, '0')}
        </div>
        <div className="phase-title">{title}</div>
      </motion.div>

      <motion.div className="phase-content" variants={revealVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        {description.split('\n\n').map((para, i) => (
          <p key={i}>{para}</p>
        ))}

        {chips && (
          <div className="chip-row">
            {chips.map((chip) => (
              <span key={chip} className="chip">
                {chip}
              </span>
            ))}
          </div>
        )}

        {hmw && (
          <div className="hmw-box">
            <div className="hmw-label">How Might We</div>
            <p>{hmw}</p>
          </div>
        )}

        {gallery && (
          <div className={`phase-gallery ${gallery.some((g) => g.twoCol) ? 'two-col' : ''}`}>
            {gallery.map((item) => (
              <div key={item.label} className="gallery-tile">
                <div
                  className="gallery-tile-inner"
                  style={
                    item.image
                      ? { backgroundImage: `url(${item.image})` }
                      : { background: `linear-gradient(${item.gradient})` }
                  }
                />
                <div className="gallery-tile-label">{item.label}</div>
              </div>
            ))}
          </div>
        )}
      </motion.div>
    </section>
  );
}
