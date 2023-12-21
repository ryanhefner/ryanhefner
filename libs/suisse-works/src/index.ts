import localFont from 'next/font/local'

export const SuisseWorks = localFont({
  src: [
    {
      path: './files/SuisseWorks-Regular-WebXL.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './files/SuisseWorks-RegularItalic-WebXL.woff2',
      weight: '400',
      style: 'italic',
    },
    {
      path: './files/SuisseWorks-Book-WebXL.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: './files/SuisseWorks-BookItalic-WebXL.woff2',
      weight: '500',
      style: 'italic',
    },
    {
      path: './files/SuisseWorks-Medium-WebXL.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: './files/SuisseWorks-MediumItalic-WebXL.woff2',
      weight: '600',
      style: 'italic',
    },
    {
      path: './files/SuisseWorks-Bold-WebXL.woff2',
      weight: '800',
      style: 'normal',
    },
    {
      path: './files/SuisseWorks-BoldItalic-WebXL.woff2',
      weight: '800',
      style: 'italic',
    },
  ],
  variable: '--font-suisse-works',
  fallback: [
    'ui-serif',
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

export default SuisseWorks
