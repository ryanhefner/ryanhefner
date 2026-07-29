import { createSystem, defaultSystem, defineConfig, } from '@chakra-ui/react';
import { postkitAudioRecipe, postkitAudioSlots, } from './recipes/audio.recipe.js';
import { postkitAppearsOnRecipe, postkitAppearsOnSlots, } from './recipes/appears-on.recipe.js';
import { postkitCarouselRecipe, postkitCarouselSlots, } from './recipes/carousel.recipe.js';
import { postkitAuthorCardRecipe, postkitAuthorCardSlots, } from './recipes/author-card.recipe.js';
import { postkitCallToActionRecipe, postkitCallToActionSlots, } from './recipes/call-to-action.recipe.js';
import { postkitCalloutRecipe, postkitCalloutSlots, postkitCardGridRecipe, postkitCardGridSlots, postkitDisclosureRecipe, postkitDisclosureSlots, postkitGalleryRecipe, postkitGallerySlots, postkitStepsRecipe, postkitStepsSlots, postkitTabsRecipe, postkitTabsSlots, } from './recipes/article-structure.recipe.js';
import { postkitChartRecipe, postkitChartSlots, } from './recipes/chart.recipe.js';
import { postkitFigureRecipe, postkitFigureSlots, } from './recipes/figure.recipe.js';
import { postkitLinkPreviewRecipe, postkitLinkPreviewSlots, } from './recipes/link-preview.recipe.js';
import { postkitNewsletterSignupRecipe, postkitNewsletterSignupSlots, } from './recipes/newsletter-signup.recipe.js';
import { postkitProseRecipe, postkitProseSlots, } from './recipes/prose.recipe.js';
import { postkitShareActionsRecipe, postkitShareActionsSlots, } from './recipes/share-actions.recipe.js';
import { postkitSocialPostRecipe, postkitSocialPostSlots, } from './recipes/social-post.recipe.js';
import { postkitVideoRecipe, postkitVideoSlots, } from './recipes/video.recipe.js';
import { postkitCodeBlockRecipe, postkitCodeBlockSlots, postkitCodeGroupRecipe, postkitCodeGroupSlots, postkitDiffRecipe, postkitDiffSlots, postkitFileCardRecipe, postkitFileCardSlots, postkitFileTreeRecipe, postkitFileTreeSlots, postkitTerminalRecipe, postkitTerminalSlots, } from './recipes/technical-content.recipe.js';
import { postkitAudienceBoundaryRecipe, postkitAudienceBoundarySlots, postkitComparisonRecipe, postkitComparisonSlots, postkitKeyTakeawayRecipe, postkitKeyTakeawaySlots, postkitPollRecipe, postkitPollSlots, postkitProductCardRecipe, postkitProductCardSlots, postkitPullQuoteRecipe, postkitPullQuoteSlots, postkitRelatedContentRecipe, postkitRelatedContentSlots, postkitSeriesNavigationRecipe, postkitSeriesNavigationSlots, postkitSponsorBlockRecipe, postkitSponsorBlockSlots, postkitStatRecipe, postkitStatSlots, } from './recipes/publication.recipe.js';
export const postkitRecipeKeys = Object.freeze({
    audienceBoundary: 'postkitAudienceBoundary',
    appearsOn: 'postkitAppearsOn',
    audio: 'postkitAudio',
    authorCard: 'postkitAuthorCard',
    callout: 'postkitCallout',
    callToAction: 'postkitCallToAction',
    cardGrid: 'postkitCardGrid',
    carousel: 'postkitCarousel',
    chart: 'postkitChart',
    codeBlock: 'postkitCodeBlock',
    codeGroup: 'postkitCodeGroup',
    comparison: 'postkitComparison',
    diff: 'postkitDiff',
    figure: 'postkitFigure',
    fileCard: 'postkitFileCard',
    fileTree: 'postkitFileTree',
    disclosure: 'postkitDisclosure',
    gallery: 'postkitGallery',
    keyTakeaway: 'postkitKeyTakeaway',
    linkPreview: 'postkitLinkPreview',
    newsletterSignup: 'postkitNewsletterSignup',
    poll: 'postkitPoll',
    productCard: 'postkitProductCard',
    prose: 'postkitProse',
    pullQuote: 'postkitPullQuote',
    relatedContent: 'postkitRelatedContent',
    shareActions: 'postkitShareActions',
    seriesNavigation: 'postkitSeriesNavigation',
    socialPost: 'postkitSocialPost',
    steps: 'postkitSteps',
    sponsorBlock: 'postkitSponsorBlock',
    stat: 'postkitStat',
    tabs: 'postkitTabs',
    terminal: 'postkitTerminal',
    video: 'postkitVideo',
});
const postkitHeadingSlots = new Set([
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'title',
    'cardTitle',
    'itemTitle',
    'linkTitle',
    'question',
    'summary',
]);
function withPostkitTypographyDefaults(recipes) {
    return Object.fromEntries(Object.entries(recipes).map(([key, recipe]) => {
        const base = { ...recipe.base };
        for (const slot of recipe.slots) {
            const styles = base[slot] ?? {};
            const defaultFontFamily = slot === 'root'
                ? 'body'
                : postkitHeadingSlots.has(slot) && styles.fontFamily === undefined
                    ? 'heading'
                    : undefined;
            if (defaultFontFamily) {
                base[slot] = { ...styles, fontFamily: defaultFontFamily };
            }
        }
        return [key, { ...recipe, base }];
    }));
}
/**
 * Postkit's component-scoped Chakra defaults. The stable slot-recipe keys let
 * a host override Postkit without changing unrelated Chakra components.
 */
