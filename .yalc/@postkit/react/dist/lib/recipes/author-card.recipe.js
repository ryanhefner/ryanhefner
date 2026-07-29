import { defineSlotRecipe } from '@chakra-ui/react';
export const postkitAuthorCardSlots = [
    'root',
    'avatar',
    'content',
    'header',
    'name',
    'nameLink',
    'role',
    'bio',
    'links',
    'link',
];
export const postkitAuthorCardRecipe = defineSlotRecipe({
    className: 'postkit-author-card',
    slots: postkitAuthorCardSlots,
    base: {
        root: {
            alignItems: 'flex-start',
            display: 'flex',
        },
        avatar: {
            alignItems: 'center',
            aspectRatio: '1',
            background: 'bg.muted',
            borderRadius: 'full',
            display: 'flex',
            flex: '0 0 auto',
            justifyContent: 'center',
            objectFit: 'cover',
            overflow: 'hidden',
        },
        content: { display: 'grid', minWidth: '0' },
        header: { display: 'grid' },
        name: { color: 'fg', fontFamily: 'heading', fontWeight: 'semibold' },
        nameLink: {
            color: 'inherit',
            textDecoration: 'none',
            _hover: { textDecoration: 'underline' },
        },
        role: { color: 'fg.muted' },
        bio: { color: 'fg.muted' },
        links: {
            display: 'flex',
            flexWrap: 'wrap',
            listStyle: 'none',
            margin: '0',
            padding: '0',
        },
        link: {
            color: 'fg',
            fontWeight: 'medium',
            textDecoration: 'underline',
            textUnderlineOffset: '0.15em',
        },
    },
    variants: {
        size: {
            sm: {
                root: { gap: '3' },
                avatar: { fontSize: 'sm', height: '10', width: '10' },
                content: { gap: '2' },
                name: { fontSize: 'sm' },
                role: { fontSize: 'xs' },
                bio: { fontSize: 'xs' },
                links: { gap: '3', fontSize: 'xs' },
            },
            md: {
                root: { gap: '4' },
                avatar: { fontSize: 'lg', height: '14', width: '14' },
                content: { gap: '3' },
                name: { fontSize: 'md' },
                role: { fontSize: 'sm' },
                bio: { fontSize: 'sm' },
                links: { gap: '4', fontSize: 'sm' },
            },
            lg: {
                root: { gap: '5' },
                avatar: { fontSize: '2xl', height: '20', width: '20' },
                content: { gap: '4' },
                name: { fontSize: 'lg' },
                role: { fontSize: 'md' },
                bio: { fontSize: 'md' },
                links: { gap: '5', fontSize: 'md' },
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
            card: {},
            compact: {
                avatar: { height: '10', width: '10' },
                bio: { lineClamp: '2' },
            },
            inline: {
                root: { alignItems: 'center' },
                bio: { display: 'none' },
                links: { display: 'none' },
            },
        },
    },
    defaultVariants: {
        presentation: 'card',
        size: 'md',
        variant: 'plain',
    },
});
