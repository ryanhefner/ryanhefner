import type { ResolvedLinkPreview } from '@postkit/unfurl';
import { type BoxProps, type RecipeVariantProps, type UnstyledProp } from '@chakra-ui/react';
import { type ReactNode } from 'react';
import { postkitLinkPreviewRecipe, type PostkitLinkPreviewSlot } from '../recipes/link-preview.recipe.js';
import { type PostkitSlotStyles } from '../recipes/types.js';
export type PostkitLinkPreviewPresentation = 'auto' | 'card' | 'embed' | 'inline' | 'media';
export type PostkitLinkPreviewProps = {
    readonly href: string;
    readonly metadata?: string | ResolvedLinkPreview;
    readonly children?: ReactNode;
    readonly presentation?: PostkitLinkPreviewPresentation;
    readonly images?: 'carousel' | 'first' | 'none';
    readonly media?: 'audio' | 'auto' | 'video';
    readonly activation?: 'click' | 'immediate';
    /**
     * Selects a registered resolver. Build/editor integrations may consume this
     * as a hint, and PostkitProvider passes it to its configured resolver.
     */
    readonly provider?: string;
    readonly title?: string;
    readonly description?: string;
    readonly siteName?: string;
    readonly image?: string;
    readonly imageAlt?: string;
    readonly favicon?: string;
    readonly iframeTitle?: string;
    readonly iframeSandbox?: string;
    readonly rootProps?: BoxProps;
    readonly slotStyles?: PostkitSlotStyles<PostkitLinkPreviewSlot>;
} & RecipeVariantProps<typeof postkitLinkPreviewRecipe> & UnstyledProp;
export declare function PostkitLinkPreview({ href, metadata: metadataValue, children, presentation, images: imageMode, media: mediaPreference, activation, provider, title: titleOverride, description: descriptionOverride, siteName: siteNameOverride, image: imageOverride, imageAlt, favicon: faviconOverride, iframeTitle, iframeSandbox, rootProps, slotStyles, size, variant, unstyled, }: PostkitLinkPreviewProps): import("react").JSX.Element;
//# sourceMappingURL=link-preview.d.ts.map