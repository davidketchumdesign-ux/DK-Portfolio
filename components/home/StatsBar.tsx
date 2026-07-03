'use client';

export function StatsBar() {
  const stats = [
    { num: '11+', label: 'Client Engagements' },
    { num: '6', label: 'Years Experience' },
    { num: '3', label: 'Personal Products' },
    { num: '15', label: 'Design Tools & Skills' },
  ];

  return (
    <section className="stats">
      <style jsx>{`
        .stats {
          max-width: var(--container);
          margin: 0 auto;
          padding: 0 var(--gutter) 100px;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
          border-top: 1px solid var(--border);
          padding-top: 48px;
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
          margin-top: 8px;
        }

        @media (max-width: 860px) {
          .stats {
            grid-template-columns: repeat(2, 1fr);
            padding: 0 22px 64px;
            gap: 28px 20px;
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
