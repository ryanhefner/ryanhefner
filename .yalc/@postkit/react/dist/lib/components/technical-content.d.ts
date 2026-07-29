import { type BoxProps, type RecipeVariantProps, type UnstyledProp } from '@chakra-ui/react';
import { type ReactNode } from 'react';
import { postkitCodeBlockRecipe, postkitCodeGroupRecipe, postkitDiffRecipe, postkitFileCardRecipe, postkitFileTreeRecipe, postkitTerminalRecipe, type PostkitCodeBlockSlot, type PostkitCodeGroupSlot, type PostkitDiffSlot, type PostkitFileCardSlot, type PostkitFileTreeSlot, type PostkitTerminalSlot } from '../recipes/technical-content.recipe.js';
import { type PostkitSlotStyles } from '../recipes/types.js';
type SharedRootProps<Slot extends string> = {
    readonly rootProps?: BoxProps;
    readonly slotStyles?: PostkitSlotStyles<Slot>;
};
export type PostkitCodeBlockProps = {
    readonly code?: string;
    readonly children?: ReactNode;
    readonly language?: string;
    readonly filename?: string;
    readonly highlightLines?: string;
    readonly lineNumbers?: boolean | string;
    readonly copy?: boolean | string;
    readonly wrap?: boolean | string;
    readonly maxHeight?: number | string;
} & SharedRootProps<PostkitCodeBlockSlot> & RecipeVariantProps<typeof postkitCodeBlockRecipe> & UnstyledProp;
export declare function PostkitCodeBlock({ code, children, language, filename, highlightLines: highlightsValue, lineNumbers, copy, wrap, maxHeight, rootProps, slotStyles, size, variant, unstyled, }: PostkitCodeBlockProps): import("react").JSX.Element;
export interface PostkitCodeGroupItem {
    readonly label: string;
    readonly code: string;
    readonly language?: string;
    readonly filename?: string;
}
export type PostkitCodeGroupProps = {
    readonly items: string | readonly PostkitCodeGroupItem[];
    readonly label?: string;
    readonly initialIndex?: number | string;
} & SharedRootProps<PostkitCodeGroupSlot> & RecipeVariantProps<typeof postkitCodeGroupRecipe> & UnstyledProp;
export declare function PostkitCodeGroup({ items: value, label, initialIndex, rootProps, slotStyles, size, variant, unstyled, }: PostkitCodeGroupProps): import("react").JSX.Element;
export type PostkitTerminalProps = {
    readonly command: string;
    readonly output?: string;
    readonly prompt?: string;
    readonly title?: string;
} & SharedRootProps<PostkitTerminalSlot> & RecipeVariantProps<typeof postkitTerminalRecipe> & UnstyledProp;
export declare function PostkitTerminal({ command, output, prompt, title, rootProps, slotStyles, size, variant, unstyled, }: PostkitTerminalProps): import("react").JSX.Element;
export type PostkitDiffProps = {
    readonly diff: string;
    readonly title?: string;
} & SharedRootProps<PostkitDiffSlot> & RecipeVariantProps<typeof postkitDiffRecipe> & UnstyledProp;
export declare function PostkitDiff({ diff, title, rootProps, slotStyles, size, variant, unstyled, }: PostkitDiffProps): import("react").JSX.Element;
export interface PostkitFileTreeItem {
    readonly path: string;
    readonly type?: 'file' | 'folder';
    readonly meta?: string;
}
export type PostkitFileTreeProps = {
    readonly items: string | readonly PostkitFileTreeItem[];
    readonly title?: string;
} & SharedRootProps<PostkitFileTreeSlot> & RecipeVariantProps<typeof postkitFileTreeRecipe> & UnstyledProp;
export declare function PostkitFileTree({ items: value, title, rootProps, slotStyles, size, variant, unstyled, }: PostkitFileTreeProps): import("react").JSX.Element;
export type PostkitFileCardProps = {
    readonly href: string;
    readonly name: string;
    readonly description?: string;
    readonly fileType?: string;
    readonly fileSize?: string;
    readonly download?: boolean | string;
    readonly actionLabel?: string;
} & SharedRootProps<PostkitFileCardSlot> & RecipeVariantProps<typeof postkitFileCardRecipe> & UnstyledProp;
export declare function PostkitFileCard({ href, name, description, fileType, fileSize, download, actionLabel, rootProps, slotStyles, size, variant, unstyled, }: PostkitFileCardProps): import("react").JSX.Element;
export {};
//# sourceMappingURL=technical-content.d.ts.map