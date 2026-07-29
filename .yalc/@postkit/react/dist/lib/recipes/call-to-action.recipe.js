import { defineSlotRecipe } from '@chakra-ui/react';
export const postkitCallToActionSlots = [
    'root',
    'content',
    'eyebrow',
    'title',
    'body',
    'actions',
    'primaryAction',
    'secondaryAction',
];
export const postkitCallToActionRecipe = defineSlotRecipe({
    className: 'postkit-call-to-action',
    slots: postkitCallToActionSlots,
    base: {
        root: { display: 'grid' },
        content: { display: 'grid' },
        eyebrow: {
            color: 'fg.muted',
            fontSize: 'xs',
            fontWeight: 'bold',
            letterSpacing: 'wide',
            textTransform: 'uppercase',
        },
        title: { color: 'fg', fontWeight: 'bold', letterSpacing: 'tight' },
        body: { color: 'fg.muted' },
        actions: { display: 'flex', flexWrap: 'wrap' },
        primaryAction: {
            alignItems: 'center',
            background: 'colorPalette.solid',
            borderRadius: 'l2',
            color: 'colorPalette.contrast',
            display: 'inline-flex',
            fontWeight: 'semibold',
            justifyContent: 'center',
            textDecoration: 'none',
            _hover: { background: 'colorPalette.emphasized' },
        },
        secondaryAction: {
            alignItems: 'center',
            borderColor: 'border',
            borderRadius: 'l2',
            borderWidth: '1px',
            color: 'fg',
            display: 'inline-flex',
            fontWeight: 'semibold',
            justifyContent: 'center',
            textDecoration: 'none',
            _hover: { background: 'bg.muted' },
        },
    },
    variants: {
        size: {
            sm: {
                root: { gap: '4', padding: '4' },
                content: { gap: '1.5' },
                title: { fontSize: 'xl' },
                body: { fontSize: 'sm' },
                actions: { gap: '2' },
                primaryAction: { minHeight: '9', paddingInline: '3', fontSize: 'sm' },
                secondaryAction: { minHeight: '9', paddingInline: '3', fontSize: 'sm' },
            },
            md: {
                root: { gap: '5', padding: '6' },
                content: { gap: '2' },
                title: { fontSize: '2xl' },
                body: { fontSize: 'md' },
                actions: { gap: '3' },
                primaryAction: { minHeight: '10', paddingInline: '4', fontSize: 'md' },
                secondaryAction: {
                    minHeight: '10',
                    paddingInline: '4',
                    fontSize: 'md',
                },
            },
            lg: {
                root: { gap: '6', padding: '8' },
                content: { gap: '3' },
                title: { fontSize: '3xl' },
                body: { fontSize: 'lg' },
                actions: { gap: '4' },
                primaryAction: { minHeight: '12', paddingInline: '5', fontSize: 'lg' },
                secondaryAction: {
                    minHeight: '12',
                    paddingInline: '5',
                    fontSize: 'lg',
                },
            },
        },
        variant: {
            outline: {
                root: {
                    background: 'bg',
                    borderColor: 'border',
                    borderRadius: '2xl',
                    borderWidth: '1px',
                },
            },
            subtle: {
                root: { background: 'bg.muted', borderRadius: '2xl' },
            },
            plain: { root: { paddingInline: '0' } },
        },
        alignment: {
            start: {},
            center: {
                content: { justifyItems: 'center', textAlign: 'center' },
                actions: { justifyContent: 'center' },
            },
        },
    },
    defaultVariants: {
        alignment: 'start',
        size: 'md',
        variant: 'subtle',
    },
});
