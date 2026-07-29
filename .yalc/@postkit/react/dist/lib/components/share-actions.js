'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Box, Button, Text, } from '@chakra-ui/react';
import { useState } from 'react';
import { parseJsonProp } from '../json-props.js';
import { usePostkit } from '../provider.js';
import { postkitShareActionsRecipe, } from '../recipes/share-actions.recipe.js';
import { postkitSlotClassName, usePostkitSlotRecipe, } from '../recipes/types.js';
import { postkitRecipeKeys } from '../theme.js';
async function copyUrl(url) {
    if (typeof navigator === 'undefined' ||
        typeof navigator.clipboard?.writeText !== 'function') {
        throw new Error('Clipboard access is unavailable.');
    }
    await navigator.clipboard.writeText(url);
}
export function PostkitShareActions({ url, title, text, services: servicesValue = ['native', 'copy', 'email'], label = 'Share this post', onShare, rootProps, slotStyles, layout, size, variant, unstyled, }) {
    const services = parseJsonProp(servicesValue, 'ShareActions services');
    const { socialServices } = usePostkit();
    const [status, setStatus] = useState('');
    const recipe = usePostkitSlotRecipe(postkitRecipeKeys.shareActions, postkitShareActionsRecipe);
    const styles = unstyled
        ? {}
        : recipe({ layout, size, variant });
    const { css: rootCss, className: rootClassName, ...restRootProps } = rootProps ?? {};
    const request = { url, title, text };
    async function share(serviceId) {
        const service = socialServices[serviceId];
        try {
            if (serviceId === 'native' &&
                typeof navigator !== 'undefined' &&
                typeof navigator.share === 'function') {
                await navigator.share(request);
            }
            else if (serviceId === 'native' || serviceId === 'copy') {
                await copyUrl(url);
                setStatus('Link copied.');
            }
            else if (serviceId === 'email' && typeof window !== 'undefined') {
                const subject = title ?? text ?? '';
                const body = [text, url].filter(Boolean).join('\n\n');
                window.location.href = `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
            }
            else if (service?.share) {
                await service.share(request);
            }
            else if (service?.createShareUrl && typeof window !== 'undefined') {
                const shareUrl = service.createShareUrl(request);
                window.open(shareUrl, '_blank', 'noopener,noreferrer');
            }
            else {
                throw new Error(`${service?.label ?? serviceId} sharing is unavailable.`);
            }
            onShare?.(serviceId, request);
            if (serviceId !== 'copy') {
                setStatus(`Opened ${service?.label ?? serviceId}.`);
            }
        }
        catch (error) {
            if (typeof error === 'object' &&
                error !== null &&
                'name' in error &&
                error.name === 'AbortError') {
                return;
            }
            setStatus(error instanceof Error ? error.message : 'Sharing is unavailable.');
        }
    }
    return (_jsxs(Box, { as: "aside", "data-postkit-component": "ShareActions", ...restRootProps, className: postkitSlotClassName(recipe.classNameMap.root, rootClassName), css: [styles.root, slotStyles?.root, rootCss], children: [_jsx(Text, { className: recipe.classNameMap.label, css: [styles.label, slotStyles?.label], children: label }), _jsx(Box, { className: recipe.classNameMap.actions, css: [styles.actions, slotStyles?.actions], children: services.map((serviceId) => {
                    const service = socialServices[serviceId];
                    const serviceLabel = service?.label ?? serviceId;
                    return (_jsxs(Button, { type: "button", "data-postkit-service": serviceId, "aria-label": `${label}: ${serviceLabel}`, onClick: () => void share(serviceId), className: recipe.classNameMap.action, css: [
                            styles.action,
                            service?.accent ? { color: service.accent } : undefined,
                            slotStyles?.action,
                        ], children: [_jsx(Box, { as: "span", "aria-hidden": service?.icon ? undefined : true, className: recipe.classNameMap.icon, css: [styles.icon, slotStyles?.icon], children: service?.icon ?? serviceLabel.slice(0, 1).toUpperCase() }), serviceLabel] }, serviceId));
                }) }), _jsx(Text, { "aria-live": "polite", className: recipe.classNameMap.status, css: [styles.status, slotStyles?.status], children: status })] }));
}
