'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Box, Link, Text, chakra, } from '@chakra-ui/react';
import { useId, useState } from 'react';
import { parseJsonProp } from '../json-props.js';
import { postkitCodeBlockRecipe, postkitCodeGroupRecipe, postkitDiffRecipe, postkitFileCardRecipe, postkitFileTreeRecipe, postkitTerminalRecipe, } from '../recipes/technical-content.recipe.js';
import { postkitSlotClassName, usePostkitSlotRecipe, } from '../recipes/types.js';
import { postkitRecipeKeys } from '../theme.js';
const ActionButton = chakra('button');
function enabled(value, fallback = false) {
    return value === undefined
        ? fallback
        : typeof value === 'boolean'
            ? value
            : value === 'true';
}
function rootParts(rootProps) {
    const { css, className, ...rest } = rootProps ?? {};
    return { rootCss: css, rootClassName: className, restRootProps: rest };
}
function highlightedLines(value) {
    const lines = new Set();
    for (const part of value?.split(',') ?? []) {
        const [startValue, endValue] = part.trim().split('-');
        const start = Number(startValue);
        const end = Number(endValue ?? startValue);
        if (!Number.isInteger(start) || !Number.isInteger(end))
            continue;
        for (let line = Math.max(1, start); line <= Math.min(end, start + 500); line += 1) {
            lines.add(line);
        }
    }
    return lines;
}
export function PostkitCodeBlock({ code, children, language, filename, highlightLines: highlightsValue, lineNumbers = true, copy = true, wrap, maxHeight, rootProps, slotStyles, size, variant, unstyled, }) {
    const source = code ?? (typeof children === 'string' ? children : '');
    const lines = source.replace(/\n$/, '').split('\n');
    const highlights = highlightedLines(highlightsValue);
    const [copied, setCopied] = useState(false);
    const recipe = usePostkitSlotRecipe(postkitRecipeKeys.codeBlock, postkitCodeBlockRecipe);
    const styles = unstyled
        ? {}
        : recipe({ size, variant });
    const { rootCss, rootClassName, restRootProps } = rootParts(rootProps);
    const shouldNumber = enabled(lineNumbers, true);
    const shouldWrap = enabled(wrap);
    const copyCode = async () => {
        if (typeof navigator !== 'undefined' && navigator.clipboard) {
            await navigator.clipboard.writeText(source);
            setCopied(true);
            globalThis.setTimeout(() => setCopied(false), 1600);
        }
    };
    return (_jsxs(Box, { "data-postkit-component": "CodeBlock", ...restRootProps, className: postkitSlotClassName(recipe.classNameMap.root, rootClassName), css: [styles.root, slotStyles?.root, rootCss], children: [filename || language || enabled(copy, true) ? (_jsxs(Box, { className: recipe.classNameMap.header, css: [styles.header, slotStyles?.header], children: [filename ? (_jsx(Text, { className: recipe.classNameMap.filename, css: [styles.filename, slotStyles?.filename], children: filename })) : (_jsx("span", {})), language ? (_jsx(Text, { className: recipe.classNameMap.language, css: [styles.language, slotStyles?.language], children: language })) : null, _jsx(Box, { className: recipe.classNameMap.actions, css: [styles.actions, slotStyles?.actions], children: enabled(copy, true) ? (_jsx(ActionButton, { type: "button", "aria-label": "Copy code", onClick: () => void copyCode(), className: recipe.classNameMap.button, css: [styles.button, slotStyles?.button], children: copied ? 'Copied' : 'Copy' })) : null })] })) : null, _jsx(Box, { className: recipe.classNameMap.scroller, css: [
                    styles.scroller,
                    maxHeight ? { maxHeight } : undefined,
                    slotStyles?.scroller,
                ], children: _jsx(Box, { as: "pre", className: recipe.classNameMap.code, css: [
                        styles.code,
                        shouldWrap ? { minWidth: 0 } : undefined,
                        slotStyles?.code,
                    ], children: _jsx(Box, { as: "code", children: lines.map((line, index) => (_jsxs(Box, { as: "span", "data-highlighted": highlights.has(index + 1) || undefined, className: recipe.classNameMap.line, css: [
                                styles.line,
                                highlights.has(index + 1)
                                    ? { background: 'whiteAlpha.100' }
                                    : undefined,
                                shouldNumber ? undefined : { gridTemplateColumns: '1fr' },
                                slotStyles?.line,
                            ], children: [shouldNumber ? (_jsx(Box, { as: "span", "aria-hidden": "true", className: recipe.classNameMap.lineNumber, css: [styles.lineNumber, slotStyles?.lineNumber], children: index + 1 })) : null, _jsx(Box, { as: "span", className: recipe.classNameMap.lineContent, css: [
                                        styles.lineContent,
                                        shouldWrap
                                            ? { overflowWrap: 'anywhere', whiteSpace: 'pre-wrap' }
                                            : undefined,
                                        slotStyles?.lineContent,
                                    ], children: line || ' ' })] }, index))) }) }) })] }));
}
export function PostkitCodeGroup({ items: value, label = 'Code examples', initialIndex = 0, rootProps, slotStyles, size, variant, unstyled, }) {
    const items = parseJsonProp(value, 'CodeGroup items');
    const requested = Number(initialIndex);
    const [selected, setSelected] = useState(Number.isFinite(requested)
        ? Math.max(0, Math.min(items.length - 1, requested))
        : 0);
    const id = useId();
    const recipe = usePostkitSlotRecipe(postkitRecipeKeys.codeGroup, postkitCodeGroupRecipe);
    const styles = unstyled
        ? {}
        : recipe({ size, variant });
    const { rootCss, rootClassName, restRootProps } = rootParts(rootProps);
    return (_jsxs(Box, { "data-postkit-component": "CodeGroup", ...restRootProps, className: postkitSlotClassName(recipe.classNameMap.root, rootClassName), css: [styles.root, slotStyles?.root, rootCss], children: [_jsx(Box, { role: "tablist", "aria-label": label, className: recipe.classNameMap.tabs, css: [styles.tabs, slotStyles?.tabs], children: items.map((item, index) => (_jsx(ActionButton, { role: "tab", type: "button", id: `${id}-tab-${index}`, "aria-controls": `${id}-panel-${index}`, "aria-selected": selected === index, onClick: () => setSelected(index), className: recipe.classNameMap.tab, css: [styles.tab, slotStyles?.tab], children: item.label }, `${item.label}-${index}`))) }), items.map((item, index) => (_jsx(Box, { role: "tabpanel", id: `${id}-panel-${index}`, "aria-labelledby": `${id}-tab-${index}`, hidden: selected !== index, className: recipe.classNameMap.panel, css: [styles.panel, slotStyles?.panel], children: _jsx(PostkitCodeBlock, { code: item.code, language: item.language, filename: item.filename, variant: "plain", size: size }) }, `${item.label}-${index}`)))] }));
}
export function PostkitTerminal({ command, output, prompt = '$', title = 'Terminal', rootProps, slotStyles, size, variant, unstyled, }) {
    const recipe = usePostkitSlotRecipe(postkitRecipeKeys.terminal, postkitTerminalRecipe);
    const styles = unstyled
        ? {}
        : recipe({ size, variant });
    const { rootCss, rootClassName, restRootProps } = rootParts(rootProps);
    return (_jsxs(Box, { "data-postkit-component": "Terminal", ...restRootProps, className: postkitSlotClassName(recipe.classNameMap.root, rootClassName), css: [styles.root, slotStyles?.root, rootCss], children: [_jsxs(Box, { className: recipe.classNameMap.header, css: [styles.header, slotStyles?.header], children: [_jsx(Box, { "aria-hidden": "true", className: recipe.classNameMap.dots, css: [styles.dots, slotStyles?.dots], children: "\u25CF \u25CF \u25CF" }), _jsx(Text, { className: recipe.classNameMap.title, css: [styles.title, slotStyles?.title], children: title }), _jsx("span", {})] }), _jsxs(Box, { className: recipe.classNameMap.body, css: [styles.body, slotStyles?.body], children: [_jsx(Box, { as: "span", "aria-hidden": "true", className: recipe.classNameMap.prompt, css: [styles.prompt, slotStyles?.prompt], children: prompt }), _jsx(Box, { as: "code", className: recipe.classNameMap.command, css: [styles.command, slotStyles?.command], children: command }), output ? (_jsx(Box, { as: "samp", className: recipe.classNameMap.output, css: [styles.output, slotStyles?.output], children: output })) : null] })] }));
}
export function PostkitDiff({ diff, title, rootProps, slotStyles, size, variant, unstyled, }) {
    const recipe = usePostkitSlotRecipe(postkitRecipeKeys.diff, postkitDiffRecipe);
    const styles = unstyled
        ? {}
        : recipe({ size, variant });
    const { rootCss, rootClassName, restRootProps } = rootParts(rootProps);
    return (_jsxs(Box, { "data-postkit-component": "Diff", ...restRootProps, className: postkitSlotClassName(recipe.classNameMap.root, rootClassName), css: [styles.root, slotStyles?.root, rootCss], children: [title ? (_jsx(Box, { className: recipe.classNameMap.header, css: [styles.header, slotStyles?.header], children: _jsx(Text, { className: recipe.classNameMap.title, css: [styles.title, slotStyles?.title], children: title }) })) : null, _jsx(Box, { as: "pre", className: recipe.classNameMap.code, css: [styles.code, slotStyles?.code], children: _jsx(Box, { as: "code", children: diff
                        .replace(/\n$/, '')
                        .split('\n')
                        .map((line, index) => {
                        const marker = line.startsWith('+')
                            ? '+'
                            : line.startsWith('-')
                                ? '−'
                                : ' ';
                        const tone = marker === '+'
                            ? { background: 'green.subtle' }
                            : marker === '−'
                                ? { background: 'red.subtle' }
                                : undefined;
                        return (_jsxs(Box, { as: "span", "data-diff": marker === '+'
                                ? 'addition'
                                : marker === '−'
                                    ? 'deletion'
                                    : 'context', className: recipe.classNameMap.line, css: [styles.line, tone, slotStyles?.line], children: [_jsx(Box, { as: "span", "aria-hidden": "true", className: recipe.classNameMap.marker, css: [styles.marker, slotStyles?.marker], children: marker }), _jsx(Box, { as: "span", className: recipe.classNameMap.content, css: [styles.content, slotStyles?.content], children: line.slice(marker === ' ' ? 0 : 1) || ' ' })] }, index));
                    }) }) })] }));
}
export function PostkitFileTree({ items: value, title, rootProps, slotStyles, size, variant, unstyled, }) {
    const items = parseJsonProp(value, 'FileTree items');
    const recipe = usePostkitSlotRecipe(postkitRecipeKeys.fileTree, postkitFileTreeRecipe);
    const styles = unstyled
        ? {}
        : recipe({ size, variant });
    const { rootCss, rootClassName, restRootProps } = rootParts(rootProps);
    return (_jsxs(Box, { "data-postkit-component": "FileTree", ...restRootProps, className: postkitSlotClassName(recipe.classNameMap.root, rootClassName), css: [styles.root, slotStyles?.root, rootCss], children: [title ? (_jsx(Text, { className: recipe.classNameMap.title, css: [styles.title, slotStyles?.title], children: title })) : null, _jsx(Box, { as: "ul", className: recipe.classNameMap.list, css: [styles.list, slotStyles?.list], children: items.map((item, index) => (_jsxs(Box, { as: "li", className: recipe.classNameMap.item, css: [
                        styles.item,
                        {
                            paddingInlineStart: `${Math.max(0, item.path.split('/').length - 1) * 1.25}em`,
                        },
                        slotStyles?.item,
                    ], children: [_jsx(Box, { as: "span", "aria-hidden": "true", className: recipe.classNameMap.icon, css: [styles.icon, slotStyles?.icon], children: item.type === 'folder' ? '▸' : '·' }), _jsx(Box, { as: "span", className: recipe.classNameMap.path, css: [styles.path, slotStyles?.path], children: item.path.split('/').at(-1) }), item.meta ? (_jsx(Box, { as: "span", className: recipe.classNameMap.meta, css: [styles.meta, slotStyles?.meta], children: item.meta })) : null] }, `${item.path}-${index}`))) })] }));
}
export function PostkitFileCard({ href, name, description, fileType, fileSize, download = true, actionLabel, rootProps, slotStyles, size, variant, unstyled, }) {
    const recipe = usePostkitSlotRecipe(postkitRecipeKeys.fileCard, postkitFileCardRecipe);
    const styles = unstyled
        ? {}
        : recipe({ size, variant });
    const { rootCss, rootClassName, restRootProps } = rootParts(rootProps);
    const extension = fileType ?? name.split('.').at(-1)?.toUpperCase() ?? 'FILE';
    return (_jsxs(Box, { "data-postkit-component": "FileCard", ...restRootProps, className: postkitSlotClassName(recipe.classNameMap.root, rootClassName), css: [styles.root, slotStyles?.root, rootCss], children: [_jsx(Box, { "aria-hidden": "true", className: recipe.classNameMap.icon, css: [styles.icon, slotStyles?.icon], children: extension.slice(0, 4) }), _jsxs(Box, { className: recipe.classNameMap.content, css: [styles.content, slotStyles?.content], children: [_jsx(Text, { className: recipe.classNameMap.name, css: [styles.name, slotStyles?.name], children: name }), description ? (_jsx(Text, { className: recipe.classNameMap.description, css: [styles.description, slotStyles?.description], children: description })) : null, fileType || fileSize ? (_jsx(Text, { className: recipe.classNameMap.meta, css: [styles.meta, slotStyles?.meta], children: [fileType, fileSize].filter(Boolean).join(' · ') })) : null] }), _jsx(Link, { href: href, download: enabled(download) ? '' : undefined, className: recipe.classNameMap.action, css: [styles.action, slotStyles?.action], children: actionLabel ?? (enabled(download) ? 'Download' : 'Open') })] }));
}
