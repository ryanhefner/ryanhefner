'use client';
import { jsx as _jsx } from "react/jsx-runtime";
import { createCallbackResolver, createLinkResolverRegistry, } from '@postkit/unfurl';
import { ChakraProvider, defaultSystem, } from '@chakra-ui/react';
import { createContext, useContext, useMemo } from 'react';
import { createPostkitSystem } from './theme.js';
import { mergePostkitSocialServices, } from './social-services.js';
const PostkitContext = createContext(Object.freeze({
    socialServices: mergePostkitSocialServices(),
}));
function isLinkResolver(resolver) {
    return (typeof resolver === 'object' &&
        resolver !== null &&
        typeof resolver.resolve === 'function');
}
function configuredResolver({ resolver, resolvers, defaultResolver, fallbackResolvers, }) {
    if (resolver && resolvers?.length) {
        throw new TypeError('PostkitProvider accepts either resolver or resolvers, not both.');
    }
    if (resolver) {
        return isLinkResolver(resolver)
            ? resolver
            : createCallbackResolver(defaultResolver ?? 'custom', resolver);
    }
    if (!resolvers?.length) {
        return undefined;
    }
    const conventionalDefault = resolvers.some((candidate) => candidate.id === 'opengraphs')
        ? 'opengraphs'
        : resolvers[0].id;
    return createLinkResolverRegistry({
        resolvers,
        defaultProvider: defaultResolver ?? conventionalDefault,
        fallbackProviders: fallbackResolvers,
    });
}
export function PostkitProvider({ children, system, theme, resolver, resolvers, defaultResolver, fallbackResolvers, onResolverError, socialServices, newsletter, }) {
    const chakraSystem = useMemo(() => createPostkitSystem(system ?? defaultSystem, theme), [system, theme]);
    const configured = useMemo(() => configuredResolver({
        resolver,
        resolvers,
        defaultResolver,
        fallbackResolvers,
    }), [defaultResolver, fallbackResolvers, resolver, resolvers]);
    const configuredSocialServices = useMemo(() => mergePostkitSocialServices(socialServices), [socialServices]);
    const context = useMemo(() => {
        if (!configured) {
            return Object.freeze({
                defaultResolver,
                newsletter,
                socialServices: configuredSocialServices,
            });
        }
        const selectedDefault = defaultResolver ??
            ('defaultProvider' in configured &&
                typeof configured.defaultProvider === 'string'
                ? configured.defaultProvider
                : configured.id);
        const resolveLink = async (url, options = {}) => {
            const resolvedOptions = {
                ...options,
                provider: options.provider ?? selectedDefault,
            };
            try {
                return await configured.resolve(url, resolvedOptions);
            }
            catch (error) {
                onResolverError?.(error, { url, options: resolvedOptions });
                throw error;
            }
        };
        return Object.freeze({
            resolver: configured,
            defaultResolver: selectedDefault,
            resolveLink,
            newsletter,
            socialServices: configuredSocialServices,
        });
    }, [
        configured,
        configuredSocialServices,
        defaultResolver,
        newsletter,
        onResolverError,
    ]);
    return (_jsx(PostkitContext.Provider, { value: context, children: _jsx(ChakraProvider, { value: chakraSystem, children: children }) }));
}
export function usePostkit() {
    return useContext(PostkitContext);
}
