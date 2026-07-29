export type BuiltInLinkResolverId = 'opengraphs' | 'iframely' | 'embedly' | 'microlink';
export type LinkResolverId = BuiltInLinkResolverId | (string & Record<never, never>);
export interface ResolvedLinkImage {
    readonly src: string;
    readonly alt?: string;
    readonly type?: string;
    readonly width?: number;
    readonly height?: number;
}
export interface ResolvedLinkMedia {
    readonly src: string;
    readonly type?: string;
    readonly width?: number;
    readonly height?: number;
    readonly durationSeconds?: number;
    readonly poster?: string;
}
export interface ResolvedLinkEmbed {
    readonly type: 'link' | 'photo' | 'rich' | 'video';
    /**
     * A provider-hosted iframe or media URL that a renderer may place in an
     * isolated iframe. Resolver adapters only populate this for HTTP(S) URLs.
     */
    readonly src?: string;
    readonly width?: number;
    readonly height?: number;
    readonly aspectRatio?: number;
    readonly title?: string;
    readonly thumbnail?: ResolvedLinkImage;
    /**
     * Untrusted provider markup retained for server-side consumers that have
     * their own sanitizer. Postkit's React renderer never injects this value.
     */
    readonly rawHtml?: string;
}
export type ResolvedLinkCacheStrategy = 'bypass' | 'refresh' | 'use';
export type ResolvedLinkCacheResult = 'hit' | 'miss' | 'stale' | 'unavailable';
export interface ResolvedLinkCache {
    readonly strategy?: ResolvedLinkCacheStrategy;
    readonly result?: ResolvedLinkCacheResult;
    readonly fetchedAt?: string;
    readonly expiresAt?: string;
    readonly maxAgeSeconds?: number;
}
export interface ResolvedLinkProvider {
    readonly id: LinkResolverId;
    readonly name?: string;
    readonly url?: string;
}
export type ResolvedLinkRequesterFamily = 'GENERIC' | 'SLACK' | 'LINKEDIN' | 'X' | 'FACEBOOK' | 'DISCORD' | 'MICROSOFT_TEAMS' | 'WHATSAPP' | 'TELEGRAM' | 'IMESSAGE' | 'GOOGLE' | 'OTHER';
export interface ResolvedLinkResolution {
    readonly kind: 'fallback' | 'metadata' | 'oembed';
    readonly requestedMode: 'auto' | 'metadata' | 'oembed';
    readonly requestedUrl: string;
    readonly requester: ResolvedLinkRequesterFamily;
    readonly upstreamError?: {
        readonly code: string;
        readonly statusCode?: number;
    };
}
export interface ResolvedSocialAuthor {
    readonly name?: string;
    readonly handle?: string;
    readonly url?: string;
    readonly avatar?: string;
}
export interface ResolvedSocialMetrics {
    readonly replies?: number;
    readonly reposts?: number;
    readonly likes?: number;
    readonly shares?: number;
}
export interface ResolvedSocialPost {
    readonly service: string;
    readonly url: string;
    readonly author?: ResolvedSocialAuthor;
    readonly text?: string;
    readonly publishedAt?: string;
    readonly images: readonly ResolvedLinkImage[];
    readonly video: readonly ResolvedLinkMedia[];
    readonly metrics?: ResolvedSocialMetrics;
    readonly quotedPost?: ResolvedSocialPost;
}
export interface ResolvedLinkPreview {
    readonly requestedUrl: string;
    readonly url: string;
    readonly title?: string;
    readonly description?: string;
    readonly siteName?: string;
    readonly author?: string;
    readonly authorUrl?: string;
    readonly favicon?: string;
    readonly images: readonly ResolvedLinkImage[];
    readonly audio: readonly ResolvedLinkMedia[];
    readonly video: readonly ResolvedLinkMedia[];
    readonly embed?: ResolvedLinkEmbed;
    readonly social?: ResolvedSocialPost;
    /** The resolver that produced this normalized result. */
    readonly provider: ResolvedLinkProvider;
    /** The upstream site or service described by the resolver result. */
    readonly sourceProvider?: ResolvedLinkProvider;
    readonly cache?: ResolvedLinkCache;
    readonly resolution?: ResolvedLinkResolution;
    readonly requestId?: string;
}
export interface ResolveLinkOptions {
    readonly provider?: LinkResolverId;
    readonly signal?: AbortSignal;
    readonly maxWidth?: number;
    readonly maxHeight?: number;
    readonly force?: boolean;
}
export interface LinkResolver {
    readonly id: LinkResolverId;
    resolve(url: string, options?: ResolveLinkOptions): Promise<ResolvedLinkPreview>;
}
export type PostkitFetch = (input: string | URL | Request, init?: RequestInit) => Promise<Response>;
export interface ProviderResolverOptions {
    readonly endpoint?: string;
    readonly fetch?: PostkitFetch;
    readonly headers?: Readonly<Record<string, string>>;
}
//# sourceMappingURL=types.d.ts.map