export declare const postkitPullQuoteSlots: readonly ["root", "mark", "quote", "attribution", "cite"];
export type PostkitPullQuoteSlot = (typeof postkitPullQuoteSlots)[number];
export declare const postkitPullQuoteRecipe: import("@chakra-ui/react").SlotRecipeDefinition<"root" | "mark" | "quote" | "attribution" | "cite", {
    size: {
        sm: {
            quote: {
                fontSize: "lg";
            };
        };
        md: {};
        lg: {
            quote: {
                fontSize: "3xl";
            };
        };
    };
    variant: {
        outline: {
            root: {
                borderBlockColor: "border";
                borderBlockWidth: "1px";
                paddingBlock: "5";
            };
        };
        subtle: {
            root: {
                background: "bg.muted";
                borderRadius: "xl";
                padding: "5";
            };
        };
        plain: {};
    };
}>;
export declare const postkitKeyTakeawaySlots: readonly ["root", "eyebrow", "title", "body", "list", "item"];
export type PostkitKeyTakeawaySlot = (typeof postkitKeyTakeawaySlots)[number];
export declare const postkitKeyTakeawayRecipe: import("@chakra-ui/react").SlotRecipeDefinition<"root" | "body" | "eyebrow" | "title" | "list" | "item", {
    size: {
        sm: {
            root: {
                fontSize: "sm";
                padding: "4";
            };
            title: {
                fontSize: "lg";
            };
        };
        md: {};
        lg: {
            root: {
                fontSize: "lg";
                padding: "6";
            };
            title: {
                fontSize: "2xl";
            };
        };
    };
    variant: {
        outline: {
            root: {
                borderColor: "colorPalette.muted";
                borderWidth: "1px";
            };
        };
        subtle: {
            root: {
                background: "colorPalette.subtle";
            };
        };
        plain: {
            root: {
                borderInlineStartColor: "colorPalette.solid";
                borderInlineStartWidth: "4px";
                borderRadius: "0";
                paddingInlineEnd: "0";
            };
        };
    };
}>;
export declare const postkitStatSlots: readonly ["root", "value", "label", "trend", "description"];
export type PostkitStatSlot = (typeof postkitStatSlots)[number];
export declare const postkitStatRecipe: import("@chakra-ui/react").SlotRecipeDefinition<"root" | "value" | "label" | "trend" | "description", {
    size: {
        sm: {
            value: {
                fontSize: "2xl";
            };
        };
        md: {};
        lg: {
            root: {
                padding: "5";
            };
            value: {
                fontSize: "4xl";
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
export declare const postkitComparisonSlots: readonly ["root", "title", "description", "scroller", "table", "head", "header", "row", "label", "value"];
export type PostkitComparisonSlot = (typeof postkitComparisonSlots)[number];
export declare const postkitComparisonRecipe: import("@chakra-ui/react").SlotRecipeDefinition<"root" | "header" | "table" | "title" | "value" | "label" | "description" | "scroller" | "head" | "row", {
    size: {
        sm: {
            table: {
                fontSize: "sm";
            };
            header: {
                padding: "2";
            };
            label: {
                padding: "2";
            };
            value: {
                padding: "2";
            };
        };
        md: {};
        lg: {
            table: {
                fontSize: "lg";
            };
        };
    };
    variant: {
        outline: {
            scroller: {
                borderColor: "border";
                borderRadius: "xl";
                borderWidth: "1px";
            };
        };
        subtle: {
            scroller: {
                background: "bg.subtle";
                borderRadius: "xl";
            };
        };
        plain: {};
    };
}>;
export declare const postkitPollSlots: readonly ["root", "question", "description", "options", "option", "optionLabel", "result", "bar", "status"];
export type PostkitPollSlot = (typeof postkitPollSlots)[number];
export declare const postkitPollRecipe: import("@chakra-ui/react").SlotRecipeDefinition<"root" | "description" | "question" | "options" | "option" | "optionLabel" | "result" | "bar" | "status", {
    size: {
        sm: {
            root: {
                fontSize: "sm";
                padding: "4";
            };
            question: {
                fontSize: "lg";
            };
        };
        md: {};
        lg: {
            root: {
                fontSize: "lg";
                padding: "6";
            };
            question: {
                fontSize: "2xl";
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
export declare const postkitProductCardSlots: readonly ["root", "image", "content", "badge", "title", "description", "rating", "footer", "price", "action"];
export type PostkitProductCardSlot = (typeof postkitProductCardSlots)[number];
export declare const postkitProductCardRecipe: import("@chakra-ui/react").SlotRecipeDefinition<"root" | "content" | "title" | "description" | "image" | "badge" | "rating" | "footer" | "price" | "action", {
    size: {
        sm: {
            content: {
                fontSize: "sm";
                padding: "4";
            };
            title: {
                fontSize: "lg";
            };
        };
        md: {};
        lg: {
            content: {
                fontSize: "lg";
                padding: "6";
            };
            title: {
                fontSize: "2xl";
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
        plain: {};
    };
}>;
export declare const postkitRelatedContentSlots: readonly ["root", "title", "list", "item", "link", "itemTitle", "description", "meta"];
export type PostkitRelatedContentSlot = (typeof postkitRelatedContentSlots)[number];
export declare const postkitRelatedContentRecipe: import("@chakra-ui/react").SlotRecipeDefinition<"root" | "link" | "title" | "list" | "item" | "description" | "itemTitle" | "meta", {
    size: {
        sm: {
            root: {
                fontSize: "sm";
            };
        };
        md: {};
        lg: {
            root: {
                fontSize: "lg";
            };
        };
    };
    variant: {
        outline: {
            item: {
                borderColor: "border";
                borderRadius: "lg";
                borderWidth: "1px";
            };
        };
        subtle: {
            item: {
                background: "bg.subtle";
                borderRadius: "lg";
            };
        };
        plain: {};
    };
}>;
export declare const postkitSeriesNavigationSlots: readonly ["root", "header", "title", "position", "links", "link", "direction", "linkTitle"];
export type PostkitSeriesNavigationSlot = (typeof postkitSeriesNavigationSlots)[number];
export declare const postkitSeriesNavigationRecipe: import("@chakra-ui/react").SlotRecipeDefinition<"root" | "header" | "links" | "link" | "direction" | "position" | "title" | "linkTitle", {
    size: {
        sm: {
            root: {
                fontSize: "sm";
                padding: "3";
            };
        };
        md: {};
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
                background: "bg.subtle";
            };
        };
        plain: {
            root: {
                paddingInline: "0";
            };
        };
    };
}>;
export declare const postkitSponsorBlockSlots: readonly ["root", "disclosure", "logo", "content", "name", "message", "action"];
export type PostkitSponsorBlockSlot = (typeof postkitSponsorBlockSlots)[number];
export declare const postkitSponsorBlockRecipe: import("@chakra-ui/react").SlotRecipeDefinition<"root" | "content" | "name" | "action" | "disclosure" | "logo" | "message", {
    size: {
        sm: {
            root: {
                fontSize: "sm";
                padding: "3";
            };
        };
        md: {};
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
                borderBlockColor: "border";
                borderBlockWidth: "1px";
                borderRadius: "0";
                paddingInline: "0";
            };
        };
    };
}>;
export declare const postkitAudienceBoundarySlots: readonly ["root", "label", "content", "fallback"];
export type PostkitAudienceBoundarySlot = (typeof postkitAudienceBoundarySlots)[number];
export declare const postkitAudienceBoundaryRecipe: import("@chakra-ui/react").SlotRecipeDefinition<"root" | "content" | "label" | "fallback", {
    size: {
        sm: {
            root: {
                fontSize: "sm";
            };
        };
        md: {};
        lg: {
            root: {
                fontSize: "lg";
            };
        };
    };
    variant: {
        outline: {
            root: {
                borderColor: "border";
                borderRadius: "xl";
                borderWidth: "1px";
                padding: "4";
            };
        };
        subtle: {
            label: {
                background: "bg.muted";
                borderRadius: "full";
                display: "inline-flex";
                paddingBlock: "1";
                paddingInline: "2";
            };
        };
        plain: {};
    };
}>;
//# sourceMappingURL=publication.recipe.d.ts.map