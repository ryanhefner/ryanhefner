import { type BoxProps, type RecipeVariantProps, type UnstyledProp } from '@chakra-ui/react';
import { postkitVideoRecipe, type PostkitVideoSlot } from '../recipes/video.recipe.js';
import { type PostkitSlotStyles } from '../recipes/types.js';
export interface PostkitVideoTrack {
    readonly src: string;
    readonly srcLang: string;
    readonly label: string;
    readonly kind?: 'captions' | 'chapters' | 'descriptions' | 'metadata';
    readonly default?: boolean;
}
export type PostkitVideoProps = {
    readonly src: string;
    readonly title: string;
    readonly poster?: string;
    readonly caption?: string;
    readonly aspectRatio?: string;
    readonly preload?: 'auto' | 'metadata' | 'none';
    readonly tracks?: readonly PostkitVideoTrack[];
    readonly rootProps?: BoxProps;
    readonly slotStyles?: PostkitSlotStyles<PostkitVideoSlot>;
} & RecipeVariantProps<typeof postkitVideoRecipe> & UnstyledProp;
export declare function PostkitVideo({ src, title, poster, caption, aspectRatio, preload, tracks, rootProps, slotStyles, size, variant, unstyled, }: PostkitVideoProps): import("react").JSX.Element;
//# sourceMappingURL=video.d.ts.map