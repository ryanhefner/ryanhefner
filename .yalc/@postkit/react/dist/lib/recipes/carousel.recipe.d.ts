export declare const postkitCarouselSlots: readonly ["root", "slide", "media", "content", "title", "description", "link", "controls", "previousTrigger", "status", "nextTrigger", "emptyState"];
export type PostkitCarouselSlot = (typeof postkitCarouselSlots)[number];
export declare const postkitCarouselRecipe: import("@chakra-ui/react").SlotRecipeDefinition<"root" | "link" | "status" | "media" | "content" | "emptyState" | "title" | "slide" | "description" | "controls" | "previousTrigger" | "nextTrigger", {
    size: {
        sm: {
            root: {
                borderRadius: "md";
            };
            content: {
                padding: "3";
            };
            title: {
                fontSize: "md";
            };
            description: {
                fontSize: "sm";
                marginTop: "1";
            };
            controls: {
                gap: "2";
                padding: "2";
            };
            previousTrigger: {
                fontSize: "xs";
            };
            status: {
                fontSize: "xs";
            };
            nextTrigger: {
                fontSize: "xs";
            };
            emptyState: {
                padding: "3";
                fontSize: "sm";
            };
        };
        md: {
            root: {
                borderRadius: "xl";
            };
            content: {
                padding: "4";
            };
            title: {
                fontSize: "lg";
            };
            description: {
                fontSize: "md";
                marginTop: "1";
            };
            controls: {
                gap: "3";
                padding: "3";
            };
            previousTrigger: {
                fontSize: "sm";
            };
            status: {
                fontSize: "sm";
            };
            nextTrigger: {
                fontSize: "sm";
            };
            emptyState: {
                padding: "4";
                fontSize: "md";
            };
        };
        lg: {
            root: {
                borderRadius: "2xl";
            };
            content: {
                padding: "5";
            };
            title: {
                fontSize: "xl";
            };
            description: {
                fontSize: "lg";
                marginTop: "2";
            };
            controls: {
                gap: "4";
                padding: "4";
            };
            previousTrigger: {
                fontSize: "md";
            };
            status: {
                fontSize: "md";
            };
            nextTrigger: {
                fontSize: "md";
            };
            emptyState: {
                padding: "5";
                fontSize: "lg";
            };
        };
    };
    variant: {
        outline: {
            root: {
                borderWidth: "1px";
                background: "bg";
            };
            controls: {
                borderTopWidth: "1px";
            };
        };
        subtle: {
            root: {
                background: "bg.muted";
            };
            controls: {
                background: "bg.subtle";
            };
        };
        plain: {};
    };
}>;
//# sourceMappingURL=carousel.recipe.d.ts.map