export const postkitDefaultTheme = defineConfig({
    theme: {
        slotRecipes: withPostkitTypographyDefaults({
            [postkitRecipeKeys.audienceBoundary]: postkitAudienceBoundaryRecipe,
            [postkitRecipeKeys.appearsOn]: postkitAppearsOnRecipe,
            [postkitRecipeKeys.audio]: postkitAudioRecipe,
            [postkitRecipeKeys.authorCard]: postkitAuthorCardRecipe,
            [postkitRecipeKeys.callout]: postkitCalloutRecipe,
            [postkitRecipeKeys.callToAction]: postkitCallToActionRecipe,
            [postkitRecipeKeys.cardGrid]: postkitCardGridRecipe,
            [postkitRecipeKeys.carousel]: postkitCarouselRecipe,
            [postkitRecipeKeys.chart]: postkitChartRecipe,
            [postkitRecipeKeys.codeBlock]: postkitCodeBlockRecipe,
            [postkitRecipeKeys.codeGroup]: postkitCodeGroupRecipe,
            [postkitRecipeKeys.comparison]: postkitComparisonRecipe,
            [postkitRecipeKeys.diff]: postkitDiffRecipe,
            [postkitRecipeKeys.figure]: postkitFigureRecipe,
            [postkitRecipeKeys.fileCard]: postkitFileCardRecipe,
            [postkitRecipeKeys.fileTree]: postkitFileTreeRecipe,
            [postkitRecipeKeys.disclosure]: postkitDisclosureRecipe,
            [postkitRecipeKeys.gallery]: postkitGalleryRecipe,
            [postkitRecipeKeys.keyTakeaway]: postkitKeyTakeawayRecipe,
            [postkitRecipeKeys.linkPreview]: postkitLinkPreviewRecipe,
            [postkitRecipeKeys.newsletterSignup]: postkitNewsletterSignupRecipe,
            [postkitRecipeKeys.poll]: postkitPollRecipe,
            [postkitRecipeKeys.productCard]: postkitProductCardRecipe,
            [postkitRecipeKeys.prose]: postkitProseRecipe,
            [postkitRecipeKeys.pullQuote]: postkitPullQuoteRecipe,
            [postkitRecipeKeys.relatedContent]: postkitRelatedContentRecipe,
            [postkitRecipeKeys.shareActions]: postkitShareActionsRecipe,
            [postkitRecipeKeys.seriesNavigation]: postkitSeriesNavigationRecipe,
            [postkitRecipeKeys.socialPost]: postkitSocialPostRecipe,
            [postkitRecipeKeys.steps]: postkitStepsRecipe,
            [postkitRecipeKeys.sponsorBlock]: postkitSponsorBlockRecipe,
            [postkitRecipeKeys.stat]: postkitStatRecipe,
            [postkitRecipeKeys.tabs]: postkitTabsRecipe,
            [postkitRecipeKeys.terminal]: postkitTerminalRecipe,
            [postkitRecipeKeys.video]: postkitVideoRecipe,
        }),
    },
});
function overrideRecipe(slots, override) {
    return { slots, ...override };
}
/**
 * Creates a Chakra config containing only component-scoped Postkit overrides.
 * It is intended for the `theme` prop on PostkitProvider.
 */
