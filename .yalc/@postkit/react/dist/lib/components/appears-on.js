'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Box, chakra, Link, Text, } from '@chakra-ui/react';
import { parseJsonProp } from '../json-props.js';
import { postkitAppearsOnRecipe, } from '../recipes/appears-on.recipe.js';
import { postkitSlotClassName, usePostkitSlotRecipe, } from '../recipes/types.js';
import { usePostkit } from '../provider.js';
import { postkitRecipeKeys } from '../theme.js';
const AppearsOnTime = chakra('time');
function enabled(value, fallback) {
    if (value === undefined)
        return fallback;
    return typeof value === 'boolean' ? value : value === 'true';
}
function displayDate(value) {
    if (!value)
        return undefined;
    const date = new Date(value);
    return Number.isNaN(date.valueOf())
        ? value
        : new Intl.DateTimeFormat(undefined, {
            dateStyle: 'medium',
        }).format(date);
}
export function PostkitAppearsOn({ items: itemsValue, label = 'Appears on', showDates = false, rootProps, slotStyles, presentation, size, variant, unstyled, }) {
    const items = parseJsonProp(itemsValue, 'AppearsOn items');
    const { socialServices } = usePostkit();
    const recipe = usePostkitSlotRecipe(postkitRecipeKeys.appearsOn, postkitAppearsOnRecipe);
    const styles = unstyled
        ? {}
        : recipe({ presentation, size, variant });
    const { css: rootCss, className: rootClassName, ...restRootProps } = rootProps ?? {};
    const datesVisible = enabled(showDates, false);
    return (_jsxs(Box, { as: "aside", "data-postkit-component": "AppearsOn", ...restRootProps, className: postkitSlotClassName(recipe.classNameMap.root, rootClassName), css: [styles.root, slotStyles?.root, rootCss], children: [_jsx(Text, { className: recipe.classNameMap.label, css: [styles.label, slotStyles?.label], children: label }), _jsx(Box, { as: "ul", "aria-label": label, className: recipe.classNameMap.list, css: [styles.list, slotStyles?.list], children: items.map((item, index) => {
                    const service = socialServices[item.service];
                    const itemLabel = item.label ?? service?.label ?? item.service;
                    const date = datesVisible ? displayDate(item.publishedAt) : undefined;
                    return (_jsxs(Box, { as: "li", "data-postkit-service": item.service, className: recipe.classNameMap.item, css: [styles.item, slotStyles?.item], children: [_jsxs(Link, { href: item.url, rel: "syndication", className: recipe.classNameMap.link, css: [
                                    styles.link,
                                    service?.accent ? { color: service.accent } : undefined,
                                    slotStyles?.link,
                                ], children: [_jsx(Box, { as: "span", "aria-hidden": service?.icon ? undefined : true, className: recipe.classNameMap.icon, css: [styles.icon, slotStyles?.icon], children: service?.icon ?? itemLabel.slice(0, 1).toUpperCase() }), _jsx("span", { children: itemLabel })] }), date ? (_jsx(AppearsOnTime, { dateTime: item.publishedAt, className: recipe.classNameMap.date, css: [styles.date, slotStyles?.date], children: date })) : null, item.status && item.status !== 'published' ? (_jsx(Text, { as: "span", className: recipe.classNameMap.status, css: [styles.status, slotStyles?.status], children: item.status })) : null] }, `${item.service}-${item.url}-${index}`));
                }) })] }));
}
