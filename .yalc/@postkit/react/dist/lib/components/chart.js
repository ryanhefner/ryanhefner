'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Box, Flex, Text, chakra, } from '@chakra-ui/react';
import { useId } from 'react';
import { parseJsonProp } from '../json-props.js';
import { postkitChartRecipe, } from '../recipes/chart.recipe.js';
import { postkitSlotClassName, usePostkitSlotRecipe, } from '../recipes/types.js';
import { postkitRecipeKeys } from '../theme.js';
const DEFAULT_COLORS = [
    'var(--chakra-colors-blue-500, #3182ce)',
    'var(--chakra-colors-purple-500, #805ad5)',
    'var(--chakra-colors-teal-500, #319795)',
    'var(--chakra-colors-orange-500, #dd6b20)',
];
function numericValue(datum, key) {
    const value = datum[key];
    return typeof value === 'number' && Number.isFinite(value) ? value : 0;
}
function inferredSeries(data) {
    const first = data[0];
    if (!first) {
        return [];
    }
    return Object.entries(first)
        .filter(([key, value]) => key !== 'label' && typeof value === 'number')
        .map(([key]) => ({ key, label: key }));
}
function shouldShowTable(value) {
    return value === true || value === 'true';
}
export function PostkitChart({ data, series, title, description, type = 'bar', showTable = false, rootProps, slotStyles, size, variant, unstyled, }) {
    const titleId = `${useId()}-title`;
    const descriptionId = `${titleId}-description`;
    const recipe = usePostkitSlotRecipe(postkitRecipeKeys.chart, postkitChartRecipe);
    const styles = unstyled
        ? {}
        : recipe({ size, variant });
    const { css: rootCss, className: rootClassName, ...restRootProps } = rootProps ?? {};
    const records = parseJsonProp(data, 'Chart data');
    const configuredSeries = series
        ? parseJsonProp(series, 'Chart series')
        : inferredSeries(records);
    const width = 640;
    const height = 320;
    const left = 56;
    const right = 20;
    const top = 24;
    const bottom = 52;
    const plotWidth = width - left - right;
    const plotHeight = height - top - bottom;
    const maximum = Math.max(1, ...records.flatMap((datum) => configuredSeries.map((item) => numericValue(datum, item.key))));
    const xStep = records.length > 0 ? plotWidth / records.length : plotWidth;
    const yFor = (value) => top + plotHeight * (1 - value / maximum);
    return (_jsxs(Box, { "data-postkit-component": "Chart", as: "figure", ...restRootProps, className: postkitSlotClassName(recipe.classNameMap.root, rootClassName), css: [styles.root, slotStyles?.root, rootCss], children: [_jsx(Text, { id: titleId, as: "h3", className: recipe.classNameMap.title, css: [styles.title, slotStyles?.title], children: title }), description ? (_jsx(Text, { id: descriptionId, className: recipe.classNameMap.description, css: [styles.description, slotStyles?.description], children: description })) : null, configuredSeries.length > 1 ? (_jsx(Flex, { "aria-label": "Chart legend", className: recipe.classNameMap.legend, css: [styles.legend, slotStyles?.legend], children: configuredSeries.map((item, index) => (_jsxs(Flex, { className: recipe.classNameMap.legendItem, css: [styles.legendItem, slotStyles?.legendItem], children: [_jsx(Box, { "aria-hidden": "true", background: item.color ?? DEFAULT_COLORS[index % DEFAULT_COLORS.length], className: recipe.classNameMap.legendSwatch, css: [styles.legendSwatch, slotStyles?.legendSwatch] }), _jsx(Text, { children: item.label ?? item.key })] }, item.key))) })) : null, records.length === 0 || configuredSeries.length === 0 ? (_jsx(Text, { className: recipe.classNameMap.emptyState, css: [styles.emptyState, slotStyles?.emptyState], children: "This chart does not contain any numeric data." })) : (_jsx(Box, { className: recipe.classNameMap.plot, css: [styles.plot, slotStyles?.plot], children: _jsxs(chakra.svg, { role: "img", "aria-labelledby": description ? `${titleId} ${descriptionId}` : titleId, viewBox: `0 0 ${width} ${height}`, className: recipe.classNameMap.svg, css: [styles.svg, slotStyles?.svg], children: [[0, 0.5, 1].map((fraction) => {
                            const y = top + plotHeight * fraction;
                            const value = Math.round(maximum * (1 - fraction) * 100) / 100;
                            return (_jsxs("g", { children: [_jsx(chakra.line, { x1: left, x2: width - right, y1: y, y2: y, className: recipe.classNameMap.gridLine, css: [styles.gridLine, slotStyles?.gridLine] }), _jsx(chakra.text, { x: left - 8, y: y + 4, textAnchor: "end", fontSize: "12", className: recipe.classNameMap.axisLabel, css: [styles.axisLabel, slotStyles?.axisLabel], children: value })] }, fraction));
                        }), records.map((datum, datumIndex) => (_jsx(chakra.text, { x: left + xStep * (datumIndex + 0.5), y: height - 20, textAnchor: "middle", fontSize: "12", className: recipe.classNameMap.axisLabel, css: [styles.axisLabel, slotStyles?.axisLabel], children: datum.label }, `${datum.label}:label`))), type === 'bar'
                            ? records.flatMap((datum, datumIndex) => configuredSeries.map((item, seriesIndex) => {
                                const value = numericValue(datum, item.key);
                                const groupWidth = xStep * 0.72;
                                const barWidth = groupWidth / configuredSeries.length;
                                const x = left +
                                    xStep * datumIndex +
                                    (xStep - groupWidth) / 2 +
                                    barWidth * seriesIndex;
                                const y = yFor(value);
                                return (_jsx(chakra.rect, { x: x, y: y, width: Math.max(1, barWidth - 2), height: top + plotHeight - y, rx: "2", fill: item.color ??
                                        DEFAULT_COLORS[seriesIndex % DEFAULT_COLORS.length], className: recipe.classNameMap.seriesMark, css: [styles.seriesMark, slotStyles?.seriesMark], children: _jsx("title", { children: `${datum.label}, ${item.label ?? item.key}: ${value}` }) }, `${datum.label}:${item.key}`));
                            }))
                            : configuredSeries.map((item, seriesIndex) => {
                                const points = records.map((datum, datumIndex) => ({
                                    datum,
                                    value: numericValue(datum, item.key),
                                    x: left + xStep * (datumIndex + 0.5),
                                }));
                                const path = points
                                    .map((point, index) => `${index === 0 ? 'M' : 'L'} ${point.x} ${yFor(point.value)}`)
                                    .join(' ');
                                const color = item.color ??
                                    DEFAULT_COLORS[seriesIndex % DEFAULT_COLORS.length];
                                return (_jsxs("g", { children: [_jsx(chakra.path, { d: path, fill: "none", stroke: color, strokeWidth: "3", strokeLinejoin: "round", className: recipe.classNameMap.seriesMark, css: [styles.seriesMark, slotStyles?.seriesMark] }), points.map((point) => (_jsx(chakra.circle, { cx: point.x, cy: yFor(point.value), r: "5", fill: color, stroke: "var(--chakra-colors-bg, white)", strokeWidth: "2", className: recipe.classNameMap.seriesMark, css: [styles.seriesMark, slotStyles?.seriesMark], children: _jsx("title", { children: `${point.datum.label}, ${item.label ?? item.key}: ${point.value}` }) }, `${point.datum.label}:${item.key}`)))] }, item.key));
                            })] }) })), shouldShowTable(showTable) &&
                records.length > 0 &&
                configuredSeries.length > 0 ? (_jsx(Box, { className: recipe.classNameMap.tableContainer, css: [styles.tableContainer, slotStyles?.tableContainer], children: _jsxs(chakra.table, { className: recipe.classNameMap.table, css: [styles.table, slotStyles?.table], children: [_jsx("thead", { children: _jsxs("tr", { children: [_jsx(chakra.th, { textAlign: "left", className: recipe.classNameMap.headerCell, css: [styles.headerCell, slotStyles?.headerCell], children: "Label" }), configuredSeries.map((item) => (_jsx(chakra.th, { textAlign: "right", className: recipe.classNameMap.headerCell, css: [styles.headerCell, slotStyles?.headerCell], children: item.label ?? item.key }, item.key)))] }) }), _jsx("tbody", { children: records.map((datum) => (_jsxs("tr", { children: [_jsx(chakra.th, { scope: "row", className: recipe.classNameMap.rowHeader, css: [styles.rowHeader, slotStyles?.rowHeader], children: datum.label }), configuredSeries.map((item) => (_jsx(chakra.td, { className: recipe.classNameMap.dataCell, css: [styles.dataCell, slotStyles?.dataCell], children: numericValue(datum, item.key) }, item.key)))] }, datum.label))) })] }) })) : null] }));
}
