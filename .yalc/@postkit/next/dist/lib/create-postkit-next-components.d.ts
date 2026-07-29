import { type CreatePostkitLinkOptions, type PostkitLinkProps } from '@postkit/react';
import type { MDXComponents } from 'mdx/types';
import Link from 'next/link.js';
import type { ComponentProps } from 'react';
export type PostkitNextLinkProps = ComponentProps<typeof Link>;
export interface PostkitNextLinkOptions extends Omit<CreatePostkitLinkOptions<PostkitNextLinkProps>, 'adapter'> {
    readonly linkProps?: Omit<PostkitNextLinkProps, 'href'>;
    readonly mapLinkProps?: (props: PostkitLinkProps & {
        readonly href: string;
    }) => Omit<PostkitNextLinkProps, 'href'>;
}
export interface PostkitNextComponentsOptions {
    readonly components?: MDXComponents;
    readonly link?: PostkitNextLinkOptions;
}
export declare function createPostkitNextComponents(options?: PostkitNextComponentsOptions): MDXComponents;
//# sourceMappingURL=create-postkit-next-components.d.ts.map