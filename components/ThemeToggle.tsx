'use client';

import { useTheme } from '@/contexts/ThemeContext';
import { togglePositions, type Theme } from '@/styles/themes';

const themes: Theme[] = ['light', 'dark', 'mint'];

const themeIcons = {
  light: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
    </svg>
  ),
  dark: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  ),
  mint: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2l1.6 5.2L19 9l-5.4 1.8L12 16l-1.6-5.2L5 9l5.4-1.8z" />
      <path d="M19 15l.7 2.3L22 18l-2.3.7L19 21l-.7-2.3L16 18l2.3-.7z" />
    </svg>
  ),
};

interface ThemeToggleProps {
  mobile?: boolean;
}

export function ThemeToggle({ mobile = false }: ThemeToggleProps) {
  const { theme, setTheme } = useTheme();

  return (
    <>
      <div className="theme-toggle">
        <div className="toggle-pill" style={{
          transform: `translateX(${togglePositions[theme]}px)`,
        }} />
        {themes.map((t) => (
          <button
            key={t}
            data-theme-btn={t}
            className={theme === t ? 'active' : ''}
            onClick={() => setTheme(t)}
            aria-label={`${t} mode`}
          >
            {themeIcons[t]}
          </button>
        ))}
      </div>

      <style jsx>{`
        .theme-toggle {
          display: flex;
          align-items: center;
          background: var(--bg);
          border: 1px solid var(--border);
          border-radius: 999px;
          padding: 3px;
          gap: 2px;
          position: relative;
        }

        .theme-toggle button {
          position: relative;
          z-index: 2;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 32px;
          height: 32px;
          border: none;
          background: transparent;
          color: var(--text-muted);
          cursor: pointer;
          border-radius: 50%;
          transition: color 0.3s var(--ease);
        }

        .theme-toggle button svg {
          width: 16px;
          height: 16px;
        }

        .theme-toggle button.active {
          color: var(--accent-text);
        }

        .toggle-pill {
          position: absolute;
          top: 3px;
          bottom: 3px;
          left: 3px;
          width: 32px;
          background: var(--accent);
          border-radius: 50%;
          transition: transform 0.4s var(--ease);
          z-index: 1;
        }
      `}</style>
    </>
  );
}
