import { defineSlotRecipe } from '@chakra-ui/react';
export const postkitVideoSlots = [
    'root',
    'frame',
    'player',
    'caption',
    'fallback',
];
export const postkitVideoRecipe = defineSlotRecipe({
    className: 'postkit-video',
    slots: postkitVideoSlots,
    base: {
        root: {
            margin: '0',
        },
        frame: {
            background: 'black',
            overflow: 'hidden',
            lineHeight: '0',
        },
        player: {
            display: 'block',
            height: 'auto',
            maxHeight: '80vh',
            width: '100%',
        },
        caption: {
            color: 'fg.muted',
        },
        fallback: {
            color: 'white',
            textDecoration: 'underline',
        },
    },
    variants: {
        size: {
            sm: {
                frame: { borderRadius: 'md' },
                caption: { fontSize: 'xs', marginTop: '2' },
            },
            md: {
                frame: { borderRadius: 'xl' },
                caption: { fontSize: 'sm', marginTop: '2' },
            },
            lg: {
                frame: { borderRadius: '2xl' },
                caption: { fontSize: 'md', marginTop: '3' },
            },
        },
        variant: {
            outline: {
                frame: { borderWidth: '1px', borderColor: 'border' },
            },
            subtle: {
                root: { background: 'bg.muted', borderRadius: 'xl', padding: '2' },
            },
            plain: {},
        },
    },
    defaultVariants: {
        size: 'md',
        variant: 'plain',
    },
});
