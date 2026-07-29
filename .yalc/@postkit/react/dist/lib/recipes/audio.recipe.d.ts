export declare const postkitAudioSlots: readonly ["root", "title", "player", "caption", "fallback"];
export type PostkitAudioSlot = (typeof postkitAudioSlots)[number];
export declare const postkitAudioRecipe: import("@chakra-ui/react").SlotRecipeDefinition<"root" | "title" | "player" | "caption" | "fallback", {
    size: {
        sm: {
            root: {
                padding: "3";
            };
            title: {
                fontSize: "sm";
                marginBottom: "2";
            };
            caption: {
                fontSize: "xs";
                marginTop: "2";
            };
        };
        md: {
            root: {
                padding: "4";
            };
            title: {
                fontSize: "md";
                marginBottom: "3";
            };
            caption: {
                fontSize: "sm";
                marginTop: "3";
            };
        };
        lg: {
            root: {
                padding: "5";
            };
            title: {
                fontSize: "lg";
                marginBottom: "4";
            };
            caption: {
                fontSize: "md";
                marginTop: "3";
            };
        };
    };
    variant: {
        outline: {
            root: {
                borderWidth: "1px";
                background: "bg";
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
//# sourceMappingURL=audio.recipe.d.ts.map