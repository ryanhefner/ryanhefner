export declare const postkitFigureSlots: readonly ["root", "mediaLink", "media", "image", "figcaption", "caption", "credit", "creditLink"];
export type PostkitFigureSlot = (typeof postkitFigureSlots)[number];
export declare const postkitFigureRecipe: import("@chakra-ui/react").SlotRecipeDefinition<"root" | "media" | "caption" | "image" | "mediaLink" | "figcaption" | "credit" | "creditLink", {
    size: {
        sm: {
            media: {
                borderRadius: "md";
            };
            figcaption: {
                fontSize: "xs";
                marginTop: "2";
            };
            credit: {
                fontSize: "2xs";
                marginTop: "1";
            };
        };
        md: {
            media: {
                borderRadius: "xl";
            };
            figcaption: {
                fontSize: "sm";
                marginTop: "2";
            };
            credit: {
                fontSize: "xs";
                marginTop: "1";
            };
        };
        lg: {
            media: {
                borderRadius: "2xl";
            };
            figcaption: {
                fontSize: "md";
                marginTop: "3";
            };
            credit: {
                fontSize: "sm";
                marginTop: "1.5";
            };
        };
    };
    variant: {
        outline: {
            media: {
                borderColor: "border";
                borderWidth: "1px";
            };
        };
        subtle: {
            root: {
                background: "bg.muted";
                borderRadius: "xl";
                padding: "2";
            };
        };
        plain: {};
    };
    layout: {
        inline: {
            root: {
                marginInline: "auto";
                maxWidth: "48rem";
            };
        };
        wide: {
            root: {
                marginInline: "auto";
                maxWidth: "72rem";
                width: "100%";
            };
        };
        bleed: {
            root: {
                marginInline: "calc(50% - 50vw)";
                maxWidth: "100vw";
                width: "100vw";
            };
        };
    };
}>;
//# sourceMappingURL=figure.recipe.d.ts.map