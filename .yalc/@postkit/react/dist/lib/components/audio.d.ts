import { type BoxProps, type RecipeVariantProps, type UnstyledProp } from '@chakra-ui/react';
import { postkitAudioRecipe, type PostkitAudioSlot } from '../recipes/audio.recipe.js';
import { type PostkitSlotStyles } from '../recipes/types.js';
export type PostkitAudioProps = {
    readonly src: string;
    readonly title: string;
    readonly caption?: string;
    readonly preload?: 'auto' | 'metadata' | 'none';
    readonly rootProps?: BoxProps;
    readonly slotStyles?: PostkitSlotStyles<PostkitAudioSlot>;
} & RecipeVariantProps<typeof postkitAudioRecipe> & UnstyledProp;
export declare function PostkitAudio({ src, title, caption, preload, rootProps, slotStyles, size, variant, unstyled, }: PostkitAudioProps): import("react").JSX.Element;
//# sourceMappingURL=audio.d.ts.map