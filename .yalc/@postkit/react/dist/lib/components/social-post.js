'use client';
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { isPostkitSocialPostSnapshot, } from '@postkit/unfurl';
import { Box, Button, chakra, Flex, Image, Link, Text, } from '@chakra-ui/react';
import { useEffect, useMemo, useState } from 'react';
import { usePostkit } from '../provider.js';
import { postkitSocialPostRecipe, } from '../recipes/social-post.recipe.js';
import { postkitSlotClassName, usePostkitSlotRecipe, } from '../recipes/types.js';
import { postkitRecipeKeys } from '../theme.js';
const SocialPostIframe = chakra('iframe');
const SocialPostQuote = chakra('blockquote');
const SocialPostTime = chakra('time');
function parsedMetadata(value) {
    if (!value)
        return {};
    let parsed = value;
    try {
        if (typeof value === 'string')
            parsed = JSON.parse(value);
        if (!parsed || typeof parsed !== 'object')
            throw new TypeError();
        if (isPostkitSocialPostSnapshot(parsed)) {
            return { metadata: parsed.metadata, snapshot: parsed };
        }
        return { metadata: parsed };
    }
    catch {
        throw new TypeError('Postkit SocialPost metadata must contain valid metadata or a versioned snapshot.');
    }
}
function isPreview(value) {
    return Boolean(value && 'requestedUrl' in value);
}
function enabled(value, fallback) {
    if (value === undefined)
        return fallback;
    return typeof value === 'boolean' ? value : value === 'true';
}
function readableDate(value) {
    if (!value)
        return undefined;
    const date = new Date(value);
    return Number.isNaN(date.valueOf())
        ? value
        : new Intl.DateTimeFormat(undefined, {
            dateStyle: 'medium',
            timeStyle: 'short',
        }).format(date);
}
function metricLabel(value, label) {
    return value === undefined ? undefined : `${value} ${label}`;
}
export function PostkitSocialPost({ href, metadata: metadataValue, resolution: resolutionMode = 'snapshot-fallback', snapshotInfo = 'auto', provider, service: serviceOverride, authorName, authorHandle, authorAvatar, text: textOverride, publishedAt, showMetrics = false, activation = 'click', iframeTitle, iframeSandbox = 'allow-scripts allow-same-origin allow-presentation allow-popups', rootProps, slotStyles, branding, presentation = 'auto', size, variant, unstyled, }) {
    const parsed = useMemo(() => parsedMetadata(metadataValue), [metadataValue]);
    const supplied = resolutionMode === 'live' ? undefined : parsed.metadata;
    const snapshot = resolutionMode === 'live' ? undefined : parsed.snapshot;
    const { resolveLink, socialServices } = usePostkit();
    const resolutionKey = `${provider ?? ''}\u0000${href}`;
    const [resolution, setResolution] = useState({ key: resolutionKey, status: 'idle' });
    const runtimePreview = resolutionMode !== 'snapshot' && resolution.key === resolutionKey
        ? resolution.metadata
        : undefined;
    const preview = isPreview(supplied)
        ? supplied
        : supplied
            ? undefined
            : runtimePreview;
    const social = isPreview(supplied) ? supplied.social : supplied;
    const resolvedSocial = social ?? preview?.social;
    const serviceId = serviceOverride ?? resolvedSocial?.service ?? preview?.siteName ?? 'social';
    const service = socialServices[serviceId];
    const resolvedPresentation = presentation === 'auto'
        ? resolvedSocial
            ? 'card'
            : preview?.embed?.src
                ? 'embed'
                : 'card'
        : presentation;
    const resolutionStatus = supplied
        ? snapshot
            ? 'snapshot'
            : 'provided'
        : resolution.key === resolutionKey
            ? resolution.status
            : 'idle';
    const recipe = usePostkitSlotRecipe(postkitRecipeKeys.socialPost, postkitSocialPostRecipe);
    const styles = unstyled
        ? {}
        : recipe({
            branding,
            presentation: resolvedPresentation,
            size,
            variant,
        });
    const { css: rootCss, className: rootClassName, ...restRootProps } = rootProps ?? {};
    const [embedActive, setEmbedActive] = useState(activation === 'immediate');
    useEffect(() => {
        if (supplied || !resolveLink || resolutionMode === 'snapshot')
            return;
        const controller = new AbortController();
        let active = true;
        setResolution({ key: resolutionKey, status: 'loading' });
        void resolveLink(href, {
            provider,
            signal: controller.signal,
        }).then((metadata) => {
            if (active) {
                setResolution({
                    key: resolutionKey,
                    status: 'resolved',
                    metadata,
                });
            }
        }, () => {
            if (active && !controller.signal.aborted) {
                setResolution({ key: resolutionKey, status: 'error' });
            }
        });
        return () => {
            active = false;
            controller.abort();
        };
    }, [href, provider, resolutionKey, resolutionMode, resolveLink, supplied]);
    const author = resolvedSocial?.author;
    const displayedAuthor = authorName ?? author?.name ?? preview?.author;
    const displayedHandle = authorHandle ?? author?.handle;
    const avatar = authorAvatar ?? author?.avatar;
    const postText = textOverride ?? resolvedSocial?.text ?? preview?.description;
    const timestamp = publishedAt ?? resolvedSocial?.publishedAt;
    const formattedTimestamp = readableDate(timestamp);
    const formattedCaptureTime = readableDate(snapshot?.capturedAt);
    const formattedResolvedTime = snapshot?.resolvedAt && snapshot.resolvedAt !== snapshot.capturedAt
        ? readableDate(snapshot.resolvedAt)
        : undefined;
    const cacheProvenance = snapshot
        ? [
            snapshot.cacheResult ? `cache ${snapshot.cacheResult}` : undefined,
            snapshot.cacheStrategy && snapshot.cacheStrategy !== 'use'
                ? `${snapshot.cacheStrategy} strategy`
                : undefined,
        ]
            .filter(Boolean)
            .join(' · ')
        : '';
    const snapshotVisible = Boolean(snapshot) &&
        (snapshotInfo === 'visible' || snapshotInfo === 'auto');
    const postUrl = resolvedSocial?.url ?? preview?.url ?? href;
    const embed = preview?.embed;
    const metrics = enabled(showMetrics, false)
        ? [
            metricLabel(resolvedSocial?.metrics?.replies, 'replies'),
            metricLabel(resolvedSocial?.metrics?.reposts, 'reposts'),
            metricLabel(resolvedSocial?.metrics?.likes, 'likes'),
            metricLabel(resolvedSocial?.metrics?.shares, 'shares'),
        ].filter((metric) => Boolean(metric))
        : [];
    const snapshotProvenance = snapshotVisible && snapshot ? (_jsxs(Box, { "data-postkit-snapshot-captured-at": snapshot.capturedAt, className: recipe.classNameMap.snapshotInfo, css: [styles.snapshotInfo, slotStyles?.snapshotInfo], children: [_jsxs(Text, { className: recipe.classNameMap.snapshotLabel, css: [styles.snapshotLabel, slotStyles?.snapshotLabel], children: ["Snapshot captured", ' ', _jsx(SocialPostTime, { dateTime: snapshot.capturedAt, className: recipe.classNameMap.snapshotTime, css: [styles.snapshotTime, slotStyles?.snapshotTime], children: formattedCaptureTime ?? snapshot.capturedAt }), ' ', "via ", snapshot.resolver.id] }), formattedResolvedTime ? (_jsxs(Text, { className: recipe.classNameMap.snapshotLabel, css: [styles.snapshotLabel, slotStyles?.snapshotLabel], children: ["Resolver data fetched", ' ', _jsx(SocialPostTime, { dateTime: snapshot.resolvedAt, className: recipe.classNameMap.snapshotTime, css: [styles.snapshotTime, slotStyles?.snapshotTime], children: formattedResolvedTime }), cacheProvenance ? ` · ${cacheProvenance}` : ''] })) : null] })) : null;
    let primaryContent;
    if (resolvedPresentation === 'embed' && embed?.src) {
        primaryContent = (_jsx(Box, { className: recipe.classNameMap.embedFrame, css: [
                styles.embedFrame,
                embed.aspectRatio
                    ? { aspectRatio: String(embed.aspectRatio) }
                    : undefined,
                slotStyles?.embedFrame,
            ], children: embedActive ? (_jsx(SocialPostIframe, { src: embed.src, title: iframeTitle ??
                    embed.title ??
                    `Post from ${service?.label ?? serviceId}`, sandbox: iframeSandbox, loading: "lazy", referrerPolicy: "strict-origin-when-cross-origin", allow: "encrypted-media; fullscreen; picture-in-picture", allowFullScreen: true, className: recipe.classNameMap.embed, css: [styles.embed, slotStyles?.embed] })) : (_jsxs(Box, { className: recipe.classNameMap.consent, css: [styles.consent, slotStyles?.consent], children: [_jsxs(Text, { children: ["Load interactive content from ", service?.label ?? serviceId, "?"] }), _jsx(Button, { type: "button", onClick: () => setEmbedActive(true), className: recipe.classNameMap.consentButton, css: [styles.consentButton, slotStyles?.consentButton], children: "Load post" })] })) }));
    }
    else {
        primaryContent = (_jsxs(_Fragment, { children: [_jsxs(Flex, { className: recipe.classNameMap.serviceRow, css: [styles.serviceRow, slotStyles?.serviceRow], children: [_jsxs(Box, { as: "span", "data-postkit-service": serviceId, className: recipe.classNameMap.serviceBadge, css: [
                                styles.serviceBadge,
                                service?.accent ? { color: service.accent } : undefined,
                                slotStyles?.serviceBadge,
                            ], children: [_jsx(Box, { as: "span", "aria-hidden": service?.icon ? undefined : true, className: recipe.classNameMap.serviceIcon, css: [styles.serviceIcon, slotStyles?.serviceIcon], children: service?.icon ??
                                        (service?.label ?? serviceId).slice(0, 1).toUpperCase() }), service?.label ?? serviceId] }), formattedTimestamp ? (_jsx(SocialPostTime, { dateTime: timestamp, className: recipe.classNameMap.timestamp, css: [styles.timestamp, slotStyles?.timestamp], children: formattedTimestamp })) : null] }), displayedAuthor || displayedHandle || avatar ? (_jsxs(Flex, { className: recipe.classNameMap.authorRow, css: [styles.authorRow, slotStyles?.authorRow], children: [avatar ? (_jsx(Image, { src: avatar, alt: "", loading: "lazy", className: recipe.classNameMap.avatar, css: [styles.avatar, slotStyles?.avatar] })) : null, _jsxs(Box, { className: recipe.classNameMap.author, css: [styles.author, slotStyles?.author], children: [displayedAuthor ? (_jsx(Text, { className: recipe.classNameMap.authorName, css: [styles.authorName, slotStyles?.authorName], children: displayedAuthor })) : null, displayedHandle ? (_jsx(Text, { className: recipe.classNameMap.handle, css: [styles.handle, slotStyles?.handle], children: displayedHandle })) : null] })] })) : null, postText ? (_jsx(SocialPostQuote, { cite: postUrl, className: recipe.classNameMap.content, css: [styles.content, slotStyles?.content], children: postText })) : null, resolvedSocial?.images[0] ? (_jsx(Box, { className: recipe.classNameMap.media, css: [styles.media, slotStyles?.media], children: _jsx(Image, { src: resolvedSocial.images[0].src, alt: resolvedSocial.images[0].alt ?? '', loading: "lazy", className: recipe.classNameMap.image, css: [styles.image, slotStyles?.image] }) })) : null, resolvedSocial?.quotedPost ? (_jsxs(Box, { className: recipe.classNameMap.quote, css: [styles.quote, slotStyles?.quote], children: [_jsx(Text, { className: recipe.classNameMap.quoteAuthor, css: [styles.quoteAuthor, slotStyles?.quoteAuthor], children: resolvedSocial.quotedPost.author?.name ??
                                resolvedSocial.quotedPost.author?.handle ??
                                socialServices[resolvedSocial.quotedPost.service]?.label ??
                                resolvedSocial.quotedPost.service }), resolvedSocial.quotedPost.text ? (_jsx(Text, { className: recipe.classNameMap.quoteContent, css: [styles.quoteContent, slotStyles?.quoteContent], children: resolvedSocial.quotedPost.text })) : null] })) : null, metrics.length ? (_jsx(Flex, { "aria-label": "Post engagement", className: recipe.classNameMap.metrics, css: [styles.metrics, slotStyles?.metrics], children: metrics.map((metric) => (_jsx(Text, { as: "span", className: recipe.classNameMap.metric, css: [styles.metric, slotStyles?.metric], children: metric }, metric))) })) : null, _jsx(Flex, { className: recipe.classNameMap.footer, css: [styles.footer, slotStyles?.footer], children: _jsx(Link, { href: postUrl, className: recipe.classNameMap.originalLink, css: [styles.originalLink, slotStyles?.originalLink], children: "View original" }) })] }));
    }
    return (_jsxs(Box, { as: "article", "data-postkit-component": "SocialPost", "data-postkit-provider": provider ?? preview?.provider.id, "data-postkit-service": serviceId, "data-postkit-resolution": resolutionStatus, "data-postkit-resolution-mode": resolutionMode, ...restRootProps, className: postkitSlotClassName(recipe.classNameMap.root, rootClassName), css: [styles.root, slotStyles?.root, rootCss], children: [primaryContent, snapshotProvenance] }));
}
