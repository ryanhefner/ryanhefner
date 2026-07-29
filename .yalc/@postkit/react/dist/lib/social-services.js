function shareText({ text, title, url }) {
    return [text ?? title, url].filter(Boolean).join('\n\n');
}
export const postkitDefaultSocialServices = Object.freeze({
    native: { label: 'Share' },
    copy: { label: 'Copy link' },
    email: { label: 'Email' },
    bluesky: {
        label: 'Bluesky',
        accent: 'blue.500',
        createShareUrl: (request) => `https://bsky.app/intent/compose?text=${encodeURIComponent(shareText(request))}`,
    },
    facebook: {
        label: 'Facebook',
        accent: 'blue.600',
        createShareUrl: ({ url }) => `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
    },
    instagram: { label: 'Instagram', accent: 'pink.500' },
    linegraph: { label: 'Linegraph', accent: 'purple.500' },
    linkedin: {
        label: 'LinkedIn',
        accent: 'blue.700',
        createShareUrl: ({ url }) => `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
    },
    mastodon: { label: 'Mastodon', accent: 'purple.500' },
    medium: { label: 'Medium', accent: 'fg' },
    threads: {
        label: 'Threads',
        accent: 'fg',
        createShareUrl: (request) => `https://www.threads.net/intent/post?text=${encodeURIComponent(shareText(request))}`,
    },
    tiktok: { label: 'TikTok', accent: 'fg' },
    x: {
        label: 'X',
        accent: 'fg',
        createShareUrl: ({ text, title, url }) => {
            const query = new URLSearchParams({
                url,
                ...((text ?? title) ? { text: text ?? title ?? '' } : {}),
            });
            return `https://x.com/intent/post?${query.toString()}`;
        },
    },
    youtube: { label: 'YouTube', accent: 'red.600' },
});
export function mergePostkitSocialServices(overrides = {}) {
    return Object.freeze({
        ...postkitDefaultSocialServices,
        ...overrides,
    });
}
