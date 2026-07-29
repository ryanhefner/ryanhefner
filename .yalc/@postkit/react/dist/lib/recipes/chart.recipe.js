import { defineSlotRecipe } from '@chakra-ui/react';
export const postkitChartSlots = [
    'root',
    'title',
    'description',
    'legend',
    'legendItem',
    'legendSwatch',
    'plot',
    'svg',
    'gridLine',
    'axisLabel',
    'seriesMark',
    'emptyState',
    'tableContainer',
    'table',
    'headerCell',
    'rowHeader',
    'dataCell',
];
export const postkitChartRecipe = defineSlotRecipe({
    className: 'postkit-chart',
    slots: postkitChartSlots,
    base: {
        root: {
            margin: '0',
        },
        title: {
            fontWeight: 'semibold',
        },
        description: {
            color: 'fg.muted',
        },
        legend: {
            display: 'flex',
            flexWrap: 'wrap',
        },
        legendItem: {
            display: 'flex',
            alignItems: 'center',
        },
        legendSwatch: {
            flex: '0 0 auto',
            borderRadius: 'sm',
        },
        plot: {
            overflowX: 'auto',
        },
        svg: {
            display: 'block',
            minWidth: '32rem',
            width: '100%',
        },
        gridLine: {
            stroke: 'currentColor',
            strokeOpacity: '0.15',
        },
        axisLabel: {
            fill: 'currentColor',
            opacity: '0.75',
        },
        seriesMark: {},
        emptyState: {
            color: 'fg.muted',
        },
        tableContainer: {
            overflowX: 'auto',
        },
        table: {
            width: '100%',
            borderCollapse: 'collapse',
        },
        headerCell: {
            borderBottomWidth: '1px',
        },
        rowHeader: {
            textAlign: 'left',
        },
        dataCell: {
            textAlign: 'right',
        },
    },
    variants: {
        size: {
            sm: {
                root: { padding: '3' },
                title: { fontSize: 'md' },
                description: { fontSize: 'sm', marginTop: '1' },
                legend: { gap: '3', marginTop: '2' },
                legendItem: { gap: '1', fontSize: 'xs' },
                legendSwatch: { width: '2.5', height: '2.5' },
                plot: { marginTop: '3' },
                emptyState: { marginTop: '3', fontSize: 'sm' },
                tableContainer: { marginTop: '3' },
                table: { fontSize: 'xs' },
                headerCell: { padding: '1.5' },
                rowHeader: { padding: '1.5' },
                dataCell: { padding: '1.5' },
            },
            md: {
                root: { padding: { base: '3', md: '5' } },
                title: { fontSize: 'lg' },
                description: { fontSize: 'md', marginTop: '1' },
                legend: { gap: '4', marginTop: '3' },
                legendItem: { gap: '2', fontSize: 'sm' },
                legendSwatch: { width: '3', height: '3' },
                plot: { marginTop: '4' },
                emptyState: { marginTop: '4', fontSize: 'md' },
                tableContainer: { marginTop: '4' },
                table: { fontSize: 'sm' },
                headerCell: { padding: '2' },
                rowHeader: { padding: '2' },
                dataCell: { padding: '2' },
            },
            lg: {
                root: { padding: { base: '4', md: '6' } },
                title: { fontSize: 'xl' },
                description: { fontSize: 'lg', marginTop: '2' },
                legend: { gap: '5', marginTop: '4' },
                legendItem: { gap: '2', fontSize: 'md' },
                legendSwatch: { width: '3.5', height: '3.5' },
                plot: { marginTop: '5' },
                emptyState: { marginTop: '5', fontSize: 'lg' },
                tableContainer: { marginTop: '5' },
                table: { fontSize: 'md' },
                headerCell: { padding: '3' },
                rowHeader: { padding: '3' },
                dataCell: { padding: '3' },
            },
        },
        variant: {
            outline: {
                root: { borderWidth: '1px', borderRadius: 'xl', background: 'bg' },
            },
            subtle: {
                root: { borderRadius: 'xl', background: 'bg.muted' },
            },
            plain: {
                root: { paddingInline: '0' },
            },
        },
    },
    defaultVariants: {
        size: 'md',
        variant: 'outline',
    },
});
