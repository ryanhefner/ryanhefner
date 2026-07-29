import type { LinkResolverId, ResolvedLinkPreview } from './types.js';
export interface NormalizeOEmbedOptions {
    readonly providerId: LinkResolverId;
    readonly requestedUrl: string;
    readonly fallbackUrl?: string;
}
export declare function normalizeOEmbed(value: unknown, options: NormalizeOEmbedOptions): ResolvedLinkPreview;
//# sourceMappingURL=oembed.d.ts.map