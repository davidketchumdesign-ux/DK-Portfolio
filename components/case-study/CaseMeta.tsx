'use client';

interface CaseMetaProps {
  role: string;
  timeline: string;
  platform: string;
  tools: string;
}

export function CaseMeta({ role, timeline, platform, tools }: CaseMetaProps) {
  const meta = [
    { label: 'Role', value: role },
    { label: 'Timeline', value: timeline },
    { label: 'Platform', value: platform },
    { label: 'Tools', value: tools },
  ];

  return (
    <section className="cs-meta">
      <style jsx>{`
        .cs-meta {
          max-width: var(--container);
          margin: 0 auto;
          padding: var(--space-9) var(--gutter);
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: var(--space-7);
          border-top: 1px solid var(--border);
          border-bottom: 1px solid var(--border);
        }

        .meta-item {
          display: flex;
          flex-direction: column;
        }

        .cs-meta-label {
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 0.04em;
          margin-bottom: var(--space-2);
        }

        .cs-meta-value {
          font-family: 'Space Grotesk', sans-serif;
          font-weight: 600;
          font-size: 16px;
          letter-spacing: -0.01em;
          color: var(--text);
        }

        @media (max-width: 900px) {
          .cs-meta {
            grid-template-columns: repeat(2, 1fr);
            gap: var(--space-8) var(--space-6);
          }
        }
      `}</style>

      {meta.map(({ label, value }) => (
        <div key={label} className="meta-item">
          <div className="cs-meta-label">{label}</div>
          <div className="cs-meta-value">{value}</div>
        </div>
      ))}
    </section>
  );
}
