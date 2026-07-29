import { defineSlotRecipe } from '@chakra-ui/react';
export const postkitAppearsOnSlots = [
    'root',
    'label',
    'list',
    'item',
    'link',
    'icon',
    'date',
    'status',
];
export const postkitAppearsOnRecipe = defineSlotRecipe({
    className: 'postkit-appears-on',
    slots: postkitAppearsOnSlots,
    base: {
        root: { display: 'grid' },
        label: { fontWeight: 'semibold' },
        list: { display: 'flex', flexWrap: 'wrap', listStyle: 'none', margin: '0' },
        item: { alignItems: 'center', display: 'flex', minWidth: '0' },
        link: {
            alignItems: 'center',
            color: 'inherit',
            display: 'inline-flex',
            minWidth: '0',
            textDecoration: 'none',
            _hover: { textDecoration: 'underline' },
        },
        icon: {
            alignItems: 'center',
            display: 'inline-flex',
            flex: '0 0 auto',
            justifyContent: 'center',
        },
        date: { color: 'fg.muted' },
        status: { color: 'fg.subtle' },
    },
    variants: {
        size: {
            sm: {
                root: { gap: '2', fontSize: 'xs' },
                list: { gap: '1.5' },
                item: { gap: '1' },
                link: { gap: '1' },
            },
            md: {
                root: { gap: '3', fontSize: 'sm' },
                list: { gap: '2' },
                item: { gap: '1.5' },
                link: { gap: '1.5' },
            },
            lg: {
                root: { gap: '4', fontSize: 'md' },
                list: { gap: '3' },
                item: { gap: '2' },
                link: { gap: '2' },
            },
        },
        variant: {
            outline: {
                root: {
                    background: 'bg',
                    borderColor: 'border',
                    borderRadius: 'xl',
                    borderWidth: '1px',
                    padding: '4',
                },
            },
            subtle: {
                root: { background: 'bg.muted', borderRadius: 'xl', padding: '4' },
            },
            plain: {},
        },
        presentation: {
            inline: {
                root: { alignItems: 'baseline', display: 'flex', flexWrap: 'wrap' },
            },
            list: {
                list: { display: 'grid' },
                item: { justifyContent: 'space-between' },
            },
            badges: {
                item: {
                    background: 'bg.muted',
                    borderRadius: 'full',
                    paddingBlock: '1',
                    paddingInline: '2.5',
                },
            },
            card: {},
        },
    },
    defaultVariants: {
        size: 'md',
        variant: 'plain',
        presentation: 'inline',
    },
});
