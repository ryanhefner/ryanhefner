export const POSTKIT_SOCIAL_POST_SNAPSHOT_SCHEMA_VERSION = 1;
function isRecord(value) {
    return Boolean(value && typeof value === 'object' && !Array.isArray(value));
}
function validTimestamp(value, label) {
    if (Number.isNaN(Date.parse(value))) {
        throw new TypeError(`Postkit social snapshot ${label} must be an ISO date.`);
    }
    return value;
}
export function createPostkitSocialPostSnapshot(metadata, options = {}) {
    const capturedAt = validTimestamp(options.capturedAt ?? new Date().toISOString(), 'capturedAt');
    const resolvedAt = options.resolvedAt ?? metadata.cache?.fetchedAt;
    if (resolvedAt)
        validTimestamp(resolvedAt, 'resolvedAt');
    const cacheStrategy = options.cacheStrategy ?? metadata.cache?.strategy;
    const cacheResult = options.cacheResult ?? metadata.cache?.result;
    return Object.freeze({
        schemaVersion: POSTKIT_SOCIAL_POST_SNAPSHOT_SCHEMA_VERSION,
        capturedAt,
        ...(resolvedAt ? { resolvedAt } : {}),
        ...(cacheStrategy ? { cacheStrategy } : {}),
        ...(cacheResult ? { cacheResult } : {}),
        resolver: Object.freeze({
            id: options.resolverId ?? metadata.provider.id,
        }),
        metadata,
    });
}
export function isPostkitSocialPostSnapshot(value) {
    if (!isRecord(value) || !isRecord(value.resolver))
        return false;
    const metadata = value.metadata;
    return (value.schemaVersion === POSTKIT_SOCIAL_POST_SNAPSHOT_SCHEMA_VERSION &&
        typeof value.capturedAt === 'string' &&
        !Number.isNaN(Date.parse(value.capturedAt)) &&
        (value.resolvedAt === undefined ||
            (typeof value.resolvedAt === 'string' &&
                !Number.isNaN(Date.parse(value.resolvedAt)))) &&
        (value.cacheStrategy === undefined ||
            value.cacheStrategy === 'use' ||
            value.cacheStrategy === 'refresh' ||
            value.cacheStrategy === 'bypass') &&
        (value.cacheResult === undefined ||
            value.cacheResult === 'hit' ||
            value.cacheResult === 'miss' ||
            value.cacheResult === 'stale' ||
            value.cacheResult === 'unavailable') &&
        typeof value.resolver.id === 'string' &&
        value.resolver.id.length > 0 &&
        isRecord(metadata) &&
        typeof metadata.requestedUrl === 'string' &&
        typeof metadata.url === 'string' &&
        isRecord(metadata.provider) &&
        typeof metadata.provider.id === 'string' &&
        Array.isArray(metadata.images) &&
        Array.isArray(metadata.audio) &&
        Array.isArray(metadata.video));
}
