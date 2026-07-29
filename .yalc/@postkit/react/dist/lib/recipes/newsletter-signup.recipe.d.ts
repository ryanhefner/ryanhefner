export declare const postkitNewsletterSignupSlots: readonly ["root", "content", "title", "description", "form", "label", "fields", "input", "submit", "status", "privacy"];
export type PostkitNewsletterSignupSlot = (typeof postkitNewsletterSignupSlots)[number];
export declare const postkitNewsletterSignupRecipe: import("@chakra-ui/react").SlotRecipeDefinition<"root" | "label" | "status" | "content" | "title" | "description" | "form" | "fields" | "input" | "submit" | "privacy", {
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
                fontSize: "lg";
            };
            description: {
                fontSize: "sm";
            };
            form: {
                gap: "2";
            };
            fields: {
                gap: "2";
            };
            input: {
                minHeight: "9";
                paddingInline: "3";
                fontSize: "sm";
            };
            submit: {
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
                fontSize: "xl";
            };
            description: {
                fontSize: "md";
            };
            form: {
                gap: "3";
            };
            fields: {
                gap: "3";
            };
            input: {
                minHeight: "10";
                paddingInline: "3.5";
                fontSize: "md";
            };
            submit: {
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
                fontSize: "2xl";
            };
            description: {
                fontSize: "lg";
            };
            form: {
                gap: "4";
            };
            fields: {
                gap: "4";
            };
            input: {
                minHeight: "12";
                paddingInline: "4";
                fontSize: "lg";
            };
            submit: {
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
            form: {
                marginInline: "auto";
                maxWidth: "36rem";
                width: "100%";
            };
            privacy: {
                textAlign: "center";
            };
            status: {
                textAlign: "center";
            };
        };
    };
}>;
//# sourceMappingURL=newsletter-signup.recipe.d.ts.map