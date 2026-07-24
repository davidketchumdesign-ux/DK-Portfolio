'use client';

interface EyebrowProps {
  children: React.ReactNode;
}

/** Small uppercase label with a leading accent dot, used at the top of page/section heroes. */
export function Eyebrow({ children }: EyebrowProps) {
  return (
    <div className="eyebrow">
      {children}

      <style jsx>{`
        .eyebrow {
          font-family: 'JetBrains Mono', monospace;
          font-size: 13px;
          color: var(--accent);
          text-transform: uppercase;
          letter-spacing: 0.06em;
          margin-bottom: var(--space-8);
          display: flex;
          align-items: center;
          gap: var(--space-3);
        }

        .eyebrow::before {
          content: '';
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--accent);
          display: inline-block;
        }
      `}</style>
    </div>
  );
}
