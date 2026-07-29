import { jsx as _jsx } from "react/jsx-runtime";
import { createPostkitLink, createPostkitMdxComponents, } from '@postkit/react';
import Link from 'next/link.js';
function NextLinkAdapter(props) {
    return _jsx(Link, { ...props });
}
export function createPostkitNextComponents(options = {}) {
    const { linkProps, mapLinkProps, ...postkitLinkOptions } = options.link ?? {};
    const link = createPostkitLink({
        ...postkitLinkOptions,
        adapter: {
            component: NextLinkAdapter,
            mapProps: (props) => ({
                ...props,
                ...linkProps,
                ...mapLinkProps?.(props),
                href: props.href,
            }),
        },
    });
    return {
        ...createPostkitMdxComponents({ link }),
        ...options.components,
    };
}
