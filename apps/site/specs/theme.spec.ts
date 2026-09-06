import { themeSemanticTokens, themeTokens, themeTypography } from '@ryanhefner/theme'
import { siteConfig, system } from '@ryanhefner/theme/site'

describe('shared site theme', () => {
  it('uses the shared tokens and existing web font roles', () => {
    expect(siteConfig.theme?.tokens).toBe(themeTokens)
    expect(system.token('fonts.body')).toBe(themeTokens.fonts.body.value)
    expect(system.token('fonts.mono')).toBe('Suisse Intl Mono, monospace')
    expect(system.token('fonts.serif')).toBe('Suisse Works, serif')
    expect(system.token('colors.gray.700')).toBe('#333')
  })

  it('preserves the site light/dark colors and component weights', () => {
    expect(siteConfig.theme?.semanticTokens).toBe(themeSemanticTokens)
    expect(themeSemanticTokens.colors['bg.body'].value).toEqual({
      base: '{colors.white}',
      _dark: '{colors.black}',
    })
    expect(siteConfig.theme?.recipes?.heading.base?.fontWeight).toBe(
      themeTypography.headingWeight,
    )
    expect(siteConfig.theme?.recipes?.button.base?.fontWeight).toBe(
      themeTypography.buttonWeight,
    )
  })
})
