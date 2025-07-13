import localFont from 'next/font/local';

// Use system fonts as primary font to avoid network issues
export const primaryFont = localFont({
  src: [
    {
      path: '../../../node_modules/@fontsource/poppins/files/poppins-latin-100-normal.woff2',
      weight: '100',
      style: 'normal',
    },
    {
      path: '../../../node_modules/@fontsource/poppins/files/poppins-latin-200-normal.woff2',
      weight: '200',
      style: 'normal',
    },
    {
      path: '../../../node_modules/@fontsource/poppins/files/poppins-latin-300-normal.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../../../node_modules/@fontsource/poppins/files/poppins-latin-400-normal.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../../node_modules/@fontsource/poppins/files/poppins-latin-500-normal.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../../node_modules/@fontsource/poppins/files/poppins-latin-600-normal.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../../../node_modules/@fontsource/poppins/files/poppins-latin-700-normal.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../../node_modules/@fontsource/poppins/files/poppins-latin-800-normal.woff2',
      weight: '800',
      style: 'normal',
    },
    {
      path: '../../../node_modules/@fontsource/poppins/files/poppins-latin-900-normal.woff2',
      weight: '900',
      style: 'normal',
    },
  ],
  display: 'swap',
  variable: '--font-poppins',
  fallback: ['system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
});

// System font fallback
export const systemFont = localFont({
  src: [],
  display: 'swap',
  variable: '--font-system',
  fallback: ['system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
});

// Export the primary font configuration (will use system fonts if local fonts fail)
export const poppins = systemFont;