export function createPostkitTheme(overrides) {
    const slotRecipes = {};
    const fonts = {};
    if (overrides.typography?.body) {
        fonts.body = { value: overrides.typography.body };
    }
    if (overrides.typography?.heading) {
        fonts.heading = { value: overrides.typography.heading };
    }
    if (overrides.typography?.mono) {
        fonts.mono = { value: overrides.typography.mono };
    }
    if (overrides.audienceBoundary) {
        slotRecipes[postkitRecipeKeys.audienceBoundary] = overrideRecipe(postkitAudienceBoundarySlots, overrides.audienceBoundary);
    }
    if (overrides.appearsOn) {
        slotRecipes[postkitRecipeKeys.appearsOn] = overrideRecipe(postkitAppearsOnSlots, overrides.appearsOn);
    }
    if (overrides.audio) {
        slotRecipes[postkitRecipeKeys.audio] = overrideRecipe(postkitAudioSlots, overrides.audio);
    }
    if (overrides.authorCard) {
        slotRecipes[postkitRecipeKeys.authorCard] = overrideRecipe(postkitAuthorCardSlots, overrides.authorCard);
    }
    if (overrides.callout) {
        slotRecipes[postkitRecipeKeys.callout] = overrideRecipe(postkitCalloutSlots, overrides.callout);
    }
    if (overrides.callToAction) {
        slotRecipes[postkitRecipeKeys.callToAction] = overrideRecipe(postkitCallToActionSlots, overrides.callToAction);
    }
    if (overrides.carousel) {
        slotRecipes[postkitRecipeKeys.carousel] = overrideRecipe(postkitCarouselSlots, overrides.carousel);
    }
    if (overrides.cardGrid) {
        slotRecipes[postkitRecipeKeys.cardGrid] = overrideRecipe(postkitCardGridSlots, overrides.cardGrid);
    }
    if (overrides.chart) {
        slotRecipes[postkitRecipeKeys.chart] = overrideRecipe(postkitChartSlots, overrides.chart);
    }
    if (overrides.codeBlock) {
        slotRecipes[postkitRecipeKeys.codeBlock] = overrideRecipe(postkitCodeBlockSlots, overrides.codeBlock);
    }
    if (overrides.codeGroup) {
        slotRecipes[postkitRecipeKeys.codeGroup] = overrideRecipe(postkitCodeGroupSlots, overrides.codeGroup);
    }
    if (overrides.comparison) {
        slotRecipes[postkitRecipeKeys.comparison] = overrideRecipe(postkitComparisonSlots, overrides.comparison);
    }
    if (overrides.diff) {
        slotRecipes[postkitRecipeKeys.diff] = overrideRecipe(postkitDiffSlots, overrides.diff);
    }
    if (overrides.figure) {
        slotRecipes[postkitRecipeKeys.figure] = overrideRecipe(postkitFigureSlots, overrides.figure);
    }
    if (overrides.fileCard) {
        slotRecipes[postkitRecipeKeys.fileCard] = overrideRecipe(postkitFileCardSlots, overrides.fileCard);
    }
    if (overrides.fileTree) {
        slotRecipes[postkitRecipeKeys.fileTree] = overrideRecipe(postkitFileTreeSlots, overrides.fileTree);
    }
    if (overrides.disclosure) {
        slotRecipes[postkitRecipeKeys.disclosure] = overrideRecipe(postkitDisclosureSlots, overrides.disclosure);
    }
    if (overrides.gallery) {
        slotRecipes[postkitRecipeKeys.gallery] = overrideRecipe(postkitGallerySlots, overrides.gallery);
    }
    if (overrides.keyTakeaway) {
        slotRecipes[postkitRecipeKeys.keyTakeaway] = overrideRecipe(postkitKeyTakeawaySlots, overrides.keyTakeaway);
    }
    if (overrides.linkPreview) {
        slotRecipes[postkitRecipeKeys.linkPreview] = overrideRecipe(postkitLinkPreviewSlots, overrides.linkPreview);
    }
    if (overrides.newsletterSignup) {
        slotRecipes[postkitRecipeKeys.newsletterSignup] = overrideRecipe(postkitNewsletterSignupSlots, overrides.newsletterSignup);
    }
    if (overrides.poll) {
        slotRecipes[postkitRecipeKeys.poll] = overrideRecipe(postkitPollSlots, overrides.poll);
    }
    if (overrides.productCard) {
        slotRecipes[postkitRecipeKeys.productCard] = overrideRecipe(postkitProductCardSlots, overrides.productCard);
    }
    if (overrides.prose) {
        slotRecipes[postkitRecipeKeys.prose] = overrideRecipe(postkitProseSlots, overrides.prose);
    }
    if (overrides.pullQuote) {
        slotRecipes[postkitRecipeKeys.pullQuote] = overrideRecipe(postkitPullQuoteSlots, overrides.pullQuote);
    }
    if (overrides.relatedContent) {
        slotRecipes[postkitRecipeKeys.relatedContent] = overrideRecipe(postkitRelatedContentSlots, overrides.relatedContent);
    }
    if (overrides.shareActions) {
        slotRecipes[postkitRecipeKeys.shareActions] = overrideRecipe(postkitShareActionsSlots, overrides.shareActions);
    }
    if (overrides.seriesNavigation) {
        slotRecipes[postkitRecipeKeys.seriesNavigation] = overrideRecipe(postkitSeriesNavigationSlots, overrides.seriesNavigation);
    }
    if (overrides.socialPost) {
        slotRecipes[postkitRecipeKeys.socialPost] = overrideRecipe(postkitSocialPostSlots, overrides.socialPost);
    }
    if (overrides.steps) {
        slotRecipes[postkitRecipeKeys.steps] = overrideRecipe(postkitStepsSlots, overrides.steps);
    }
    if (overrides.sponsorBlock) {
        slotRecipes[postkitRecipeKeys.sponsorBlock] = overrideRecipe(postkitSponsorBlockSlots, overrides.sponsorBlock);
    }
    if (overrides.stat) {
        slotRecipes[postkitRecipeKeys.stat] = overrideRecipe(postkitStatSlots, overrides.stat);
    }
    if (overrides.tabs) {
        slotRecipes[postkitRecipeKeys.tabs] = overrideRecipe(postkitTabsSlots, overrides.tabs);
    }
    if (overrides.terminal) {
        slotRecipes[postkitRecipeKeys.terminal] = overrideRecipe(postkitTerminalSlots, overrides.terminal);
    }
    if (overrides.video) {
        slotRecipes[postkitRecipeKeys.video] = overrideRecipe(postkitVideoSlots, overrides.video);
    }
    return defineConfig({
        theme: {
            ...(Object.keys(fonts).length ? { tokens: { fonts } } : {}),
            slotRecipes,
        },
    });
}
/**
 * Layers an existing Chakra system and optional context overrides over
 * Postkit's defaults. A site system can therefore establish global Postkit
 * styles while a nested PostkitProvider can supply narrower defaults.
 */
export function createPostkitSystem(system = defaultSystem, overrides) {
    return createSystem(postkitDefaultTheme, system._config, ...(overrides ? [overrides] : []));
}
