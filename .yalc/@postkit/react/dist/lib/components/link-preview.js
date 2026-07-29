'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Box, Button, chakra, Flex, Image, Link, Text, } from '@chakra-ui/react';
import { useEffect, useMemo, useState } from 'react';
import { usePostkit } from '../provider.js';
import { PostkitAudio } from './audio.js';
import { PostkitCarousel } from './carousel.js';
import { PostkitSocialPost } from './social-post.js';
import { PostkitVideo } from './video.js';
import { postkitLinkPreviewRecipe, } from '../recipes/link-preview.recipe.js';
import { postkitSlotClassName, usePostkitSlotRecipe, } from '../recipes/types.js';
import { postkitRecipeKeys } from '../theme.js';
const LinkPreviewIframe = chakra('iframe');
function parseMetadata(value) {
    if (!value)
        return undefined;
    if (typeof value !== 'string')
        return value;
    try {
        const parsed = JSON.parse(value);
        if (typeof parsed !== 'object' || parsed === null) {
            throw new TypeError();
        }
        return parsed;
    }
    catch {
        throw new TypeError('Postkit LinkPreview metadata must contain valid JSON.');
    }
}
function displayDomain(href) {
    try {
        return new URL(href).hostname.replace(/^www\./, '');
    }
    catch {
        return href;
    }
}
function withImageOverride(images, src, alt) {
    return src
        ? [{ src, alt }, ...images.filter((item) => item.src !== src)]
        : images;
}
function requestedPresentation(presentation, metadata) {
    if (presentation !== 'auto')
        return presentation;
    if ((metadata?.video?.length ?? 0) > 0 ||
        (metadata?.audio?.length ?? 0) > 0) {
        return 'media';
    }
    if (metadata?.embed?.src)
        return 'embed';
    return 'card';
}
function selectedMedia(metadata, preference) {
    if (preference !== 'audio' && metadata?.video?.[0]) {
        return { kind: 'video', item: metadata.video[0] };
    }
    if (preference !== 'video' && metadata?.audio?.[0]) {
        return { kind: 'audio', item: metadata.audio[0] };
    }
    return undefined;
}
export function PostkitLinkPreview({ href, metadata: metadataValue, children, presentation = 'card', images: imageMode = 'first', media: mediaPreference = 'auto', activation = 'click', provider, title: titleOverride, description: descriptionOverride, siteName: siteNameOverride, image: imageOverride, imageAlt, favicon: faviconOverride, iframeTitle, iframeSandbox = 'allow-scripts allow-same-origin allow-presentation allow-popups', rootProps, slotStyles, size, variant, unstyled, }) {
    const suppliedMetadata = useMemo(() => parseMetadata(metadataValue), [metadataValue]);
    const { resolveLink } = usePostkit();
    const resolutionKey = `${provider ?? ''}\u0000${href}`;
    const [resolution, setResolution] = useState({
        key: resolutionKey,
        status: 'idle',
    });
    const runtimeMetadata = resolution.key === resolutionKey ? resolution.metadata : undefined;
    const metadata = suppliedMetadata ?? runtimeMetadata;
    const resolutionStatus = suppliedMetadata
        ? 'provided'
        : resolution.key === resolutionKey
            ? resolution.status
            : 'idle';
    useEffect(() => {
        if (suppliedMetadata || !resolveLink) {
            return;
        }
        const controller = new AbortController();
        let active = true;
        setResolution({ key: resolutionKey, status: 'loading' });
        void resolveLink(href, {
            provider,
            signal: controller.signal,
        }).then((resolved) => {
            if (active) {
                setResolution({
                    key: resolutionKey,
                    status: 'resolved',
                    metadata: resolved,
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
    }, [href, provider, resolutionKey, resolveLink, suppliedMetadata]);
    const resolvedPresentation = requestedPresentation(presentation, metadata);
    const recipe = usePostkitSlotRecipe(postkitRecipeKeys.linkPreview, postkitLinkPreviewRecipe);
    const compact = resolvedPresentation === 'card' && size === 'sm';
    const styles = unstyled
        ? {}
        : recipe({
            size,
            variant,
            presentation: resolvedPresentation,
            compact,
        });
    const { css: rootCss, className: rootClassName, ...restRootProps } = rootProps ?? {};
    const [embedActive, setEmbedActive] = useState(activation === 'immediate');
    const title = titleOverride ?? metadata?.title;
    const description = descriptionOverride ?? metadata?.description;
    const siteName = siteNameOverride ?? metadata?.siteName ?? displayDomain(href);
    const favicon = faviconOverride ?? metadata?.favicon;
    const embed = metadata?.embed;
    const resolvedImages = metadata?.images.length || !embed?.thumbnail
        ? (metadata?.images ?? [])
        : [embed.thumbnail];
    const availableImages = withImageOverride(resolvedImages, imageOverride, imageAlt);
    const domain = displayDomain(metadata?.url ?? href);
    const mediaItem = selectedMedia(metadata, mediaPreference);
    if (presentation === 'auto' && metadata?.social) {
        return (_jsx(PostkitSocialPost, { href: href, metadata: metadata, provider: provider, service: metadata.social.service, presentation: "card", size: size, variant: variant, unstyled: unstyled }));
    }
    if (resolvedPresentation === 'inline') {
        return (_jsx(Box, { as: "span", "data-postkit-component": "LinkPreview", "data-postkit-provider": provider ?? metadata?.provider?.id, "data-postkit-resolution": resolutionStatus, ...restRootProps, className: postkitSlotClassName(recipe.classNameMap.root, rootClassName), css: [styles.root, slotStyles?.root, rootCss], children: _jsx(Link, { href: href, className: recipe.classNameMap.anchor, css: [styles.anchor, slotStyles?.anchor], children: children ?? title ?? href }) }));
    }
    const siteContent = (_jsxs(Box, { className: recipe.classNameMap.content, css: [styles.content, slotStyles?.content], children: [_jsxs(Flex, { className: recipe.classNameMap.siteRow, css: [styles.siteRow, slotStyles?.siteRow], children: [favicon ? (_jsx(Image, { src: favicon, alt: "", loading: "lazy", className: recipe.classNameMap.favicon, css: [styles.favicon, slotStyles?.favicon] })) : null, _jsx(Text, { as: "span", className: recipe.classNameMap.siteName, css: [styles.siteName, slotStyles?.siteName], children: siteName })] }), _jsx(Text, { as: "h3", className: recipe.classNameMap.title, css: [styles.title, slotStyles?.title], children: title ?? domain }), description ? (_jsx(Text, { className: recipe.classNameMap.description, css: [styles.description, slotStyles?.description], children: description })) : null, _jsx(Text, { className: recipe.classNameMap.domain, css: [styles.domain, slotStyles?.domain], children: domain })] }));
    let primaryContent;
    if (resolvedPresentation === 'media' && mediaItem) {
        primaryContent = (_jsx(Box, { className: recipe.classNameMap.mediaPlayer, css: [styles.mediaPlayer, slotStyles?.mediaPlayer], children: mediaItem.kind === 'video' ? (_jsx(PostkitVideo, { src: mediaItem.item.src, title: title ?? `Video from ${siteName}`, poster: mediaItem.item.poster ?? availableImages[0]?.src, aspectRatio: mediaItem.item.width && mediaItem.item.height
                    ? `${mediaItem.item.width} / ${mediaItem.item.height}`
                    : undefined, size: size, variant: variant })) : (_jsx(PostkitAudio, { src: mediaItem.item.src, title: title ?? `Audio from ${siteName}`, size: size, variant: variant })) }));
    }
    else if ((resolvedPresentation === 'embed' ||
        (resolvedPresentation === 'media' && !mediaItem)) &&
        embed?.src &&
        embed.type !== 'photo') {
        primaryContent = (_jsx(Box, { className: recipe.classNameMap.embedFrame, css: [
                styles.embedFrame,
                embed.aspectRatio
                    ? { aspectRatio: String(embed.aspectRatio) }
                    : undefined,
                slotStyles?.embedFrame,
            ], children: embedActive ? (_jsx(LinkPreviewIframe, { src: embed.src, title: iframeTitle ?? embed.title ?? title ?? `Embed from ${siteName}`, sandbox: iframeSandbox, loading: "lazy", referrerPolicy: "strict-origin-when-cross-origin", allow: "accelerometer; autoplay; encrypted-media; fullscreen; picture-in-picture", allowFullScreen: true, className: recipe.classNameMap.embed, css: [styles.embed, slotStyles?.embed] })) : (_jsxs(Box, { className: recipe.classNameMap.consent, css: [
                    styles.consent,
                    availableImages[0]
                        ? {
                            backgroundImage: `linear-gradient(rgba(0,0,0,.62), rgba(0,0,0,.62)), url("${availableImages[0].src.replaceAll('"', '\\"')}")`,
                            backgroundPosition: 'center',
                            backgroundSize: 'cover',
                            color: 'white',
                        }
                        : undefined,
                    slotStyles?.consent,
                ], children: [_jsxs(Text, { children: ["Load interactive content from ", siteName, "?"] }), _jsx(Button, { type: "button", onClick: () => setEmbedActive(true), className: recipe.classNameMap.consentButton, css: [styles.consentButton, slotStyles?.consentButton], children: "Load embed" })] })) }));
    }
    else {
        const shownImages = imageMode === 'none'
            ? []
            : imageMode === 'carousel'
                ? availableImages
                : availableImages.slice(0, 1);
        primaryContent =
            shownImages.length > 1 ? (_jsx(Box, { className: recipe.classNameMap.carousel, css: [styles.carousel, slotStyles?.carousel], children: _jsx(PostkitCarousel, { label: `${title ?? siteName} images`, size: size, variant: "plain", items: shownImages.map((item, index) => ({
                        id: `${index}-${item.src}`,
                        image: {
                            src: item.src,
                            alt: item.alt ?? '',
                        },
                        href,
                    })) }) })) : shownImages[0] ? (_jsx(Link, { href: href, "aria-label": `Open ${title ?? domain}`, className: recipe.classNameMap.media, css: [styles.media, slotStyles?.media], children: _jsx(Image, { src: shownImages[0].src, alt: shownImages[0].alt ?? '', htmlWidth: shownImages[0].width, htmlHeight: shownImages[0].height, loading: "lazy", className: recipe.classNameMap.image, css: [styles.image, slotStyles?.image] }) })) : null;
    }
    return (_jsxs(Box, { as: "article", "data-postkit-component": "LinkPreview", "data-postkit-presentation": resolvedPresentation, "data-postkit-provider": provider ?? metadata?.provider?.id, "data-postkit-resolution": resolutionStatus, ...restRootProps, className: postkitSlotClassName(recipe.classNameMap.root, rootClassName), css: [styles.root, slotStyles?.root, rootCss], children: [primaryContent, _jsx(Link, { href: href, "aria-label": `Open ${title ?? domain}`, className: recipe.classNameMap.anchor, css: [styles.anchor, slotStyles?.anchor], children: siteContent })] }));
}
