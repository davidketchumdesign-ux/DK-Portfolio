import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['var(--font-inter)'],
        'display': ['var(--font-space-grotesk)'],
        'mono': ['var(--font-jetbrains-mono)'],
      },
      colors: {
        bg: 'var(--bg)',
        'bg-elevated': 'var(--bg-elevated)',
        text: 'var(--text)',
        'text-muted': 'var(--text-muted)',
        border: 'var(--border)',
        accent: 'var(--accent)',
        'accent-text': 'var(--accent-text)',
      },
      borderRadius: {
        'lg': 'var(--radius)',
      },
      spacing: {
        'gutter': 'var(--gutter)',
      },
      maxWidth: {
        'container': 'var(--container)',
      },
    },
  },
  plugins: [],
};

export default config;
