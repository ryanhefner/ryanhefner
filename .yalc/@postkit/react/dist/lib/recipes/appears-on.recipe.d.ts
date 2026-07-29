export declare const postkitAppearsOnSlots: readonly ["root", "label", "list", "item", "link", "icon", "date", "status"];
export type PostkitAppearsOnSlot = (typeof postkitAppearsOnSlots)[number];
export declare const postkitAppearsOnRecipe: import("@chakra-ui/react").SlotRecipeDefinition<"root" | "label" | "list" | "item" | "link" | "icon" | "date" | "status", {
    size: {
        sm: {
            root: {
                gap: "2";
                fontSize: "xs";
            };
            list: {
                gap: "1.5";
            };
            item: {
                gap: "1";
            };
            link: {
                gap: "1";
            };
        };
        md: {
            root: {
                gap: "3";
                fontSize: "sm";
            };
            list: {
                gap: "2";
            };
            item: {
                gap: "1.5";
            };
            link: {
                gap: "1.5";
            };
        };
        lg: {
            root: {
                gap: "4";
                fontSize: "md";
            };
            list: {
                gap: "3";
            };
            item: {
                gap: "2";
            };
            link: {
                gap: "2";
            };
        };
    };
    variant: {
        outline: {
            root: {
                background: "bg";
                borderColor: "border";
                borderRadius: "xl";
                borderWidth: "1px";
                padding: "4";
            };
        };
        subtle: {
            root: {
                background: "bg.muted";
                borderRadius: "xl";
                padding: "4";
            };
        };
        plain: {};
    };
    presentation: {
        inline: {
            root: {
                alignItems: "baseline";
                display: "flex";
                flexWrap: "wrap";
            };
        };
        list: {
            list: {
                display: "grid";
            };
            item: {
                justifyContent: "space-between";
            };
        };
        badges: {
            item: {
                background: "bg.muted";
                borderRadius: "full";
                paddingBlock: "1";
                paddingInline: "2.5";
            };
        };
        card: {};
    };
}>;
//# sourceMappingURL=appears-on.recipe.d.ts.map