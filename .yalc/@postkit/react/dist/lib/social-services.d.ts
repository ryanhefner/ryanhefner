import type { ReactNode } from 'react';
export interface PostkitShareRequest {
    readonly url: string;
    readonly title?: string;
    readonly text?: string;
}
export interface PostkitSocialService {
    readonly label: string;
    readonly icon?: ReactNode;
    readonly accent?: string;
    readonly createShareUrl?: (request: PostkitShareRequest) => string;
    readonly share?: (request: PostkitShareRequest) => void | Promise<void>;
}
export type PostkitSocialServiceRegistry = Readonly<Record<string, PostkitSocialService>>;
export declare const postkitDefaultSocialServices: PostkitSocialServiceRegistry;
export declare function mergePostkitSocialServices(overrides?: PostkitSocialServiceRegistry): PostkitSocialServiceRegistry;
//# sourceMappingURL=social-services.d.ts.map