import type { ProviderResolverOptions, ResolveLinkOptions } from './types.js';
export declare class LinkResolverError extends Error {
    readonly provider: string;
    readonly status?: number;
    constructor(provider: string, message: string, status?: number);
}
export declare function assertHttpUrl(value: string): URL;
export declare function assertPublicHttpUrl(value: string): URL;
export declare function safeHttpUrl(value: unknown): string | undefined;
export declare function finiteNumber(value: unknown): number | undefined;
export declare function asRecord(value: unknown): Readonly<Record<string, unknown>> | undefined;
export declare function asArray<T>(value: T | readonly T[] | undefined): readonly T[];
export declare function iframeSrcFromHtml(html: unknown): string | undefined;
export declare function requestJson(provider: string, url: URL, config: ProviderResolverOptions, options?: ResolveLinkOptions): Promise<unknown>;
export declare function queryUrl(endpoint: string, values: Readonly<Record<string, string | number | boolean | undefined>>): URL;
//# sourceMappingURL=http.d.ts.map