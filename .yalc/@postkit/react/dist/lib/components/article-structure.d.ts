import { type BoxProps, type RecipeVariantProps, type UnstyledProp } from '@chakra-ui/react';
import { type ReactNode } from 'react';
import { postkitCalloutRecipe, postkitCardGridRecipe, postkitDisclosureRecipe, postkitGalleryRecipe, postkitStepsRecipe, postkitTabsRecipe, type PostkitCalloutSlot, type PostkitCardGridSlot, type PostkitDisclosureSlot, type PostkitGallerySlot, type PostkitStepsSlot, type PostkitTabsSlot } from '../recipes/article-structure.recipe.js';
import { type PostkitSlotStyles } from '../recipes/types.js';
type SharedRootProps<Slot extends string> = {
    readonly rootProps?: BoxProps;
    readonly slotStyles?: PostkitSlotStyles<Slot>;
};
export type PostkitCalloutProps = {
    readonly title?: string;
    readonly children?: ReactNode;
    readonly icon?: ReactNode;
    readonly componentName?: 'Aside' | 'Callout';
} & SharedRootProps<PostkitCalloutSlot> & RecipeVariantProps<typeof postkitCalloutRecipe> & UnstyledProp;
export declare function PostkitCallout({ title, children, icon, componentName, rootProps, slotStyles, size, variant, tone, unstyled, }: PostkitCalloutProps): import("react").JSX.Element;
export type PostkitAsideProps = PostkitCalloutProps;
export declare function PostkitAside(props: PostkitAsideProps): import("react").JSX.Element;
export interface PostkitGalleryItem {
    readonly src: string;
    readonly alt: string;
    readonly caption?: string;
    readonly href?: string;
    readonly width?: number;
    readonly height?: number;
}
export type PostkitGalleryProps = {
    readonly items: string | readonly PostkitGalleryItem[];
    readonly title?: string;
    readonly description?: string;
    readonly columns?: 1 | 2 | 3 | 4;
} & SharedRootProps<PostkitGallerySlot> & RecipeVariantProps<typeof postkitGalleryRecipe> & UnstyledProp;
export declare function PostkitGallery({ items: value, title, description, columns, rootProps, slotStyles, size, variant, unstyled, }: PostkitGalleryProps): import("react").JSX.Element;
export type PostkitDisclosureProps = {
    readonly summary: string;
    readonly children?: ReactNode;
    readonly open?: boolean;
} & SharedRootProps<PostkitDisclosureSlot> & RecipeVariantProps<typeof postkitDisclosureRecipe> & UnstyledProp;
export declare function PostkitDisclosure({ summary, children, open, rootProps, slotStyles, size, variant, unstyled, }: PostkitDisclosureProps): import("react").JSX.Element;
export interface PostkitTabItem {
    readonly id?: string;
    readonly label: string;
    readonly content: ReactNode;
}
export type PostkitTabsProps = {
    readonly items: string | readonly PostkitTabItem[];
    readonly label?: string;
    readonly initialIndex?: number | string;
} & SharedRootProps<PostkitTabsSlot> & RecipeVariantProps<typeof postkitTabsRecipe> & UnstyledProp;
export declare function PostkitTabs({ items: value, label, initialIndex, rootProps, slotStyles, size, variant, unstyled, }: PostkitTabsProps): import("react").JSX.Element;
export interface PostkitStepItem {
    readonly title: string;
    readonly description?: ReactNode;
}
export type PostkitStepsProps = {
    readonly items: string | readonly PostkitStepItem[];
} & SharedRootProps<PostkitStepsSlot> & RecipeVariantProps<typeof postkitStepsRecipe> & UnstyledProp;
export declare function PostkitSteps({ items: value, rootProps, slotStyles, size, variant, unstyled, }: PostkitStepsProps): import("react").JSX.Element;
export interface PostkitCardItem {
    readonly title: string;
    readonly description?: string;
    readonly href?: string;
    readonly linkLabel?: string;
    readonly image?: {
        readonly src: string;
        readonly alt: string;
    };
    readonly meta?: string;
}
export type PostkitCardGridProps = {
    readonly items: string | readonly PostkitCardItem[];
    readonly title?: string;
    readonly description?: string;
    readonly columns?: 1 | 2 | 3 | 4;
} & SharedRootProps<PostkitCardGridSlot> & RecipeVariantProps<typeof postkitCardGridRecipe> & UnstyledProp;
export declare function PostkitCardGrid({ items: value, title, description, columns, rootProps, slotStyles, size, variant, unstyled, }: PostkitCardGridProps): import("react").JSX.Element;
export {};
//# sourceMappingURL=article-structure.d.ts.map