import type { LinkResolver, LinkResolverId } from './types.js';
export interface CreateLinkResolverRegistryOptions {
    readonly resolvers: readonly LinkResolver[];
    /**
     * OpenGraphs is the conventional default. A different provider can be
     * selected globally here or per request through `ResolveLinkOptions`.
     */
    readonly defaultProvider?: LinkResolverId;
    /**
     * Providers attempted after the selected provider fails. This is opt-in so
     * applications do not unexpectedly spend credits with another service.
     */
    readonly fallbackProviders?: readonly LinkResolverId[];
}
export interface LinkResolverRegistry extends LinkResolver {
    readonly defaultProvider: LinkResolverId;
    readonly providers: readonly LinkResolverId[];
}
export declare function createLinkResolverRegistry({ resolvers, defaultProvider, fallbackProviders, }: CreateLinkResolverRegistryOptions): LinkResolverRegistry;
//# sourceMappingURL=registry.d.ts.map