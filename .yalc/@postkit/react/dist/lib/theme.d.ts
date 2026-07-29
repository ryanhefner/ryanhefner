import { type SlotRecipeConfig, type SystemConfig, type SystemContext } from '@chakra-ui/react';
import { postkitAudioRecipe } from './recipes/audio.recipe.js';
import { postkitAppearsOnRecipe } from './recipes/appears-on.recipe.js';
import { postkitCarouselRecipe } from './recipes/carousel.recipe.js';
import { postkitAuthorCardRecipe } from './recipes/author-card.recipe.js';
import { postkitCallToActionRecipe } from './recipes/call-to-action.recipe.js';
import { postkitCalloutRecipe, postkitCardGridRecipe, postkitDisclosureRecipe, postkitGalleryRecipe, postkitStepsRecipe, postkitTabsRecipe } from './recipes/article-structure.recipe.js';
import { postkitChartRecipe } from './recipes/chart.recipe.js';
import { postkitFigureRecipe } from './recipes/figure.recipe.js';
import { postkitLinkPreviewRecipe } from './recipes/link-preview.recipe.js';
import { postkitNewsletterSignupRecipe } from './recipes/newsletter-signup.recipe.js';
import { postkitProseRecipe } from './recipes/prose.recipe.js';
import { postkitShareActionsRecipe } from './recipes/share-actions.recipe.js';
import { postkitSocialPostRecipe } from './recipes/social-post.recipe.js';
import { postkitVideoRecipe } from './recipes/video.recipe.js';
import { postkitCodeBlockRecipe, postkitCodeGroupRecipe, postkitDiffRecipe, postkitFileCardRecipe, postkitFileTreeRecipe, postkitTerminalRecipe } from './recipes/technical-content.recipe.js';
import { postkitAudienceBoundaryRecipe, postkitComparisonRecipe, postkitKeyTakeawayRecipe, postkitPollRecipe, postkitProductCardRecipe, postkitPullQuoteRecipe, postkitRelatedContentRecipe, postkitSeriesNavigationRecipe, postkitSponsorBlockRecipe, postkitStatRecipe } from './recipes/publication.recipe.js';
export declare const postkitRecipeKeys: Readonly<{
    readonly audienceBoundary: "postkitAudienceBoundary";
    readonly appearsOn: "postkitAppearsOn";
    readonly audio: "postkitAudio";
    readonly authorCard: "postkitAuthorCard";
    readonly callout: "postkitCallout";
    readonly callToAction: "postkitCallToAction";
    readonly cardGrid: "postkitCardGrid";
    readonly carousel: "postkitCarousel";
    readonly chart: "postkitChart";
    readonly codeBlock: "postkitCodeBlock";
    readonly codeGroup: "postkitCodeGroup";
    readonly comparison: "postkitComparison";
    readonly diff: "postkitDiff";
    readonly figure: "postkitFigure";
    readonly fileCard: "postkitFileCard";
    readonly fileTree: "postkitFileTree";
    readonly disclosure: "postkitDisclosure";
    readonly gallery: "postkitGallery";
    readonly keyTakeaway: "postkitKeyTakeaway";
    readonly linkPreview: "postkitLinkPreview";
    readonly newsletterSignup: "postkitNewsletterSignup";
    readonly poll: "postkitPoll";
    readonly productCard: "postkitProductCard";
    readonly prose: "postkitProse";
    readonly pullQuote: "postkitPullQuote";
    readonly relatedContent: "postkitRelatedContent";
    readonly shareActions: "postkitShareActions";
    readonly seriesNavigation: "postkitSeriesNavigation";
    readonly socialPost: "postkitSocialPost";
    readonly steps: "postkitSteps";
    readonly sponsorBlock: "postkitSponsorBlock";
    readonly stat: "postkitStat";
    readonly tabs: "postkitTabs";
    readonly terminal: "postkitTerminal";
    readonly video: "postkitVideo";
}>;
export type PostkitRecipeKey = (typeof postkitRecipeKeys)[keyof typeof postkitRecipeKeys];
export type PostkitFontFamily = string | readonly string[];
export interface PostkitTypography {
    /**
     * The default font for prose, descriptions, controls, and component copy.
     * This overrides Chakra's `fonts.body` token.
     */
    readonly body?: PostkitFontFamily;
    /**
     * The font for prose headings and heading-like rich-component slots.
     * This overrides Chakra's `fonts.heading` token.
     */
    readonly heading?: PostkitFontFamily;
    /**
     * The font for inline code, code blocks, terminals, diffs, and file trees.
     * This overrides Chakra's `fonts.mono` token.
     */
    readonly mono?: PostkitFontFamily;
}
type DeepPartial<T> = T extends (...args: never[]) => unknown ? T : T extends readonly unknown[] ? T : T extends object ? {
    readonly [Key in keyof T]?: DeepPartial<T[Key]>;
} : T;
type PostkitRecipeOverride<Recipe extends SlotRecipeConfig> = DeepPartial<Omit<Recipe, 'slots'>>;
export interface PostkitThemeOverrides {
    /**
     * Optional font stacks for Postkit's three independent typography roles.
     * A host can instead configure the matching Chakra font tokens directly.
     */
    readonly typography?: PostkitTypography;
    readonly audienceBoundary?: PostkitRecipeOverride<typeof postkitAudienceBoundaryRecipe>;
    readonly appearsOn?: PostkitRecipeOverride<typeof postkitAppearsOnRecipe>;
    readonly audio?: PostkitRecipeOverride<typeof postkitAudioRecipe>;
    readonly authorCard?: PostkitRecipeOverride<typeof postkitAuthorCardRecipe>;
    readonly callout?: PostkitRecipeOverride<typeof postkitCalloutRecipe>;
    readonly callToAction?: PostkitRecipeOverride<typeof postkitCallToActionRecipe>;
    readonly carousel?: PostkitRecipeOverride<typeof postkitCarouselRecipe>;
    readonly cardGrid?: PostkitRecipeOverride<typeof postkitCardGridRecipe>;
    readonly chart?: PostkitRecipeOverride<typeof postkitChartRecipe>;
    readonly codeBlock?: PostkitRecipeOverride<typeof postkitCodeBlockRecipe>;
    readonly codeGroup?: PostkitRecipeOverride<typeof postkitCodeGroupRecipe>;
    readonly comparison?: PostkitRecipeOverride<typeof postkitComparisonRecipe>;
    readonly diff?: PostkitRecipeOverride<typeof postkitDiffRecipe>;
    readonly figure?: PostkitRecipeOverride<typeof postkitFigureRecipe>;
    readonly fileCard?: PostkitRecipeOverride<typeof postkitFileCardRecipe>;
    readonly fileTree?: PostkitRecipeOverride<typeof postkitFileTreeRecipe>;
    readonly disclosure?: PostkitRecipeOverride<typeof postkitDisclosureRecipe>;
    readonly gallery?: PostkitRecipeOverride<typeof postkitGalleryRecipe>;
    readonly keyTakeaway?: PostkitRecipeOverride<typeof postkitKeyTakeawayRecipe>;
    readonly linkPreview?: PostkitRecipeOverride<typeof postkitLinkPreviewRecipe>;
    readonly newsletterSignup?: PostkitRecipeOverride<typeof postkitNewsletterSignupRecipe>;
    readonly poll?: PostkitRecipeOverride<typeof postkitPollRecipe>;
    readonly productCard?: PostkitRecipeOverride<typeof postkitProductCardRecipe>;
    readonly prose?: PostkitRecipeOverride<typeof postkitProseRecipe>;
    readonly pullQuote?: PostkitRecipeOverride<typeof postkitPullQuoteRecipe>;
    readonly relatedContent?: PostkitRecipeOverride<typeof postkitRelatedContentRecipe>;
    readonly shareActions?: PostkitRecipeOverride<typeof postkitShareActionsRecipe>;
    readonly seriesNavigation?: PostkitRecipeOverride<typeof postkitSeriesNavigationRecipe>;
    readonly socialPost?: PostkitRecipeOverride<typeof postkitSocialPostRecipe>;
    readonly steps?: PostkitRecipeOverride<typeof postkitStepsRecipe>;
    readonly sponsorBlock?: PostkitRecipeOverride<typeof postkitSponsorBlockRecipe>;
    readonly stat?: PostkitRecipeOverride<typeof postkitStatRecipe>;
    readonly tabs?: PostkitRecipeOverride<typeof postkitTabsRecipe>;
    readonly terminal?: PostkitRecipeOverride<typeof postkitTerminalRecipe>;
    readonly video?: PostkitRecipeOverride<typeof postkitVideoRecipe>;
}
/**
 * Postkit's component-scoped Chakra defaults. The stable slot-recipe keys let
 * a host override Postkit without changing unrelated Chakra components.
 */
export declare const postkitDefaultTheme: SystemConfig;
/**
 * Creates a Chakra config containing only component-scoped Postkit overrides.
 * It is intended for the `theme` prop on PostkitProvider.
 */
export declare function createPostkitTheme(overrides: PostkitThemeOverrides): SystemConfig;
/**
 * Layers an existing Chakra system and optional context overrides over
 * Postkit's defaults. A site system can therefore establish global Postkit
 * styles while a nested PostkitProvider can supply narrower defaults.
 */
export declare function createPostkitSystem(system?: SystemContext, overrides?: SystemConfig): SystemContext;
export {};
//# sourceMappingURL=theme.d.ts.map