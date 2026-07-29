import { defineSlotRecipe } from '@chakra-ui/react';
export const postkitAudioSlots = [
    'root',
    'title',
    'player',
    'caption',
    'fallback',
];
export const postkitAudioRecipe = defineSlotRecipe({
    className: 'postkit-audio',
    slots: postkitAudioSlots,
    base: {
        root: {
            margin: '0',
            borderRadius: 'xl',
        },
        title: {
            fontWeight: 'semibold',
        },
        player: {
            display: 'block',
            width: '100%',
        },
        caption: {
            color: 'fg.muted',
        },
        fallback: {
            color: 'colorPalette.fg',
            textDecoration: 'underline',
        },
    },
    variants: {
        size: {
            sm: {
                root: { padding: '3' },
                title: { fontSize: 'sm', marginBottom: '2' },
                caption: { fontSize: 'xs', marginTop: '2' },
            },
            md: {
                root: { padding: '4' },
                title: { fontSize: 'md', marginBottom: '3' },
                caption: { fontSize: 'sm', marginTop: '3' },
            },
            lg: {
                root: { padding: '5' },
                title: { fontSize: 'lg', marginBottom: '4' },
                caption: { fontSize: 'md', marginTop: '3' },
            },
        },
        variant: {
            outline: {
                root: { borderWidth: '1px', background: 'bg' },
            },
            subtle: {
                root: { background: 'bg.muted' },
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
