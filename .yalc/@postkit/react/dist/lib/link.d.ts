import { type AnchorHTMLAttributes, type ComponentType } from 'react';
export type PostkitLinkProps = AnchorHTMLAttributes<HTMLAnchorElement>;
export type PostkitLinkComponent = ComponentType<PostkitLinkProps>;
export type PostkitInternalHrefMatcher = (href: string) => boolean;
export interface PostkitLinkAdapter<TProps extends object> {
    readonly component: ComponentType<TProps>;
    readonly mapProps: (props: PostkitLinkProps & {
        readonly href: string;
    }) => TProps;
}
export interface CreatePostkitLinkOptions<TProps extends object = PostkitLinkProps> {
    readonly adapter?: PostkitLinkAdapter<TProps>;
    readonly externalComponent?: PostkitLinkComponent;
    readonly isInternal?: PostkitInternalHrefMatcher;
    readonly openExternalInNewTab?: boolean;
}
export declare function isPostkitInternalHref(href: string): boolean;
export declare function createPostkitLink<TProps extends object = PostkitLinkProps>(options?: CreatePostkitLinkOptions<TProps>): PostkitLinkComponent;
//# sourceMappingURL=link.d.ts.map