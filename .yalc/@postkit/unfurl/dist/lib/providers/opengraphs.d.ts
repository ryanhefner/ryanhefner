import type { LinkResolver, ProviderResolverOptions, ResolvedLinkPreview, ResolvedLinkRequesterFamily } from '../types.js';
export interface OpenGraphsResolverOptions extends ProviderResolverOptions {
    readonly apiKey?: string;
}
export type OpenGraphsISODateTime = string;
export type OpenGraphsUrl = string;
export type OpenGraphsRequesterFamily = ResolvedLinkRequesterFamily;
export interface OpenGraphsImage {
    readonly url: OpenGraphsUrl;
    readonly alt: string | null;
    readonly type: string | null;
    readonly width: number | null;
    readonly height: number | null;
}
export interface OpenGraphsAudio {
    readonly url: OpenGraphsUrl;
    readonly type: string | null;
    readonly durationSeconds: number | null;
}
export interface OpenGraphsVideo {
    readonly url: OpenGraphsUrl;
    readonly type: string | null;
    readonly width: number | null;
    readonly height: number | null;
    readonly poster: OpenGraphsUrl | null;
}
export interface OpenGraphsEmbed {
    readonly type: 'link' | 'photo' | 'rich' | 'video';
    readonly src: OpenGraphsUrl | null;
    readonly rawHtml: string | null;
    readonly thumbnail: OpenGraphsImage | null;
    readonly width: number | null;
    readonly height: number | null;
    readonly aspectRatio: number | null;
    readonly title: string | null;
}
export interface OpenGraphsProvider {
    readonly id: string;
    readonly name: string;
    readonly url: OpenGraphsUrl;
}
export interface OpenGraphsSocialAuthor {
    readonly name: string | null;
    readonly handle: string | null;
    readonly url: OpenGraphsUrl | null;
    readonly avatar: OpenGraphsUrl | null;
}
export interface OpenGraphsSocialMetrics {
    readonly replies: number | null;
    readonly reposts: number | null;
    readonly likes: number | null;
    readonly shares: number | null;
}
export interface OpenGraphsQuotedPost {
    readonly service: string;
    readonly url: OpenGraphsUrl;
    readonly author: OpenGraphsSocialAuthor | null;
    readonly text: string | null;
    readonly publishedAt: OpenGraphsISODateTime | null;
    readonly images: readonly OpenGraphsImage[];
    readonly video: readonly OpenGraphsVideo[];
    readonly metrics: OpenGraphsSocialMetrics | null;
}
export interface OpenGraphsSocialPost extends OpenGraphsQuotedPost {
    readonly quotedPost: OpenGraphsQuotedPost | null;
}
export interface OpenGraphsResponse {
    readonly schemaVersion: 1;
    readonly requestId: string;
    readonly resolver: {
        readonly id: 'opengraphs';
        readonly name: 'OpenGraphs';
        readonly url: 'https://opengraphs.com/';
    };
    readonly data: {
        readonly canonicalUrl: OpenGraphsUrl;
        readonly title: string;
        readonly description: string | null;
        readonly siteName: string | null;
        readonly author: string | null;
        readonly authorUrl: OpenGraphsUrl | null;
        readonly favicon: OpenGraphsUrl | null;
        readonly images: readonly OpenGraphsImage[];
        readonly audio: readonly OpenGraphsAudio[];
        readonly video: readonly OpenGraphsVideo[];
        readonly embed: OpenGraphsEmbed | null;
        readonly provider: OpenGraphsProvider;
        readonly social: OpenGraphsSocialPost | null;
    };
    readonly cache: {
        readonly strategy: 'bypass' | 'refresh' | 'use';
        readonly result: 'hit' | 'miss' | 'stale' | 'unavailable';
        readonly fetchedAt: OpenGraphsISODateTime;
        readonly expiresAt: OpenGraphsISODateTime | null;
        readonly maxAgeSeconds: number;
    };
    readonly resolution: {
        readonly kind: 'fallback' | 'metadata' | 'oembed';
        readonly requestedMode: 'auto' | 'metadata' | 'oembed';
        readonly requestedUrl: OpenGraphsUrl;
        readonly requester: OpenGraphsRequesterFamily;
        readonly upstreamError: {
            readonly code: string;
            readonly statusCode: number | null;
        } | null;
    };
}
export declare function normalizeOpenGraphsResponse(value: unknown, requestedUrl: string): ResolvedLinkPreview;
export declare function createOpenGraphsResolver(options?: OpenGraphsResolverOptions): LinkResolver;
//# sourceMappingURL=opengraphs.d.ts.map