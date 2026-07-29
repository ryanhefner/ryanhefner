import { type PostkitSocialPostSnapshot, type ResolvedLinkPreview, type ResolvedSocialPost } from '@postkit/unfurl';
import { type BoxProps, type RecipeVariantProps, type UnstyledProp } from '@chakra-ui/react';
import { postkitSocialPostRecipe, type PostkitSocialPostSlot } from '../recipes/social-post.recipe.js';
import { type PostkitSlotStyles } from '../recipes/types.js';
export type PostkitSocialPostResolution = 'live' | 'snapshot' | 'snapshot-fallback';
export type PostkitSocialPostSnapshotInfo = 'auto' | 'visible' | 'hidden';
export type PostkitSocialPostProps = {
    readonly href: string;
    readonly metadata?: string | PostkitSocialPostSnapshot | ResolvedLinkPreview | ResolvedSocialPost;
    readonly resolution?: PostkitSocialPostResolution;
    readonly snapshotInfo?: PostkitSocialPostSnapshotInfo;
    readonly provider?: string;
    readonly service?: string;
    readonly authorName?: string;
    readonly authorHandle?: string;
    readonly authorAvatar?: string;
    readonly text?: string;
    readonly publishedAt?: string;
    readonly showMetrics?: boolean | string;
    readonly activation?: 'click' | 'immediate';
    readonly iframeTitle?: string;
    readonly iframeSandbox?: string;
    readonly rootProps?: BoxProps;
    readonly slotStyles?: PostkitSlotStyles<PostkitSocialPostSlot>;
} & RecipeVariantProps<typeof postkitSocialPostRecipe> & UnstyledProp;
export declare function PostkitSocialPost({ href, metadata: metadataValue, resolution: resolutionMode, snapshotInfo, provider, service: serviceOverride, authorName, authorHandle, authorAvatar, text: textOverride, publishedAt, showMetrics, activation, iframeTitle, iframeSandbox, rootProps, slotStyles, branding, presentation, size, variant, unstyled, }: PostkitSocialPostProps): import("react").JSX.Element;
//# sourceMappingURL=social-post.d.ts.map