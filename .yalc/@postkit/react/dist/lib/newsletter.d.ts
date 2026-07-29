export interface PostkitNewsletterSubscription {
    readonly email: string;
    readonly list?: string;
}
export interface PostkitNewsletterResult {
    readonly message?: string;
}
export type PostkitNewsletterSubscribe = (subscription: PostkitNewsletterSubscription) => PostkitNewsletterResult | Promise<PostkitNewsletterResult | void> | void;
/**
 * Host-owned newsletter configuration. Secrets and provider-specific behavior
 * stay outside authored MDX; Postkit only supplies the presentation and
 * submission boundary.
 */
export interface PostkitNewsletterConfig {
    readonly subscribe?: PostkitNewsletterSubscribe;
    readonly action?: string;
    readonly method?: 'get' | 'post';
    readonly emailFieldName?: string;
    readonly listFieldName?: string;
    readonly hiddenFields?: Readonly<Record<string, string>>;
}
//# sourceMappingURL=newsletter.d.ts.map