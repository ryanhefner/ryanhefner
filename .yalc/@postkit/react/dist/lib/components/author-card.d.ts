import { type BoxProps, type RecipeVariantProps, type UnstyledProp } from '@chakra-ui/react';
import type { ReactNode } from 'react';
import { postkitAuthorCardRecipe, type PostkitAuthorCardSlot } from '../recipes/author-card.recipe.js';
import { type PostkitSlotStyles } from '../recipes/types.js';
export interface PostkitAuthorLink {
    readonly label: string;
    readonly href: string;
    readonly rel?: string;
}
export type PostkitAuthorCardProps = {
    readonly name: string;
    readonly role?: string;
    readonly avatarSrc?: string;
    readonly avatarAlt?: string;
    readonly href?: string;
    readonly bio?: string;
    readonly links?: string | readonly PostkitAuthorLink[];
    readonly children?: ReactNode;
    readonly rootProps?: BoxProps;
    readonly slotStyles?: PostkitSlotStyles<PostkitAuthorCardSlot>;
} & RecipeVariantProps<typeof postkitAuthorCardRecipe> & UnstyledProp;
export declare function PostkitAuthorCard({ name, role, avatarSrc, avatarAlt, href, bio, links: linksValue, children, rootProps, slotStyles, presentation, size, variant, unstyled, }: PostkitAuthorCardProps): import("react").JSX.Element;
//# sourceMappingURL=author-card.d.ts.map