import type { LinkResolver, ProviderResolverOptions, ResolvedLinkPreview } from '../types.js';
export interface MicrolinkResolverOptions extends ProviderResolverOptions {
    readonly apiKey?: string;
}
export declare function normalizeMicrolinkResponse(value: unknown, requestedUrl: string): ResolvedLinkPreview;
export declare function createMicrolinkResolver(options?: MicrolinkResolverOptions): LinkResolver;
//# sourceMappingURL=microlink.d.ts.map