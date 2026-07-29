'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Box, Heading, Link, Text, } from '@chakra-ui/react';
import { postkitCallToActionRecipe, } from '../recipes/call-to-action.recipe.js';
import { postkitSlotClassName, usePostkitSlotRecipe, } from '../recipes/types.js';
import { postkitRecipeKeys } from '../theme.js';
export function PostkitCallToAction({ title, eyebrow, description, primaryLabel, primaryHref, secondaryLabel, secondaryHref, children, rootProps, slotStyles, alignment, size, variant, unstyled, }) {
    const recipe = usePostkitSlotRecipe(postkitRecipeKeys.callToAction, postkitCallToActionRecipe);
    const styles = unstyled
        ? {}
        : recipe({ alignment, size, variant });
    const { css: rootCss, className: rootClassName, ...restRootProps } = rootProps ?? {};
    const hasActions = (primaryLabel && primaryHref) || (secondaryLabel && secondaryHref);
    return (_jsxs(Box, { as: "aside", "data-postkit-component": "CallToAction", ...restRootProps, className: postkitSlotClassName(recipe.classNameMap.root, rootClassName), css: [styles.root, slotStyles?.root, rootCss], children: [_jsxs(Box, { className: recipe.classNameMap.content, css: [styles.content, slotStyles?.content], children: [eyebrow ? (_jsx(Text, { className: recipe.classNameMap.eyebrow, css: [styles.eyebrow, slotStyles?.eyebrow], children: eyebrow })) : null, _jsx(Heading, { as: "h2", className: recipe.classNameMap.title, css: [styles.title, slotStyles?.title], children: title }), description || children ? (_jsx(Box, { className: recipe.classNameMap.body, css: [styles.body, slotStyles?.body], children: children ?? description })) : null] }), hasActions ? (_jsxs(Box, { className: recipe.classNameMap.actions, css: [styles.actions, slotStyles?.actions], children: [primaryLabel && primaryHref ? (_jsx(Link, { href: primaryHref, className: recipe.classNameMap.primaryAction, css: [styles.primaryAction, slotStyles?.primaryAction], children: primaryLabel })) : null, secondaryLabel && secondaryHref ? (_jsx(Link, { href: secondaryHref, className: recipe.classNameMap.secondaryAction, css: [styles.secondaryAction, slotStyles?.secondaryAction], children: secondaryLabel })) : null] })) : null] }));
}
