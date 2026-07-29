import { type BoxProps, type RecipeVariantProps, type UnstyledProp } from '@chakra-ui/react';
import { postkitShareActionsRecipe, type PostkitShareActionsSlot } from '../recipes/share-actions.recipe.js';
import { type PostkitSlotStyles } from '../recipes/types.js';
import type { PostkitShareRequest } from '../social-services.js';
export type PostkitShareActionsProps = {
    readonly url: string;
    readonly title?: string;
    readonly text?: string;
    readonly services?: string | readonly string[];
    readonly label?: string;
    readonly onShare?: (service: string, request: PostkitShareRequest) => void;
    readonly rootProps?: BoxProps;
    readonly slotStyles?: PostkitSlotStyles<PostkitShareActionsSlot>;
} & RecipeVariantProps<typeof postkitShareActionsRecipe> & UnstyledProp;
export declare function PostkitShareActions({ url, title, text, services: servicesValue, label, onShare, rootProps, slotStyles, layout, size, variant, unstyled, }: PostkitShareActionsProps): import("react").JSX.Element;
//# sourceMappingURL=share-actions.d.ts.map