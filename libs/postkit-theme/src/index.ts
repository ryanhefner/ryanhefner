import { mergeConfigs } from '@chakra-ui/react'
import { type PostkitThemeOverrides, createPostkitTheme } from '@postkit/react'

/**
 * Shared editorial treatment used by the Ryan Hefner and Allplay sites.
 *
 * App themes extend this config with their own color, type-scale, and
 * line-height decisions.
 */
const editorialPostkitThemeBase = createPostkitTheme({
  prose: {
    base: {
      a: {
        fontWeight: 'inherit',
      },
      blockquote: {
        borderInlineStartWidth: 0,
        color: 'inherit',
        fontFamily: 'serif',
        fontSize: { base: '4xl', md: '6xl' },
        fontStyle: 'normal',
        letterSpacing: { base: -1, md: -2 },
        lineHeight: 1.2,
        marginBlock: 0,
        maxW: 'container.md',
        mx: 'auto',
        paddingBlock: { base: 4, md: 8 },
        paddingInlineStart: { base: 8, md: 12 },
        pos: 'relative',
        w: 'full',
        _before: {
          content: '" "',
          bgColor: 'colorPalette.fg',
          bottom: 0,
          left: 0,
          pos: 'absolute',
          top: 0,
          w: 2,
        },
      },
      code: {
        alignItems: 'center',
        borderRadius: 4,
        colorPalette: 'whiteAlpha',
        display: 'inline-flex',
        fontSize: 'xs',
        px: 1,
        py: 1,
      },
      del: {
        color: 'inherit',
      },
      h1: {
        fontSize: { base: '6xl', md: '10xl' },
        fontWeight: 'medium',
        marginBlockEnd: { base: 16, md: 24 },
        marginBlockStart: { base: 12, md: 16 },
        mx: 'auto',
        w: 'full',
      },
      h2: {
        fontWeight: 'medium',
        marginBlockEnd: 4,
        marginBlockStart: { base: 8, md: 16 },
        maxW: 'container.md',
        mx: 'auto',
        w: 'full',
        '&[id="footnote-label"]': {
          fontSize: { base: 'xl', md: '2xl' },
          letterSpacing: 0,
        },
      },
      h3: {
        fontWeight: 'medium',
        letterSpacing: -1,
        marginBlockEnd: 4,
        marginBlockStart: { base: 8, md: 12 },
        maxW: 'container.md',
        mx: 'auto',
        w: 'full',
      },
      h4: {
        color: 'gray.500',
        fontWeight: 'medium',
        marginBlockEnd: 4,
        marginBlockStart: { base: 8, md: 12 },
        maxW: 'container.md',
        mx: 'auto',
        w: 'full',
      },
      h5: {
        color: 'gray.500',
        fontWeight: 'medium',
        marginBlockEnd: 4,
        marginBlockStart: { base: 6, md: 10 },
        maxW: 'container.md',
        mx: 'auto',
        w: 'full',
      },
      img: {
        borderRadius: 0,
        marginBlock: 0,
        maxW: {
          base: 'calc(100% + 48px)',
          md: 'calc(100% + 160px)',
          lg: 'calc(100% + 192px)',
        },
        mx: { base: -6, md: -20, lg: -24 },
        pos: 'relative',
        w: {
          base: 'calc(100% + 48px)',
          md: 'calc(100% + 160px)',
          lg: 'calc(100% + 192px)',
        },
      },
      li: {
        marginBlock: 0,
        paddingInlineStart: 0,
        '&[id^="user-content-fn"]': {
          fontSize: { base: 'sm', md: 'md' },
        },
      },
      ol: {
        display: 'flex',
        flexDirection: 'column',
        fontSize: { base: 'xl', md: '2xl' },
        gap: 3,
        marginBlock: 6,
        maxW: 'container.md',
        mx: 'auto',
        paddingInlineStart: 12,
        w: 'full',
      },
      p: {
        maxW: 'container.md',
        mx: 'auto',
        w: 'full',
      },
      pre: {
        bgColor: 'black',
        borderRadius: 4,
        color: 'white',
        marginBlock: 4,
        maxW: 'container.lg',
        mx: 'auto',
        paddingBlock: 3,
        paddingInline: 3,
        w: '100%',
      },
      section: {
        marginBlock: 0,
      },
      ul: {
        display: 'flex',
        flexDirection: 'column',
        fontSize: { base: 'xl', md: '2xl' },
        gap: 3,
        marginBlock: 6,
        maxW: 'container.md',
        mx: 'auto',
        paddingInlineStart: 12,
        w: 'full',
      },
    },
  },
})

export function createEditorialPostkitTheme(
  overrides: PostkitThemeOverrides = {},
) {
  return mergeConfigs(editorialPostkitThemeBase, createPostkitTheme(overrides))
}
