import localFont from 'next/font/local'

export const SuisseIntl = localFont({
  src: [
    {
      path: './files/SuisseIntl-Ultralight-WebXL.woff2',
      weight: '100',
      style: 'normal',
    },
    {
      path: './files/SuisseIntl-UltralightItalic-WebXL.woff2',
      weight: '100',
      style: 'italic',
    },
    {
      path: './files/SuisseIntl-Thin-WebXL.woff2',
      weight: '200',
      style: 'normal',
    },
    {
      path: './files/SuisseIntl-ThinItalic-WebXL.woff2',
      weight: '200',
      style: 'italic',
    },
    {
      path: './files/SuisseIntl-Light-WebXL.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: './files/SuisseIntl-LightItalic-WebXL.woff2',
      weight: '300',
      style: 'italic',
    },
    {
      path: './files/SuisseIntl-Regular-WebXL.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './files/SuisseIntl-RegularItalic-WebXL.woff2',
      weight: '400',
      style: 'italic',
    },
    {
      path: './files/SuisseIntl-Book-WebXL.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: './files/SuisseIntl-BookItalic-WebXL.woff2',
      weight: '500',
      style: 'italic',
    },
    {
      path: './files/SuisseIntl-Medium-WebXL.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: './files/SuisseIntl-MediumItalic-WebXL.woff2',
      weight: '600',
      style: 'italic',
    },
    {
      path: './files/SuisseIntl-SemiBold-WebXL.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: './files/SuisseIntl-SemiBoldItalic-WebXL.woff2',
      weight: '700',
      style: 'italic',
    },
    {
      path: './files/SuisseIntl-Bold-WebXL.woff2',
      weight: '800',
      style: 'normal',
    },
    {
      path: './files/SuisseIntl-BoldItalic-WebXL.woff2',
      weight: '800',
      style: 'italic',
    },
    {
      path: './files/SuisseIntl-Black-WebXL.woff2',
      weight: '900',
      style: 'normal',
    },
    {
      path: './files/SuisseIntl-BlackItalic-WebXL.woff2',
      weight: '900',
      style: 'italic',
    },
  ],
  variable: '--font-suisse-intl',
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
