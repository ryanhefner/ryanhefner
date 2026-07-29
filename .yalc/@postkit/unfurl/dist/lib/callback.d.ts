import type { LinkResolver, LinkResolverId, ResolveLinkOptions, ResolvedLinkPreview } from './types.js';
export type LinkResolverCallback = (url: string, options?: ResolveLinkOptions) => Promise<ResolvedLinkPreview>;
/**
 * Adapts an application callback to Postkit's resolver interface.
 *
 * The callback remains responsible for returning the normalized
 * `ResolvedLinkPreview` contract.
 */
export declare function createCallbackResolver(id: LinkResolverId, resolve: LinkResolverCallback): LinkResolver;
//# sourceMappingURL=callback.d.ts.map