import { type BoxProps, type RecipeVariantProps, type UnstyledProp } from '@chakra-ui/react';
import { postkitAppearsOnRecipe, type PostkitAppearsOnSlot } from '../recipes/appears-on.recipe.js';
import { type PostkitSlotStyles } from '../recipes/types.js';
export interface PostkitSyndicationReference {
    readonly service: string;
    readonly url: string;
    readonly label?: string;
    readonly publishedAt?: string;
    readonly externalId?: string;
    readonly status?: 'failed' | 'pending' | 'published' | 'removed';
}
export type PostkitAppearsOnProps = {
    readonly items: string | readonly PostkitSyndicationReference[];
    readonly label?: string;
    readonly showDates?: boolean | string;
    readonly rootProps?: BoxProps;
    readonly slotStyles?: PostkitSlotStyles<PostkitAppearsOnSlot>;
} & RecipeVariantProps<typeof postkitAppearsOnRecipe> & UnstyledProp;
export declare function PostkitAppearsOn({ items: itemsValue, label, showDates, rootProps, slotStyles, presentation, size, variant, unstyled, }: PostkitAppearsOnProps): import("react").JSX.Element;
//# sourceMappingURL=appears-on.d.ts.map