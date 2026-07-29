export declare const postkitCallToActionSlots: readonly ["root", "content", "eyebrow", "title", "body", "actions", "primaryAction", "secondaryAction"];
export type PostkitCallToActionSlot = (typeof postkitCallToActionSlots)[number];
export declare const postkitCallToActionRecipe: import("@chakra-ui/react").SlotRecipeDefinition<"root" | "content" | "title" | "eyebrow" | "body" | "actions" | "primaryAction" | "secondaryAction", {
    size: {
        sm: {
            root: {
                gap: "4";
                padding: "4";
            };
            content: {
                gap: "1.5";
            };
            title: {
                fontSize: "xl";
            };
            body: {
                fontSize: "sm";
            };
            actions: {
                gap: "2";
            };
            primaryAction: {
                minHeight: "9";
                paddingInline: "3";
                fontSize: "sm";
            };
            secondaryAction: {
                minHeight: "9";
                paddingInline: "3";
                fontSize: "sm";
            };
        };
        md: {
            root: {
                gap: "5";
                padding: "6";
            };
            content: {
                gap: "2";
            };
            title: {
                fontSize: "2xl";
            };
            body: {
                fontSize: "md";
            };
            actions: {
                gap: "3";
            };
            primaryAction: {
                minHeight: "10";
                paddingInline: "4";
                fontSize: "md";
            };
            secondaryAction: {
                minHeight: "10";
                paddingInline: "4";
                fontSize: "md";
            };
        };
        lg: {
            root: {
                gap: "6";
                padding: "8";
            };
            content: {
                gap: "3";
            };
            title: {
                fontSize: "3xl";
            };
            body: {
                fontSize: "lg";
            };
            actions: {
                gap: "4";
            };
            primaryAction: {
                minHeight: "12";
                paddingInline: "5";
                fontSize: "lg";
            };
            secondaryAction: {
                minHeight: "12";
                paddingInline: "5";
                fontSize: "lg";
            };
        };
    };
    variant: {
        outline: {
            root: {
                background: "bg";
                borderColor: "border";
                borderRadius: "2xl";
                borderWidth: "1px";
            };
        };
        subtle: {
            root: {
                background: "bg.muted";
                borderRadius: "2xl";
            };
        };
        plain: {
            root: {
                paddingInline: "0";
            };
        };
    };
    alignment: {
        start: {};
        center: {
            content: {
                justifyItems: "center";
                textAlign: "center";
            };
            actions: {
                justifyContent: "center";
            };
        };
    };
}>;
//# sourceMappingURL=call-to-action.recipe.d.ts.map