import { createPostkitTheme } from '@postkit/react'

/**
 * Inactive reference for the Markdown styles used before Postkit.
 *
 * Pass this to `<PostkitProvider theme={ryanHefnerMarkdownThemeReference}>`
 * if the site needs to restore its previous editorial treatment. The old
 * renderer also used Prism's Night Owl token colors and special-cased a
 * "Footnotes" h2; those behaviors would require component-map overrides.
 */
export const ryanHefnerMarkdownThemeReference = createPostkitTheme({
  prose: {
    base: {
      root: {
        fontSize: { base: 'lg', md: 'xl' },
      },
      a: {
        color: 'blue.500',
        _hover: { textDecoration: 'underline' },
      },
      blockquote: {
        py: { base: 4, md: 8 },
        pl: { base: 8, md: 12 },
        pos: 'relative',
        fontFamily: 'serif',
        fontSize: { base: '4xl', md: '6xl' },
        letterSpacing: { base: -1, md: -2 },
        lineHeight: 1.2,
        maxW: 'container.md',
        mx: 'auto',
        w: 'full',
        _before: {
          content: '" "',
          bgColor: 'blue.500',
          w: 2,
          pos: 'absolute',
          top: 0,
          left: 0,
          bottom: 0,
        },
      },
      code: {
        bg: { base: 'gray.100', _dark: 'gray.800' },
        borderRadius: 4,
        color: { base: 'black', _dark: 'white' },
        px: 1,
        py: 1,
      },
      h1: {
        fontSize: { base: '6xl', md: '10xl' },
        mt: { base: 12, md: 16 },
        mb: { base: 16, md: 24 },
        mx: 'auto',
        w: 'full',
      },
      h2: {
        fontSize: { base: '3xl', md: '4xl' },
        fontWeight: 'medium',
        letterSpacing: -1,
        lineHeight: '1.1',
        maxW: 'container.md',
        mt: { base: 8, md: 16 },
        mb: 4,
        mx: 'auto',
        w: 'full',
      },
      h3: {
        fontSize: { base: '2xl', md: '3xl' },
        fontWeight: 'medium',
        letterSpacing: -1,
        lineHeight: '1.1',
        maxW: 'container.md',
        mt: { base: 8, md: 12 },
        mb: 4,
        mx: 'auto',
        w: 'full',
      },
      h4: {
        color: 'gray.500',
        fontSize: { base: 'xl', md: '2xl' },
        fontWeight: 'medium',
        letterSpacing: -0.5,
        maxW: 'container.md',
        mt: { base: 8, md: 12 },
        mb: 4,
        mx: 'auto',
        w: 'full',
      },
      h5: {
        color: 'gray.500',
        fontSize: { base: 'lg', md: 'xl' },
        fontWeight: 'medium',
        letterSpacing: -0.5,
        maxW: 'container.md',
        mt: { base: 6, md: 10 },
        mb: 4,
        mx: 'auto',
        w: 'full',
      },
      img: {
        pos: 'relative',
        mx: { base: -6, md: -20, lg: -24 },
        w: {
          base: 'calc(100% + 48px)',
          md: 'calc(100% + 160px)',
          lg: 'calc(100% + 192px)',
        },
        maxW: {
          base: 'calc(100% + 48px)',
          md: 'calc(100% + 160px)',
          lg: 'calc(100% + 192px)',
        },
      },
      ol: {
        fontSize: { base: 'xl', md: '2xl' },
        maxW: 'container.md',
        my: 6,
        mx: 'auto',
        pl: 12,
        w: 'full',
        gap: 3,
      },
      p: {
        maxW: 'container.md',
        my: 4,
        mx: 'auto',
        w: 'full',
      },
      pre: {
        bgColor: 'black',
        borderRadius: 4,
        maxW: 'container.lg',
        mx: 'auto',
        my: 4,
        w: '100%',
      },
      ul: {
        fontSize: { base: 'xl', md: '2xl' },
        maxW: 'container.md',
        my: 6,
        mx: 'auto',
        pl: 12,
        w: 'full',
        gap: 3,
      },
    },
  },
})
