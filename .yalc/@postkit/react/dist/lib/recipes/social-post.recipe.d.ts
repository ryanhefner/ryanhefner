export declare const postkitSocialPostSlots: readonly ["root", "serviceRow", "serviceBadge", "serviceIcon", "authorRow", "avatar", "author", "authorName", "handle", "timestamp", "content", "media", "image", "metrics", "metric", "quote", "quoteAuthor", "quoteContent", "footer", "originalLink", "snapshotInfo", "snapshotLabel", "snapshotTime", "embedFrame", "embed", "consent", "consentButton"];
export type PostkitSocialPostSlot = (typeof postkitSocialPostSlots)[number];
export declare const postkitSocialPostRecipe: import("@chakra-ui/react").SlotRecipeDefinition<"root" | "media" | "content" | "avatar" | "image" | "embedFrame" | "embed" | "consent" | "consentButton" | "serviceRow" | "serviceBadge" | "serviceIcon" | "authorRow" | "author" | "authorName" | "handle" | "timestamp" | "metrics" | "metric" | "quote" | "quoteAuthor" | "quoteContent" | "footer" | "originalLink" | "snapshotInfo" | "snapshotLabel" | "snapshotTime", {
    size: {
        sm: {
            root: {
                padding: "3";
            };
            serviceBadge: {
                fontSize: "xs";
                gap: "1";
            };
            authorRow: {
                gap: "2";
                marginTop: "2";
            };
            avatar: {
                height: "8";
                width: "8";
            };
            authorName: {
                fontSize: "sm";
            };
            handle: {
                fontSize: "xs";
            };
            timestamp: {
                fontSize: "xs";
            };
            content: {
                fontSize: "sm";
                marginTop: "3";
            };
            media: {
                marginTop: "3";
            };
            metrics: {
                gap: "3";
                marginTop: "3";
            };
            quote: {
                marginTop: "3";
                padding: "3";
            };
            quoteContent: {
                fontSize: "sm";
                marginTop: "1";
            };
            footer: {
                marginTop: "3";
            };
            snapshotInfo: {
                fontSize: "2xs";
                gap: "0.5";
                marginTop: "3";
                paddingTop: "2";
            };
        };
        md: {
            root: {
                padding: "4";
            };
            serviceBadge: {
                fontSize: "sm";
                gap: "1.5";
            };
            authorRow: {
                gap: "3";
                marginTop: "3";
            };
            avatar: {
                height: "10";
                width: "10";
            };
            authorName: {
                fontSize: "md";
            };
            handle: {
                fontSize: "sm";
            };
            timestamp: {
                fontSize: "sm";
            };
            content: {
                fontSize: "md";
                marginTop: "4";
            };
            media: {
                marginTop: "4";
            };
            metrics: {
                gap: "4";
                marginTop: "4";
            };
            quote: {
                marginTop: "4";
                padding: "4";
            };
            quoteContent: {
                fontSize: "sm";
                marginTop: "1.5";
            };
            footer: {
                marginTop: "4";
            };
            snapshotInfo: {
                fontSize: "xs";
                gap: "1";
                marginTop: "4";
                paddingTop: "3";
            };
        };
        lg: {
            root: {
                padding: "5";
            };
            serviceBadge: {
                fontSize: "md";
                gap: "2";
            };
            authorRow: {
                gap: "4";
                marginTop: "4";
            };
            avatar: {
                height: "12";
                width: "12";
            };
            authorName: {
                fontSize: "lg";
            };
            handle: {
                fontSize: "md";
            };
            timestamp: {
                fontSize: "md";
            };
            content: {
                fontSize: "lg";
                marginTop: "5";
            };
            media: {
                marginTop: "5";
            };
            metrics: {
                gap: "5";
                marginTop: "5";
            };
            quote: {
                marginTop: "5";
                padding: "5";
            };
            quoteContent: {
                fontSize: "md";
                marginTop: "2";
            };
            footer: {
                marginTop: "5";
            };
            snapshotInfo: {
                fontSize: "sm";
                gap: "1";
                marginTop: "5";
                paddingTop: "4";
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
            };
        };
        subtle: {
            root: {
                background: "bg.muted";
                borderRadius: "xl";
            };
        };
        plain: {
            root: {
                paddingInline: "0";
            };
        };
    };
    branding: {
        none: {
            serviceRow: {
                display: "none";
            };
        };
        subtle: {
            serviceBadge: {
                color: "fg.muted";
            };
        };
        full: {};
    };
    presentation: {
        card: {};
        embed: {
            root: {
                padding: "0";
            };
            snapshotInfo: {
                marginInline: "4";
                marginBottom: "4";
            };
        };
        auto: {};
    };
}>;
//# sourceMappingURL=social-post.recipe.d.ts.map