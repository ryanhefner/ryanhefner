import { type BoxProps, type RecipeVariantProps, type UnstyledProp } from '@chakra-ui/react';
import type { ReactNode } from 'react';
import { postkitCallToActionRecipe, type PostkitCallToActionSlot } from '../recipes/call-to-action.recipe.js';
import { type PostkitSlotStyles } from '../recipes/types.js';
export type PostkitCallToActionProps = {
    readonly title: string;
    readonly eyebrow?: string;
    readonly description?: string;
    readonly primaryLabel?: string;
    readonly primaryHref?: string;
    readonly secondaryLabel?: string;
    readonly secondaryHref?: string;
    readonly children?: ReactNode;
    readonly rootProps?: BoxProps;
    readonly slotStyles?: PostkitSlotStyles<PostkitCallToActionSlot>;
} & RecipeVariantProps<typeof postkitCallToActionRecipe> & UnstyledProp;
export declare function PostkitCallToAction({ title, eyebrow, description, primaryLabel, primaryHref, secondaryLabel, secondaryHref, children, rootProps, slotStyles, alignment, size, variant, unstyled, }: PostkitCallToActionProps): import("react").JSX.Element;
//# sourceMappingURL=call-to-action.d.ts.map