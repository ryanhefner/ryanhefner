import { asArray, asRecord, assertPublicHttpUrl, finiteNumber, iframeSrcFromHtml, queryUrl, requestJson, safeHttpUrl, } from '../http.js';
function stringValue(value) {
    return typeof value === 'string' && value.length > 0 ? value : undefined;
}
function nonNegativeNumber(value) {
    const result = typeof value === 'string' ? Number.parseFloat(value) : Number(value);
    return Number.isFinite(result) && result >= 0 ? result : undefined;
}
function imageFrom(value) {
    if (typeof value === 'string') {
        const src = safeHttpUrl(value);
        return src ? { src } : undefined;
    }
    const item = asRecord(value);
    const src = safeHttpUrl(item?.src ?? item?.url);
    return src
        ? {
            src,
            alt: stringValue(item?.alt),
            type: stringValue(item?.type),
            width: finiteNumber(item?.width),
            height: finiteNumber(item?.height),
        }
        : undefined;
}
function mediaFrom(value) {
    if (typeof value === 'string') {
        const src = safeHttpUrl(value);
        return src ? { src } : undefined;
    }
    const item = asRecord(value);
    const src = safeHttpUrl(item?.src ?? item?.url);
    return src
        ? {
            src,
            type: stringValue(item?.type),
            width: finiteNumber(item?.width),
            height: finiteNumber(item?.height),
            durationSeconds: nonNegativeNumber(item?.durationSeconds ?? item?.duration),
            poster: safeHttpUrl(item?.poster),
        }
        : undefined;
}
function embedFrom(value) {
    const item = asRecord(value);
    if (!item)
        return undefined;
    const typeValue = stringValue(item.type);
    const type = typeValue === 'photo' ||
        typeValue === 'video' ||
        typeValue === 'rich' ||
        typeValue === 'link'
        ? typeValue
        : 'rich';
    const rawHtml = stringValue(item.rawHtml ?? item.html);
    const width = finiteNumber(item.width);
    const height = finiteNumber(item.height);
    return {
        type,
        src: safeHttpUrl(item.src ?? item.url) ?? iframeSrcFromHtml(rawHtml),
        width,
        height,
        aspectRatio: finiteNumber(item.aspectRatio) ??
            (width && height ? width / height : undefined),
        title: stringValue(item.title),
        thumbnail: imageFrom(item.thumbnail),
        rawHtml,
    };
}
function metricValue(value) {
    return nonNegativeNumber(value);
}
function providerFrom(value) {
    const provider = asRecord(value);
    const id = stringValue(provider?.id);
    if (!provider || !id)
        return undefined;
    return {
        id,
        name: stringValue(provider.name),
        url: safeHttpUrl(provider.url),
    };
}
function requesterFrom(value) {
    return value === 'GENERIC' ||
        value === 'SLACK' ||
        value === 'LINKEDIN' ||
        value === 'X' ||
        value === 'FACEBOOK' ||
        value === 'DISCORD' ||
        value === 'MICROSOFT_TEAMS' ||
        value === 'WHATSAPP' ||
        value === 'TELEGRAM' ||
        value === 'IMESSAGE' ||
        value === 'GOOGLE' ||
        value === 'OTHER'
        ? value
        : undefined;
}
function resolutionFrom(value) {
    const resolution = asRecord(value);
    const kind = resolution?.kind === 'metadata' ||
        resolution?.kind === 'oembed' ||
        resolution?.kind === 'fallback'
        ? resolution.kind
        : undefined;
    const requestedMode = resolution?.requestedMode === 'auto' ||
        resolution?.requestedMode === 'metadata' ||
        resolution?.requestedMode === 'oembed'
        ? resolution.requestedMode
        : undefined;
    const requestedUrl = safeHttpUrl(resolution?.requestedUrl);
    const requester = requesterFrom(resolution?.requester);
    if (!kind || !requestedMode || !requestedUrl || !requester)
        return undefined;
    const upstream = asRecord(resolution?.upstreamError);
    const upstreamCode = stringValue(upstream?.code);
    const upstreamStatusCode = nonNegativeNumber(upstream?.statusCode);
    return {
        kind,
        requestedMode,
        requestedUrl,
        requester,
        upstreamError: upstreamCode
            ? {
                code: upstreamCode,
                ...(upstreamStatusCode !== undefined
                    ? { statusCode: upstreamStatusCode }
                    : {}),
            }
            : undefined,
    };
}
function socialFrom(value, fallbackUrl, depth = 0) {
    const item = asRecord(value);
    const service = stringValue(item?.service ?? item?.network);
    if (!item || !service || depth > 1)
        return undefined;
    const author = asRecord(item.author);
    const metricsValue = asRecord(item.metrics);
    const metrics = metricsValue
        ? {
            replies: metricValue(metricsValue.replies),
            reposts: metricValue(metricsValue.reposts),
            likes: metricValue(metricsValue.likes),
            shares: metricValue(metricsValue.shares),
        }
        : undefined;
    const images = asArray(item.images ?? item.image)
        .map(imageFrom)
        .filter((image) => Boolean(image));
    const video = asArray(item.video)
        .map(mediaFrom)
        .filter((media) => Boolean(media));
    return {
        service,
        url: safeHttpUrl(item.url ?? item.postUrl) ?? fallbackUrl,
        author: author
            ? {
                name: stringValue(author.name),
                handle: stringValue(author.handle ?? author.username),
                url: safeHttpUrl(author.url),
                avatar: safeHttpUrl(author.avatar ?? author.image),
            }
            : undefined,
        text: stringValue(item.text ?? item.content),
        publishedAt: stringValue(item.publishedAt ?? item.published_at),
        images,
        video,
        metrics: metrics && Object.values(metrics).some((metric) => metric !== undefined)
            ? metrics
            : undefined,
        quotedPost: depth === 0
            ? socialFrom(item.quotedPost ?? item.quoted_post, fallbackUrl, depth + 1)
            : undefined,
    };
}
export function normalizeOpenGraphsResponse(value, requestedUrl) {
    const envelope = asRecord(value);
    const data = asRecord(envelope?.data) ?? envelope;
    if (!data) {
        throw new TypeError('OpenGraphs returned an invalid response.');
    }
    if (envelope?.schemaVersion !== undefined && envelope.schemaVersion !== 1) {
        throw new TypeError(`OpenGraphs returned unsupported schema version ${String(envelope.schemaVersion)}.`);
    }
    const resolver = asRecord(envelope?.resolver);
    const resolverId = stringValue(resolver?.id);
    if ((envelope?.schemaVersion === 1 && resolverId !== 'opengraphs') ||
        (resolverId !== undefined && resolverId !== 'opengraphs')) {
        throw new TypeError(`OpenGraphs returned an unexpected resolver "${resolverId ?? 'missing'}".`);
    }
    const images = asArray(data.images ?? data.image)
        .map(imageFrom)
        .filter((item) => Boolean(item));
    const audio = asArray(data.audio)
        .map(mediaFrom)
        .filter((item) => Boolean(item));
    const video = asArray(data.video)
        .map(mediaFrom)
        .filter((item) => Boolean(item));
    const faviconValue = data.favicon ?? data.logo;
    const favicon = safeHttpUrl(faviconValue) ?? imageFrom(faviconValue)?.src ?? undefined;
    const cache = asRecord(data.cache ?? envelope?.cache);
    const sourceProvider = providerFrom(data.provider);
    const canonicalUrl = safeHttpUrl(data.canonicalUrl ?? data.canonical ?? data.url) ??
        requestedUrl;
    const cacheStrategy = cache?.strategy === 'use' ||
        cache?.strategy === 'refresh' ||
        cache?.strategy === 'bypass'
        ? cache.strategy
        : undefined;
    const cacheResult = cache?.result === 'hit' ||
        cache?.result === 'miss' ||
        cache?.result === 'stale' ||
        cache?.result === 'unavailable'
        ? cache.result
        : cache?.status === 'hit' ||
            cache?.status === 'miss' ||
            cache?.status === 'stale'
            ? cache.status
            : undefined;
    return {
        requestedUrl,
        url: canonicalUrl,
        title: stringValue(data.title),
        description: stringValue(data.description),
        siteName: stringValue(data.siteName ?? data.site),
        author: stringValue(data.author),
        authorUrl: safeHttpUrl(data.authorUrl ?? data.author_url),
        favicon,
        images,
        audio,
        video,
        embed: embedFrom(data.embed ?? data.oembed),
        social: socialFrom(data.social, canonicalUrl),
        provider: {
            id: 'opengraphs',
            name: stringValue(resolver?.name) ?? 'OpenGraphs',
            url: safeHttpUrl(resolver?.url) ?? 'https://opengraphs.com/',
        },
        sourceProvider,
        cache: cache
            ? {
                strategy: cacheStrategy,
                result: cacheResult,
                fetchedAt: stringValue(cache.fetchedAt),
                expiresAt: stringValue(cache.expiresAt),
                maxAgeSeconds: nonNegativeNumber(cache.maxAgeSeconds ?? cache.maxAge),
            }
            : undefined,
        resolution: resolutionFrom(envelope?.resolution),
        requestId: stringValue(envelope?.requestId),
    };
}
export function createOpenGraphsResolver(options = {}) {
    const endpoint = options.endpoint ?? 'https://unfurl.opengraphs.com/v1/resolve';
    const headers = {
        ...options.headers,
        ...(options.apiKey
            ? { authorization: `Bearer ${options.apiKey}` }
            : undefined),
    };
    return {
        id: 'opengraphs',
        async resolve(url, resolveOptions = {}) {
            const requestedUrl = assertPublicHttpUrl(url).toString();
            const requestUrl = queryUrl(endpoint, {
                url: requestedUrl,
                maxwidth: resolveOptions.maxWidth,
                maxheight: resolveOptions.maxHeight,
                force: resolveOptions.force || undefined,
            });
            const result = await requestJson('OpenGraphs', requestUrl, { ...options, headers }, resolveOptions);
            return normalizeOpenGraphsResponse(result, requestedUrl);
        },
    };
}
