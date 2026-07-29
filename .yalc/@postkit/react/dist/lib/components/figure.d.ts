import { type BoxProps, type RecipeVariantProps, type UnstyledProp } from '@chakra-ui/react';
import { postkitFigureRecipe, type PostkitFigureSlot } from '../recipes/figure.recipe.js';
import { type PostkitSlotStyles } from '../recipes/types.js';
export type PostkitFigureProps = {
    readonly src: string;
    readonly alt: string;
    readonly caption?: string;
    readonly credit?: string;
    readonly creditHref?: string;
    readonly href?: string;
    readonly width?: number | string;
    readonly height?: number | string;
    readonly aspectRatio?: string;
    readonly objectFit?: 'contain' | 'cover';
    readonly objectPosition?: string;
    readonly loading?: 'eager' | 'lazy';
    readonly sizes?: string;
    readonly srcSet?: string;
    readonly rootProps?: BoxProps;
    readonly slotStyles?: PostkitSlotStyles<PostkitFigureSlot>;
} & RecipeVariantProps<typeof postkitFigureRecipe> & UnstyledProp;
export declare function PostkitFigure({ src, alt, caption, credit, creditHref, href, width, height, aspectRatio, objectFit, objectPosition, loading, sizes, srcSet, rootProps, slotStyles, size, variant, layout, unstyled, }: PostkitFigureProps): import("react").JSX.Element;
//# sourceMappingURL=figure.d.ts.map