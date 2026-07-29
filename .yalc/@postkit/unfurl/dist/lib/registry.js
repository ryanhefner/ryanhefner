export function createLinkResolverRegistry({ resolvers, defaultProvider = 'opengraphs', fallbackProviders = [], }) {
    const byId = new Map(resolvers.map((resolver) => [resolver.id, resolver]));
    if (!byId.has(defaultProvider)) {
        throw new TypeError(`Default link resolver "${defaultProvider}" is not registered.`);
    }
    return {
        id: 'postkit',
        defaultProvider,
        providers: [...byId.keys()],
        async resolve(url, options = {}) {
            const selectedProvider = options.provider ?? defaultProvider;
            const attempts = [
                selectedProvider,
                ...fallbackProviders.filter((id) => id !== selectedProvider),
            ];
            let lastError;
            for (const providerId of attempts) {
                const resolver = byId.get(providerId);
                if (!resolver) {
                    lastError = new TypeError(`Link resolver "${providerId}" is not registered.`);
                    continue;
                }
                try {
                    return await resolver.resolve(url, options);
                }
                catch (error) {
                    if (options.signal?.aborted) {
                        throw error;
                    }
                    lastError = error;
                }
            }
            throw (lastError ??
                new TypeError(`No link resolver is registered for "${selectedProvider}".`));
        },
    };
}
