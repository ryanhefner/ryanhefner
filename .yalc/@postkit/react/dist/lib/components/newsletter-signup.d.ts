import { type BoxProps, type RecipeVariantProps, type UnstyledProp } from '@chakra-ui/react';
import { type ReactNode } from 'react';
import { postkitNewsletterSignupRecipe, type PostkitNewsletterSignupSlot } from '../recipes/newsletter-signup.recipe.js';
import { type PostkitSlotStyles } from '../recipes/types.js';
export type PostkitNewsletterSignupProps = {
    readonly title: string;
    readonly description?: string;
    readonly list?: string;
    readonly emailLabel?: string;
    readonly emailPlaceholder?: string;
    readonly buttonLabel?: string;
    readonly privacy?: string;
    readonly successMessage?: string;
    readonly errorMessage?: string;
    readonly children?: ReactNode;
    readonly rootProps?: BoxProps;
    readonly slotStyles?: PostkitSlotStyles<PostkitNewsletterSignupSlot>;
} & RecipeVariantProps<typeof postkitNewsletterSignupRecipe> & UnstyledProp;
export declare function PostkitNewsletterSignup({ title, description, list, emailLabel, emailPlaceholder, buttonLabel, privacy, successMessage, errorMessage, children, rootProps, slotStyles, alignment, size, variant, unstyled, }: PostkitNewsletterSignupProps): import("react").JSX.Element;
//# sourceMappingURL=newsletter-signup.d.ts.map