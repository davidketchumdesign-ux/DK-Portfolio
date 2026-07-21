'use client';

import Link from 'next/link';

export function BackLink() {
  return (
    <div className="back-link">
      <style jsx>{`
        .back-link {
          max-width: var(--container);
          margin: 0 auto;
          padding: clamp(var(--space-17), 10vw, var(--space-21)) var(--gutter) 0;
        }

        :global(.back-link-inner) {
          display: inline-flex;
          align-items: center;
          gap: var(--space-2);
          color: var(--text-muted);
          text-decoration: none;
          font-size: 13.5px;
          font-weight: 500;
          transition: color 0.2s var(--ease), gap 0.2s var(--ease);
        }

        :global(.back-link-inner:hover) {
          color: var(--text);
          gap: var(--space-4);
        }

        .back-link svg {
          width: 14px;
          height: 14px;
        }
      `}</style>

      <Link href="/#work" className="back-link-inner">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="19" y1="12" x2="5" y2="12" />
          <polyline points="12 19 5 12 12 5" />
        </svg>
        Back to Work
      </Link>
    </div>
  );
}
