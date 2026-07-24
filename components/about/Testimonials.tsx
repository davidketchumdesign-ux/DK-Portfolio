'use client';

import { Reveal } from '@/components/shared/Reveal';
import type { Testimonial } from '@/content/about';

interface TestimonialsProps {
  testimonials: Testimonial[];
}

export function Testimonials({ testimonials }: TestimonialsProps) {
  return (
    <section className="testimonials">
      <style jsx>{`
        .testimonials {
          max-width: var(--container);
          margin: 0 auto;
          padding: var(--section-pad-top) var(--gutter) var(--section-pad-bottom);
          border-top: 1px solid var(--border);
        }

        h2 {
          font-family: 'Space Grotesk', sans-serif;
          font-weight: 700;
          font-size: clamp(1.8rem, 3.2vw, 2.6rem);
          letter-spacing: -0.02em;
          max-width: 640px;
          color: var(--text);
        }

        .section-sub {
          margin-top: var(--space-4);
          color: var(--text-muted);
          font-size: 14.5px;
          max-width: 480px;
        }

        .testimonials-grid {
          margin-top: var(--section-head-gap);
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: clamp(var(--space-6), 2vw, var(--space-8));
          align-items: stretch;
        }

        :global(.testimonial-card) {
          display: flex;
          flex-direction: column;
          height: 100%;
          padding: var(--space-8) var(--space-7);
          background: var(--bg-elevated);
          border: 1px solid var(--border);
          border-radius: var(--radius);
        }

        .quote-mark {
          font-family: 'Space Grotesk', sans-serif;
          font-weight: 700;
          font-size: 40px;
          line-height: 1;
          color: var(--accent);
          margin-bottom: var(--space-4);
        }

        .quote {
          flex: 1;
          color: var(--text);
          font-size: 15px;
          line-height: 1.65;
        }

        .attribution {
          margin-top: var(--space-7);
          padding-top: var(--space-5);
          border-top: 1px solid var(--border);
        }

        .attr-name {
          font-family: 'Space Grotesk', sans-serif;
          font-weight: 600;
          font-size: 14.5px;
          color: var(--text);
        }

        .attr-role {
          margin-top: var(--space-1);
          font-family: 'JetBrains Mono', monospace;
          font-size: 11.5px;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 0.04em;
        }

        @media (max-width: 860px) {
          .testimonials-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <h2>What people say</h2>
      <p className="section-sub">A few words from coworkers and clients I&apos;ve partnered with along the way.</p>

      <div className="testimonials-grid">
        {testimonials.map((testimonial, i) => (
          <Reveal
            key={testimonial.name + i}
            className="testimonial-card"
            custom={i}
            viewportMargin="-50px"
          >
            <div className="quote-mark">&ldquo;</div>
            <p className="quote">{testimonial.quote}</p>
            <div className="attribution">
              <div className="attr-name">{testimonial.name}</div>
              <div className="attr-role">{testimonial.role}</div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
