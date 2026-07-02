'use client';

export function Footer() {
  return (
    <footer className="footer" id="contact">
      <style jsx>{`
        .footer {
          border-top: 1px solid var(--border);
          padding: 64px var(--gutter);
          max-width: var(--container);
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          flex-wrap: wrap;
          gap: 32px;
        }

        .footer h2 {
          font-family: 'Space Grotesk', sans-serif;
          font-weight: 700;
          font-size: clamp(1.6rem, 4vw, 2.4rem);
          letter-spacing: -0.02em;
          max-width: 420px;
        }

        .footer-links {
          display: flex;
          flex-direction: column;
          gap: 10px;
          align-items: flex-end;
        }

        .footer-links a {
          color: var(--text-muted);
          text-decoration: none;
          font-size: 14px;
          transition: color 0.2s var(--ease);
        }

        .footer-links a:hover {
          color: var(--text);
        }

        @media (max-width: 860px) {
          .footer {
            padding: 48px 22px;
            flex-direction: column;
            align-items: flex-start;
          }
          .footer-links {
            align-items: flex-start;
          }
        }
      `}</style>

      <h2>Let&apos;s build something worth remembering.</h2>
      <div className="footer-links">
        <a href="mailto:hello@davidketchumwork.com">hello@davidketchumwork.com</a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          Instagram
        </a>
      </div>
    </footer>
  );
}
