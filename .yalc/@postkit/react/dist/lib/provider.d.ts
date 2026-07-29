import { type LinkResolver, type LinkResolverCallback, type LinkResolverId, type ResolveLinkOptions } from '@postkit/unfurl';
import { type SystemConfig, type SystemContext } from '@chakra-ui/react';
import { type ReactNode } from 'react';
import type { PostkitNewsletterConfig } from './newsletter.js';
import { type PostkitSocialServiceRegistry } from './social-services.js';
export interface PostkitResolverErrorContext {
    readonly url: string;
    readonly options?: ResolveLinkOptions;
}
export interface PostkitContextValue {
    readonly resolver?: LinkResolver;
    readonly defaultResolver?: LinkResolverId;
    readonly resolveLink?: LinkResolverCallback;
    readonly socialServices: PostkitSocialServiceRegistry;
    readonly newsletter?: PostkitNewsletterConfig;
}
export interface PostkitProviderProps {
    readonly children: ReactNode;
    /**
     * The site's contextual Chakra system. Its tokens, global styles, and
     * Postkit recipe customizations are layered over Postkit's defaults.
     */
    readonly system?: SystemContext;
    /**
     * Chakra configuration merged after both Postkit's defaults and the
     * contextual system. Use createPostkitTheme to target only the nearest
     * Postkit context without changing site-wide component defaults.
     */
    readonly theme?: SystemConfig;
    /**
     * A configured resolver or a custom callback. A callback is assigned the
     * `defaultResolver` id, or `custom` when no id is supplied.
     */
    readonly resolver?: LinkResolver | LinkResolverCallback;
    /**
     * A resolver collection from which Postkit will create a registry.
     */
    readonly resolvers?: readonly LinkResolver[];
    /**
     * The registry default, and the provider hint supplied to a direct callback
     * when a LinkPreview does not request a provider itself.
     */
    readonly defaultResolver?: LinkResolverId;
    /**
     * Ordered registry fallbacks. Fallbacks remain opt-in.
     */
    readonly fallbackResolvers?: readonly LinkResolverId[];
    readonly onResolverError?: (error: unknown, context: PostkitResolverErrorContext) => void;
    /**
     * Service labels, branding, and optional share handlers consumed by
     * SocialPost, ShareActions, and AppearsOn.
     */
    readonly socialServices?: PostkitSocialServiceRegistry;
    /**
     * Host-owned newsletter submission configuration. Authored MDX cannot set
     * this boundary, keeping provider credentials and endpoint choices outside
     * document content.
     */
    readonly newsletter?: PostkitNewsletterConfig;
}
export declare function PostkitProvider({ children, system, theme, resolver, resolvers, defaultResolver, fallbackResolvers, onResolverError, socialServices, newsletter, }: PostkitProviderProps): import("react").JSX.Element;
export declare function usePostkit(): PostkitContextValue;
//# sourceMappingURL=provider.d.ts.map