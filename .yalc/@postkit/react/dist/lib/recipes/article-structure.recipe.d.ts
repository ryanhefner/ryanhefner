export declare const postkitCalloutSlots: readonly ["root", "icon", "content", "title", "body"];
export type PostkitCalloutSlot = (typeof postkitCalloutSlots)[number];
export declare const postkitCalloutRecipe: import("@chakra-ui/react").SlotRecipeDefinition<"root" | "icon" | "content" | "title" | "body", {
    size: {
        sm: {
            root: {
                fontSize: "sm";
                padding: "3";
            };
        };
        md: {
            root: {
                fontSize: "md";
                padding: "4";
            };
        };
        lg: {
            root: {
                fontSize: "lg";
                padding: "5";
            };
        };
    };
    variant: {
        outline: {
            root: {
                borderColor: "border";
                borderWidth: "1px";
            };
        };
        subtle: {
            root: {
                background: "bg.muted";
            };
        };
        plain: {
            root: {
                borderInlineStartColor: "colorPalette.solid";
                borderInlineStartWidth: "4px";
                borderRadius: "0";
            };
        };
    };
    tone: {
        note: {
            icon: {
                background: "blue.subtle";
                color: "blue.fg";
            };
        };
        tip: {
            icon: {
                background: "green.subtle";
                color: "green.fg";
            };
        };
        important: {
            icon: {
                background: "purple.subtle";
                color: "purple.fg";
            };
        };
        warning: {
            icon: {
                background: "orange.subtle";
                color: "orange.fg";
            };
        };
        caution: {
            icon: {
                background: "red.subtle";
                color: "red.fg";
            };
        };
    };
}>;
export declare const postkitGallerySlots: readonly ["root", "header", "title", "description", "grid", "item", "imageLink", "image", "caption"];
export type PostkitGallerySlot = (typeof postkitGallerySlots)[number];
export declare const postkitGalleryRecipe: import("@chakra-ui/react").SlotRecipeDefinition<"root" | "item" | "grid" | "title" | "caption" | "description" | "header" | "imageLink" | "image", {
    size: {
        sm: {
            grid: {
                gap: "2";
            };
            caption: {
                fontSize: "xs";
            };
        };
        md: {
            grid: {
                gap: "3";
            };
        };
        lg: {
            grid: {
                gap: "4";
            };
            caption: {
                fontSize: "md";
            };
        };
    };
    variant: {
        outline: {
            item: {
                borderColor: "border";
                borderRadius: "xl";
                borderWidth: "1px";
                padding: "2";
            };
        };
        subtle: {
            item: {
                background: "bg.muted";
                borderRadius: "xl";
                padding: "2";
            };
        };
        plain: {};
    };
}>;
export declare const postkitDisclosureSlots: readonly ["root", "summary", "indicator", "content"];
export type PostkitDisclosureSlot = (typeof postkitDisclosureSlots)[number];
export declare const postkitDisclosureRecipe: import("@chakra-ui/react").SlotRecipeDefinition<"root" | "content" | "summary" | "indicator", {
    size: {
        sm: {
            root: {
                fontSize: "sm";
                padding: "3";
            };
        };
        md: {
            root: {
                fontSize: "md";
                padding: "4";
            };
        };
        lg: {
            root: {
                fontSize: "lg";
                padding: "5";
            };
        };
    };
    variant: {
        outline: {
            root: {
                borderColor: "border";
                borderWidth: "1px";
            };
        };
        subtle: {
            root: {
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
export declare const postkitTabsSlots: readonly ["root", "list", "tab", "panels", "panel"];
export type PostkitTabsSlot = (typeof postkitTabsSlots)[number];
export declare const postkitTabsRecipe: import("@chakra-ui/react").SlotRecipeDefinition<"root" | "list" | "tab" | "panels" | "panel", {
    size: {
        sm: {
            root: {
                fontSize: "sm";
            };
            tab: {
                paddingBlock: "1.5";
                paddingInline: "2";
            };
        };
        md: {
            root: {
                fontSize: "md";
            };
        };
        lg: {
            root: {
                fontSize: "lg";
            };
            tab: {
                paddingBlock: "2.5";
                paddingInline: "4";
            };
        };
    };
    variant: {
        outline: {
            panels: {
                borderColor: "border";
                borderRadius: "lg";
                borderWidth: "1px";
                padding: "4";
            };
        };
        subtle: {
            panels: {
                background: "bg.muted";
                borderRadius: "lg";
                padding: "4";
            };
        };
        plain: {};
    };
}>;
export declare const postkitStepsSlots: readonly ["root", "item", "marker", "content", "title", "description"];
export type PostkitStepsSlot = (typeof postkitStepsSlots)[number];
export declare const postkitStepsRecipe: import("@chakra-ui/react").SlotRecipeDefinition<"root" | "item" | "content" | "marker" | "title" | "description", {
    size: {
        sm: {
            root: {
                fontSize: "sm";
                gap: "3";
            };
            marker: {
                height: "6";
                width: "6";
            };
        };
        md: {
            root: {
                fontSize: "md";
            };
        };
        lg: {
            root: {
                fontSize: "lg";
                gap: "5";
            };
            marker: {
                height: "8";
                width: "8";
            };
        };
    };
    variant: {
        outline: {
            marker: {
                background: "transparent";
                borderColor: "colorPalette.solid";
                borderWidth: "1px";
                color: "colorPalette.fg";
            };
        };
        subtle: {
            item: {
                background: "bg.muted";
                borderRadius: "lg";
                padding: "3";
            };
        };
        plain: {};
    };
}>;
export declare const postkitCardGridSlots: readonly ["root", "header", "title", "description", "grid", "card", "image", "cardBody", "cardTitle", "cardDescription", "meta", "link"];
export type PostkitCardGridSlot = (typeof postkitCardGridSlots)[number];
export declare const postkitCardGridRecipe: import("@chakra-ui/react").SlotRecipeDefinition<"root" | "link" | "grid" | "card" | "title" | "description" | "header" | "image" | "cardBody" | "cardTitle" | "cardDescription" | "meta", {
    size: {
        sm: {
            grid: {
                gap: "3";
            };
            cardBody: {
                fontSize: "sm";
                padding: "3";
            };
        };
        md: {};
        lg: {
            grid: {
                gap: "5";
            };
            cardBody: {
                fontSize: "lg";
                padding: "5";
            };
        };
    };
    variant: {
        outline: {
            card: {
                borderColor: "border";
                borderWidth: "1px";
            };
        };
        subtle: {
            card: {
                background: "bg.muted";
            };
        };
        plain: {
            cardBody: {
                paddingInline: "0";
            };
        };
    };
}>;
//# sourceMappingURL=article-structure.recipe.d.ts.map