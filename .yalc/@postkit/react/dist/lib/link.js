import { createElement, } from 'react';
const URI_SCHEME = /^[a-z][a-z\d+.-]*:/i;
const EXTERNAL_WEB_HREF = /^(?:https?:)?\/\//i;
export function isPostkitInternalHref(href) {
    const value = href.trim();
    if (value.length === 0 ||
        value.startsWith('#') ||
        value.startsWith('//') ||
        URI_SCHEME.test(value)) {
        return false;
    }
    return true;
}
function externalAnchorProps(props, openExternalInNewTab) {
    if (!openExternalInNewTab ||
        props.target ||
        !props.href ||
        !EXTERNAL_WEB_HREF.test(props.href.trim())) {
        return props;
    }
    const rel = new Set((props.rel ?? '')
        .split(/\s+/)
        .map((value) => value.trim())
        .filter(Boolean));
    rel.add('noopener');
    rel.add('noreferrer');
    return {
        ...props,
        target: '_blank',
        rel: [...rel].join(' '),
    };
}
export function createPostkitLink(options = {}) {
    const { adapter, externalComponent, isInternal = isPostkitInternalHref, openExternalInNewTab = false, } = options;
    function PostkitLink(props) {
        const { href } = props;
        const usesNativeNavigation = !href ||
            !adapter ||
            !isInternal(href) ||
            props.download !== undefined ||
            (props.target !== undefined && props.target !== '_self');
        if (usesNativeNavigation) {
            const anchorProps = externalAnchorProps(props, openExternalInNewTab);
            return externalComponent
                ? createElement(externalComponent, anchorProps)
                : createElement('a', anchorProps);
        }
        return createElement(adapter.component, adapter.mapProps({
            ...props,
            href,
        }));
    }
    PostkitLink.displayName = 'PostkitLink';
    return PostkitLink;
}
