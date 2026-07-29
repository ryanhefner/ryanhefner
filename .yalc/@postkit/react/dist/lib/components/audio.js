'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Box, Link, Text, chakra, } from '@chakra-ui/react';
import { postkitAudioRecipe, } from '../recipes/audio.recipe.js';
import { postkitSlotClassName, usePostkitSlotRecipe, } from '../recipes/types.js';
import { postkitRecipeKeys } from '../theme.js';
export function PostkitAudio({ src, title, caption, preload = 'metadata', rootProps, slotStyles, size, variant, unstyled, }) {
    const recipe = usePostkitSlotRecipe(postkitRecipeKeys.audio, postkitAudioRecipe);
    const styles = unstyled
        ? {}
        : recipe({ size, variant });
    const { css: rootCss, className: rootClassName, ...restRootProps } = rootProps ?? {};
    return (_jsxs(Box, { as: "figure", "data-postkit-component": "Audio", ...restRootProps, className: postkitSlotClassName(recipe.classNameMap.root, rootClassName), css: [styles.root, slotStyles?.root, rootCss], children: [_jsx(Text, { className: recipe.classNameMap.title, css: [styles.title, slotStyles?.title], children: title }), _jsx(chakra.audio, { className: recipe.classNameMap.player, src: src, "aria-label": title, preload: preload, controls: true, css: [styles.player, slotStyles?.player], children: _jsxs(Link, { href: src, className: recipe.classNameMap.fallback, css: [styles.fallback, slotStyles?.fallback], children: ["Open ", title] }) }), caption ? (_jsx(Text, { as: "figcaption", className: recipe.classNameMap.caption, css: [styles.caption, slotStyles?.caption], children: caption })) : null] }));
}
