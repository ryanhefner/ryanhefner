import remarkFrontmatter from 'remark-frontmatter';
import { type Options as RemarkGfmOptions } from 'remark-gfm';
import type { Pluggable, PluggableList } from 'unified';
import { type RemarkPostkitOptions } from './remark-postkit.js';
import type { PostkitRemarkPluginId } from './plugin-capabilities.js';
export type { PostkitRemarkPluginId } from './plugin-capabilities.js';
export interface PostkitRemarkPresetOptions {
    /** Adds plugins before Postkit's defaults. */
    readonly before?: PluggableList;
    /** Adds plugins after Postkit's defaults. */
    readonly after?: PluggableList;
    /**
     * GFM includes autolinks, footnotes, strikethrough, tables, and task lists.
     * Set to `false` to omit it.
     */
    readonly gfm?: false | RemarkGfmOptions;
    /** Recognizes YAML and TOML frontmatter without rendering it. */
    readonly frontmatter?: false | Parameters<typeof remarkFrontmatter>[0];
    /** Enables the directive syntax consumed by Postkit components. */
    readonly directives?: boolean;
    /** Transforms supported directives into registered Postkit components. */
    readonly postkit?: false | RemarkPostkitOptions;
    /**
     * Replaces or removes an individual default while preserving its position.
     * This is useful when a host framework supplies its own equivalent plugin.
     */
    readonly overrides?: Partial<Record<PostkitRemarkPluginId, Pluggable | false>>;
}
export interface PostkitRemarkPreset {
    readonly remarkPlugins: PluggableList;
    readonly capabilities: ReadonlySet<PostkitRemarkPluginId>;
}
/**
 * Returns a conservative, ordered Remark preset suitable for Postkit sites.
 * Hosts still own parsing, compilation, sanitization, and Rehype configuration.
 */
export declare function createPostkitRemarkPreset(options?: PostkitRemarkPresetOptions): PostkitRemarkPreset;
export declare function createPostkitRemarkPlugins(options?: PostkitRemarkPresetOptions): PluggableList;
//# sourceMappingURL=markdown-preset.d.ts.map