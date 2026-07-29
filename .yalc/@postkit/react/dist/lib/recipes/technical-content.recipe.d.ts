export declare const postkitCodeBlockSlots: readonly ["root", "header", "filename", "language", "actions", "button", "scroller", "code", "line", "lineNumber", "lineContent"];
export type PostkitCodeBlockSlot = (typeof postkitCodeBlockSlots)[number];
export declare const postkitCodeBlockRecipe: import("@chakra-ui/react").SlotRecipeDefinition<"root" | "header" | "actions" | "button" | "code" | "filename" | "language" | "scroller" | "line" | "lineNumber" | "lineContent", {
    size: {
        sm: {
            code: {
                fontSize: "xs";
            };
        };
        md: {
            code: {
                fontSize: "sm";
            };
        };
        lg: {
            code: {
                fontSize: "md";
            };
        };
    };
    variant: {
        outline: {
            root: {
                borderColor: "border.inverted";
                borderWidth: "1px";
            };
        };
        subtle: {
            root: {
                boxShadow: "sm";
            };
        };
        plain: {
            root: {
                borderRadius: "0";
            };
        };
    };
}>;
export declare const postkitCodeGroupSlots: readonly ["root", "tabs", "tab", "panel"];
export type PostkitCodeGroupSlot = (typeof postkitCodeGroupSlots)[number];
export declare const postkitCodeGroupRecipe: import("@chakra-ui/react").SlotRecipeDefinition<"root" | "tabs" | "tab" | "panel", {
    size: {
        sm: {
            tab: {
                fontSize: "xs";
            };
        };
        md: {};
        lg: {
            tab: {
                fontSize: "md";
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
                boxShadow: "sm";
            };
        };
        plain: {};
    };
}>;
export declare const postkitTerminalSlots: readonly ["root", "header", "dots", "title", "body", "prompt", "command", "output"];
export type PostkitTerminalSlot = (typeof postkitTerminalSlots)[number];
export declare const postkitTerminalRecipe: import("@chakra-ui/react").SlotRecipeDefinition<"root" | "title" | "header" | "body" | "dots" | "prompt" | "command" | "output", {
    size: {
        sm: {
            body: {
                fontSize: "xs";
            };
        };
        md: {
            body: {
                fontSize: "sm";
            };
        };
        lg: {
            body: {
                fontSize: "md";
            };
        };
    };
    variant: {
        outline: {
            root: {
                borderColor: "border.inverted";
                borderWidth: "1px";
            };
        };
        subtle: {
            root: {
                boxShadow: "md";
            };
        };
        plain: {
            root: {
                borderRadius: "0";
            };
        };
    };
}>;
export declare const postkitDiffSlots: readonly ["root", "header", "title", "code", "line", "marker", "content"];
export type PostkitDiffSlot = (typeof postkitDiffSlots)[number];
export declare const postkitDiffRecipe: import("@chakra-ui/react").SlotRecipeDefinition<"root" | "content" | "marker" | "title" | "header" | "code" | "line", {
    size: {
        sm: {
            code: {
                fontSize: "xs";
            };
        };
        md: {
            code: {
                fontSize: "sm";
            };
        };
        lg: {
            code: {
                fontSize: "md";
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
        plain: {};
    };
}>;
export declare const postkitFileTreeSlots: readonly ["root", "title", "list", "item", "icon", "path", "meta"];
export type PostkitFileTreeSlot = (typeof postkitFileTreeSlots)[number];
export declare const postkitFileTreeRecipe: import("@chakra-ui/react").SlotRecipeDefinition<"root" | "list" | "item" | "icon" | "title" | "meta" | "path", {
    size: {
        sm: {
            root: {
                fontSize: "xs";
                padding: "3";
            };
        };
        md: {
            root: {
                fontSize: "sm";
            };
        };
        lg: {
            root: {
                fontSize: "md";
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
export declare const postkitFileCardSlots: readonly ["root", "icon", "content", "name", "description", "meta", "action"];
export type PostkitFileCardSlot = (typeof postkitFileCardSlots)[number];
export declare const postkitFileCardRecipe: import("@chakra-ui/react").SlotRecipeDefinition<"root" | "icon" | "content" | "description" | "name" | "meta" | "action", {
    size: {
        sm: {
            root: {
                padding: "3";
            };
            icon: {
                height: "8";
                width: "8";
            };
        };
        md: {};
        lg: {
            root: {
                padding: "5";
            };
            icon: {
                height: "12";
                width: "12";
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
//# sourceMappingURL=technical-content.recipe.d.ts.map