import { defineSlotRecipe } from '@chakra-ui/react';
export const postkitCarouselSlots = [
    'root',
    'slide',
    'media',
    'content',
    'title',
    'description',
    'link',
    'controls',
    'previousTrigger',
    'status',
    'nextTrigger',
    'emptyState',
];
export const postkitCarouselRecipe = defineSlotRecipe({
    className: 'postkit-carousel',
    slots: postkitCarouselSlots,
    base: {
        root: {
            overflow: 'hidden',
        },
        slide: {
            minHeight: '8rem',
        },
        media: {
            display: 'block',
            width: '100%',
            maxHeight: '32rem',
            objectFit: 'cover',
        },
        title: {
            fontWeight: 'semibold',
        },
        description: {
            color: 'fg.muted',
        },
        link: {
            display: 'block',
            color: 'inherit',
            textDecoration: 'none',
            _hover: { textDecoration: 'none' },
        },
        controls: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
        },
        status: {
            color: 'fg.muted',
        },
        emptyState: {
            color: 'fg.muted',
        },
    },
    variants: {
        size: {
            sm: {
                root: { borderRadius: 'md' },
                content: { padding: '3' },
                title: { fontSize: 'md' },
                description: { fontSize: 'sm', marginTop: '1' },
                controls: { gap: '2', padding: '2' },
                previousTrigger: { fontSize: 'xs' },
                status: { fontSize: 'xs' },
                nextTrigger: { fontSize: 'xs' },
                emptyState: { padding: '3', fontSize: 'sm' },
            },
            md: {
                root: { borderRadius: 'xl' },
                content: { padding: '4' },
                title: { fontSize: 'lg' },
                description: { fontSize: 'md', marginTop: '1' },
                controls: { gap: '3', padding: '3' },
                previousTrigger: { fontSize: 'sm' },
                status: { fontSize: 'sm' },
                nextTrigger: { fontSize: 'sm' },
                emptyState: { padding: '4', fontSize: 'md' },
            },
            lg: {
                root: { borderRadius: '2xl' },
                content: { padding: '5' },
                title: { fontSize: 'xl' },
                description: { fontSize: 'lg', marginTop: '2' },
                controls: { gap: '4', padding: '4' },
                previousTrigger: { fontSize: 'md' },
                status: { fontSize: 'md' },
                nextTrigger: { fontSize: 'md' },
                emptyState: { padding: '5', fontSize: 'lg' },
            },
        },
        variant: {
            outline: {
                root: { borderWidth: '1px', background: 'bg' },
                controls: { borderTopWidth: '1px' },
            },
            subtle: {
                root: { background: 'bg.muted' },
                controls: { background: 'bg.subtle' },
            },
            plain: {},
        },
    },
    defaultVariants: {
        size: 'md',
        variant: 'outline',
    },
});
