import { defineSlotRecipe } from '@chakra-ui/react';
export const postkitCodeBlockSlots = [
    'root',
    'header',
    'filename',
    'language',
    'actions',
    'button',
    'scroller',
    'code',
    'line',
    'lineNumber',
    'lineContent',
];
export const postkitCodeBlockRecipe = defineSlotRecipe({
    className: 'postkit-code-block',
    slots: postkitCodeBlockSlots,
    base: {
        root: {
            background: 'gray.950',
            borderRadius: 'xl',
            color: 'gray.100',
            overflow: 'hidden',
        },
        header: {
            alignItems: 'center',
            borderBottomColor: 'whiteAlpha.300',
            borderBottomWidth: '1px',
            display: 'flex',
            gap: '3',
            justifyContent: 'space-between',
            paddingBlock: '2',
            paddingInline: '3',
        },
        filename: { fontFamily: 'mono', fontSize: 'sm', fontWeight: 'semibold' },
        language: {
            color: 'gray.400',
            fontFamily: 'mono',
            fontSize: 'xs',
            textTransform: 'uppercase',
        },
        actions: { display: 'flex', gap: '1' },
        button: {
            borderRadius: 'md',
            color: 'gray.300',
            cursor: 'pointer',
            fontSize: 'xs',
            paddingBlock: '1',
            paddingInline: '2',
            _hover: { background: 'whiteAlpha.200', color: 'white' },
        },
        scroller: { maxWidth: '100%', overflow: 'auto' },
        code: {
            display: 'block',
            fontFamily: 'mono',
            margin: '0',
            minWidth: 'max-content',
            paddingBlock: '3',
        },
        line: {
            display: 'grid',
            gridTemplateColumns: 'auto 1fr',
            minHeight: '1.5em',
            paddingInlineEnd: '4',
        },
        lineNumber: {
            color: 'gray.600',
            paddingInline: '3',
            textAlign: 'end',
            userSelect: 'none',
        },
        lineContent: { whiteSpace: 'pre' },
    },
    variants: {
        size: {
            sm: { code: { fontSize: 'xs' } },
            md: { code: { fontSize: 'sm' } },
            lg: { code: { fontSize: 'md' } },
        },
        variant: {
            outline: { root: { borderColor: 'border.inverted', borderWidth: '1px' } },
            subtle: { root: { boxShadow: 'sm' } },
            plain: { root: { borderRadius: '0' } },
        },
    },
    defaultVariants: { size: 'md', variant: 'outline' },
});
export const postkitCodeGroupSlots = ['root', 'tabs', 'tab', 'panel'];
export const postkitCodeGroupRecipe = defineSlotRecipe({
    className: 'postkit-code-group',
    slots: postkitCodeGroupSlots,
    base: {
        root: { borderRadius: 'xl', overflow: 'hidden' },
        tabs: {
            background: 'gray.900',
            display: 'flex',
            gap: '1',
            overflowX: 'auto',
            padding: '2',
        },
        tab: {
            borderRadius: 'md',
            color: 'gray.400',
            cursor: 'pointer',
            fontFamily: 'mono',
            fontSize: 'sm',
            paddingBlock: '1.5',
            paddingInline: '3',
            whiteSpace: 'nowrap',
            _selected: { background: 'whiteAlpha.200', color: 'white' },
        },
        panel: { minWidth: '0' },
    },
    variants: {
        size: {
            sm: { tab: { fontSize: 'xs' } },
            md: {},
            lg: { tab: { fontSize: 'md' } },
        },
        variant: {
            outline: { root: { borderColor: 'border', borderWidth: '1px' } },
            subtle: { root: { boxShadow: 'sm' } },
            plain: {},
        },
    },
    defaultVariants: { size: 'md', variant: 'outline' },
});
export const postkitTerminalSlots = [
    'root',
    'header',
    'dots',
    'title',
    'body',
    'prompt',
    'command',
    'output',
];
export const postkitTerminalRecipe = defineSlotRecipe({
    className: 'postkit-terminal',
    slots: postkitTerminalSlots,
    base: {
        root: {
            background: 'gray.950',
            borderRadius: 'xl',
            color: 'gray.100',
            overflow: 'hidden',
        },
        header: {
            alignItems: 'center',
            background: 'gray.900',
            display: 'grid',
            gridTemplateColumns: '1fr auto 1fr',
            padding: '2.5',
        },
        dots: { color: 'gray.500', letterSpacing: '0.2em' },
        title: { color: 'gray.400', fontFamily: 'mono', fontSize: 'xs' },
        body: {
            fontFamily: 'mono',
            overflowX: 'auto',
            padding: '4',
            whiteSpace: 'pre-wrap',
        },
        prompt: { color: 'green.300', marginInlineEnd: '2', userSelect: 'none' },
        command: { color: 'white' },
        output: { color: 'gray.400', display: 'block', marginTop: '2' },
    },
    variants: {
        size: {
            sm: { body: { fontSize: 'xs' } },
            md: { body: { fontSize: 'sm' } },
            lg: { body: { fontSize: 'md' } },
        },
        variant: {
            outline: { root: { borderColor: 'border.inverted', borderWidth: '1px' } },
            subtle: { root: { boxShadow: 'md' } },
            plain: { root: { borderRadius: '0' } },
        },
    },
    defaultVariants: { size: 'md', variant: 'outline' },
});
export const postkitDiffSlots = [
    'root',
    'header',
    'title',
    'code',
    'line',
    'marker',
    'content',
];
export const postkitDiffRecipe = defineSlotRecipe({
    className: 'postkit-diff',
    slots: postkitDiffSlots,
    base: {
        root: { borderRadius: 'xl', overflow: 'hidden' },
        header: {
            background: 'bg.muted',
            borderBottomColor: 'border',
            borderBottomWidth: '1px',
            paddingBlock: '2',
            paddingInline: '3',
        },
        title: { fontFamily: 'mono', fontSize: 'sm', fontWeight: 'semibold' },
        code: {
            display: 'block',
            fontFamily: 'mono',
            overflowX: 'auto',
            paddingBlock: '3',
        },
        line: {
            display: 'grid',
            gridTemplateColumns: '2rem 1fr',
            minWidth: 'max-content',
            paddingInlineEnd: '4',
        },
        marker: { color: 'fg.muted', textAlign: 'center', userSelect: 'none' },
        content: { whiteSpace: 'pre' },
    },
    variants: {
        size: {
            sm: { code: { fontSize: 'xs' } },
            md: { code: { fontSize: 'sm' } },
            lg: { code: { fontSize: 'md' } },
        },
        variant: {
            outline: { root: { borderColor: 'border', borderWidth: '1px' } },
            subtle: { root: { background: 'bg.subtle' } },
            plain: {},
        },
    },
    defaultVariants: { size: 'md', variant: 'outline' },
});
export const postkitFileTreeSlots = [
    'root',
    'title',
    'list',
    'item',
    'icon',
    'path',
    'meta',
];
export const postkitFileTreeRecipe = defineSlotRecipe({
    className: 'postkit-file-tree',
    slots: postkitFileTreeSlots,
    base: {
        root: { borderRadius: 'xl', padding: '4' },
        title: { fontWeight: 'semibold', marginBottom: '3' },
        list: {
            display: 'grid',
            fontFamily: 'mono',
            gap: '1',
            listStyle: 'none',
            margin: '0',
            padding: '0',
        },
        item: {
            alignItems: 'center',
            display: 'grid',
            gap: '2',
            gridTemplateColumns: 'auto minmax(0, 1fr) auto',
            minWidth: '0',
        },
        icon: { color: 'fg.muted', width: '1.25em' },
        path: {
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
        },
        meta: { color: 'fg.muted', fontSize: 'xs' },
    },
    variants: {
        size: {
            sm: { root: { fontSize: 'xs', padding: '3' } },
            md: { root: { fontSize: 'sm' } },
            lg: { root: { fontSize: 'md', padding: '5' } },
        },
        variant: {
            outline: { root: { borderColor: 'border', borderWidth: '1px' } },
            subtle: { root: { background: 'bg.muted' } },
            plain: { root: { paddingInline: '0' } },
        },
    },
    defaultVariants: { size: 'md', variant: 'outline' },
});
export const postkitFileCardSlots = [
    'root',
    'icon',
    'content',
    'name',
    'description',
    'meta',
    'action',
];
export const postkitFileCardRecipe = defineSlotRecipe({
    className: 'postkit-file-card',
    slots: postkitFileCardSlots,
    base: {
        root: {
            alignItems: 'center',
            borderRadius: 'xl',
            display: 'grid',
            gap: '3',
            gridTemplateColumns: 'auto minmax(0, 1fr) auto',
            padding: '4',
        },
        icon: {
            alignItems: 'center',
            background: 'colorPalette.subtle',
            borderRadius: 'lg',
            color: 'colorPalette.fg',
            display: 'inline-flex',
            fontWeight: 'bold',
            height: '10',
            justifyContent: 'center',
            width: '10',
        },
        content: { minWidth: '0' },
        name: {
            fontWeight: 'semibold',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
        },
        description: { color: 'fg.muted', fontSize: 'sm', marginTop: '0.5' },
        meta: { color: 'fg.muted', fontSize: 'xs', marginTop: '1' },
        action: {
            color: 'colorPalette.fg',
            fontWeight: 'semibold',
            whiteSpace: 'nowrap',
        },
    },
    variants: {
        size: {
            sm: { root: { padding: '3' }, icon: { height: '8', width: '8' } },
            md: {},
            lg: { root: { padding: '5' }, icon: { height: '12', width: '12' } },
        },
        variant: {
            outline: { root: { borderColor: 'border', borderWidth: '1px' } },
            subtle: { root: { background: 'bg.muted' } },
            plain: { root: { paddingInline: '0' } },
        },
    },
    defaultVariants: { size: 'md', variant: 'outline' },
});
