import { createEditorialPostkitTheme } from '@ryanhefner/postkit-theme'

/**
 * Postkit theme matching Allplay's pre-Postkit Markdown component map.
 *
 * The former renderer used Prism's Night Owl token colors and generated line
 * numbers. Those are syntax-rendering behaviors rather than recipe styles, so
 * this theme preserves the code container treatment without tokenization.
 */
export const allplayPostkitTheme = createEditorialPostkitTheme({
  prose: {
    base: {
      root: {
        color: 'inherit',
        lineHeight: 'inherit',
      },
      a: {
        color: 'white',
        textDecoration: 'underline',
        textDecorationColor: 'currentColor',
        _hover: {
          textDecorationColor: 'currentColor',
        },
      },
      blockquote: {
        _before: {
          bgColor: 'blue.500',
        },
      },
      code: {
        bg: 'gray.800',
        color: 'white',
      },
      h1: {
        letterSpacing: 'normal',
      },
      h2: {
        fontSize: { base: '5xl', md: '7xl' },
        letterSpacing: -2,
      },
      h3: {
        fontSize: { base: '3xl', md: '5xl' },
      },
      h4: {
        fontSize: { base: '2xl', md: '4xl' },
        letterSpacing: -1,
      },
      h5: {
        fontSize: { base: 'xl', md: '3xl' },
        letterSpacing: -1,
      },
      p: {
        color: 'gray.400',
        marginBlock: 0,
      },
    },
  },
})
