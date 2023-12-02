import { NextFontWithVariable } from 'next/dist/compiled/@next/font'
import localFont from 'next/font/local'

export const SuisseIntl: NextFontWithVariable = localFont({
  src: [
    {
      path: '../files/SuisseIntl-Ultralight-WebXL.woff2',
      weight: '100',
      style: 'normal',
    },
    {
      path: '../files/SuisseIntl-Thin-WebXL.woff2',
      weight: '200',
      style: 'normal',
    },
    {
      path: '../files/SuisseIntl-Light-WebXL.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../files/SuisseIntl-Regular-WebXL.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../files/SuisseIntl-Book-WebXL.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../files/SuisseIntl-Medium-WebXL.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../files/SuisseIntl-SemiBold-WebXL.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../files/SuisseIntl-Bold-WebXL.woff2',
      weight: '800',
      style: 'normal',
    },
    {
      path: '../files/SuisseIntl-Black-WebXL.woff2',
      weight: '900',
      style: 'normal',
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
