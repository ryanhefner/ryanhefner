export class LinkResolverError extends Error {
    provider;
    status;
    constructor(provider, message, status) {
        super(message);
        this.name = 'LinkResolverError';
        this.provider = provider;
        this.status = status;
    }
}
export function assertHttpUrl(value) {
    let url;
    try {
        url = new URL(value);
    }
    catch {
        throw new TypeError(`Link preview URL must be an absolute HTTP(S) URL.`);
    }
    if (url.protocol !== 'http:' && url.protocol !== 'https:') {
        throw new TypeError(`Link preview URL must use HTTP or HTTPS.`);
    }
    return url;
}
function isPrivateHostname(hostname) {
    const normalized = hostname.toLowerCase().replace(/^\[|\]$/g, '');
    const isIpv6 = normalized.includes(':');
    if (normalized === 'localhost' ||
        normalized.endsWith('.localhost') ||
        normalized.endsWith('.local') ||
        normalized === '::' ||
        normalized === '::1' ||
        (isIpv6 &&
            (normalized.startsWith('fc') ||
                normalized.startsWith('fd') ||
                normalized.startsWith('fe80:')))) {
        return true;
    }
    const parts = normalized.split('.').map(Number);
    if (parts.length === 4 &&
        parts.every((part) => Number.isInteger(part) && part >= 0 && part <= 255)) {
        return (parts[0] === 0 ||
            parts[0] === 10 ||
            parts[0] === 127 ||
            (parts[0] === 169 && parts[1] === 254) ||
            (parts[0] === 172 && parts[1] >= 16 && parts[1] <= 31) ||
            (parts[0] === 192 && parts[1] === 168));
    }
    return false;
}
export function assertPublicHttpUrl(value) {
    const url = assertHttpUrl(value);
    if (url.username || url.password || isPrivateHostname(url.hostname)) {
        throw new TypeError(`Link preview URL must reference a public host.`);
    }
    return url;
}
export function safeHttpUrl(value) {
    if (typeof value !== 'string')
        return undefined;
    try {
        return assertPublicHttpUrl(value).toString();
    }
    catch {
        return undefined;
    }
}
export function finiteNumber(value) {
    const result = typeof value === 'string' ? Number.parseFloat(value) : Number(value);
    return Number.isFinite(result) && result > 0 ? result : undefined;
}
export function asRecord(value) {
    return typeof value === 'object' && value !== null && !Array.isArray(value)
        ? value
        : undefined;
}
export function asArray(value) {
    if (value === undefined)
        return [];
    return Array.isArray(value) ? value : [value];
}
export function iframeSrcFromHtml(html) {
    if (typeof html !== 'string')
        return undefined;
    const match = /<iframe\b[^>]*\bsrc\s*=\s*(?:"([^"]+)"|'([^']+)'|([^\s>]+))/i.exec(html);
    const candidate = match?.[1] ?? match?.[2] ?? match?.[3];
    if (!candidate)
        return undefined;
    return safeHttpUrl(candidate.replaceAll('&amp;', '&'));
}
export async function requestJson(provider, url, config, options = {}) {
    const fetcher = config.fetch ?? globalThis.fetch;
    if (!fetcher) {
        throw new LinkResolverError(provider, 'No fetch implementation is available.');
    }
    const response = await fetcher(url, {
        method: 'GET',
        headers: {
            accept: 'application/json',
            ...config.headers,
        },
        signal: options.signal,
    });
    if (!response.ok) {
        throw new LinkResolverError(provider, `${provider} returned HTTP ${response.status}.`, response.status);
    }
    try {
        return await response.json();
    }
    catch {
        throw new LinkResolverError(provider, `${provider} returned invalid JSON.`);
    }
}
export function queryUrl(endpoint, values) {
    const url = assertHttpUrl(endpoint);
    for (const [key, value] of Object.entries(values)) {
        if (value !== undefined) {
            url.searchParams.set(key, String(value));
        }
    }
    return url;
}
