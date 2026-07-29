import { PostkitAppearsOn } from './components/appears-on.js';
import { PostkitAudio } from './components/audio.js';
import { PostkitAuthorCard } from './components/author-card.js';
import { PostkitCallToAction } from './components/call-to-action.js';
import { PostkitCarousel } from './components/carousel.js';
import { PostkitChart } from './components/chart.js';
import { PostkitFigure } from './components/figure.js';
import { PostkitLinkPreview } from './components/link-preview.js';
import { PostkitNewsletterSignup } from './components/newsletter-signup.js';
import { createPostkitProseLink, postkitProseComponents, } from './components/prose.js';
import { PostkitShareActions } from './components/share-actions.js';
import { PostkitSocialPost } from './components/social-post.js';
import { PostkitVideo } from './components/video.js';
import { PostkitCodeBlock, PostkitCodeGroup, PostkitDiff, PostkitFileCard, PostkitFileTree, PostkitTerminal, } from './components/technical-content.js';
import { PostkitAudienceBoundary, PostkitComparison, PostkitKeyTakeaway, PostkitPoll, PostkitProductCard, PostkitPullQuote, PostkitRelatedContent, PostkitSeriesNavigation, PostkitSponsorBlock, PostkitStat, } from './components/publication.js';
import { PostkitAside, PostkitCallout, PostkitCardGrid, PostkitDisclosure, PostkitGallery, PostkitSteps, PostkitTabs, } from './components/article-structure.js';
import { createPostkitLink, } from './link.js';
export const postkitMdxComponents = Object.freeze({
    ...postkitProseComponents,
    AudienceBoundary: PostkitAudienceBoundary,
    AppearsOn: PostkitAppearsOn,
    Aside: PostkitAside,
    Audio: PostkitAudio,
    AuthorCard: PostkitAuthorCard,
    CallToAction: PostkitCallToAction,
    Callout: PostkitCallout,
    CardGrid: PostkitCardGrid,
    Carousel: PostkitCarousel,
    Chart: PostkitChart,
    CodeBlock: PostkitCodeBlock,
    CodeGroup: PostkitCodeGroup,
    Comparison: PostkitComparison,
    Diff: PostkitDiff,
    Figure: PostkitFigure,
    FileCard: PostkitFileCard,
    FileTree: PostkitFileTree,
    Disclosure: PostkitDisclosure,
    Gallery: PostkitGallery,
    LinkPreview: PostkitLinkPreview,
    KeyTakeaway: PostkitKeyTakeaway,
    NewsletterSignup: PostkitNewsletterSignup,
    Poll: PostkitPoll,
    ProductCard: PostkitProductCard,
    PullQuote: PostkitPullQuote,
    RelatedContent: PostkitRelatedContent,
    ShareActions: PostkitShareActions,
    SeriesNavigation: PostkitSeriesNavigation,
    SocialPost: PostkitSocialPost,
    Steps: PostkitSteps,
    SponsorBlock: PostkitSponsorBlock,
    Stat: PostkitStat,
    Tabs: PostkitTabs,
    Terminal: PostkitTerminal,
    Video: PostkitVideo,
});
export function createPostkitMdxComponents(options = {}) {
    const link = typeof options.link === 'function'
        ? options.link
        : createPostkitLink(options.link);
    return {
        ...postkitMdxComponents,
        a: createPostkitProseLink(link),
        ...options.components,
    };
}
