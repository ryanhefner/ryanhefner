import { type BoxProps, type RecipeVariantProps, type UnstyledProp } from '@chakra-ui/react';
import { type ReactNode } from 'react';
import { postkitCarouselRecipe, type PostkitCarouselSlot } from '../recipes/carousel.recipe.js';
import { type PostkitSlotStyles } from '../recipes/types.js';
export interface PostkitCarouselItem {
    readonly id?: string;
    readonly image?: {
        readonly src: string;
        readonly alt: string;
    };
    readonly title?: string;
    readonly description?: string;
    readonly href?: string;
}
export type PostkitCarouselProps = {
    readonly items?: string | readonly PostkitCarouselItem[];
    readonly children?: ReactNode;
    readonly label?: string;
    readonly initialIndex?: number | string;
    readonly rootProps?: BoxProps;
    readonly slotStyles?: PostkitSlotStyles<PostkitCarouselSlot>;
} & RecipeVariantProps<typeof postkitCarouselRecipe> & UnstyledProp;
export declare function PostkitCarousel({ items, children, label, initialIndex, rootProps, slotStyles, size, variant, unstyled, }: PostkitCarouselProps): import("react").JSX.Element;
//# sourceMappingURL=carousel.d.ts.map