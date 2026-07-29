import remarkDirective from 'remark-directive';
import remarkFrontmatter from 'remark-frontmatter';
import remarkGfm from 'remark-gfm';
import { remarkPostkit } from './remark-postkit.js';
function defaultPluginEntries(options) {
    return [
        ['gfm', options.gfm === false ? false : [remarkGfm, options.gfm ?? {}]],
        [
            'frontmatter',
            options.frontmatter === false
                ? false
                : [remarkFrontmatter, options.frontmatter ?? ['yaml', 'toml']],
        ],
        ['directives', options.directives === false ? false : remarkDirective],
        [
            'postkit',
            options.postkit === false
                ? false
                : [remarkPostkit, options.postkit ?? {}],
        ],
    ];
}
/**
 * Returns a conservative, ordered Remark preset suitable for Postkit sites.
 * Hosts still own parsing, compilation, sanitization, and Rehype configuration.
 */
export function createPostkitRemarkPreset(options = {}) {
    const capabilities = new Set();
    const defaults = defaultPluginEntries(options).flatMap(([id, fallback]) => {
        const plugin = options.overrides?.[id] ?? fallback;
        if (plugin === false) {
            return [];
        }
        capabilities.add(id);
        return [plugin];
    });
    return {
        remarkPlugins: [
            ...(options.before ?? []),
            ...defaults,
            ...(options.after ?? []),
        ],
        capabilities,
    };
}
export function createPostkitRemarkPlugins(options = {}) {
    return createPostkitRemarkPreset(options).remarkPlugins;
}
