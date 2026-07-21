'use client';

import { motion } from 'framer-motion';
import { revealVariants } from '@/lib/animation';

interface PrototypeEmbedProps {
  url: string;
  label?: string;
}

export function PrototypeEmbed({ url, label = 'Live prototype — tap around' }: PrototypeEmbedProps) {
  return (
    <motion.div
      className="proto"
      variants={revealVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <style jsx>{`
        :global(.proto) {
          max-width: var(--container);
          margin: var(--space-13) auto 0;
          padding: 0 var(--gutter);
        }

        .proto-frame {
          height: 900px;
          border-radius: var(--radius);
          background: #0d0d0d;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }

        .proto-frame iframe {
          width: 390px;
          height: 844px;
          border: none;
        }

        .proto-caption {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: var(--space-5);
          margin-top: var(--space-5);
        }

        .proto-label {
          font-family: 'JetBrains Mono', monospace;
          font-size: 12px;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 0.04em;
        }

        :global(.proto-link) {
          font-family: 'JetBrains Mono', monospace;
          font-size: 12px;
          color: var(--accent);
          text-decoration: none;
          white-space: nowrap;
        }

        :global(.proto-link:hover) {
          text-decoration: underline;
        }

        @media (max-width: 860px) {
          .proto-frame {
            height: 640px;
          }

          .proto-frame iframe {
            transform: scale(0.68);
            transform-origin: center;
          }
        }

        @media (max-width: 480px) {
          .proto-frame {
            height: 520px;
          }

          .proto-frame iframe {
            transform: scale(0.55);
            transform-origin: center;
          }
        }
      `}</style>

      <div className="proto-frame">
        <iframe src={url} title="Brixli interactive prototype" loading="lazy" />
      </div>

      <div className="proto-caption">
        <span className="proto-label">{label}</span>
        <a href={url} target="_blank" rel="noopener noreferrer" className="proto-link">
          Open fullscreen ↗
        </a>
      </div>
    </motion.div>
  );
}
