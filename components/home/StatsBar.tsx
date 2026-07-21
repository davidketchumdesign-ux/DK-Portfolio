'use client';

export function StatsBar() {
  const stats = [
    { num: '15', label: 'Client Engagements' },
    { num: '8', label: 'Years Experience' },
    { num: '3', label: 'Personal Products' },
    { num: '15', label: 'Design Tools & Skills' },
  ];

  return (
    <section className="stats">
      <style jsx>{`
        .stats {
          max-width: var(--container);
          margin: 0 auto;
          padding: var(--space-12) var(--gutter) clamp(var(--space-14), 7vw, var(--space-18));
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: var(--space-7);
          border-top: 1px solid var(--border);
        }

        .stat {
          display: flex;
          flex-direction: column;
        }

        .stat-num {
          font-family: 'JetBrains Mono', monospace;
          font-weight: 700;
          font-size: clamp(1.8rem, 3vw, 3rem);
          letter-spacing: -0.02em;
          color: var(--text);
        }

        .stat-label {
          font-family: 'JetBrains Mono', monospace;
          font-size: 12px;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 0.04em;
          margin-top: var(--space-2);
        }

        @media (max-width: 860px) {
          .stats {
            grid-template-columns: repeat(2, 1fr);
            gap: var(--space-8) var(--space-6);
          }
        }
      `}</style>

      {stats.map((stat) => (
        <div key={stat.label} className="stat">
          <div className="stat-num">{stat.num}</div>
          <div className="stat-label">{stat.label}</div>
        </div>
      ))}
    </section>
  );
}
