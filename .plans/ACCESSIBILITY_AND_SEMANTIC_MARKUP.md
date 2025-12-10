# Accessibility and Semantic Markup Optimization Plan

## Overview

This document outlines accessibility improvements and semantic markup optimizations for both `site` and `allplay` applications after the Chakra UI v3 migration.

## Current State Analysis

### ✅ What's Working Well

1. **Semantic HTML Elements:**
   - Both apps use `<Flex as="header">` and `<Flex as="footer">` ✅
   - Site app uses `<Flex as="nav">` for navigation ✅
   - Both apps use `<Flex as="main">` for main content ✅
   - Proper heading hierarchy with `as="h1"`, `as="h2"`, etc. ✅

2. **Form Accessibility:**
   - NewsletterForm uses `Field.Root` with proper labels ✅
   - Inputs have `id` attributes matching `htmlFor` on labels ✅
   - Error messages are displayed ✅

3. **Images:**
   - Most images have descriptive `alt` text ✅
   - Decorative images use `alt=""` (needs verification) ⚠️

4. **Links:**
   - External links use `target="_blank" rel="noopener noreferrer"` ✅
   - Proper `rel` attributes for social links ✅

## Issues and Recommendations

### 🔴 High Priority

#### 1. **Skip Navigation Links**

**Issue:** No skip links for keyboard users to bypass navigation.

**Impact:** Keyboard users must tab through entire navigation on every page.

**Fix:** Add skip navigation links at the top of each layout.

**Files to Update:**

- `apps/site/src/components/layouts/SiteLayout.tsx`
- `apps/allplay/src/components/layouts/SiteLayout.tsx`

**Implementation:**

```tsx
<chakra.a href="#main-content" position="absolute" top={-10} left={0} bg="blue.500" color="white" px={4} py={2} zIndex={1000} _focus={{ top: 0 }}>
  Skip to main content
</chakra.a>
```

#### 2. **PlayButton Missing ARIA Label**

**Issue:** `PlayButton` is icon-only without accessible label.

**Impact:** Screen readers announce "button" without context.

**File:** `apps/allplay/src/components/buttons/PlayButton.tsx`

**Fix:** Add `aria-label` based on state:

```tsx
<Button
  aria-label={isPlaying ? 'Pause episode' : 'Play episode'}
  // ... rest of props
>
```

#### 3. **AudioPlayer Keyboard Accessibility**

**Issue:** Drag interactions only work with mouse/pointer, no keyboard support.

**Impact:** Keyboard users cannot seek through audio.

**File:** `apps/allplay/src/components/media/AudioPlayer.tsx`

**Fix:** Add keyboard event handlers for arrow keys:

- Left/Right arrows: seek backward/forward
- Space: play/pause
- Add `role="slider"` and `aria-valuemin`, `aria-valuemax`, `aria-valuenow`

#### 4. **Navigation Missing `<nav>` Element (allplay)**

**Issue:** `allplay` SiteHeader navigation links are not wrapped in `<nav>`.

**Impact:** Screen readers can't identify navigation region.

**File:** `apps/allplay/src/components/site/SiteHeader.tsx`

**Fix:** Wrap navigation links in `<Flex as="nav">`:

```tsx
<Flex as="nav" alignItems="center" gap={8}>
  {/* navigation links */}
</Flex>
```

### 🟡 Medium Priority

#### 5. **Empty Alt Text Verification**

**Issue:** MDX images use `alt=""` - need to verify if decorative or informative.

**Files:**

- `apps/site/src/mdx-components.tsx` (line 194)
- `apps/allplay/src/mdx-components.tsx` (line 197)

**Recommendation:**

- If decorative: Keep `alt=""` ✅
- If informative: Extract alt from markdown or use filename
- Consider using `role="presentation"` for decorative images

#### 6. **Heading Hierarchy Verification**

**Issue:** Need to verify proper h1-h6 hierarchy across pages.

**Recommendation:**

- Each page should have exactly one `<h1>`
- Headings should not skip levels (h1 → h3 is bad, h1 → h2 → h3 is good)
- Use semantic heading levels, not just visual sizes

**Files to Check:**

- All page components
- MDX content

#### 7. **Focus Indicators**

**Issue:** Need to verify visible focus indicators for keyboard navigation.

**Recommendation:**

- Ensure Chakra UI default focus styles are visible
- Test with keyboard navigation (Tab key)
- Consider custom focus styles if needed

#### 8. **Form Error Announcements**

**Issue:** NewsletterForm errors may not be announced to screen readers.

**File:** `libs/newsletter/src/lib/components/NewsletterForm.tsx`

**Recommendation:**

- Use `aria-live="polite"` or `aria-live="assertive"` on error containers
- Ensure errors are associated with inputs via `aria-describedby`

#### 9. **Landmark Regions**

**Issue:** Some content sections might benefit from `<section>` or `<article>` elements.

**Recommendation:**

- Use `<section>` for distinct content sections
- Use `<article>` for standalone content (blog posts, episodes)
- Add `aria-label` or `aria-labelledby` for clarity

### 🟢 Low Priority / Enhancements

#### 10. **Loading States**

**Issue:** Button loading states should be announced to screen readers.

**Recommendation:**

- Use `aria-busy="true"` on loading buttons
- Add `aria-live` region for status updates

#### 11. **Color Contrast**

**Issue:** Verify color contrast ratios meet WCAG AA standards (4.5:1 for text).

**Recommendation:**

- Test with tools like WebAIM Contrast Checker
- Ensure text meets contrast requirements in both light and dark modes

#### 12. **Motion Preferences**

**Issue:** Animations may not respect `prefers-reduced-motion`.

**Recommendation:**

- Use CSS `@media (prefers-reduced-motion: reduce)`
- Chakra UI v3 should handle this, but verify

#### 13. **Language Attributes**

**Issue:** Verify `<html lang>` attribute is set correctly.

**Recommendation:**

- Ensure `lang="en"` (or appropriate language) is set
- Check `_document.tsx` files

## Implementation Priority

### Phase 1: Critical Fixes

1. Add skip navigation links
2. Add ARIA labels to PlayButton
3. Add `<nav>` element to allplay header
4. Add keyboard support to AudioPlayer

### Phase 2: Important Improvements

5. Verify and fix empty alt text
6. Verify heading hierarchy
7. Improve form error announcements
8. Add landmark regions where appropriate

### Phase 3: Enhancements

9. Enhance loading state announcements
10. Verify color contrast
11. Test motion preferences
12. Verify language attributes

## Testing Checklist

- [ ] Test with keyboard navigation (Tab, Shift+Tab, Enter, Space, Arrow keys)
- [ ] Test with screen reader (NVDA, JAWS, VoiceOver)
- [ ] Verify focus indicators are visible
- [ ] Test form validation and error announcements
- [ ] Verify color contrast ratios
- [ ] Test with `prefers-reduced-motion` enabled
- [ ] Verify semantic HTML structure with browser DevTools
- [ ] Test skip navigation links
- [ ] Verify ARIA attributes with accessibility tree inspector

## Resources

- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [ARIA Authoring Practices](https://www.w3.org/WAI/ARIA/apg/)
- [Chakra UI Accessibility](https://chakra-ui.com/docs/accessibility)
- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)
