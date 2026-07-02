export type Theme = 'light' | 'dark' | 'mint';

export const themeColors: Record<Theme, Record<string, string>> = {
  light: {
    bg: '#FAFAF7',
    bgElevated: '#FFFFFF',
    text: '#14181C',
    textMuted: '#63666B',
    border: '#E7E5DF',
    accent: '#3352E1',
    accentText: '#FFFFFF',
    cardShadow: '0 1px 2px rgba(20,24,28,0.04)',
    cardShadowHover: '0 20px 40px -12px rgba(20,24,28,0.14)',
  },
  dark: {
    bg: '#0A0A0B',
    bgElevated: '#151517',
    text: '#F2F2F0',
    textMuted: '#92928F',
    border: '#26262A',
    accent: '#6E8CFF',
    accentText: '#0A0A0B',
    cardShadow: '0 1px 2px rgba(0,0,0,0.3)',
    cardShadowHover: '0 24px 48px -12px rgba(0,0,0,0.6)',
  },
  mint: {
    bg: '#E9F7EF',
    bgElevated: '#FFFFFF',
    text: '#0F2A20',
    textMuted: '#4C7566',
    border: '#C8E9D6',
    accent: '#FF6B35',
    accentText: '#FFFFFF',
    cardShadow: '0 1px 2px rgba(15,42,32,0.06)',
    cardShadowHover: '0 20px 44px -12px rgba(255,107,53,0.28)',
  },
};

export const togglePositions = {
  light: 0,
  dark: 39,
  mint: 78,
};
