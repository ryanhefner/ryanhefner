import { defineSlotRecipe } from '@chakra-ui/react';
export const postkitCalloutSlots = [
    'root',
    'icon',
    'content',
    'title',
    'body',
];
export const postkitCalloutRecipe = defineSlotRecipe({
    className: 'postkit-callout',
    slots: postkitCalloutSlots,
    base: {
        root: {
            alignItems: 'flex-start',
            borderRadius: 'xl',
            display: 'flex',
            gap: '3',
            padding: '4',
        },
        icon: {
            alignItems: 'center',
            borderRadius: 'full',
            display: 'inline-flex',
            flex: '0 0 auto',
            fontWeight: 'bold',
            height: '6',
            justifyContent: 'center',
            width: '6',
        },
        content: { minWidth: '0' },
        title: { fontWeight: 'semibold', lineHeight: '1.35' },
        body: { color: 'fg.muted', marginTop: '1' },
    },
    variants: {
        size: {
            sm: { root: { fontSize: 'sm', padding: '3' } },
            md: { root: { fontSize: 'md', padding: '4' } },
            lg: { root: { fontSize: 'lg', padding: '5' } },
        },
        variant: {
            outline: { root: { borderColor: 'border', borderWidth: '1px' } },
            subtle: { root: { background: 'bg.muted' } },
            plain: {
                root: {
                    borderInlineStartColor: 'colorPalette.solid',
                    borderInlineStartWidth: '4px',
                    borderRadius: '0',
                },
            },
        },
        tone: {
            note: { icon: { background: 'blue.subtle', color: 'blue.fg' } },
            tip: { icon: { background: 'green.subtle', color: 'green.fg' } },
            important: { icon: { background: 'purple.subtle', color: 'purple.fg' } },
            warning: { icon: { background: 'orange.subtle', color: 'orange.fg' } },
            caution: { icon: { background: 'red.subtle', color: 'red.fg' } },
        },
    },
    defaultVariants: { size: 'md', variant: 'subtle', tone: 'note' },
});
export const postkitGallerySlots = [
    'root',
    'header',
    'title',
    'description',
    'grid',
    'item',
    'imageLink',
    'image',
    'caption',
];
export const postkitGalleryRecipe = defineSlotRecipe({
    className: 'postkit-gallery',
    slots: postkitGallerySlots,
    base: {
        root: { display: 'grid', gap: '3' },
        header: { display: 'grid', gap: '1' },
        title: { fontWeight: 'semibold' },
        description: { color: 'fg.muted' },
        grid: {
            display: 'grid',
            gap: '3',
            gridTemplateColumns: 'repeat(var(--postkit-gallery-columns, 2), minmax(0, 1fr))',
        },
        item: { breakInside: 'avoid', margin: '0', minWidth: '0' },
        imageLink: { color: 'inherit', display: 'block' },
        image: {
            borderRadius: 'lg',
            display: 'block',
            height: '100%',
            objectFit: 'cover',
            width: '100%',
        },
        caption: { color: 'fg.muted', fontSize: 'sm', marginTop: '1.5' },
    },
    variants: {
        size: {
            sm: { grid: { gap: '2' }, caption: { fontSize: 'xs' } },
            md: { grid: { gap: '3' } },
            lg: { grid: { gap: '4' }, caption: { fontSize: 'md' } },
        },
        variant: {
            outline: {
                item: {
                    borderColor: 'border',
                    borderRadius: 'xl',
                    borderWidth: '1px',
                    padding: '2',
                },
            },
            subtle: {
                item: { background: 'bg.muted', borderRadius: 'xl', padding: '2' },
            },
            plain: {},
        },
    },
    defaultVariants: { size: 'md', variant: 'plain' },
});
export const postkitDisclosureSlots = [
    'root',
    'summary',
    'indicator',
    'content',
];
export const postkitDisclosureRecipe = defineSlotRecipe({
    className: 'postkit-disclosure',
    slots: postkitDisclosureSlots,
    base: {
        root: { borderRadius: 'lg' },
        summary: {
            alignItems: 'center',
            cursor: 'pointer',
            display: 'flex',
            fontWeight: 'semibold',
            gap: '2',
            justifyContent: 'space-between',
            listStyle: 'none',
        },
        indicator: { flex: '0 0 auto' },
        content: { color: 'fg.muted', paddingTop: '3' },
    },
    variants: {
        size: {
            sm: { root: { fontSize: 'sm', padding: '3' } },
            md: { root: { fontSize: 'md', padding: '4' } },
            lg: { root: { fontSize: 'lg', padding: '5' } },
        },
        variant: {
            outline: { root: { borderColor: 'border', borderWidth: '1px' } },
            subtle: { root: { background: 'bg.muted' } },
            plain: { root: { paddingInline: '0' } },
        },
    },
    defaultVariants: { size: 'md', variant: 'outline' },
});
export const postkitTabsSlots = [
    'root',
    'list',
    'tab',
    'panels',
    'panel',
];
export const postkitTabsRecipe = defineSlotRecipe({
    className: 'postkit-tabs',
    slots: postkitTabsSlots,
    base: {
        root: { display: 'grid', gap: '3' },
        list: { display: 'flex', gap: '1', overflowX: 'auto' },
        tab: {
            borderRadius: 'md',
            color: 'fg.muted',
            cursor: 'pointer',
            fontWeight: 'medium',
            paddingBlock: '2',
            paddingInline: '3',
            whiteSpace: 'nowrap',
            _selected: {
                background: 'colorPalette.subtle',
                color: 'colorPalette.fg',
            },
        },
        panels: { minWidth: '0' },
        panel: { color: 'fg', minWidth: '0' },
    },
    variants: {
        size: {
            sm: {
                root: { fontSize: 'sm' },
                tab: { paddingBlock: '1.5', paddingInline: '2' },
            },
            md: { root: { fontSize: 'md' } },
            lg: {
                root: { fontSize: 'lg' },
                tab: { paddingBlock: '2.5', paddingInline: '4' },
            },
        },
        variant: {
            outline: {
                panels: {
                    borderColor: 'border',
                    borderRadius: 'lg',
                    borderWidth: '1px',
                    padding: '4',
                },
            },
            subtle: {
                panels: { background: 'bg.muted', borderRadius: 'lg', padding: '4' },
            },
            plain: {},
        },
    },
    defaultVariants: { size: 'md', variant: 'outline' },
});
export const postkitStepsSlots = [
    'root',
    'item',
    'marker',
    'content',
    'title',
    'description',
];
export const postkitStepsRecipe = defineSlotRecipe({
    className: 'postkit-steps',
    slots: postkitStepsSlots,
    base: {
        root: {
            counterReset: 'postkit-step',
            display: 'grid',
            gap: '4',
            listStyle: 'none',
            margin: '0',
            padding: '0',
        },
        item: {
            alignItems: 'flex-start',
            display: 'grid',
            gap: '3',
            gridTemplateColumns: 'auto 1fr',
            minWidth: '0',
        },
        marker: {
            alignItems: 'center',
            background: 'colorPalette.solid',
            borderRadius: 'full',
            color: 'colorPalette.contrast',
            display: 'inline-flex',
            fontWeight: 'bold',
            height: '7',
            justifyContent: 'center',
            width: '7',
        },
        content: { minWidth: '0', paddingTop: '0.5' },
        title: { fontWeight: 'semibold' },
        description: { color: 'fg.muted', marginTop: '1' },
    },
    variants: {
        size: {
            sm: {
                root: { fontSize: 'sm', gap: '3' },
                marker: { height: '6', width: '6' },
            },
            md: { root: { fontSize: 'md' } },
            lg: {
                root: { fontSize: 'lg', gap: '5' },
                marker: { height: '8', width: '8' },
            },
        },
        variant: {
            outline: {
                marker: {
                    background: 'transparent',
                    borderColor: 'colorPalette.solid',
                    borderWidth: '1px',
                    color: 'colorPalette.fg',
                },
            },
            subtle: {
                item: { background: 'bg.muted', borderRadius: 'lg', padding: '3' },
            },
            plain: {},
        },
    },
    defaultVariants: { size: 'md', variant: 'plain' },
});
export const postkitCardGridSlots = [
    'root',
    'header',
    'title',
    'description',
    'grid',
    'card',
    'image',
    'cardBody',
    'cardTitle',
    'cardDescription',
    'meta',
    'link',
];
export const postkitCardGridRecipe = defineSlotRecipe({
    className: 'postkit-card-grid',
    slots: postkitCardGridSlots,
    base: {
        root: { display: 'grid', gap: '4' },
        header: { display: 'grid', gap: '1' },
        title: { fontWeight: 'semibold' },
        description: { color: 'fg.muted' },
        grid: {
            display: 'grid',
            gap: '4',
            gridTemplateColumns: 'repeat(var(--postkit-card-columns, 2), minmax(0, 1fr))',
        },
        card: {
            borderRadius: 'xl',
            display: 'flex',
            flexDirection: 'column',
            minWidth: '0',
            overflow: 'hidden',
        },
        image: { aspectRatio: '16 / 9', objectFit: 'cover', width: '100%' },
        cardBody: { display: 'grid', flex: '1', gap: '2', padding: '4' },
        cardTitle: { fontWeight: 'semibold' },
        cardDescription: { color: 'fg.muted' },
        meta: { color: 'fg.muted', fontSize: 'sm' },
        link: {
            color: 'colorPalette.fg',
            fontWeight: 'semibold',
            marginTop: 'auto',
        },
    },
    variants: {
        size: {
            sm: { grid: { gap: '3' }, cardBody: { fontSize: 'sm', padding: '3' } },
            md: {},
            lg: { grid: { gap: '5' }, cardBody: { fontSize: 'lg', padding: '5' } },
        },
        variant: {
            outline: { card: { borderColor: 'border', borderWidth: '1px' } },
            subtle: { card: { background: 'bg.muted' } },
            plain: { cardBody: { paddingInline: '0' } },
        },
    },
    defaultVariants: { size: 'md', variant: 'outline' },
});
