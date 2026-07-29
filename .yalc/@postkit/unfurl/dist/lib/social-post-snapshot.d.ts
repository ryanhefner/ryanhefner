import type { LinkResolverId, ResolvedLinkCache, ResolvedLinkPreview } from './types.js';
export declare const POSTKIT_SOCIAL_POST_SNAPSHOT_SCHEMA_VERSION: 1;
export interface PostkitSocialPostSnapshot {
    readonly schemaVersion: typeof POSTKIT_SOCIAL_POST_SNAPSHOT_SCHEMA_VERSION;
    /**
     * The instant an authoring tool committed this resolver result to source.
     */
    readonly capturedAt: string;
    /**
     * The instant the resolver fetched the underlying data, when available.
     * This can predate `capturedAt` when the resolver returned a cached result.
     */
    readonly resolvedAt?: string;
    readonly cacheStrategy?: ResolvedLinkCache['strategy'];
    readonly cacheResult?: ResolvedLinkCache['result'];
    readonly resolver: {
        readonly id: LinkResolverId;
    };
    readonly metadata: ResolvedLinkPreview;
}
export interface CreatePostkitSocialPostSnapshotOptions {
    readonly capturedAt?: string;
    readonly resolvedAt?: string;
    readonly cacheStrategy?: ResolvedLinkCache['strategy'];
    readonly cacheResult?: ResolvedLinkCache['result'];
    readonly resolverId?: LinkResolverId;
}
export declare function createPostkitSocialPostSnapshot(metadata: ResolvedLinkPreview, options?: CreatePostkitSocialPostSnapshotOptions): PostkitSocialPostSnapshot;
export declare function isPostkitSocialPostSnapshot(value: unknown): value is PostkitSocialPostSnapshot;
//# sourceMappingURL=social-post-snapshot.d.ts.map