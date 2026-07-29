'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Box, Link, Text, chakra, } from '@chakra-ui/react';
import { postkitVideoRecipe, } from '../recipes/video.recipe.js';
import { postkitSlotClassName, usePostkitSlotRecipe, } from '../recipes/types.js';
import { postkitRecipeKeys } from '../theme.js';
export function PostkitVideo({ src, title, poster, caption, aspectRatio = '16 / 9', preload = 'metadata', tracks = [], rootProps, slotStyles, size, variant, unstyled, }) {
    const recipe = usePostkitSlotRecipe(postkitRecipeKeys.video, postkitVideoRecipe);
    const styles = unstyled
        ? {}
        : recipe({ size, variant });
    const { css: rootCss, className: rootClassName, ...restRootProps } = rootProps ?? {};
    return (_jsxs(Box, { as: "figure", "data-postkit-component": "Video", ...restRootProps, className: postkitSlotClassName(recipe.classNameMap.root, rootClassName), css: [styles.root, slotStyles?.root, rootCss], children: [_jsx(Box, { className: recipe.classNameMap.frame, css: [styles.frame, slotStyles?.frame], children: _jsxs(chakra.video, { className: recipe.classNameMap.player, src: src, title: title, poster: poster, preload: preload, controls: true, playsInline: true, css: [styles.player, { aspectRatio }, slotStyles?.player], children: [tracks.map((track) => (_jsx("track", { src: track.src, srcLang: track.srcLang, label: track.label, kind: track.kind ?? 'captions', default: track.default }, `${track.srcLang}:${track.src}`))), _jsxs(Link, { href: src, className: recipe.classNameMap.fallback, css: [styles.fallback, slotStyles?.fallback], children: ["Open ", title] })] }) }), caption ? (_jsx(Text, { as: "figcaption", className: recipe.classNameMap.caption, css: [styles.caption, slotStyles?.caption], children: caption })) : null] }));
}
