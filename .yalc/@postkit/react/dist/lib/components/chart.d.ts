import { type BoxProps, type RecipeVariantProps, type UnstyledProp } from '@chakra-ui/react';
import { postkitChartRecipe, type PostkitChartSlot } from '../recipes/chart.recipe.js';
import { type PostkitSlotStyles } from '../recipes/types.js';
export interface PostkitChartDatum {
    readonly label: string;
    readonly [key: string]: string | number;
}
export interface PostkitChartSeries {
    readonly key: string;
    readonly label?: string;
    readonly color?: string;
}
export type PostkitChartProps = {
    readonly data: string | readonly PostkitChartDatum[];
    readonly series?: string | readonly PostkitChartSeries[];
    readonly title: string;
    readonly description?: string;
    readonly type?: 'bar' | 'line';
    readonly showTable?: boolean | string;
    readonly rootProps?: BoxProps;
    readonly slotStyles?: PostkitSlotStyles<PostkitChartSlot>;
} & RecipeVariantProps<typeof postkitChartRecipe> & UnstyledProp;
export declare function PostkitChart({ data, series, title, description, type, showTable, rootProps, slotStyles, size, variant, unstyled, }: PostkitChartProps): import("react").JSX.Element;
//# sourceMappingURL=chart.d.ts.map