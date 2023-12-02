import localFont from 'next/font/local'

const SuisseIntlMono = localFont({
  src: [
    {
      path: './files/SuisseIntlMono-Thin-WebXL.woff2',
      weight: '100',
      style: 'normal',
    },
    {
      path: './files/SuisseIntlMono-Regular-WebXL.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './files/SuisseIntlMono-Bold-WebXL.woff2',
      weight: '800',
      style: 'normal',
    },
  ],
  variable: '--font-suisse-intl-mono',
  fallback: [
    'ui-sans-serif',
    'system-ui',
    '-apple-system',
    'BlinkMacSystemFont',
    'Inter',
    'Segoe UI',
    'Roboto',
    'sans-serif',
    'Apple Color Emoji',
    'Segoe UI Emoji',
    'Segoe UI Symbol',
    'Noto Color Emoji',
  ],
})

export default SuisseIntlMono
