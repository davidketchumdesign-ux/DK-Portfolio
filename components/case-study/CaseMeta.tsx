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
          padding: 0 var(--gutter) 56px;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
          border-top: 1px solid var(--border);
          border-bottom: 1px solid var(--border);
          padding-top: 32px;
          padding-bottom: 32px;
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
          margin-bottom: 8px;
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
            gap: 28px 20px;
          }
        }

        @media (max-width: 860px) {
          .cs-meta {
            padding: 0 22px 40px;
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
