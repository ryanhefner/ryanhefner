import { defineSlotRecipe } from '@chakra-ui/react';
export const postkitFigureSlots = [
    'root',
    'mediaLink',
    'media',
    'image',
    'figcaption',
    'caption',
    'credit',
    'creditLink',
];
export const postkitFigureRecipe = defineSlotRecipe({
    className: 'postkit-figure',
    slots: postkitFigureSlots,
    base: {
        root: {
            marginBlock: '0',
        },
        mediaLink: {
            color: 'inherit',
            display: 'block',
            textDecoration: 'none',
            _hover: {
                textDecoration: 'none',
            },
        },
        media: {
            lineHeight: '0',
            overflow: 'hidden',
        },
        image: {
            display: 'block',
            height: 'auto',
            width: '100%',
        },
        figcaption: {
            color: 'fg.muted',
        },
        caption: {
            display: 'block',
        },
        credit: {
            display: 'block',
            opacity: '0.8',
        },
        creditLink: {
            color: 'inherit',
            textDecoration: 'underline',
            textUnderlineOffset: '0.15em',
        },
    },
    variants: {
        size: {
            sm: {
                media: { borderRadius: 'md' },
                figcaption: { fontSize: 'xs', marginTop: '2' },
                credit: { fontSize: '2xs', marginTop: '1' },
            },
            md: {
                media: { borderRadius: 'xl' },
                figcaption: { fontSize: 'sm', marginTop: '2' },
                credit: { fontSize: 'xs', marginTop: '1' },
            },
            lg: {
                media: { borderRadius: '2xl' },
                figcaption: { fontSize: 'md', marginTop: '3' },
                credit: { fontSize: 'sm', marginTop: '1.5' },
            },
        },
        variant: {
            outline: {
                media: {
                    borderColor: 'border',
                    borderWidth: '1px',
                },
            },
            subtle: {
                root: {
                    background: 'bg.muted',
                    borderRadius: 'xl',
                    padding: '2',
                },
            },
            plain: {},
        },
        layout: {
            inline: {
                root: {
                    marginInline: 'auto',
                    maxWidth: '48rem',
                },
            },
            wide: {
                root: {
                    marginInline: 'auto',
                    maxWidth: '72rem',
                    width: '100%',
                },
            },
            bleed: {
                root: {
                    marginInline: 'calc(50% - 50vw)',
                    maxWidth: '100vw',
                    width: '100vw',
                },
            },
        },
    },
    defaultVariants: {
        size: 'md',
        variant: 'plain',
        layout: 'inline',
    },
});
