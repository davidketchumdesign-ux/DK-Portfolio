'use client';

import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import AutoAwesomeOutlinedIcon from '@mui/icons-material/AutoAwesomeOutlined';
import { useTheme } from '@/contexts/ThemeContext';
import { togglePositions, type Theme } from '@/styles/themes';

const themes: Theme[] = ['light', 'dark', 'mint'];

const iconStyle = { width: 18, height: 18 };

const themeIcons = {
  light: <LightModeOutlinedIcon style={iconStyle} />,
  dark: <DarkModeOutlinedIcon style={iconStyle} />,
  mint: <AutoAwesomeOutlinedIcon style={iconStyle} />,
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
          height: 100%;
          box-sizing: border-box;
          background: color-mix(in srgb, var(--bg-elevated) 88%, transparent);
          backdrop-filter: blur(14px);
          border: 1px solid var(--border);
          border-radius: 999px;
          box-shadow: var(--card-shadow);
          padding: 6px;
          gap: 6px;
          position: relative;
          pointer-events: auto;
          transition: background 0.4s var(--ease), border-color 0.4s var(--ease);
        }

        .theme-toggle button {
          position: relative;
          z-index: 2;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 33px;
          height: 33px;
          border: none;
          background: transparent;
          color: var(--text-muted);
          cursor: pointer;
          border-radius: 50%;
          transition: color 0.3s var(--ease);
        }

        .theme-toggle button svg {
          width: 18px;
          height: 18px;
        }

        .theme-toggle button.active {
          color: var(--accent-text);
        }

        .toggle-pill {
          position: absolute;
          top: 6px;
          bottom: 6px;
          left: 6px;
          width: 33px;
          background: var(--accent);
          border-radius: 50%;
          transition: transform 0.4s var(--ease);
          z-index: 1;
        }
      `}</style>
    </>
  );
}
