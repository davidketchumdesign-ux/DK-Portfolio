'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ThemeToggle } from './ThemeToggle';

export function Nav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <div className="nav-wrap">
        <div className="nav-inner">
          <div className="nav-spacer" />

          <nav className="float-pill nav-links">
            <span className="nav-name">David Ketchum</span>
            <span className="nav-sep">|</span>
            <Link href="/#work" className="nav-link">
              Work
            </Link>
            <span className="nav-sep">|</span>
            <Link href="/#about" className="nav-link">
              About
            </Link>
            <span className="nav-sep">|</span>
            <Link href="/#contact" className="nav-link">
              Contact
            </Link>
          </nav>

          <button
            className="menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Open menu"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>

          <div className="float-pill mode-pill">
            <ThemeToggle />
          </div>
        </div>
      </div>

      <div className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-menu-name">David Ketchum</div>
        <Link href="/#work" className="mobile-menu-link" onClick={() => setMobileMenuOpen(false)}>
          Work
        </Link>
        <Link href="/#about" className="mobile-menu-link" onClick={() => setMobileMenuOpen(false)}>
          About
        </Link>
        <Link href="/#contact" className="mobile-menu-link" onClick={() => setMobileMenuOpen(false)}>
          Contact
        </Link>
        <div className="mobile-menu-divider" />
        <div className="mobile-menu-toggle-row">
          <span>Appearance</span>
          <ThemeToggle mobile />
        </div>
      </div>

      <style jsx>{`
        .nav-wrap {
          position: fixed;
          top: 20px;
          left: 0;
          right: 0;
          z-index: 100;
          display: flex;
          justify-content: center;
          pointer-events: none;
        }

        .nav-inner {
          width: 100%;
          max-width: 1160px;
          padding: 0 24px;
          display: grid;
          grid-template-columns: 1fr auto 1fr;
          align-items: center;
          gap: 12px;
        }

        .nav-spacer {
          grid-column: 1;
        }

        .float-pill {
          display: flex;
          align-items: center;
          background: color-mix(in srgb, var(--bg-elevated) 88%, transparent);
          backdrop-filter: blur(14px);
          border: 1px solid var(--border);
          border-radius: 999px;
          box-shadow: var(--card-shadow);
          pointer-events: auto;
          transition: background 0.4s var(--ease), border-color 0.4s var(--ease);
        }

        .nav-links {
          justify-self: center;
          grid-column: 2;
          gap: 2px;
          padding: 6px 10px;
        }

        .nav-name {
          font-family: 'Space Grotesk', sans-serif;
          font-weight: 700;
          font-size: 13.5px;
          letter-spacing: -0.02em;
          color: var(--text);
          padding: 8px 12px;
          white-space: nowrap;
        }

        .nav-sep {
          color: var(--border);
          font-size: 13px;
          user-select: none;
        }

        .nav-link {
          color: var(--text-muted);
          text-decoration: none;
          font-size: 13.5px;
          font-weight: 500;
          padding: 8px 14px;
          border-radius: 999px;
          white-space: nowrap;
          transition: color 0.2s var(--ease), background 0.2s var(--ease);
        }

        .nav-link:hover {
          color: var(--text);
          background: color-mix(in srgb, var(--text) 6%, transparent);
        }

        .mode-pill {
          justify-self: end;
          grid-column: 3;
          padding: 8px;
        }

        .menu-btn {
          display: none;
          justify-self: end;
          grid-column: 2;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          padding: 0;
          border: 1px solid var(--border);
          background: color-mix(in srgb, var(--bg-elevated) 88%, transparent);
          backdrop-filter: blur(14px);
          border-radius: 50%;
          color: var(--text);
          cursor: pointer;
          pointer-events: auto;
        }

        .menu-btn svg {
          width: 18px;
          height: 18px;
        }

        .mobile-menu {
          position: fixed;
          top: 72px;
          left: 16px;
          right: 16px;
          z-index: 99;
          background: var(--bg-elevated);
          border: 1px solid var(--border);
          border-radius: var(--radius);
          box-shadow: var(--card-shadow-hover);
          padding: 10px;
          display: flex;
          flex-direction: column;
          gap: 2px;
          opacity: 0;
          transform: translateY(-8px);
          pointer-events: none;
          transition: opacity 0.25s var(--ease), transform 0.25s var(--ease);
        }

        .mobile-menu.open {
          opacity: 1;
          transform: translateY(0);
          pointer-events: auto;
        }

        .mobile-menu-name {
          font-family: 'Space Grotesk', sans-serif;
          font-weight: 700;
          font-size: 14px;
          letter-spacing: -0.02em;
          color: var(--text-muted);
          padding: 12px 16px 6px;
        }

        .mobile-menu-link {
          color: var(--text);
          text-decoration: none;
          font-size: 15px;
          font-weight: 500;
          padding: 14px 16px;
          border-radius: 10px;
          transition: background 0.2s var(--ease);
          display: block;
        }

        .mobile-menu-link:hover {
          background: color-mix(in srgb, var(--text) 6%, transparent);
        }

        .mobile-menu-divider {
          height: 1px;
          background: var(--border);
          margin: 8px 4px;
        }

        .mobile-menu-toggle-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 6px 16px 10px;
        }

        .mobile-menu-toggle-row span {
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: 0.04em;
          color: var(--text-muted);
        }

        @media (max-width: 860px) {
          .nav-wrap {
            top: 14px;
          }
          .nav-inner {
            padding: 0 16px;
            grid-template-columns: 1fr auto;
          }
          .nav-links {
            display: none;
          }
          .mode-pill {
            display: none;
          }
          .menu-btn {
            display: flex;
            grid-column: 2;
          }
        }
      `}</style>
    </>
  );
}
