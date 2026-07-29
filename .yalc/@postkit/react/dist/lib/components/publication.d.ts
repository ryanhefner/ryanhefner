import { type BoxProps, type RecipeVariantProps, type UnstyledProp } from '@chakra-ui/react';
import { type ReactNode } from 'react';
import { postkitAudienceBoundaryRecipe, postkitComparisonRecipe, postkitKeyTakeawayRecipe, postkitPollRecipe, postkitProductCardRecipe, postkitPullQuoteRecipe, postkitRelatedContentRecipe, postkitSeriesNavigationRecipe, postkitSponsorBlockRecipe, postkitStatRecipe, type PostkitAudienceBoundarySlot, type PostkitComparisonSlot, type PostkitKeyTakeawaySlot, type PostkitPollSlot, type PostkitProductCardSlot, type PostkitPullQuoteSlot, type PostkitRelatedContentSlot, type PostkitSeriesNavigationSlot, type PostkitSponsorBlockSlot, type PostkitStatSlot } from '../recipes/publication.recipe.js';
import { type PostkitSlotStyles } from '../recipes/types.js';
type SharedRootProps<Slot extends string> = {
    readonly rootProps?: BoxProps;
    readonly slotStyles?: PostkitSlotStyles<Slot>;
};
export type PostkitPullQuoteProps = {
    readonly quote: string;
    readonly attribution?: string;
    readonly cite?: string;
} & SharedRootProps<PostkitPullQuoteSlot> & RecipeVariantProps<typeof postkitPullQuoteRecipe> & UnstyledProp;
export declare function PostkitPullQuote({ quote, attribution, cite, rootProps, slotStyles, size, variant, unstyled, }: PostkitPullQuoteProps): import("react").JSX.Element;
export type PostkitKeyTakeawayProps = {
    readonly title?: string;
    readonly eyebrow?: string;
    readonly items?: string | readonly string[];
    readonly children?: ReactNode;
} & SharedRootProps<PostkitKeyTakeawaySlot> & RecipeVariantProps<typeof postkitKeyTakeawayRecipe> & UnstyledProp;
export declare function PostkitKeyTakeaway({ title, eyebrow, items: value, children, rootProps, slotStyles, size, variant, unstyled, }: PostkitKeyTakeawayProps): import("react").JSX.Element;
export type PostkitStatProps = {
    readonly value: string | number;
    readonly label: string;
    readonly trend?: string;
    readonly description?: string;
} & SharedRootProps<PostkitStatSlot> & RecipeVariantProps<typeof postkitStatRecipe> & UnstyledProp;
export declare function PostkitStat({ value, label, trend, description, rootProps, slotStyles, size, variant, unstyled, }: PostkitStatProps): import("react").JSX.Element;
export interface PostkitComparisonItem {
    readonly label: string;
    readonly values: readonly (string | number | boolean | null)[];
}
export type PostkitComparisonProps = {
    readonly columns: string | readonly string[];
    readonly items: string | readonly PostkitComparisonItem[];
    readonly title?: string;
    readonly description?: string;
} & SharedRootProps<PostkitComparisonSlot> & RecipeVariantProps<typeof postkitComparisonRecipe> & UnstyledProp;
export declare function PostkitComparison({ columns: columnsValue, items: itemsValue, title, description, rootProps, slotStyles, size, variant, unstyled, }: PostkitComparisonProps): import("react").JSX.Element;
export interface PostkitPollOption {
    readonly id: string;
    readonly label: string;
    readonly votes?: number;
}
export type PostkitPollProps = {
    readonly question: string;
    readonly description?: string;
    readonly options: string | readonly PostkitPollOption[];
    readonly totalVotes?: number | string;
    readonly selectedId?: string;
    readonly onVote?: (option: PostkitPollOption) => void | Promise<void>;
} & SharedRootProps<PostkitPollSlot> & RecipeVariantProps<typeof postkitPollRecipe> & UnstyledProp;
export declare function PostkitPoll({ question, description, options: value, totalVotes, selectedId, onVote, rootProps, slotStyles, size, variant, unstyled, }: PostkitPollProps): import("react").JSX.Element;
export type PostkitProductCardProps = {
    readonly title: string;
    readonly description?: string;
    readonly href: string;
    readonly actionLabel?: string;
    readonly imageSrc?: string;
    readonly imageAlt?: string;
    readonly price?: string;
    readonly rating?: number | string;
    readonly badge?: string;
    readonly rel?: string;
} & SharedRootProps<PostkitProductCardSlot> & RecipeVariantProps<typeof postkitProductCardRecipe> & UnstyledProp;
export declare function PostkitProductCard({ title, description, href, actionLabel, imageSrc, imageAlt, price, rating, badge, rel, rootProps, slotStyles, size, variant, unstyled, }: PostkitProductCardProps): import("react").JSX.Element;
export interface PostkitRelatedContentItem {
    readonly title: string;
    readonly href: string;
    readonly description?: string;
    readonly meta?: string;
}
export type PostkitRelatedContentProps = {
    readonly items: string | readonly PostkitRelatedContentItem[];
    readonly title?: string;
} & SharedRootProps<PostkitRelatedContentSlot> & RecipeVariantProps<typeof postkitRelatedContentRecipe> & UnstyledProp;
export declare function PostkitRelatedContent({ items: value, title, rootProps, slotStyles, size, variant, unstyled, }: PostkitRelatedContentProps): import("react").JSX.Element;
export interface PostkitSeriesLink {
    readonly title: string;
    readonly href: string;
}
export type PostkitSeriesNavigationProps = {
    readonly title: string;
    readonly current?: number | string;
    readonly total?: number | string;
    readonly previous?: PostkitSeriesLink | string;
    readonly next?: PostkitSeriesLink | string;
} & SharedRootProps<PostkitSeriesNavigationSlot> & RecipeVariantProps<typeof postkitSeriesNavigationRecipe> & UnstyledProp;
export declare function PostkitSeriesNavigation({ title, current, total, previous: previousValue, next: nextValue, rootProps, slotStyles, size, variant, unstyled, }: PostkitSeriesNavigationProps): import("react").JSX.Element;
export type PostkitSponsorBlockProps = {
    readonly name: string;
    readonly message?: string;
    readonly href?: string;
    readonly actionLabel?: string;
    readonly logoSrc?: string;
    readonly logoAlt?: string;
    readonly disclosure?: string;
} & SharedRootProps<PostkitSponsorBlockSlot> & RecipeVariantProps<typeof postkitSponsorBlockRecipe> & UnstyledProp;
export declare function PostkitSponsorBlock({ name, message, href, actionLabel, logoSrc, logoAlt, disclosure, rootProps, slotStyles, size, variant, unstyled, }: PostkitSponsorBlockProps): import("react").JSX.Element;
export type PostkitAudienceBoundaryProps = {
    readonly audience: string;
    readonly children?: ReactNode;
    readonly fallback?: ReactNode;
    readonly authorized?: boolean;
    readonly showLabel?: boolean | string;
} & SharedRootProps<PostkitAudienceBoundarySlot> & RecipeVariantProps<typeof postkitAudienceBoundaryRecipe> & UnstyledProp;
export declare function PostkitAudienceBoundary({ audience, children, fallback, authorized, showLabel, rootProps, slotStyles, size, variant, unstyled, }: PostkitAudienceBoundaryProps): import("react").JSX.Element;
export {};
//# sourceMappingURL=publication.d.ts.map