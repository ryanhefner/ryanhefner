'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Box, Image, Link, Text, } from '@chakra-ui/react';
import { parseJsonProp } from '../json-props.js';
import { postkitAuthorCardRecipe, } from '../recipes/author-card.recipe.js';
import { postkitSlotClassName, usePostkitSlotRecipe, } from '../recipes/types.js';
import { postkitRecipeKeys } from '../theme.js';
export function PostkitAuthorCard({ name, role, avatarSrc, avatarAlt, href, bio, links: linksValue = [], children, rootProps, slotStyles, presentation, size, variant, unstyled, }) {
    const links = parseJsonProp(linksValue, 'AuthorCard links');
    const recipe = usePostkitSlotRecipe(postkitRecipeKeys.authorCard, postkitAuthorCardRecipe);
    const styles = unstyled
        ? {}
        : recipe({ presentation, size, variant });
    const { css: rootCss, className: rootClassName, ...restRootProps } = rootProps ?? {};
    const authorName = href ? (_jsx(Link, { href: href, rel: "author", className: recipe.classNameMap.nameLink, css: [styles.nameLink, slotStyles?.nameLink], children: name })) : (name);
    return (_jsxs(Box, { as: "aside", "aria-label": `About ${name}`, "data-postkit-component": "AuthorCard", ...restRootProps, className: postkitSlotClassName(recipe.classNameMap.root, rootClassName), css: [styles.root, slotStyles?.root, rootCss], children: [avatarSrc ? (_jsx(Image, { src: avatarSrc, alt: avatarAlt ?? '', loading: "lazy", decoding: "async", className: recipe.classNameMap.avatar, css: [styles.avatar, slotStyles?.avatar] })) : (_jsx(Box, { as: "span", "aria-hidden": "true", className: recipe.classNameMap.avatar, css: [styles.avatar, slotStyles?.avatar], children: name.trim().slice(0, 1).toUpperCase() })), _jsxs(Box, { className: recipe.classNameMap.content, css: [styles.content, slotStyles?.content], children: [_jsxs(Box, { className: recipe.classNameMap.header, css: [styles.header, slotStyles?.header], children: [_jsx(Text, { as: "span", className: recipe.classNameMap.name, css: [styles.name, slotStyles?.name], children: authorName }), role ? (_jsx(Text, { as: "span", className: recipe.classNameMap.role, css: [styles.role, slotStyles?.role], children: role })) : null] }), bio || children ? (_jsx(Box, { className: recipe.classNameMap.bio, css: [styles.bio, slotStyles?.bio], children: children ?? bio })) : null, links.length ? (_jsx(Box, { as: "ul", "aria-label": `${name} links`, className: recipe.classNameMap.links, css: [styles.links, slotStyles?.links], children: links.map((link) => (_jsx(Box, { as: "li", children: _jsx(Link, { href: link.href, rel: link.rel, className: recipe.classNameMap.link, css: [styles.link, slotStyles?.link], children: link.label }) }, `${link.label}-${link.href}`))) })) : null] })] }));
}
