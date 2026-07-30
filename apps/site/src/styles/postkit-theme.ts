import { createEditorialPostkitTheme } from '@ryanhefner/postkit-theme'

/**
 * Postkit theme matching the site's pre-Postkit Markdown component map.
 *
 * The former renderer used Prism's Night Owl token colors and generated line
 * numbers. Those are syntax-rendering behaviors rather than recipe styles, so
 * this theme preserves the code container treatment without tokenization.
 */
export const ryanHefnerPostkitTheme = createEditorialPostkitTheme({
  prose: {
    base: {
      root: {
        fontSize: { base: 'lg', md: 'xl' },
        lineHeight: 1.5,
      },
      a: {
        alignItems: 'center',
        borderRadius: 'l1',
        cursor: 'pointer',
        display: 'inline-flex',
        gap: 1.5,
        outline: 'none',
        textDecoration: 'none',
        _focusVisible: {
          outlineColor: 'colorPalette.focusRing',
          outlineOffset: '2px',
          outlineStyle: 'solid',
          outlineWidth: '2px',
        },
        _hover: {
          textDecoration: 'underline',
          textDecorationColor: 'currentColor/20',
          textUnderlineOffset: '3px',
        },
      },
      code: {
        bg: { base: 'gray.100', _dark: 'gray.800' },
        color: { base: 'black', _dark: 'white' },
      },
      h1: {
        letterSpacing: { base: -3, md: -5 },
        lineHeight: 1,
      },
      h2: {
        fontSize: { base: '3xl', md: '4xl' },
        letterSpacing: -1,
        lineHeight: '1.1',
      },
      h3: {
        fontSize: { base: '2xl', md: '3xl' },
        lineHeight: '1.1',
      },
      h4: {
        fontSize: { base: 'xl', md: '2xl' },
        letterSpacing: -0.5,
      },
      h5: {
        fontSize: { base: 'lg', md: 'xl' },
        letterSpacing: -0.5,
      },
    },
  },
})
