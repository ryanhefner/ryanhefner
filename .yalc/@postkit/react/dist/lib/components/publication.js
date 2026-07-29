'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Box, Image, Link, Text, chakra, } from '@chakra-ui/react';
import { useState } from 'react';
import { parseJsonProp } from '../json-props.js';
import { postkitAudienceBoundaryRecipe, postkitComparisonRecipe, postkitKeyTakeawayRecipe, postkitPollRecipe, postkitProductCardRecipe, postkitPullQuoteRecipe, postkitRelatedContentRecipe, postkitSeriesNavigationRecipe, postkitSponsorBlockRecipe, postkitStatRecipe, } from '../recipes/publication.recipe.js';
import { postkitSlotClassName, usePostkitSlotRecipe, } from '../recipes/types.js';
import { postkitRecipeKeys } from '../theme.js';
const OptionButton = chakra('button');
const TableHeader = chakra('th');
function rootParts(rootProps) {
    const { css, className, ...rest } = rootProps ?? {};
    return { rootCss: css, rootClassName: className, restRootProps: rest };
}
export function PostkitPullQuote({ quote, attribution, cite, rootProps, slotStyles, size, variant, unstyled, }) {
    const recipe = usePostkitSlotRecipe(postkitRecipeKeys.pullQuote, postkitPullQuoteRecipe);
    const styles = unstyled
        ? {}
        : recipe({ size, variant });
    const { rootCss, rootClassName, restRootProps } = rootParts(rootProps);
    return (_jsxs(Box, { as: "figure", "data-postkit-component": "PullQuote", ...restRootProps, className: postkitSlotClassName(recipe.classNameMap.root, rootClassName), css: [styles.root, slotStyles?.root, rootCss], children: [_jsx(Box, { "aria-hidden": "true", className: recipe.classNameMap.mark, css: [styles.mark, slotStyles?.mark], children: "\u201C" }), _jsx(Box, { as: "blockquote", className: recipe.classNameMap.quote, css: [styles.quote, slotStyles?.quote], children: quote }), attribution || cite ? (_jsxs(Box, { as: "figcaption", className: recipe.classNameMap.attribution, css: [styles.attribution, slotStyles?.attribution], children: [attribution, cite ? (_jsx(Box, { as: "cite", className: recipe.classNameMap.cite, css: [styles.cite, slotStyles?.cite], children: attribution ? ` — ${cite}` : cite })) : null] })) : null] }));
}
export function PostkitKeyTakeaway({ title = 'Key takeaway', eyebrow, items: value = [], children, rootProps, slotStyles, size, variant, unstyled, }) {
    const items = parseJsonProp(value, 'KeyTakeaway items');
    const recipe = usePostkitSlotRecipe(postkitRecipeKeys.keyTakeaway, postkitKeyTakeawayRecipe);
    const styles = unstyled
        ? {}
        : recipe({ size, variant });
    const { rootCss, rootClassName, restRootProps } = rootParts(rootProps);
    return (_jsxs(Box, { as: "aside", "data-postkit-component": "KeyTakeaway", ...restRootProps, className: postkitSlotClassName(recipe.classNameMap.root, rootClassName), css: [styles.root, slotStyles?.root, rootCss], children: [eyebrow ? (_jsx(Text, { className: recipe.classNameMap.eyebrow, css: [styles.eyebrow, slotStyles?.eyebrow], children: eyebrow })) : null, _jsx(Text, { className: recipe.classNameMap.title, css: [styles.title, slotStyles?.title], children: title }), children ? (_jsx(Box, { className: recipe.classNameMap.body, css: [styles.body, slotStyles?.body], children: children })) : null, items.length ? (_jsx(Box, { as: "ul", className: recipe.classNameMap.list, css: [styles.list, slotStyles?.list], children: items.map((item, index) => (_jsx(Box, { as: "li", className: recipe.classNameMap.item, css: [styles.item, slotStyles?.item], children: item }, `${item}-${index}`))) })) : null] }));
}
export function PostkitStat({ value, label, trend, description, rootProps, slotStyles, size, variant, unstyled, }) {
    const recipe = usePostkitSlotRecipe(postkitRecipeKeys.stat, postkitStatRecipe);
    const styles = unstyled
        ? {}
        : recipe({ size, variant });
    const { rootCss, rootClassName, restRootProps } = rootParts(rootProps);
    return (_jsxs(Box, { "data-postkit-component": "Stat", ...restRootProps, className: postkitSlotClassName(recipe.classNameMap.root, rootClassName), css: [styles.root, slotStyles?.root, rootCss], children: [_jsx(Text, { className: recipe.classNameMap.value, css: [styles.value, slotStyles?.value], children: value }), _jsx(Text, { className: recipe.classNameMap.label, css: [styles.label, slotStyles?.label], children: label }), trend ? (_jsx(Text, { className: recipe.classNameMap.trend, css: [styles.trend, slotStyles?.trend], children: trend })) : null, description ? (_jsx(Text, { className: recipe.classNameMap.description, css: [styles.description, slotStyles?.description], children: description })) : null] }));
}
export function PostkitComparison({ columns: columnsValue, items: itemsValue, title, description, rootProps, slotStyles, size, variant, unstyled, }) {
    const columns = parseJsonProp(columnsValue, 'Comparison columns');
    const items = parseJsonProp(itemsValue, 'Comparison items');
    const recipe = usePostkitSlotRecipe(postkitRecipeKeys.comparison, postkitComparisonRecipe);
    const styles = unstyled
        ? {}
        : recipe({ size, variant });
    const { rootCss, rootClassName, restRootProps } = rootParts(rootProps);
    const displayValue = (value) => value === true ? 'Yes' : value === false ? 'No' : (value ?? '—');
    return (_jsxs(Box, { "data-postkit-component": "Comparison", ...restRootProps, className: postkitSlotClassName(recipe.classNameMap.root, rootClassName), css: [styles.root, slotStyles?.root, rootCss], children: [title ? (_jsx(Text, { className: recipe.classNameMap.title, css: [styles.title, slotStyles?.title], children: title })) : null, description ? (_jsx(Text, { className: recipe.classNameMap.description, css: [styles.description, slotStyles?.description], children: description })) : null, _jsx(Box, { className: recipe.classNameMap.scroller, css: [styles.scroller, slotStyles?.scroller], children: _jsxs(Box, { as: "table", className: recipe.classNameMap.table, css: [styles.table, slotStyles?.table], children: [_jsx(Box, { as: "thead", className: recipe.classNameMap.head, css: [styles.head, slotStyles?.head], children: _jsxs(Box, { as: "tr", children: [_jsx(Box, { as: "th", className: recipe.classNameMap.header, css: [styles.header, slotStyles?.header], children: "Feature" }), columns.map((column) => (_jsx(Box, { as: "th", className: recipe.classNameMap.header, css: [styles.header, slotStyles?.header], children: column }, column)))] }) }), _jsx(Box, { as: "tbody", children: items.map((item) => (_jsxs(Box, { as: "tr", className: recipe.classNameMap.row, css: [styles.row, slotStyles?.row], children: [_jsx(TableHeader, { scope: "row", className: recipe.classNameMap.label, css: [styles.label, slotStyles?.label], children: item.label }), columns.map((_, index) => (_jsx(Box, { as: "td", className: recipe.classNameMap.value, css: [styles.value, slotStyles?.value], children: displayValue(item.values[index]) }, index)))] }, item.label))) })] }) })] }));
}
export function PostkitPoll({ question, description, options: value, totalVotes, selectedId, onVote, rootProps, slotStyles, size, variant, unstyled, }) {
    const options = parseJsonProp(value, 'Poll options');
    const [selection, setSelection] = useState(selectedId);
    const total = Number(totalVotes) ||
        options.reduce((sum, option) => sum + (option.votes ?? 0), 0);
    const recipe = usePostkitSlotRecipe(postkitRecipeKeys.poll, postkitPollRecipe);
    const styles = unstyled
        ? {}
        : recipe({ size, variant });
    const { rootCss, rootClassName, restRootProps } = rootParts(rootProps);
    const vote = (option) => {
        setSelection(option.id);
        void onVote?.(option);
    };
    return (_jsxs(Box, { "data-postkit-component": "Poll", ...restRootProps, className: postkitSlotClassName(recipe.classNameMap.root, rootClassName), css: [styles.root, slotStyles?.root, rootCss], children: [_jsx(Text, { className: recipe.classNameMap.question, css: [styles.question, slotStyles?.question], children: question }), description ? (_jsx(Text, { className: recipe.classNameMap.description, css: [styles.description, slotStyles?.description], children: description })) : null, _jsx(Box, { role: "group", "aria-label": question, className: recipe.classNameMap.options, css: [styles.options, slotStyles?.options], children: options.map((option) => {
                    const percentage = total > 0 ? Math.round(((option.votes ?? 0) / total) * 100) : 0;
                    return (_jsxs(OptionButton, { type: "button", "aria-pressed": selection === option.id, onClick: () => vote(option), className: recipe.classNameMap.option, css: [styles.option, slotStyles?.option], children: [_jsxs(Box, { className: recipe.classNameMap.optionLabel, css: [styles.optionLabel, slotStyles?.optionLabel], children: [_jsx("span", { children: option.label }), total ? (_jsxs(Box, { as: "span", className: recipe.classNameMap.result, css: [styles.result, slotStyles?.result], children: [percentage, "%"] })) : null] }), total ? (_jsx(Box, { "aria-hidden": "true", className: recipe.classNameMap.bar, css: [
                                    styles.bar,
                                    { width: `${percentage}%` },
                                    slotStyles?.bar,
                                ] })) : null] }, option.id));
                }) }), _jsx(Text, { "aria-live": "polite", className: recipe.classNameMap.status, css: [styles.status, slotStyles?.status], children: selection
                    ? 'Vote selected'
                    : total
                        ? `${total} votes`
                        : 'Select an option' })] }));
}
export function PostkitProductCard({ title, description, href, actionLabel = 'View product', imageSrc, imageAlt = '', price, rating, badge, rel = 'sponsored', rootProps, slotStyles, size, variant, unstyled, }) {
    const recipe = usePostkitSlotRecipe(postkitRecipeKeys.productCard, postkitProductCardRecipe);
    const styles = unstyled
        ? {}
        : recipe({ size, variant });
    const { rootCss, rootClassName, restRootProps } = rootParts(rootProps);
    return (_jsxs(Box, { as: "article", "data-postkit-component": "ProductCard", ...restRootProps, className: postkitSlotClassName(recipe.classNameMap.root, rootClassName), css: [styles.root, slotStyles?.root, rootCss], children: [imageSrc ? (_jsx(Image, { src: imageSrc, alt: imageAlt, loading: "lazy", className: recipe.classNameMap.image, css: [styles.image, slotStyles?.image] })) : null, _jsxs(Box, { className: recipe.classNameMap.content, css: [styles.content, slotStyles?.content], children: [badge ? (_jsx(Text, { className: recipe.classNameMap.badge, css: [styles.badge, slotStyles?.badge], children: badge })) : null, _jsx(Text, { className: recipe.classNameMap.title, css: [styles.title, slotStyles?.title], children: title }), description ? (_jsx(Text, { className: recipe.classNameMap.description, css: [styles.description, slotStyles?.description], children: description })) : null, rating ? (_jsxs(Text, { "aria-label": `${rating} out of 5 stars`, className: recipe.classNameMap.rating, css: [styles.rating, slotStyles?.rating], children: ["\u2605 ", rating] })) : null, _jsxs(Box, { className: recipe.classNameMap.footer, css: [styles.footer, slotStyles?.footer], children: [price ? (_jsx(Text, { className: recipe.classNameMap.price, css: [styles.price, slotStyles?.price], children: price })) : (_jsx("span", {})), _jsx(Link, { href: href, rel: rel, className: recipe.classNameMap.action, css: [styles.action, slotStyles?.action], children: actionLabel })] })] })] }));
}
export function PostkitRelatedContent({ items: value, title = 'Related content', rootProps, slotStyles, size, variant, unstyled, }) {
    const items = parseJsonProp(value, 'RelatedContent items');
    const recipe = usePostkitSlotRecipe(postkitRecipeKeys.relatedContent, postkitRelatedContentRecipe);
    const styles = unstyled
        ? {}
        : recipe({ size, variant });
    const { rootCss, rootClassName, restRootProps } = rootParts(rootProps);
    return (_jsxs(Box, { as: "aside", "data-postkit-component": "RelatedContent", ...restRootProps, className: postkitSlotClassName(recipe.classNameMap.root, rootClassName), css: [styles.root, slotStyles?.root, rootCss], children: [_jsx(Text, { className: recipe.classNameMap.title, css: [styles.title, slotStyles?.title], children: title }), _jsx(Box, { as: "ul", className: recipe.classNameMap.list, css: [styles.list, slotStyles?.list], children: items.map((item) => (_jsx(Box, { as: "li", className: recipe.classNameMap.item, css: [styles.item, slotStyles?.item], children: _jsxs(Link, { href: item.href, className: recipe.classNameMap.link, css: [styles.link, slotStyles?.link], children: [_jsx(Text, { className: recipe.classNameMap.itemTitle, css: [styles.itemTitle, slotStyles?.itemTitle], children: item.title }), item.description ? (_jsx(Text, { className: recipe.classNameMap.description, css: [styles.description, slotStyles?.description], children: item.description })) : null, item.meta ? (_jsx(Text, { className: recipe.classNameMap.meta, css: [styles.meta, slotStyles?.meta], children: item.meta })) : null] }) }, item.href))) })] }));
}
function parseSeriesLink(value) {
    if (value === undefined)
        return undefined;
    if (typeof value !== 'string')
        return value;
    if (!value)
        return undefined;
    try {
        return JSON.parse(value);
    }
    catch {
        throw new TypeError('Postkit SeriesNavigation links must contain valid JSON.');
    }
}
export function PostkitSeriesNavigation({ title, current, total, previous: previousValue, next: nextValue, rootProps, slotStyles, size, variant, unstyled, }) {
    const previous = parseSeriesLink(previousValue);
    const next = parseSeriesLink(nextValue);
    const recipe = usePostkitSlotRecipe(postkitRecipeKeys.seriesNavigation, postkitSeriesNavigationRecipe);
    const styles = unstyled
        ? {}
        : recipe({ size, variant });
    const { rootCss, rootClassName, restRootProps } = rootParts(rootProps);
    const renderLink = (link, direction) => link ? (_jsxs(Link, { href: link.href, rel: direction === 'Previous' ? 'prev' : 'next', className: recipe.classNameMap.link, css: [styles.link, slotStyles?.link], children: [_jsx(Text, { className: recipe.classNameMap.direction, css: [styles.direction, slotStyles?.direction], children: direction }), _jsx(Text, { className: recipe.classNameMap.linkTitle, css: [styles.linkTitle, slotStyles?.linkTitle], children: link.title })] })) : (_jsx("span", {}));
    return (_jsxs(Box, { as: "nav", "aria-label": `${title} series navigation`, "data-postkit-component": "SeriesNavigation", ...restRootProps, className: postkitSlotClassName(recipe.classNameMap.root, rootClassName), css: [styles.root, slotStyles?.root, rootCss], children: [_jsxs(Box, { className: recipe.classNameMap.header, css: [styles.header, slotStyles?.header], children: [_jsx(Text, { className: recipe.classNameMap.title, css: [styles.title, slotStyles?.title], children: title }), current && total ? (_jsxs(Text, { className: recipe.classNameMap.position, css: [styles.position, slotStyles?.position], children: [current, " of ", total] })) : null] }), _jsxs(Box, { className: recipe.classNameMap.links, css: [styles.links, slotStyles?.links], children: [renderLink(previous, 'Previous'), renderLink(next, 'Next')] })] }));
}
export function PostkitSponsorBlock({ name, message, href, actionLabel = 'Learn more', logoSrc, logoAlt = '', disclosure = 'Sponsored', rootProps, slotStyles, size, variant, unstyled, }) {
    const recipe = usePostkitSlotRecipe(postkitRecipeKeys.sponsorBlock, postkitSponsorBlockRecipe);
    const styles = unstyled
        ? {}
        : recipe({ size, variant });
    const { rootCss, rootClassName, restRootProps } = rootParts(rootProps);
    return (_jsxs(Box, { as: "aside", "aria-label": `${disclosure} by ${name}`, "data-postkit-component": "SponsorBlock", ...restRootProps, className: postkitSlotClassName(recipe.classNameMap.root, rootClassName), css: [styles.root, slotStyles?.root, rootCss], children: [_jsx(Text, { className: recipe.classNameMap.disclosure, css: [styles.disclosure, slotStyles?.disclosure], children: disclosure }), logoSrc ? (_jsx(Image, { src: logoSrc, alt: logoAlt || name, className: recipe.classNameMap.logo, css: [styles.logo, slotStyles?.logo] })) : null, _jsxs(Box, { className: recipe.classNameMap.content, css: [styles.content, slotStyles?.content], children: [_jsx(Text, { className: recipe.classNameMap.name, css: [styles.name, slotStyles?.name], children: name }), message ? (_jsx(Text, { className: recipe.classNameMap.message, css: [styles.message, slotStyles?.message], children: message })) : null, href ? (_jsx(Link, { href: href, rel: "sponsored", className: recipe.classNameMap.action, css: [styles.action, slotStyles?.action], children: actionLabel })) : null] })] }));
}
export function PostkitAudienceBoundary({ audience, children, fallback = 'This section is available to a different audience.', authorized = true, showLabel, rootProps, slotStyles, size, variant, unstyled, }) {
    const recipe = usePostkitSlotRecipe(postkitRecipeKeys.audienceBoundary, postkitAudienceBoundaryRecipe);
    const styles = unstyled
        ? {}
        : recipe({ size, variant });
    const { rootCss, rootClassName, restRootProps } = rootParts(rootProps);
    const labeled = showLabel === true || showLabel === 'true';
    return (_jsxs(Box, { "data-postkit-component": "AudienceBoundary", "data-postkit-audience": audience, ...restRootProps, className: postkitSlotClassName(recipe.classNameMap.root, rootClassName), css: [styles.root, slotStyles?.root, rootCss], children: [labeled ? (_jsxs(Text, { className: recipe.classNameMap.label, css: [styles.label, slotStyles?.label], children: ["Audience: ", audience] })) : null, authorized ? (_jsx(Box, { className: recipe.classNameMap.content, css: [styles.content, slotStyles?.content], children: children })) : (_jsx(Box, { className: recipe.classNameMap.fallback, css: [styles.fallback, slotStyles?.fallback], children: fallback }))] }));
}
