import { type PostkitComponentName } from './declarations.js';
type DirectiveAttributeValue = string | null | undefined;
interface DirectiveData {
    hName?: string;
    hProperties?: Record<string, string | boolean>;
    [key: string]: unknown;
}
export interface PostkitDirectiveNode {
    type: string;
    name?: string;
    attributes?: Record<string, DirectiveAttributeValue> | PostkitDirectiveNode[];
    children?: PostkitDirectiveNode[];
    data?: DirectiveData;
    [key: string]: unknown;
}
export interface RemarkPostkitOptions {
    /**
     * `mdx` emits MDX JSX nodes. `hast` annotates directives for pipelines such
     * as react-markdown that turn `data.hName` into a registered component.
     */
    readonly output?: 'hast' | 'mdx';
    /**
     * Throw on invalid props by default so malformed authored content fails a
     * site build instead of silently changing behavior.
     */
    readonly strict?: boolean;
}
/**
 * Remark-compatible transformer for Postkit directives. Pair it with a
 * directive parser (for example `remark-directive`) before this plugin.
 */
export declare function remarkPostkit(options?: RemarkPostkitOptions): (tree: PostkitDirectiveNode) => void;
export declare function isPostkitComponentName(value: string): value is PostkitComponentName;
export {};
//# sourceMappingURL=remark-postkit.d.ts.map