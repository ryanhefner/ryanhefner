export declare const postkitVideoSlots: readonly ["root", "frame", "player", "caption", "fallback"];
export type PostkitVideoSlot = (typeof postkitVideoSlots)[number];
export declare const postkitVideoRecipe: import("@chakra-ui/react").SlotRecipeDefinition<"root" | "player" | "caption" | "fallback" | "frame", {
    size: {
        sm: {
            frame: {
                borderRadius: "md";
            };
            caption: {
                fontSize: "xs";
                marginTop: "2";
            };
        };
        md: {
            frame: {
                borderRadius: "xl";
            };
            caption: {
                fontSize: "sm";
                marginTop: "2";
            };
        };
        lg: {
            frame: {
                borderRadius: "2xl";
            };
            caption: {
                fontSize: "md";
                marginTop: "3";
            };
        };
    };
    variant: {
        outline: {
            frame: {
                borderWidth: "1px";
                borderColor: "border";
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
}>;
//# sourceMappingURL=video.recipe.d.ts.map