'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Box, Image, Link, Text, } from '@chakra-ui/react';
import { postkitFigureRecipe, } from '../recipes/figure.recipe.js';
import { postkitSlotClassName, usePostkitSlotRecipe, } from '../recipes/types.js';
import { postkitRecipeKeys } from '../theme.js';
function numericDimension(value) {
    if (value === undefined)
        return undefined;
    const parsed = typeof value === 'string' ? Number.parseInt(value, 10) : value;
    return Number.isFinite(parsed) && parsed > 0 ? Math.trunc(parsed) : undefined;
}
export function PostkitFigure({ src, alt, caption, credit, creditHref, href, width, height, aspectRatio, objectFit = 'cover', objectPosition, loading = 'lazy', sizes, srcSet, rootProps, slotStyles, size, variant, layout, unstyled, }) {
    const recipe = usePostkitSlotRecipe(postkitRecipeKeys.figure, postkitFigureRecipe);
    const styles = unstyled
        ? {}
        : recipe({ size, variant, layout });
    const { css: rootCss, className: rootClassName, ...restRootProps } = rootProps ?? {};
    const media = (_jsx(Box, { className: recipe.classNameMap.media, css: [
            styles.media,
            aspectRatio ? { aspectRatio } : undefined,
            slotStyles?.media,
        ], children: _jsx(Image, { src: src, alt: alt, htmlWidth: numericDimension(width), htmlHeight: numericDimension(height), loading: loading, decoding: "async", sizes: sizes, srcSet: srcSet, fit: objectFit, align: objectPosition, className: recipe.classNameMap.image, css: [
                styles.image,
                aspectRatio ? { height: '100%' } : undefined,
                slotStyles?.image,
            ] }) }));
    return (_jsxs(Box, { as: "figure", "data-postkit-component": "Figure", ...restRootProps, className: postkitSlotClassName(recipe.classNameMap.root, rootClassName), css: [styles.root, slotStyles?.root, rootCss], children: [href ? (_jsx(Link, { href: href, "aria-label": alt || caption || 'Open image', className: recipe.classNameMap.mediaLink, css: [styles.mediaLink, slotStyles?.mediaLink], children: media })) : (media), caption || credit ? (_jsxs(Box, { as: "figcaption", className: recipe.classNameMap.figcaption, css: [styles.figcaption, slotStyles?.figcaption], children: [caption ? (_jsx(Text, { as: "span", className: recipe.classNameMap.caption, css: [styles.caption, slotStyles?.caption], children: caption })) : null, credit ? (_jsx(Text, { as: "span", className: recipe.classNameMap.credit, css: [styles.credit, slotStyles?.credit], children: creditHref ? (_jsx(Link, { href: creditHref, className: recipe.classNameMap.creditLink, css: [styles.creditLink, slotStyles?.creditLink], children: credit })) : (credit) })) : null] })) : null] }));
}
