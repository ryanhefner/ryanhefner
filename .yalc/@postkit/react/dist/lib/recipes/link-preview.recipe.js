import { defineSlotRecipe } from '@chakra-ui/react';
export const postkitLinkPreviewSlots = [
    'root',
    'anchor',
    'media',
    'image',
    'carousel',
    'content',
    'siteRow',
    'favicon',
    'siteName',
    'title',
    'description',
    'domain',
    'embedFrame',
    'embed',
    'consent',
    'consentButton',
    'mediaPlayer',
];
export const postkitLinkPreviewRecipe = defineSlotRecipe({
    className: 'postkit-link-preview',
    slots: postkitLinkPreviewSlots,
    base: {
        root: {
            overflow: 'hidden',
        },
        anchor: {
            color: 'inherit',
            display: 'block',
            minWidth: '0',
            textDecoration: 'none',
            _hover: {
                textDecoration: 'none',
            },
            _focusVisible: {
                outlineColor: 'colorPalette.focusRing',
                outlineOffset: '2px',
                outlineStyle: 'solid',
                outlineWidth: '2px',
            },
        },
        media: {
            background: 'bg.muted',
            minWidth: '0',
            overflow: 'hidden',
        },
        image: {
            display: 'block',
            height: '100%',
            objectFit: 'cover',
            width: '100%',
        },
        carousel: {
            minWidth: '0',
        },
        content: {
            minWidth: '0',
        },
        siteRow: {
            alignItems: 'center',
            color: 'fg.muted',
            display: 'flex',
            minWidth: '0',
        },
        favicon: {
            flex: '0 0 auto',
            height: '1rem',
            objectFit: 'contain',
            width: '1rem',
        },
        siteName: {
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
        },
        title: {
            fontWeight: 'semibold',
            lineClamp: '2',
        },
        description: {
            color: 'fg.muted',
            lineClamp: '3',
        },
        domain: {
            color: 'fg.subtle',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
        },
        embedFrame: {
            aspectRatio: '16 / 9',
            background: 'bg.muted',
            overflow: 'hidden',
            position: 'relative',
            width: '100%',
        },
        embed: {
            border: '0',
            display: 'block',
            height: '100%',
            inset: '0',
            position: 'absolute',
            width: '100%',
        },
        consent: {
            alignItems: 'center',
            background: 'bg.muted',
            display: 'flex',
            flexDirection: 'column',
            gap: '3',
            inset: '0',
            justifyContent: 'center',
            padding: '6',
            position: 'absolute',
            textAlign: 'center',
        },
        consentButton: {},
        mediaPlayer: {
            minWidth: '0',
        },
    },
    variants: {
        size: {
            sm: {
                root: { borderRadius: 'md' },
                media: { minHeight: '5.5rem' },
                content: { padding: '3' },
                siteRow: { fontSize: 'xs', gap: '1.5' },
                title: { fontSize: 'sm', marginTop: '1.5' },
                description: { fontSize: 'xs', marginTop: '1' },
                domain: { fontSize: '2xs', marginTop: '2' },
            },
            md: {
                root: { borderRadius: 'xl' },
                media: { minHeight: '10rem' },
                content: { padding: '4' },
                siteRow: { fontSize: 'sm', gap: '2' },
                title: { fontSize: 'lg', marginTop: '2' },
                description: { fontSize: 'sm', marginTop: '1.5' },
                domain: { fontSize: 'xs', marginTop: '3' },
            },
            lg: {
                root: { borderRadius: '2xl' },
                media: { minHeight: '16rem' },
                content: { padding: '5' },
                siteRow: { fontSize: 'md', gap: '2' },
                title: { fontSize: 'xl', marginTop: '2.5' },
                description: { fontSize: 'md', marginTop: '2' },
                domain: { fontSize: 'sm', marginTop: '4' },
            },
        },
        variant: {
            outline: {
                root: {
                    background: 'bg',
                    borderColor: 'border',
                    borderWidth: '1px',
                },
            },
            subtle: {
                root: {
                    background: 'bg.muted',
                },
                media: {
                    background: 'bg.subtle',
                },
            },
            plain: {},
        },
        presentation: {
            inline: {
                root: {
                    display: 'inline',
                    overflow: 'visible',
                },
                anchor: {
                    color: 'colorPalette.fg',
                    display: 'inline',
                    textDecoration: 'underline',
                    textUnderlineOffset: '0.15em',
                    _hover: { textDecoration: 'underline' },
                },
            },
            card: {},
            embed: {},
            media: {},
            auto: {},
        },
        compact: {
            true: {
                root: {
                    display: 'grid',
                    gridTemplateColumns: 'minmax(5.5rem, 30%) minmax(0, 1fr)',
                },
                media: {
                    height: '100%',
                    minHeight: '5.5rem',
                },
            },
            false: {},
        },
    },
    defaultVariants: {
        size: 'md',
        variant: 'outline',
        presentation: 'card',
        compact: false,
    },
});
