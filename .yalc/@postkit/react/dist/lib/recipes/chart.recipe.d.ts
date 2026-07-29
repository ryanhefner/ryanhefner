export declare const postkitChartSlots: readonly ["root", "title", "description", "legend", "legendItem", "legendSwatch", "plot", "svg", "gridLine", "axisLabel", "seriesMark", "emptyState", "tableContainer", "table", "headerCell", "rowHeader", "dataCell"];
export type PostkitChartSlot = (typeof postkitChartSlots)[number];
export declare const postkitChartRecipe: import("@chakra-ui/react").SlotRecipeDefinition<"root" | "table" | "emptyState" | "title" | "description" | "legend" | "legendItem" | "legendSwatch" | "plot" | "svg" | "gridLine" | "axisLabel" | "seriesMark" | "tableContainer" | "headerCell" | "rowHeader" | "dataCell", {
    size: {
        sm: {
            root: {
                padding: "3";
            };
            title: {
                fontSize: "md";
            };
            description: {
                fontSize: "sm";
                marginTop: "1";
            };
            legend: {
                gap: "3";
                marginTop: "2";
            };
            legendItem: {
                gap: "1";
                fontSize: "xs";
            };
            legendSwatch: {
                width: "2.5";
                height: "2.5";
            };
            plot: {
                marginTop: "3";
            };
            emptyState: {
                marginTop: "3";
                fontSize: "sm";
            };
            tableContainer: {
                marginTop: "3";
            };
            table: {
                fontSize: "xs";
            };
            headerCell: {
                padding: "1.5";
            };
            rowHeader: {
                padding: "1.5";
            };
            dataCell: {
                padding: "1.5";
            };
        };
        md: {
            root: {
                padding: {
                    base: "3";
                    md: "5";
                };
            };
            title: {
                fontSize: "lg";
            };
            description: {
                fontSize: "md";
                marginTop: "1";
            };
            legend: {
                gap: "4";
                marginTop: "3";
            };
            legendItem: {
                gap: "2";
                fontSize: "sm";
            };
            legendSwatch: {
                width: "3";
                height: "3";
            };
            plot: {
                marginTop: "4";
            };
            emptyState: {
                marginTop: "4";
                fontSize: "md";
            };
            tableContainer: {
                marginTop: "4";
            };
            table: {
                fontSize: "sm";
            };
            headerCell: {
                padding: "2";
            };
            rowHeader: {
                padding: "2";
            };
            dataCell: {
                padding: "2";
            };
        };
        lg: {
            root: {
                padding: {
                    base: "4";
                    md: "6";
                };
            };
            title: {
                fontSize: "xl";
            };
            description: {
                fontSize: "lg";
                marginTop: "2";
            };
            legend: {
                gap: "5";
                marginTop: "4";
            };
            legendItem: {
                gap: "2";
                fontSize: "md";
            };
            legendSwatch: {
                width: "3.5";
                height: "3.5";
            };
            plot: {
                marginTop: "5";
            };
            emptyState: {
                marginTop: "5";
                fontSize: "lg";
            };
            tableContainer: {
                marginTop: "5";
            };
            table: {
                fontSize: "md";
            };
            headerCell: {
                padding: "3";
            };
            rowHeader: {
                padding: "3";
            };
            dataCell: {
                padding: "3";
            };
        };
    };
    variant: {
        outline: {
            root: {
                borderWidth: "1px";
                borderRadius: "xl";
                background: "bg";
            };
        };
        subtle: {
            root: {
                borderRadius: "xl";
                background: "bg.muted";
            };
        };
        plain: {
            root: {
                paddingInline: "0";
            };
        };
    };
}>;
//# sourceMappingURL=chart.recipe.d.ts.map