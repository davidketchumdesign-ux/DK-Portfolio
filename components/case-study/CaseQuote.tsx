'use client';

import { Reveal } from '@/components/shared/Reveal';

interface CaseQuoteProps {
  quote: string;
}

export function CaseQuote({ quote }: CaseQuoteProps) {
  return (
    <section className="case-quote">
      <style jsx>{`
        .case-quote {
          max-width: var(--container);
          margin: 0 auto;
          padding: 0 var(--gutter) var(--section-pad-bottom);
        }

        .quote-box {
          padding: var(--space-9) var(--space-10);
          background: var(--bg-elevated);
          border: 1px solid var(--border);
          border-left: 3px solid var(--accent);
          border-radius: var(--radius);
          max-width: 820px;
        }

        .quote-label {
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px;
          color: var(--accent);
          text-transform: uppercase;
          letter-spacing: 0.04em;
          margin-bottom: var(--space-4);
          display: block;
        }

        .quote-text {
          font-family: 'Space Grotesk', sans-serif;
          font-weight: 500;
          font-size: clamp(1.1rem, 1.8vw, 1.35rem);
          line-height: 1.5;
          color: var(--text);
          margin: 0;
        }
      `}</style>

      <Reveal>
        <div className="quote-box">
          <span className="quote-label">Client Feedback</span>
          <p className="quote-text">{quote}</p>
        </div>
      </Reveal>
    </section>
  );
}
