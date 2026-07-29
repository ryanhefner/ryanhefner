export declare const postkitLinkPreviewSlots: readonly ["root", "anchor", "media", "image", "carousel", "content", "siteRow", "favicon", "siteName", "title", "description", "domain", "embedFrame", "embed", "consent", "consentButton", "mediaPlayer"];
export type PostkitLinkPreviewSlot = (typeof postkitLinkPreviewSlots)[number];
export declare const postkitLinkPreviewRecipe: import("@chakra-ui/react").SlotRecipeDefinition<"root" | "media" | "content" | "carousel" | "title" | "description" | "image" | "anchor" | "siteRow" | "favicon" | "siteName" | "domain" | "embedFrame" | "embed" | "consent" | "consentButton" | "mediaPlayer", {
    size: {
        sm: {
            root: {
                borderRadius: "md";
            };
            media: {
                minHeight: "5.5rem";
            };
            content: {
                padding: "3";
            };
            siteRow: {
                fontSize: "xs";
                gap: "1.5";
            };
            title: {
                fontSize: "sm";
                marginTop: "1.5";
            };
            description: {
                fontSize: "xs";
                marginTop: "1";
            };
            domain: {
                fontSize: "2xs";
                marginTop: "2";
            };
        };
        md: {
            root: {
                borderRadius: "xl";
            };
            media: {
                minHeight: "10rem";
            };
            content: {
                padding: "4";
            };
            siteRow: {
                fontSize: "sm";
                gap: "2";
            };
            title: {
                fontSize: "lg";
                marginTop: "2";
            };
            description: {
                fontSize: "sm";
                marginTop: "1.5";
            };
            domain: {
                fontSize: "xs";
                marginTop: "3";
            };
        };
        lg: {
            root: {
                borderRadius: "2xl";
            };
            media: {
                minHeight: "16rem";
            };
            content: {
                padding: "5";
            };
            siteRow: {
                fontSize: "md";
                gap: "2";
            };
            title: {
                fontSize: "xl";
                marginTop: "2.5";
            };
            description: {
                fontSize: "md";
                marginTop: "2";
            };
            domain: {
                fontSize: "sm";
                marginTop: "4";
            };
        };
    };
    variant: {
        outline: {
            root: {
                background: "bg";
                borderColor: "border";
                borderWidth: "1px";
            };
        };
        subtle: {
            root: {
                background: "bg.muted";
            };
            media: {
                background: "bg.subtle";
            };
        };
        plain: {};
    };
    presentation: {
        inline: {
            root: {
                display: "inline";
                overflow: "visible";
            };
            anchor: {
                color: "colorPalette.fg";
                display: "inline";
                textDecoration: "underline";
                textUnderlineOffset: "0.15em";
                _hover: {
                    textDecoration: "underline";
                };
            };
        };
        card: {};
        embed: {};
        media: {};
        auto: {};
    };
    compact: {
        true: {
            root: {
                display: "grid";
                gridTemplateColumns: "minmax(5.5rem, 30%) minmax(0, 1fr)";
            };
            media: {
                height: "100%";
                minHeight: "5.5rem";
            };
        };
        false: {};
    };
}>;
//# sourceMappingURL=link-preview.recipe.d.ts.map