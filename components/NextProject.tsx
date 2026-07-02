'use client';

import Link from 'next/link';

interface NextProjectProps {
  nextSlug: string;
  nextTitle: string;
}

export function NextProject({ nextSlug, nextTitle }: NextProjectProps) {
  return (
    <div className="next-project">
      <style jsx>{`
        .next-project {
          border-top: 1px solid var(--border);
          max-width: var(--container);
          margin: 0 auto;
          padding: 64px var(--gutter) 0;
        }

        .next-project-label {
          font-family: 'JetBrains Mono', monospace;
          font-size: 12px;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 0.04em;
          margin-bottom: 16px;
        }

        :global(.next-project-link) {
          display: block;
          font-family: 'Space Grotesk', sans-serif;
          font-weight: 700;
          font-size: clamp(1.8rem, 4vw, 3rem);
          letter-spacing: -0.02em;
          color: var(--text);
          text-decoration: none;
          transition: color 0.25s var(--ease);
        }

        :global(.next-project-link:hover) {
          color: var(--accent);
        }

        @media (max-width: 860px) {
          .next-project {
            padding: 48px 22px 0;
          }
        }
      `}</style>

      <div className="next-project-label">Next Project</div>
      <Link href={`/case-studies/${nextSlug}`} className="next-project-link">
        {nextTitle} →
      </Link>
    </div>
  );
}
