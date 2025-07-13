/**
 * Font loading utilities with fallback strategies
 */

export const FONT_LOADING_STRATEGIES = {
  // Strategy 1: Use Google Fonts with optimized settings
  google: {
    url: 'https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap',
    timeout: 5000,
  },
  
  // Strategy 2: Use alternative CDN
  jsdelivr: {
    url: 'https://cdn.jsdelivr.net/npm/@fontsource/poppins@4.5.0/index.css',
    timeout: 5000,
  },
  
  // Strategy 3: Use local system fonts
  system: {
    family: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
  },
};

/**
 * Loads font with fallback strategies
 */
export const loadFontWithFallback = (): void => {
  // Only run in browser
  if (typeof window === 'undefined') return;
  
  // Check if Poppins is already loaded
  if (document.fonts && document.fonts.check('12px Poppins')) {
    return;
  }
  
  // Try loading from Google Fonts first
  const link = document.createElement('link');
  link.href = FONT_LOADING_STRATEGIES.google.url;
  link.rel = 'stylesheet';
  link.setAttribute('display', 'swap');
  
  // Add timeout handling
  const timeout = setTimeout(() => {
    console.warn('Google Fonts loading timed out, using system fonts');
    document.documentElement.style.fontFamily = FONT_LOADING_STRATEGIES.system.family;
  }, FONT_LOADING_STRATEGIES.google.timeout);
  
  link.onload = () => {
    clearTimeout(timeout);
    console.log('Google Fonts loaded successfully');
  };
  
  link.onerror = () => {
    clearTimeout(timeout);
    console.warn('Google Fonts failed to load, using system fonts');
    document.documentElement.style.fontFamily = FONT_LOADING_STRATEGIES.system.family;
  };
  
  document.head.appendChild(link);
};

/**
 * Preload critical fonts
 */
export const preloadCriticalFonts = (): void => {
  if (typeof window === 'undefined') return;
  
  const fontUrls = [
    'https://fonts.gstatic.com/s/poppins/v20/pxiEyp8kv8JHgFVrFJDUc1NECPY.woff2',
    'https://fonts.gstatic.com/s/poppins/v20/pxiByp8kv8JHgFVrLCz7Z1xlFQ.woff2',
    'https://fonts.gstatic.com/s/poppins/v20/pxiByp8kv8JHgFVrLDD4Z1xlFQ.woff2',
  ];
  
  fontUrls.forEach(url => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = url;
    link.as = 'font';
    link.type = 'font/woff2';
    link.crossOrigin = 'anonymous';
    document.head.appendChild(link);
  });
};
