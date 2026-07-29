import { asRecord, finiteNumber, iframeSrcFromHtml, safeHttpUrl, } from './http.js';
function stringValue(record, name) {
    const value = record[name];
    return typeof value === 'string' && value.length > 0 ? value : undefined;
}
export function normalizeOEmbed(value, options) {
    const data = asRecord(value);
    if (!data) {
        throw new TypeError(`${options.providerId} returned an invalid response.`);
    }
    const typeValue = stringValue(data, 'type');
    const type = typeValue === 'photo' ||
        typeValue === 'video' ||
        typeValue === 'rich' ||
        typeValue === 'link'
        ? typeValue
        : 'link';
    const rawHtml = stringValue(data, 'html');
    const mediaUrl = type === 'photo' ? safeHttpUrl(stringValue(data, 'url')) : undefined;
    const thumbnailUrl = safeHttpUrl(stringValue(data, 'thumbnail_url'));
    const image = mediaUrl
        ? {
            src: mediaUrl,
            width: finiteNumber(data.width),
            height: finiteNumber(data.height),
        }
        : thumbnailUrl
            ? {
                src: thumbnailUrl,
                width: finiteNumber(data.thumbnail_width),
                height: finiteNumber(data.thumbnail_height),
            }
            : undefined;
    const cacheAge = finiteNumber(data.cache_age);
    const embedSrc = iframeSrcFromHtml(rawHtml);
    const embedWidth = finiteNumber(data.width);
    const embedHeight = finiteNumber(data.height);
    return {
        requestedUrl: options.requestedUrl,
        url: safeHttpUrl(stringValue(data, 'url')) ??
            options.fallbackUrl ??
            options.requestedUrl,
        title: stringValue(data, 'title'),
        description: stringValue(data, 'description'),
        siteName: stringValue(data, 'provider_name'),
        author: stringValue(data, 'author_name') ?? stringValue(data, 'author'),
        authorUrl: safeHttpUrl(stringValue(data, 'author_url')),
        images: image ? [image] : [],
        audio: [],
        video: [],
        embed: type !== 'link' || rawHtml
            ? {
                type,
                src: embedSrc ?? mediaUrl,
                width: embedWidth,
                height: embedHeight,
                aspectRatio: embedWidth && embedHeight ? embedWidth / embedHeight : undefined,
                title: stringValue(data, 'title'),
                rawHtml,
            }
            : undefined,
        provider: {
            id: options.providerId,
            name: stringValue(data, 'provider_name'),
            url: safeHttpUrl(stringValue(data, 'provider_url')),
        },
        cache: cacheAge ? { maxAgeSeconds: cacheAge } : undefined,
    };
}
