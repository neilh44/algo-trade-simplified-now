// config/popupConfig.ts
export interface PopupConfig {
  enabled: boolean;
  showAfterSeconds: number;
  title?: string;
  description?: string;
}

export const POPUP_CONFIGS: Record<string, PopupConfig> = {
  // High-intent pages (shorter delay)
  '/pricing': {
    enabled: true,
    showAfterSeconds: 20,
    title: 'Get Your FREE Trading Bonuses!',
    description: 'Join 10,000+ successful traders and unlock exclusive resources'
  },
  '/products': {
    enabled: true,
    showAfterSeconds: 25,
  },
  '/interactive-demo': {
    enabled: true,
    showAfterSeconds: 15,
  },
  '/schedule-demo': {
    enabled: true,
    showAfterSeconds: 15,
  },

  // Content pages (medium delay)
  '/': { // Home page
    enabled: true,
    showAfterSeconds: 45,
  },
  '/services': {
    enabled: true,
    showAfterSeconds: 40,
  },
  '/about': {
    enabled: true,
    showAfterSeconds: 45,
  },
  '/courses': {
    enabled: true,
    showAfterSeconds: 35,
  },
  '/blog': {
    enabled: true,
    showAfterSeconds: 60,
  },
  '/case-study': {
    enabled: true,
    showAfterSeconds: 45,
  },

  // Documentation & Learning pages (longer delay)
  '/docs': {
    enabled: true,
    showAfterSeconds: 60,
  },
  '/api-reference': {
    enabled: true,
    showAfterSeconds: 60,
  },
  '/tutorials': {
    enabled: true,
    showAfterSeconds: 60,
  },
  '/video-guides': {
    enabled: true,
    showAfterSeconds: 60,
  },
  '/strategy-templates': {
    enabled: true,
    showAfterSeconds: 45,
  },

  // Support pages
  '/help': {
    enabled: true,
    showAfterSeconds: 45,
  },
  '/contact': {
    enabled: true,
    showAfterSeconds: 30,
  },
  '/contact-us': {
    enabled: true,
    showAfterSeconds: 30,
  },

  // Pages where popup should be DISABLED
  '/dashboard': { enabled: false, showAfterSeconds: 0 },
  '/FreeCourses': { enabled: false, showAfterSeconds: 0 },
  '/Resources': { enabled: false, showAfterSeconds: 0 },
  '/Progress': { enabled: false, showAfterSeconds: 0 },
  '/LiveSessions': { enabled: false, showAfterSeconds: 0 },
  '/Profile': { enabled: false, showAfterSeconds: 0 },
  '/Support': { enabled: false, showAfterSeconds: 0 },
  '/admin': { enabled: false, showAfterSeconds: 0 },
  '/login': { enabled: false, showAfterSeconds: 0 },
  '/signup': { enabled: false, showAfterSeconds: 0 },
  '/forgot-password': { enabled: false, showAfterSeconds: 0 },

  // Legal pages (disabled - not conversion focused)
  '/terms': { enabled: false, showAfterSeconds: 0 },
  '/privacy': { enabled: false, showAfterSeconds: 0 },
  '/refund-policy': { enabled: false, showAfterSeconds: 0 },
  '/risk-disclosure': { enabled: false, showAfterSeconds: 0 },
  '/compliance': { enabled: false, showAfterSeconds: 0 },
  '/data-security': { enabled: false, showAfterSeconds: 0 },
};

// Default config for routes not explicitly defined
export const DEFAULT_CONFIG: PopupConfig = {
  enabled: true,
  showAfterSeconds: 45
};