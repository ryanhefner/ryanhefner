import { asRecord, assertPublicHttpUrl, finiteNumber, queryUrl, requestJson, safeHttpUrl, } from '../http.js';
function stringValue(value) {
    return typeof value === 'string' && value.length > 0 ? value : undefined;
}
function imageFrom(value) {
    const item = asRecord(value);
    const src = safeHttpUrl(item?.url);
    return src
        ? {
            src,
            type: stringValue(item?.type),
            width: finiteNumber(item?.width),
            height: finiteNumber(item?.height),
        }
        : undefined;
}
function mediaFrom(value) {
    const item = asRecord(value);
    const src = safeHttpUrl(item?.url);
    return src
        ? {
            src,
            type: stringValue(item?.type),
            width: finiteNumber(item?.width),
            height: finiteNumber(item?.height),
            durationSeconds: finiteNumber(item?.durationSeconds ?? item?.duration),
        }
        : undefined;
}
export function normalizeMicrolinkResponse(value, requestedUrl) {
    const envelope = asRecord(value);
    const data = asRecord(envelope?.data);
    if (!data || (envelope?.status && envelope.status !== 'success')) {
        throw new TypeError('Microlink returned an invalid response.');
    }
    const image = imageFrom(data.image);
    const audio = mediaFrom(data.audio);
    const video = mediaFrom(data.video);
    const logo = imageFrom(data.logo);
    return {
        requestedUrl,
        url: safeHttpUrl(data.url) ?? assertPublicHttpUrl(requestedUrl).toString(),
        title: stringValue(data.title),
        description: stringValue(data.description),
        siteName: stringValue(data.publisher),
        author: stringValue(data.author),
        favicon: logo?.src,
        images: image ? [image] : [],
        audio: audio ? [audio] : [],
        video: video ? [video] : [],
        provider: {
            id: 'microlink',
            name: 'Microlink',
            url: 'https://microlink.io/',
        },
    };
}
export function createMicrolinkResolver(options = {}) {
    const endpoint = options.endpoint ??
        (options.apiKey
            ? 'https://pro.microlink.io/'
            : 'https://api.microlink.io/');
    const headers = {
        ...options.headers,
        ...(options.apiKey ? { 'x-api-key': options.apiKey } : undefined),
    };
    return {
        id: 'microlink',
        async resolve(url, resolveOptions = {}) {
            const requestedUrl = assertPublicHttpUrl(url).toString();
            const requestUrl = queryUrl(endpoint, {
                url: requestedUrl,
                force: resolveOptions.force || undefined,
            });
            const result = await requestJson('Microlink', requestUrl, { ...options, headers }, resolveOptions);
            return normalizeMicrolinkResponse(result, requestedUrl);
        },
    };
}
