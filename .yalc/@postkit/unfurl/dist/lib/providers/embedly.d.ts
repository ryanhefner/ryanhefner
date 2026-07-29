import type { LinkResolver, ProviderResolverOptions } from '../types.js';
export interface EmbedlyResolverOptions extends ProviderResolverOptions {
    readonly apiKey: string;
}
export declare function createEmbedlyResolver(options: EmbedlyResolverOptions): LinkResolver;
//# sourceMappingURL=embedly.d.ts.map