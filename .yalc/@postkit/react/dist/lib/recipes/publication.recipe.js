import { defineSlotRecipe } from '@chakra-ui/react';
export const postkitPullQuoteSlots = [
    'root',
    'mark',
    'quote',
    'attribution',
    'cite',
];
export const postkitPullQuoteRecipe = defineSlotRecipe({
    className: 'postkit-pull-quote',
    slots: postkitPullQuoteSlots,
    base: {
        root: {
            borderInlineStartColor: 'colorPalette.solid',
            borderInlineStartWidth: '4px',
            margin: '0',
            paddingBlock: '2',
            paddingInline: '5',
        },
        mark: {
            color: 'colorPalette.fg',
            fontFamily: 'heading',
            fontSize: '4xl',
            lineHeight: '0.7',
        },
        quote: {
            fontFamily: 'heading',
            fontSize: '2xl',
            fontWeight: 'medium',
            lineHeight: '1.35',
        },
        attribution: { color: 'fg.muted', fontSize: 'sm', marginTop: '3' },
        cite: { color: 'fg.muted', fontStyle: 'normal' },
    },
    variants: {
        size: {
            sm: { quote: { fontSize: 'lg' } },
            md: {},
            lg: { quote: { fontSize: '3xl' } },
        },
        variant: {
            outline: {
                root: {
                    borderBlockColor: 'border',
                    borderBlockWidth: '1px',
                    paddingBlock: '5',
                },
            },
            subtle: {
                root: { background: 'bg.muted', borderRadius: 'xl', padding: '5' },
            },
            plain: {},
        },
    },
    defaultVariants: { size: 'md', variant: 'plain' },
});
export const postkitKeyTakeawaySlots = [
    'root',
    'eyebrow',
    'title',
    'body',
    'list',
    'item',
];
export const postkitKeyTakeawayRecipe = defineSlotRecipe({
    className: 'postkit-key-takeaway',
    slots: postkitKeyTakeawaySlots,
    base: {
        root: { borderRadius: 'xl', padding: '5' },
        eyebrow: {
            color: 'colorPalette.fg',
            fontSize: 'xs',
            fontWeight: 'bold',
            letterSpacing: 'wide',
            textTransform: 'uppercase',
        },
        title: { fontSize: 'xl', fontWeight: 'bold', marginTop: '1' },
        body: { color: 'fg.muted', marginTop: '2' },
        list: {
            display: 'grid',
            gap: '2',
            marginBlock: '3 0',
            paddingInlineStart: '5',
        },
        item: { paddingInlineStart: '1' },
    },
    variants: {
        size: {
            sm: { root: { fontSize: 'sm', padding: '4' }, title: { fontSize: 'lg' } },
            md: {},
            lg: {
                root: { fontSize: 'lg', padding: '6' },
                title: { fontSize: '2xl' },
            },
        },
        variant: {
            outline: {
                root: { borderColor: 'colorPalette.muted', borderWidth: '1px' },
            },
            subtle: { root: { background: 'colorPalette.subtle' } },
            plain: {
                root: {
                    borderInlineStartColor: 'colorPalette.solid',
                    borderInlineStartWidth: '4px',
                    borderRadius: '0',
                    paddingInlineEnd: '0',
                },
            },
        },
    },
    defaultVariants: { size: 'md', variant: 'subtle' },
});
export const postkitStatSlots = [
    'root',
    'value',
    'label',
    'trend',
    'description',
];
export const postkitStatRecipe = defineSlotRecipe({
    className: 'postkit-stat',
    slots: postkitStatSlots,
    base: {
        root: { borderRadius: 'xl', display: 'grid', gap: '1', padding: '4' },
        value: {
            fontFamily: 'heading',
            fontSize: '3xl',
            fontWeight: 'bold',
            letterSpacing: 'tight',
            lineHeight: '1',
        },
        label: { fontWeight: 'semibold' },
        trend: { color: 'colorPalette.fg', fontSize: 'sm', fontWeight: 'semibold' },
        description: { color: 'fg.muted', fontSize: 'sm', marginTop: '1' },
    },
    variants: {
        size: {
            sm: { value: { fontSize: '2xl' } },
            md: {},
            lg: { root: { padding: '5' }, value: { fontSize: '4xl' } },
        },
        variant: {
            outline: { root: { borderColor: 'border', borderWidth: '1px' } },
            subtle: { root: { background: 'bg.muted' } },
            plain: { root: { paddingInline: '0' } },
        },
    },
    defaultVariants: { size: 'md', variant: 'outline' },
});
export const postkitComparisonSlots = [
    'root',
    'title',
    'description',
    'scroller',
    'table',
    'head',
    'header',
    'row',
    'label',
    'value',
];
export const postkitComparisonRecipe = defineSlotRecipe({
    className: 'postkit-comparison',
    slots: postkitComparisonSlots,
    base: {
        root: { display: 'grid', gap: '2' },
        title: { fontSize: 'xl', fontWeight: 'bold' },
        description: { color: 'fg.muted' },
        scroller: { marginTop: '2', overflowX: 'auto' },
        table: {
            borderCollapse: 'collapse',
            minWidth: '100%',
            width: 'max-content',
        },
        head: { background: 'bg.muted' },
        header: { fontWeight: 'semibold', padding: '3', textAlign: 'start' },
        row: { borderTopColor: 'border', borderTopWidth: '1px' },
        label: { fontWeight: 'medium', padding: '3', textAlign: 'start' },
        value: { padding: '3' },
    },
    variants: {
        size: {
            sm: {
                table: { fontSize: 'sm' },
                header: { padding: '2' },
                label: { padding: '2' },
                value: { padding: '2' },
            },
            md: {},
            lg: { table: { fontSize: 'lg' } },
        },
        variant: {
            outline: {
                scroller: {
                    borderColor: 'border',
                    borderRadius: 'xl',
                    borderWidth: '1px',
                },
            },
            subtle: { scroller: { background: 'bg.subtle', borderRadius: 'xl' } },
            plain: {},
        },
    },
    defaultVariants: { size: 'md', variant: 'outline' },
});
export const postkitPollSlots = [
    'root',
    'question',
    'description',
    'options',
    'option',
    'optionLabel',
    'result',
    'bar',
    'status',
];
export const postkitPollRecipe = defineSlotRecipe({
    className: 'postkit-poll',
    slots: postkitPollSlots,
    base: {
        root: { borderRadius: 'xl', padding: '5' },
        question: { fontSize: 'xl', fontWeight: 'bold' },
        description: { color: 'fg.muted', marginTop: '1' },
        options: { display: 'grid', gap: '2', marginTop: '4' },
        option: {
            borderColor: 'border',
            borderRadius: 'lg',
            borderWidth: '1px',
            cursor: 'pointer',
            display: 'grid',
            gap: '1',
            padding: '3',
            textAlign: 'start',
            _hover: { borderColor: 'colorPalette.solid' },
            _selected: {
                background: 'colorPalette.subtle',
                borderColor: 'colorPalette.solid',
            },
        },
        optionLabel: {
            alignItems: 'center',
            display: 'flex',
            fontWeight: 'medium',
            justifyContent: 'space-between',
        },
        result: { color: 'fg.muted', fontSize: 'xs' },
        bar: {
            background: 'colorPalette.solid',
            borderRadius: 'full',
            height: '1',
        },
        status: { color: 'fg.muted', fontSize: 'xs', marginTop: '3' },
    },
    variants: {
        size: {
            sm: {
                root: { fontSize: 'sm', padding: '4' },
                question: { fontSize: 'lg' },
            },
            md: {},
            lg: {
                root: { fontSize: 'lg', padding: '6' },
                question: { fontSize: '2xl' },
            },
        },
        variant: {
            outline: { root: { borderColor: 'border', borderWidth: '1px' } },
            subtle: { root: { background: 'bg.muted' } },
            plain: { root: { paddingInline: '0' } },
        },
    },
    defaultVariants: { size: 'md', variant: 'outline' },
});
export const postkitProductCardSlots = [
    'root',
    'image',
    'content',
    'badge',
    'title',
    'description',
    'rating',
    'footer',
    'price',
    'action',
];
export const postkitProductCardRecipe = defineSlotRecipe({
    className: 'postkit-product-card',
    slots: postkitProductCardSlots,
    base: {
        root: {
            borderRadius: 'xl',
            display: 'grid',
            gridTemplateColumns: { base: '1fr', sm: 'minmax(10rem, 1fr) 2fr' },
            overflow: 'hidden',
        },
        image: {
            aspectRatio: '4 / 3',
            height: '100%',
            objectFit: 'cover',
            width: '100%',
        },
        content: {
            display: 'flex',
            flexDirection: 'column',
            gap: '2',
            padding: '5',
        },
        badge: {
            alignSelf: 'flex-start',
            background: 'colorPalette.subtle',
            borderRadius: 'full',
            color: 'colorPalette.fg',
            fontSize: 'xs',
            fontWeight: 'bold',
            paddingBlock: '1',
            paddingInline: '2',
        },
        title: { fontSize: 'xl', fontWeight: 'bold' },
        description: { color: 'fg.muted' },
        rating: { color: 'orange.fg', fontSize: 'sm' },
        footer: {
            alignItems: 'center',
            display: 'flex',
            gap: '3',
            justifyContent: 'space-between',
            marginTop: 'auto',
            paddingTop: '3',
        },
        price: { fontWeight: 'bold' },
        action: {
            background: 'colorPalette.solid',
            borderRadius: 'md',
            color: 'colorPalette.contrast',
            fontWeight: 'semibold',
            paddingBlock: '2',
            paddingInline: '3',
        },
    },
    variants: {
        size: {
            sm: {
                content: { fontSize: 'sm', padding: '4' },
                title: { fontSize: 'lg' },
            },
            md: {},
            lg: {
                content: { fontSize: 'lg', padding: '6' },
                title: { fontSize: '2xl' },
            },
        },
        variant: {
            outline: { root: { borderColor: 'border', borderWidth: '1px' } },
            subtle: { root: { background: 'bg.muted' } },
            plain: {},
        },
    },
    defaultVariants: { size: 'md', variant: 'outline' },
});
export const postkitRelatedContentSlots = [
    'root',
    'title',
    'list',
    'item',
    'link',
    'itemTitle',
    'description',
    'meta',
];
export const postkitRelatedContentRecipe = defineSlotRecipe({
    className: 'postkit-related-content',
    slots: postkitRelatedContentSlots,
    base: {
        root: { display: 'grid', gap: '3' },
        title: { fontSize: 'lg', fontWeight: 'bold' },
        list: {
            display: 'grid',
            gap: '3',
            listStyle: 'none',
            margin: '0',
            padding: '0',
        },
        item: { minWidth: '0' },
        link: {
            borderRadius: 'lg',
            color: 'inherit',
            display: 'grid',
            gap: '1',
            padding: '3',
            textDecoration: 'none',
            _hover: { background: 'bg.muted', textDecoration: 'none' },
        },
        itemTitle: { color: 'colorPalette.fg', fontWeight: 'semibold' },
        description: { color: 'fg.muted', fontSize: 'sm' },
        meta: { color: 'fg.muted', fontSize: 'xs' },
    },
    variants: {
        size: {
            sm: { root: { fontSize: 'sm' } },
            md: {},
            lg: { root: { fontSize: 'lg' } },
        },
        variant: {
            outline: {
                item: { borderColor: 'border', borderRadius: 'lg', borderWidth: '1px' },
            },
            subtle: { item: { background: 'bg.subtle', borderRadius: 'lg' } },
            plain: {},
        },
    },
    defaultVariants: { size: 'md', variant: 'plain' },
});
export const postkitSeriesNavigationSlots = [
    'root',
    'header',
    'title',
    'position',
    'links',
    'link',
    'direction',
    'linkTitle',
];
export const postkitSeriesNavigationRecipe = defineSlotRecipe({
    className: 'postkit-series-navigation',
    slots: postkitSeriesNavigationSlots,
    base: {
        root: { borderRadius: 'xl', padding: '4' },
        header: {
            alignItems: 'baseline',
            display: 'flex',
            gap: '3',
            justifyContent: 'space-between',
        },
        title: { fontWeight: 'bold' },
        position: { color: 'fg.muted', fontSize: 'sm' },
        links: {
            display: 'grid',
            gap: '3',
            gridTemplateColumns: { base: '1fr', sm: '1fr 1fr' },
            marginTop: '4',
        },
        link: {
            borderRadius: 'lg',
            display: 'grid',
            gap: '1',
            padding: '3',
            textDecoration: 'none',
            _hover: { background: 'bg.muted', textDecoration: 'none' },
        },
        direction: {
            color: 'fg.muted',
            fontSize: 'xs',
            textTransform: 'uppercase',
        },
        linkTitle: { color: 'colorPalette.fg', fontWeight: 'semibold' },
    },
    variants: {
        size: {
            sm: { root: { fontSize: 'sm', padding: '3' } },
            md: {},
            lg: { root: { fontSize: 'lg', padding: '5' } },
        },
        variant: {
            outline: { root: { borderColor: 'border', borderWidth: '1px' } },
            subtle: { root: { background: 'bg.subtle' } },
            plain: { root: { paddingInline: '0' } },
        },
    },
    defaultVariants: { size: 'md', variant: 'outline' },
});
export const postkitSponsorBlockSlots = [
    'root',
    'disclosure',
    'logo',
    'content',
    'name',
    'message',
    'action',
];
export const postkitSponsorBlockRecipe = defineSlotRecipe({
    className: 'postkit-sponsor-block',
    slots: postkitSponsorBlockSlots,
    base: {
        root: { borderRadius: 'xl', display: 'grid', gap: '3', padding: '4' },
        disclosure: {
            color: 'fg.muted',
            fontSize: 'xs',
            fontWeight: 'semibold',
            letterSpacing: 'wide',
            textTransform: 'uppercase',
        },
        logo: {
            maxHeight: '2.5rem',
            maxWidth: '10rem',
            objectFit: 'contain',
            objectPosition: 'left center',
        },
        content: { display: 'grid', gap: '1' },
        name: { fontFamily: 'heading', fontWeight: 'bold' },
        message: { color: 'fg.muted' },
        action: {
            color: 'colorPalette.fg',
            fontWeight: 'semibold',
            justifySelf: 'start',
            marginTop: '1',
        },
    },
    variants: {
        size: {
            sm: { root: { fontSize: 'sm', padding: '3' } },
            md: {},
            lg: { root: { fontSize: 'lg', padding: '5' } },
        },
        variant: {
            outline: { root: { borderColor: 'border', borderWidth: '1px' } },
            subtle: { root: { background: 'bg.muted' } },
            plain: {
                root: {
                    borderBlockColor: 'border',
                    borderBlockWidth: '1px',
                    borderRadius: '0',
                    paddingInline: '0',
                },
            },
        },
    },
    defaultVariants: { size: 'md', variant: 'subtle' },
});
export const postkitAudienceBoundarySlots = [
    'root',
    'label',
    'content',
    'fallback',
];
export const postkitAudienceBoundaryRecipe = defineSlotRecipe({
    className: 'postkit-audience-boundary',
    slots: postkitAudienceBoundarySlots,
    base: {
        root: { position: 'relative' },
        label: { color: 'fg.muted', fontSize: 'xs', marginBottom: '2' },
        content: { minWidth: '0' },
        fallback: {
            background: 'bg.muted',
            borderRadius: 'xl',
            color: 'fg.muted',
            padding: '5',
            textAlign: 'center',
        },
    },
    variants: {
        size: {
            sm: { root: { fontSize: 'sm' } },
            md: {},
            lg: { root: { fontSize: 'lg' } },
        },
        variant: {
            outline: {
                root: {
                    borderColor: 'border',
                    borderRadius: 'xl',
                    borderWidth: '1px',
                    padding: '4',
                },
            },
            subtle: {
                label: {
                    background: 'bg.muted',
                    borderRadius: 'full',
                    display: 'inline-flex',
                    paddingBlock: '1',
                    paddingInline: '2',
                },
            },
            plain: {},
        },
    },
    defaultVariants: { size: 'md', variant: 'plain' },
});
