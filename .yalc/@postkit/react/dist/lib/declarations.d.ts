import type { PostkitRemarkPluginId } from './plugin-capabilities.js';
export declare const POSTKIT_DECLARATION_VERSION: 6;
export type PostkitComponentName = 'AppearsOn' | 'AudienceBoundary' | 'Aside' | 'Audio' | 'AuthorCard' | 'Callout' | 'CallToAction' | 'CardGrid' | 'Carousel' | 'Chart' | 'CodeBlock' | 'CodeGroup' | 'Comparison' | 'Diff' | 'Disclosure' | 'Figure' | 'FileCard' | 'FileTree' | 'Gallery' | 'KeyTakeaway' | 'LinkPreview' | 'NewsletterSignup' | 'Poll' | 'ProductCard' | 'PullQuote' | 'RelatedContent' | 'ShareActions' | 'SeriesNavigation' | 'SocialPost' | 'Steps' | 'SponsorBlock' | 'Stat' | 'Tabs' | 'Terminal' | 'Video';
export type PostkitPropKind = 'boolean' | 'enum' | 'json' | 'number' | 'string';
export interface PostkitPropDeclaration {
    readonly kind: PostkitPropKind;
    readonly required?: boolean;
    readonly values?: readonly string[];
    readonly description: string;
}
export interface PostkitComponentDeclaration {
    readonly name: PostkitComponentName;
    readonly directive: string;
    readonly description: string;
    readonly childMode: 'none' | 'mdx';
    readonly directiveRemarkPlugins: readonly PostkitRemarkPluginId[];
    readonly props: Readonly<Record<string, PostkitPropDeclaration>>;
}
export interface PostkitDeclarationManifest {
    readonly id: 'postkit.article';
    readonly version: typeof POSTKIT_DECLARATION_VERSION;
    readonly syntax: 'postkit-directive-v1';
    readonly components: Readonly<Record<PostkitComponentName, PostkitComponentDeclaration>>;
}
export declare const postkitPresentationProps: Readonly<{
    size: {
        kind: "enum";
        values: string[];
        description: string;
    };
    variant: {
        kind: "enum";
        values: string[];
        description: string;
    };
}>;
export declare const postkitDeclarationManifest: Readonly<{
    id: "postkit.article";
    version: 6;
    syntax: "postkit-directive-v1";
    components: {
        AppearsOn: {
            name: "AppearsOn";
            directive: string;
            description: string;
            childMode: "none";
            directiveRemarkPlugins: ("directives" | "postkit")[];
            props: {
                items: {
                    kind: "json";
                    required: true;
                    description: string;
                };
                label: {
                    kind: "string";
                    description: string;
                };
                presentation: {
                    kind: "enum";
                    values: string[];
                    description: string;
                };
                showDates: {
                    kind: "boolean";
                    description: string;
                };
                size: {
                    kind: "enum";
                    values: string[];
                    description: string;
                };
                variant: {
                    kind: "enum";
                    values: string[];
                    description: string;
                };
            };
        };
        Audio: {
            name: "Audio";
            directive: string;
            description: string;
            childMode: "none";
            directiveRemarkPlugins: ("directives" | "postkit")[];
            props: {
                src: {
                    kind: "string";
                    required: true;
                    description: string;
                };
                title: {
                    kind: "string";
                    required: true;
                    description: string;
                };
                caption: {
                    kind: "string";
                    description: string;
                };
                preload: {
                    kind: "enum";
                    values: string[];
                    description: string;
                };
                size: {
                    kind: "enum";
                    values: string[];
                    description: string;
                };
                variant: {
                    kind: "enum";
                    values: string[];
                    description: string;
                };
            };
        };
        AuthorCard: {
            name: "AuthorCard";
            directive: string;
            description: string;
            childMode: "mdx";
            directiveRemarkPlugins: ("directives" | "postkit")[];
            props: {
                name: {
                    kind: "string";
                    required: true;
                    description: string;
                };
                role: {
                    kind: "string";
                    description: string;
                };
                avatarSrc: {
                    kind: "string";
                    description: string;
                };
                avatarAlt: {
                    kind: "string";
                    description: string;
                };
                href: {
                    kind: "string";
                    description: string;
                };
                bio: {
                    kind: "string";
                    description: string;
                };
                links: {
                    kind: "json";
                    description: string;
                };
                presentation: {
                    kind: "enum";
                    values: string[];
                    description: string;
                };
                size: {
                    kind: "enum";
                    values: string[];
                    description: string;
                };
                variant: {
                    kind: "enum";
                    values: string[];
                    description: string;
                };
            };
        };
        CallToAction: {
            name: "CallToAction";
            directive: string;
            description: string;
            childMode: "mdx";
            directiveRemarkPlugins: ("directives" | "postkit")[];
            props: {
                title: {
                    kind: "string";
                    required: true;
                    description: string;
                };
                eyebrow: {
                    kind: "string";
                    description: string;
                };
                description: {
                    kind: "string";
                    description: string;
                };
                primaryLabel: {
                    kind: "string";
                    description: string;
                };
                primaryHref: {
                    kind: "string";
                    description: string;
                };
                secondaryLabel: {
                    kind: "string";
                    description: string;
                };
                secondaryHref: {
                    kind: "string";
                    description: string;
                };
                alignment: {
                    kind: "enum";
                    values: string[];
                    description: string;
                };
                size: {
                    kind: "enum";
                    values: string[];
                    description: string;
                };
                variant: {
                    kind: "enum";
                    values: string[];
                    description: string;
                };
            };
        };
        Carousel: {
            name: "Carousel";
            directive: string;
            description: string;
            childMode: "mdx";
            directiveRemarkPlugins: ("directives" | "postkit")[];
            props: {
                items: {
                    kind: "json";
                    description: string;
                };
                label: {
                    kind: "string";
                    description: string;
                };
                initialIndex: {
                    kind: "number";
                    description: string;
                };
                size: {
                    kind: "enum";
                    values: string[];
                    description: string;
                };
                variant: {
                    kind: "enum";
                    values: string[];
                    description: string;
                };
            };
        };
        Chart: {
            name: "Chart";
            directive: string;
            description: string;
            childMode: "none";
            directiveRemarkPlugins: ("directives" | "postkit")[];
            props: {
                data: {
                    kind: "json";
                    required: true;
                    description: string;
                };
                series: {
                    kind: "json";
                    description: string;
                };
                title: {
                    kind: "string";
                    required: true;
                    description: string;
                };
                description: {
                    kind: "string";
                    description: string;
                };
                type: {
                    kind: "enum";
                    values: string[];
                    description: string;
                };
                showTable: {
                    kind: "boolean";
                    description: string;
                };
                size: {
                    kind: "enum";
                    values: string[];
                    description: string;
                };
                variant: {
                    kind: "enum";
                    values: string[];
                    description: string;
                };
            };
        };
        Figure: {
            name: "Figure";
            directive: string;
            description: string;
            childMode: "none";
            directiveRemarkPlugins: ("directives" | "postkit")[];
            props: {
                src: {
                    kind: "string";
                    required: true;
                    description: string;
                };
                alt: {
                    kind: "string";
                    required: true;
                    description: string;
                };
                caption: {
                    kind: "string";
                    description: string;
                };
                credit: {
                    kind: "string";
                    description: string;
                };
                creditHref: {
                    kind: "string";
                    description: string;
                };
                href: {
                    kind: "string";
                    description: string;
                };
                width: {
                    kind: "number";
                    description: string;
                };
                height: {
                    kind: "number";
                    description: string;
                };
                aspectRatio: {
                    kind: "string";
                    description: string;
                };
                objectFit: {
                    kind: "enum";
                    values: string[];
                    description: string;
                };
                objectPosition: {
                    kind: "string";
                    description: string;
                };
                loading: {
                    kind: "enum";
                    values: string[];
                    description: string;
                };
                sizes: {
                    kind: "string";
                    description: string;
                };
                srcSet: {
                    kind: "string";
                    description: string;
                };
                layout: {
                    kind: "enum";
                    values: string[];
                    description: string;
                };
                size: {
                    kind: "enum";
                    values: string[];
                    description: string;
                };
                variant: {
                    kind: "enum";
                    values: string[];
                    description: string;
                };
            };
        };
        LinkPreview: {
            name: "LinkPreview";
            directive: string;
            description: string;
            childMode: "none";
            directiveRemarkPlugins: ("directives" | "postkit")[];
            props: {
                href: {
                    kind: "string";
                    required: true;
                    description: string;
                };
                presentation: {
                    kind: "enum";
                    values: string[];
                    description: string;
                };
                images: {
                    kind: "enum";
                    values: string[];
                    description: string;
                };
                media: {
                    kind: "enum";
                    values: string[];
                    description: string;
                };
                activation: {
                    kind: "enum";
                    values: string[];
                    description: string;
                };
                provider: {
                    kind: "string";
                    description: string;
                };
                metadata: {
                    kind: "json";
                    description: string;
                };
                title: {
                    kind: "string";
                    description: string;
                };
                description: {
                    kind: "string";
                    description: string;
                };
                siteName: {
                    kind: "string";
                    description: string;
                };
                image: {
                    kind: "string";
                    description: string;
                };
                imageAlt: {
                    kind: "string";
                    description: string;
                };
                favicon: {
                    kind: "string";
                    description: string;
                };
                iframeTitle: {
                    kind: "string";
                    description: string;
                };
                size: {
                    kind: "enum";
                    values: string[];
                    description: string;
                };
                variant: {
                    kind: "enum";
                    values: string[];
                    description: string;
                };
            };
        };
        NewsletterSignup: {
            name: "NewsletterSignup";
            directive: string;
            description: string;
            childMode: "mdx";
            directiveRemarkPlugins: ("directives" | "postkit")[];
            props: {
                title: {
                    kind: "string";
                    required: true;
                    description: string;
                };
                description: {
                    kind: "string";
                    description: string;
                };
                list: {
                    kind: "string";
                    description: string;
                };
                emailLabel: {
                    kind: "string";
                    description: string;
                };
                emailPlaceholder: {
                    kind: "string";
                    description: string;
                };
                buttonLabel: {
                    kind: "string";
                    description: string;
                };
                privacy: {
                    kind: "string";
                    description: string;
                };
                successMessage: {
                    kind: "string";
                    description: string;
                };
                errorMessage: {
                    kind: "string";
                    description: string;
                };
                alignment: {
                    kind: "enum";
                    values: string[];
                    description: string;
                };
                size: {
                    kind: "enum";
                    values: string[];
                    description: string;
                };
                variant: {
                    kind: "enum";
                    values: string[];
                    description: string;
                };
            };
        };
        ShareActions: {
            name: "ShareActions";
            directive: string;
            description: string;
            childMode: "none";
            directiveRemarkPlugins: ("directives" | "postkit")[];
            props: {
                url: {
                    kind: "string";
                    required: true;
                    description: string;
                };
                title: {
                    kind: "string";
                    description: string;
                };
                text: {
                    kind: "string";
                    description: string;
                };
                services: {
                    kind: "json";
                    description: string;
                };
                label: {
                    kind: "string";
                    description: string;
                };
                layout: {
                    kind: "enum";
                    values: string[];
                    description: string;
                };
                size: {
                    kind: "enum";
                    values: string[];
                    description: string;
                };
                variant: {
                    kind: "enum";
                    values: string[];
                    description: string;
                };
            };
        };
        SocialPost: {
            name: "SocialPost";
            directive: string;
            description: string;
            childMode: "none";
            directiveRemarkPlugins: ("directives" | "postkit")[];
            props: {
                href: {
                    kind: "string";
                    required: true;
                    description: string;
                };
                provider: {
                    kind: "string";
                    description: string;
                };
                resolution: {
                    kind: "enum";
                    values: string[];
                    description: string;
                };
                snapshotInfo: {
                    kind: "enum";
                    values: string[];
                    description: string;
                };
                service: {
                    kind: "string";
                    description: string;
                };
                presentation: {
                    kind: "enum";
                    values: string[];
                    description: string;
                };
                branding: {
                    kind: "enum";
                    values: string[];
                    description: string;
                };
                activation: {
                    kind: "enum";
                    values: string[];
                    description: string;
                };
                metadata: {
                    kind: "json";
                    description: string;
                };
                authorName: {
                    kind: "string";
                    description: string;
                };
                authorHandle: {
                    kind: "string";
                    description: string;
                };
                authorAvatar: {
                    kind: "string";
                    description: string;
                };
                text: {
                    kind: "string";
                    description: string;
                };
                publishedAt: {
                    kind: "string";
                    description: string;
                };
                showMetrics: {
                    kind: "boolean";
                    description: string;
                };
                iframeTitle: {
                    kind: "string";
                    description: string;
                };
                size: {
                    kind: "enum";
                    values: string[];
                    description: string;
                };
                variant: {
                    kind: "enum";
                    values: string[];
                    description: string;
                };
            };
        };
        Video: {
            name: "Video";
            directive: string;
            description: string;
            childMode: "none";
            directiveRemarkPlugins: ("directives" | "postkit")[];
            props: {
                src: {
                    kind: "string";
                    required: true;
                    description: string;
                };
                title: {
                    kind: "string";
                    required: true;
                    description: string;
                };
                poster: {
                    kind: "string";
                    description: string;
                };
                caption: {
                    kind: "string";
                    description: string;
                };
                aspectRatio: {
                    kind: "string";
                    description: string;
                };
                preload: {
                    kind: "enum";
                    values: string[];
                    description: string;
                };
                size: {
                    kind: "enum";
                    values: string[];
                    description: string;
                };
                variant: {
                    kind: "enum";
                    values: string[];
                    description: string;
                };
            };
        };
        AudienceBoundary: PostkitComponentDeclaration;
        Comparison: PostkitComponentDeclaration;
        KeyTakeaway: PostkitComponentDeclaration;
        Poll: PostkitComponentDeclaration;
        ProductCard: PostkitComponentDeclaration;
        PullQuote: PostkitComponentDeclaration;
        RelatedContent: PostkitComponentDeclaration;
        SeriesNavigation: PostkitComponentDeclaration;
        SponsorBlock: PostkitComponentDeclaration;
        Stat: PostkitComponentDeclaration;
        CodeBlock: {
            name: "CodeBlock";
            directive: string;
            description: string;
            childMode: "none";
            directiveRemarkPlugins: ("directives" | "postkit")[];
            props: {
                code: {
                    kind: "string";
                    required: true;
                    description: string;
                };
                language: {
                    kind: "string";
                    description: string;
                };
                filename: {
                    kind: "string";
                    description: string;
                };
                highlightLines: {
                    kind: "string";
                    description: string;
                };
                lineNumbers: {
                    kind: "boolean";
                    description: string;
                };
                copy: {
                    kind: "boolean";
                    description: string;
                };
                wrap: {
                    kind: "boolean";
                    description: string;
                };
                maxHeight: {
                    kind: "string";
                    description: string;
                };
                size: {
                    kind: "enum";
                    values: string[];
                    description: string;
                };
                variant: {
                    kind: "enum";
                    values: string[];
                    description: string;
                };
            };
        };
        CodeGroup: {
            name: "CodeGroup";
            directive: string;
            description: string;
            childMode: "none";
            directiveRemarkPlugins: ("directives" | "postkit")[];
            props: {
                items: {
                    kind: "json";
                    required: true;
                    description: string;
                };
                label: {
                    kind: "string";
                    description: string;
                };
                initialIndex: {
                    kind: "number";
                    description: string;
                };
                size: {
                    kind: "enum";
                    values: string[];
                    description: string;
                };
                variant: {
                    kind: "enum";
                    values: string[];
                    description: string;
                };
            };
        };
        Diff: {
            name: "Diff";
            directive: string;
            description: string;
            childMode: "none";
            directiveRemarkPlugins: ("directives" | "postkit")[];
            props: {
                diff: {
                    kind: "string";
                    required: true;
                    description: string;
                };
                title: {
                    kind: "string";
                    description: string;
                };
                size: {
                    kind: "enum";
                    values: string[];
                    description: string;
                };
                variant: {
                    kind: "enum";
                    values: string[];
                    description: string;
                };
            };
        };
        FileCard: {
            name: "FileCard";
            directive: string;
            description: string;
            childMode: "none";
            directiveRemarkPlugins: ("directives" | "postkit")[];
            props: {
                href: {
                    kind: "string";
                    required: true;
                    description: string;
                };
                name: {
                    kind: "string";
                    required: true;
                    description: string;
                };
                description: {
                    kind: "string";
                    description: string;
                };
                fileType: {
                    kind: "string";
                    description: string;
                };
                fileSize: {
                    kind: "string";
                    description: string;
                };
                download: {
                    kind: "boolean";
                    description: string;
                };
                actionLabel: {
                    kind: "string";
                    description: string;
                };
                size: {
                    kind: "enum";
                    values: string[];
                    description: string;
                };
                variant: {
                    kind: "enum";
                    values: string[];
                    description: string;
                };
            };
        };
        FileTree: {
            name: "FileTree";
            directive: string;
            description: string;
            childMode: "none";
            directiveRemarkPlugins: ("directives" | "postkit")[];
            props: {
                items: {
                    kind: "json";
                    required: true;
                    description: string;
                };
                title: {
                    kind: "string";
                    description: string;
                };
                size: {
                    kind: "enum";
                    values: string[];
                    description: string;
                };
                variant: {
                    kind: "enum";
                    values: string[];
                    description: string;
                };
            };
        };
        Terminal: {
            name: "Terminal";
            directive: string;
            description: string;
            childMode: "none";
            directiveRemarkPlugins: ("directives" | "postkit")[];
            props: {
                command: {
                    kind: "string";
                    required: true;
                    description: string;
                };
                output: {
                    kind: "string";
                    description: string;
                };
                prompt: {
                    kind: "string";
                    description: string;
                };
                title: {
                    kind: "string";
                    description: string;
                };
                size: {
                    kind: "enum";
                    values: string[];
                    description: string;
                };
                variant: {
                    kind: "enum";
                    values: string[];
                    description: string;
                };
            };
        };
        Aside: {
            name: "Aside";
            directive: string;
            description: string;
            childMode: "mdx";
            directiveRemarkPlugins: ("directives" | "postkit")[];
            props: {
                title: {
                    kind: "string";
                    description: string;
                };
                tone: {
                    kind: "enum";
                    values: string[];
                    description: string;
                };
                size: {
                    kind: "enum";
                    values: string[];
                    description: string;
                };
                variant: {
                    kind: "enum";
                    values: string[];
                    description: string;
                };
            };
        };
        Callout: {
            name: "Callout";
            directive: string;
            description: string;
            childMode: "mdx";
            directiveRemarkPlugins: ("directives" | "postkit")[];
            props: {
                title: {
                    kind: "string";
                    description: string;
                };
                tone: {
                    kind: "enum";
                    values: string[];
                    description: string;
                };
                size: {
                    kind: "enum";
                    values: string[];
                    description: string;
                };
                variant: {
                    kind: "enum";
                    values: string[];
                    description: string;
                };
            };
        };
        CardGrid: {
            name: "CardGrid";
            directive: string;
            description: string;
            childMode: "none";
            directiveRemarkPlugins: ("directives" | "postkit")[];
            props: {
                items: {
                    kind: "json";
                    required: true;
                    description: string;
                };
                title: {
                    kind: "string";
                    description: string;
                };
                description: {
                    kind: "string";
                    description: string;
                };
                columns: {
                    kind: "enum";
                    values: string[];
                    description: string;
                };
                size: {
                    kind: "enum";
                    values: string[];
                    description: string;
                };
                variant: {
                    kind: "enum";
                    values: string[];
                    description: string;
                };
            };
        };
        Disclosure: {
            name: "Disclosure";
            directive: string;
            description: string;
            childMode: "mdx";
            directiveRemarkPlugins: ("directives" | "postkit")[];
            props: {
                summary: {
                    kind: "string";
                    required: true;
                    description: string;
                };
                open: {
                    kind: "boolean";
                    description: string;
                };
                size: {
                    kind: "enum";
                    values: string[];
                    description: string;
                };
                variant: {
                    kind: "enum";
                    values: string[];
                    description: string;
                };
            };
        };
        Gallery: {
            name: "Gallery";
            directive: string;
            description: string;
            childMode: "none";
            directiveRemarkPlugins: ("directives" | "postkit")[];
            props: {
                items: {
                    kind: "json";
                    required: true;
                    description: string;
                };
                title: {
                    kind: "string";
                    description: string;
                };
                description: {
                    kind: "string";
                    description: string;
                };
                columns: {
                    kind: "enum";
                    values: string[];
                    description: string;
                };
                size: {
                    kind: "enum";
                    values: string[];
                    description: string;
                };
                variant: {
                    kind: "enum";
                    values: string[];
                    description: string;
                };
            };
        };
        Steps: {
            name: "Steps";
            directive: string;
            description: string;
            childMode: "none";
            directiveRemarkPlugins: ("directives" | "postkit")[];
            props: {
                items: {
                    kind: "json";
                    required: true;
                    description: string;
                };
                size: {
                    kind: "enum";
                    values: string[];
                    description: string;
                };
                variant: {
                    kind: "enum";
                    values: string[];
                    description: string;
                };
            };
        };
        Tabs: {
            name: "Tabs";
            directive: string;
            description: string;
            childMode: "none";
            directiveRemarkPlugins: ("directives" | "postkit")[];
            props: {
                items: {
                    kind: "json";
                    required: true;
                    description: string;
                };
                label: {
                    kind: "string";
                    description: string;
                };
                initialIndex: {
                    kind: "number";
                    description: string;
                };
                size: {
                    kind: "enum";
                    values: string[];
                    description: string;
                };
                variant: {
                    kind: "enum";
                    values: string[];
                    description: string;
                };
            };
        };
    };
}>;
export declare function postkitDeclarationFor(name: PostkitComponentName): PostkitComponentDeclaration;
//# sourceMappingURL=declarations.d.ts.map