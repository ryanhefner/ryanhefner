import type { LinkResolver, ProviderResolverOptions, ResolvedLinkPreview } from '../types.js';
export interface IframelyResolverOptions extends ProviderResolverOptions {
    readonly apiKey: string;
}
export declare function normalizeIframelyResponse(value: unknown, requestedUrl: string): ResolvedLinkPreview;
export declare function createIframelyResolver(options: IframelyResolverOptions): LinkResolver;
//# sourceMappingURL=iframely.d.ts.map