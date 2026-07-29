'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Box, chakra, Image, Link, Text, } from '@chakra-ui/react';
import { useId, useState } from 'react';
import { parseJsonProp } from '../json-props.js';
import { postkitCalloutRecipe, postkitCardGridRecipe, postkitDisclosureRecipe, postkitGalleryRecipe, postkitStepsRecipe, postkitTabsRecipe, } from '../recipes/article-structure.recipe.js';
import { postkitSlotClassName, usePostkitSlotRecipe, } from '../recipes/types.js';
import { postkitRecipeKeys } from '../theme.js';
const DisclosureRoot = chakra('details');
const DisclosureSummary = chakra('summary');
const TabButton = chakra('button');
function rootParts(rootProps) {
    const { css, className, ...rest } = rootProps ?? {};
    return { rootCss: css, rootClassName: className, restRootProps: rest };
}
const calloutMarks = {
    note: 'i',
    tip: '✓',
    important: '!',
    warning: '!',
    caution: '×',
};
export function PostkitCallout({ title, children, icon, componentName = 'Callout', rootProps, slotStyles, size, variant, tone = 'note', unstyled, }) {
    const recipe = usePostkitSlotRecipe(postkitRecipeKeys.callout, postkitCalloutRecipe);
    const styles = unstyled
        ? {}
        : recipe({ size, tone, variant });
    const resolvedTone = typeof tone === 'string' && tone in calloutMarks ? tone : 'note';
    const { rootCss, rootClassName, restRootProps } = rootParts(rootProps);
    return (_jsxs(Box, { as: "aside", "data-postkit-component": componentName, "data-postkit-tone": resolvedTone, ...restRootProps, className: postkitSlotClassName(recipe.classNameMap.root, rootClassName), css: [styles.root, slotStyles?.root, rootCss], children: [_jsx(Box, { "aria-hidden": "true", className: recipe.classNameMap.icon, css: [styles.icon, slotStyles?.icon], children: icon ?? calloutMarks[resolvedTone] }), _jsxs(Box, { className: recipe.classNameMap.content, css: [styles.content, slotStyles?.content], children: [title ? (_jsx(Text, { className: recipe.classNameMap.title, css: [styles.title, slotStyles?.title], children: title })) : null, _jsx(Box, { className: recipe.classNameMap.body, css: [styles.body, slotStyles?.body], children: children })] })] }));
}
export function PostkitAside(props) {
    return _jsx(PostkitCallout, { ...props, componentName: "Aside" });
}
export function PostkitGallery({ items: value, title, description, columns = 2, rootProps, slotStyles, size, variant, unstyled, }) {
    const items = parseJsonProp(value, 'Gallery items');
    const recipe = usePostkitSlotRecipe(postkitRecipeKeys.gallery, postkitGalleryRecipe);
    const styles = unstyled
        ? {}
        : recipe({ size, variant });
    const { rootCss, rootClassName, restRootProps } = rootParts(rootProps);
    return (_jsxs(Box, { "data-postkit-component": "Gallery", ...restRootProps, className: postkitSlotClassName(recipe.classNameMap.root, rootClassName), css: [styles.root, slotStyles?.root, rootCss], children: [title || description ? (_jsxs(Box, { className: recipe.classNameMap.header, css: [styles.header, slotStyles?.header], children: [title ? (_jsx(Text, { className: recipe.classNameMap.title, css: [styles.title, slotStyles?.title], children: title })) : null, description ? (_jsx(Text, { className: recipe.classNameMap.description, css: [styles.description, slotStyles?.description], children: description })) : null] })) : null, _jsx(Box, { className: recipe.classNameMap.grid, css: [
                    styles.grid,
                    { '--postkit-gallery-columns': columns },
                    slotStyles?.grid,
                ], children: items.map((item, index) => {
                    const image = (_jsx(Image, { src: item.src, alt: item.alt, htmlWidth: item.width, htmlHeight: item.height, loading: "lazy", decoding: "async", className: recipe.classNameMap.image, css: [styles.image, slotStyles?.image] }));
                    return (_jsxs(Box, { as: "figure", className: recipe.classNameMap.item, css: [styles.item, slotStyles?.item], children: [item.href ? (_jsx(Link, { href: item.href, "aria-label": item.alt || item.caption || 'Open image', className: recipe.classNameMap.imageLink, css: [styles.imageLink, slotStyles?.imageLink], children: image })) : (image), item.caption ? (_jsx(Box, { as: "figcaption", className: recipe.classNameMap.caption, css: [styles.caption, slotStyles?.caption], children: item.caption })) : null] }, `${item.src}-${index}`));
                }) })] }));
}
export function PostkitDisclosure({ summary, children, open, rootProps, slotStyles, size, variant, unstyled, }) {
    const recipe = usePostkitSlotRecipe(postkitRecipeKeys.disclosure, postkitDisclosureRecipe);
    const styles = unstyled
        ? {}
        : recipe({ size, variant });
    const { css: rootCss, className: rootClassName, ...restRootProps } = (rootProps ?? {});
    return (_jsxs(DisclosureRoot, { open: open, "data-postkit-component": "Disclosure", ...restRootProps, className: postkitSlotClassName(recipe.classNameMap.root, rootClassName), css: [styles.root, slotStyles?.root, rootCss], children: [_jsxs(DisclosureSummary, { className: recipe.classNameMap.summary, css: [styles.summary, slotStyles?.summary], children: [summary, _jsx(Box, { as: "span", "aria-hidden": "true", className: recipe.classNameMap.indicator, css: [styles.indicator, slotStyles?.indicator], children: "+" })] }), _jsx(Box, { className: recipe.classNameMap.content, css: [styles.content, slotStyles?.content], children: children })] }));
}
export function PostkitTabs({ items: value, label = 'Tabbed content', initialIndex = 0, rootProps, slotStyles, size, variant, unstyled, }) {
    const items = parseJsonProp(value, 'Tabs items');
    const requested = typeof initialIndex === 'string' ? Number(initialIndex) : initialIndex;
    const [selected, setSelected] = useState(Math.max(0, Math.min(items.length - 1, Number.isFinite(requested) ? requested : 0)));
    const id = useId();
    const recipe = usePostkitSlotRecipe(postkitRecipeKeys.tabs, postkitTabsRecipe);
    const styles = unstyled
        ? {}
        : recipe({ size, variant });
    const { rootCss, rootClassName, restRootProps } = rootParts(rootProps);
    return (_jsxs(Box, { "data-postkit-component": "Tabs", ...restRootProps, className: postkitSlotClassName(recipe.classNameMap.root, rootClassName), css: [styles.root, slotStyles?.root, rootCss], children: [_jsx(Box, { role: "tablist", "aria-label": label, className: recipe.classNameMap.list, css: [styles.list, slotStyles?.list], children: items.map((item, index) => (_jsx(TabButton, { type: "button", role: "tab", id: `${id}-tab-${index}`, "aria-controls": `${id}-panel-${index}`, "aria-selected": selected === index, tabIndex: selected === index ? 0 : -1, onClick: () => setSelected(index), className: recipe.classNameMap.tab, css: [styles.tab, slotStyles?.tab], children: item.label }, item.id ?? item.label))) }), _jsx(Box, { className: recipe.classNameMap.panels, css: [styles.panels, slotStyles?.panels], children: items.map((item, index) => (_jsx(Box, { role: "tabpanel", id: `${id}-panel-${index}`, "aria-labelledby": `${id}-tab-${index}`, hidden: selected !== index, className: recipe.classNameMap.panel, css: [styles.panel, slotStyles?.panel], children: item.content }, item.id ?? item.label))) })] }));
}
export function PostkitSteps({ items: value, rootProps, slotStyles, size, variant, unstyled, }) {
    const items = parseJsonProp(value, 'Steps items');
    const recipe = usePostkitSlotRecipe(postkitRecipeKeys.steps, postkitStepsRecipe);
    const styles = unstyled
        ? {}
        : recipe({ size, variant });
    const { rootCss, rootClassName, restRootProps } = rootParts(rootProps);
    return (_jsx(Box, { as: "ol", "data-postkit-component": "Steps", ...restRootProps, className: postkitSlotClassName(recipe.classNameMap.root, rootClassName), css: [styles.root, slotStyles?.root, rootCss], children: items.map((item, index) => (_jsxs(Box, { as: "li", className: recipe.classNameMap.item, css: [styles.item, slotStyles?.item], children: [_jsx(Box, { "aria-hidden": "true", className: recipe.classNameMap.marker, css: [styles.marker, slotStyles?.marker], children: index + 1 }), _jsxs(Box, { className: recipe.classNameMap.content, css: [styles.content, slotStyles?.content], children: [_jsx(Text, { className: recipe.classNameMap.title, css: [styles.title, slotStyles?.title], children: item.title }), item.description ? (_jsx(Box, { className: recipe.classNameMap.description, css: [styles.description, slotStyles?.description], children: item.description })) : null] })] }, `${item.title}-${index}`))) }));
}
export function PostkitCardGrid({ items: value, title, description, columns = 2, rootProps, slotStyles, size, variant, unstyled, }) {
    const items = parseJsonProp(value, 'CardGrid items');
    const recipe = usePostkitSlotRecipe(postkitRecipeKeys.cardGrid, postkitCardGridRecipe);
    const styles = unstyled
        ? {}
        : recipe({ size, variant });
    const { rootCss, rootClassName, restRootProps } = rootParts(rootProps);
    return (_jsxs(Box, { "data-postkit-component": "CardGrid", ...restRootProps, className: postkitSlotClassName(recipe.classNameMap.root, rootClassName), css: [styles.root, slotStyles?.root, rootCss], children: [title || description ? (_jsxs(Box, { className: recipe.classNameMap.header, css: [styles.header, slotStyles?.header], children: [title ? (_jsx(Text, { className: recipe.classNameMap.title, css: [styles.title, slotStyles?.title], children: title })) : null, description ? (_jsx(Text, { className: recipe.classNameMap.description, css: [styles.description, slotStyles?.description], children: description })) : null] })) : null, _jsx(Box, { className: recipe.classNameMap.grid, css: [
                    styles.grid,
                    { '--postkit-card-columns': columns },
                    slotStyles?.grid,
                ], children: items.map((item, index) => (_jsxs(Box, { as: "article", className: recipe.classNameMap.card, css: [styles.card, slotStyles?.card], children: [item.image ? (_jsx(Image, { src: item.image.src, alt: item.image.alt, loading: "lazy", className: recipe.classNameMap.image, css: [styles.image, slotStyles?.image] })) : null, _jsxs(Box, { className: recipe.classNameMap.cardBody, css: [styles.cardBody, slotStyles?.cardBody], children: [_jsx(Text, { className: recipe.classNameMap.cardTitle, css: [styles.cardTitle, slotStyles?.cardTitle], children: item.title }), item.description ? (_jsx(Text, { className: recipe.classNameMap.cardDescription, css: [styles.cardDescription, slotStyles?.cardDescription], children: item.description })) : null, item.meta ? (_jsx(Text, { className: recipe.classNameMap.meta, css: [styles.meta, slotStyles?.meta], children: item.meta })) : null, item.href ? (_jsxs(Link, { href: item.href, className: recipe.classNameMap.link, css: [styles.link, slotStyles?.link], children: [item.linkLabel ?? 'Learn more', _jsxs(Box, { as: "span", "aria-hidden": "true", children: [' ', "\u2192"] })] })) : null] })] }, `${item.title}-${index}`))) })] }));
}
