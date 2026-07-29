export const POSTKIT_DECLARATION_VERSION = 6;
export const postkitPresentationProps = Object.freeze({
    size: {
        kind: 'enum',
        values: ['sm', 'md', 'lg'],
        description: 'The component density and type scale.',
    },
    variant: {
        kind: 'enum',
        values: ['outline', 'subtle', 'plain'],
        description: 'The component visual treatment.',
    },
});
const calloutProps = {
    ...postkitPresentationProps,
    title: {
        kind: 'string',
        description: 'An optional heading for the aside.',
    },
    tone: {
        kind: 'enum',
        values: ['note', 'tip', 'important', 'warning', 'caution'],
        description: 'The semantic emphasis of the aside.',
    },
};
const foundationalDeclarations = {
    Aside: {
        name: 'Aside',
        directive: 'postkit-aside',
        description: 'A semantic article aside with optional emphasis.',
        childMode: 'mdx',
        directiveRemarkPlugins: ['directives', 'postkit'],
        props: calloutProps,
    },
    Callout: {
        name: 'Callout',
        directive: 'postkit-callout',
        description: 'A highlighted note, tip, warning, or caution.',
        childMode: 'mdx',
        directiveRemarkPlugins: ['directives', 'postkit'],
        props: calloutProps,
    },
    CardGrid: {
        name: 'CardGrid',
        directive: 'postkit-card-grid',
        description: 'A deterministic grid of related navigation cards.',
        childMode: 'none',
        directiveRemarkPlugins: ['directives', 'postkit'],
        props: {
            ...postkitPresentationProps,
            items: {
                kind: 'json',
                required: true,
                description: 'A JSON array of titled cards.',
            },
            title: { kind: 'string', description: 'The grid heading.' },
            description: {
                kind: 'string',
                description: 'Supporting copy for the grid.',
            },
            columns: {
                kind: 'enum',
                values: ['1', '2', '3', '4'],
                description: 'The preferred desktop column count.',
            },
        },
    },
    Disclosure: {
        name: 'Disclosure',
        directive: 'postkit-disclosure',
        description: 'Native expandable content for details and FAQs.',
        childMode: 'mdx',
        directiveRemarkPlugins: ['directives', 'postkit'],
        props: {
            ...postkitPresentationProps,
            summary: {
                kind: 'string',
                required: true,
                description: 'The always-visible disclosure label.',
            },
            open: {
                kind: 'boolean',
                description: 'Whether the disclosure starts expanded.',
            },
        },
    },
    Gallery: {
        name: 'Gallery',
        directive: 'postkit-gallery',
        description: 'A responsive image gallery with captions and links.',
        childMode: 'none',
        directiveRemarkPlugins: ['directives', 'postkit'],
        props: {
            ...postkitPresentationProps,
            items: {
                kind: 'json',
                required: true,
                description: 'A JSON array of image, alt, caption, and link data.',
            },
            title: { kind: 'string', description: 'The gallery heading.' },
            description: {
                kind: 'string',
                description: 'Supporting copy for the gallery.',
            },
            columns: {
                kind: 'enum',
                values: ['1', '2', '3', '4'],
                description: 'The preferred desktop column count.',
            },
        },
    },
    Steps: {
        name: 'Steps',
        directive: 'postkit-steps',
        description: 'An ordered sequence of titled instructions.',
        childMode: 'none',
        directiveRemarkPlugins: ['directives', 'postkit'],
        props: {
            ...postkitPresentationProps,
            items: {
                kind: 'json',
                required: true,
                description: 'A JSON array of step titles and descriptions.',
            },
        },
    },
    Tabs: {
        name: 'Tabs',
        directive: 'postkit-tabs',
        description: 'Keyboard-operable switchable article panels.',
        childMode: 'none',
        directiveRemarkPlugins: ['directives', 'postkit'],
        props: {
            ...postkitPresentationProps,
            items: {
                kind: 'json',
                required: true,
                description: 'A JSON array of tab labels and content.',
            },
            label: {
                kind: 'string',
                description: 'An accessible label for the tab list.',
            },
            initialIndex: {
                kind: 'number',
                description: 'The initially selected tab index.',
            },
        },
    },
};
const technicalDeclarations = {
    CodeBlock: {
        name: 'CodeBlock',
        directive: 'postkit-code-block',
        description: 'Source code with filenames, line numbers, highlights, copying, and wrapping.',
        childMode: 'none',
        directiveRemarkPlugins: ['directives', 'postkit'],
        props: {
            ...postkitPresentationProps,
            code: {
                kind: 'string',
                required: true,
                description: 'The literal source code.',
            },
            language: {
                kind: 'string',
                description: 'The syntax-language identifier.',
            },
            filename: { kind: 'string', description: 'The displayed filename.' },
            highlightLines: {
                kind: 'string',
                description: 'Comma-separated line numbers or ranges.',
            },
            lineNumbers: {
                kind: 'boolean',
                description: 'Whether line numbers are displayed.',
            },
            copy: {
                kind: 'boolean',
                description: 'Whether the copy action is displayed.',
            },
            wrap: {
                kind: 'boolean',
                description: 'Whether long lines wrap.',
            },
            maxHeight: {
                kind: 'string',
                description: 'An optional maximum scrolling height.',
            },
        },
    },
    CodeGroup: {
        name: 'CodeGroup',
        directive: 'postkit-code-group',
        description: 'A tabbed set of alternative code examples.',
        childMode: 'none',
        directiveRemarkPlugins: ['directives', 'postkit'],
        props: {
            ...postkitPresentationProps,
            items: {
                kind: 'json',
                required: true,
                description: 'A JSON array of labeled code examples.',
            },
            label: {
                kind: 'string',
                description: 'An accessible label for the code tabs.',
            },
            initialIndex: {
                kind: 'number',
                description: 'The initially selected code example.',
            },
        },
    },
    Diff: {
        name: 'Diff',
        directive: 'postkit-diff',
        description: 'A semantic unified diff with additions and deletions.',
        childMode: 'none',
        directiveRemarkPlugins: ['directives', 'postkit'],
        props: {
            ...postkitPresentationProps,
            diff: {
                kind: 'string',
                required: true,
                description: 'Unified diff text.',
            },
            title: { kind: 'string', description: 'The displayed diff filename.' },
        },
    },
    FileCard: {
        name: 'FileCard',
        directive: 'postkit-file-card',
        description: 'A descriptive file link or download.',
        childMode: 'none',
        directiveRemarkPlugins: ['directives', 'postkit'],
        props: {
            ...postkitPresentationProps,
            href: {
                kind: 'string',
                required: true,
                description: 'The file URL.',
            },
            name: {
                kind: 'string',
                required: true,
                description: 'The displayed filename.',
            },
            description: {
                kind: 'string',
                description: 'Supporting file description.',
            },
            fileType: { kind: 'string', description: 'The file format label.' },
            fileSize: { kind: 'string', description: 'The human-readable size.' },
            download: {
                kind: 'boolean',
                description: 'Whether the link requests a download.',
            },
            actionLabel: {
                kind: 'string',
                description: 'The visible action text.',
            },
        },
    },
    FileTree: {
        name: 'FileTree',
        directive: 'postkit-file-tree',
        description: 'A compact, semantic repository or project tree.',
        childMode: 'none',
        directiveRemarkPlugins: ['directives', 'postkit'],
        props: {
            ...postkitPresentationProps,
            items: {
                kind: 'json',
                required: true,
                description: 'A JSON array of paths, types, and optional metadata.',
            },
            title: { kind: 'string', description: 'The tree heading.' },
        },
    },
    Terminal: {
        name: 'Terminal',
        directive: 'postkit-terminal',
        description: 'A terminal command and its optional output.',
        childMode: 'none',
        directiveRemarkPlugins: ['directives', 'postkit'],
        props: {
            ...postkitPresentationProps,
            command: {
                kind: 'string',
                required: true,
                description: 'The command text.',
            },
            output: { kind: 'string', description: 'The command output.' },
            prompt: { kind: 'string', description: 'The shell prompt marker.' },
            title: { kind: 'string', description: 'The terminal window label.' },
        },
    },
};
function publicationDeclaration(name, directive, description, props, childMode = 'none') {
    return {
        name,
        directive,
        description,
        childMode,
        directiveRemarkPlugins: ['directives', 'postkit'],
        props: { ...postkitPresentationProps, ...props },
    };
}
const publicationDeclarations = {
    AudienceBoundary: publicationDeclaration('AudienceBoundary', 'postkit-audience-boundary', 'An authored audience marker with a host-controlled visibility boundary.', {
        audience: {
            kind: 'string',
            required: true,
            description: 'The host-defined audience identifier.',
        },
        fallback: {
            kind: 'string',
            description: 'Fallback copy for an unauthorized viewer.',
        },
        showLabel: {
            kind: 'boolean',
            description: 'Whether the audience label is visible.',
        },
    }, 'mdx'),
    Comparison: publicationDeclaration('Comparison', 'postkit-comparison', 'An accessible feature and option comparison table.', {
        columns: {
            kind: 'json',
            required: true,
            description: 'A JSON array of compared option labels.',
        },
        items: {
            kind: 'json',
            required: true,
            description: 'A JSON array of feature rows and values.',
        },
        title: { kind: 'string', description: 'The comparison heading.' },
        description: {
            kind: 'string',
            description: 'Supporting comparison copy.',
        },
    }),
    KeyTakeaway: publicationDeclaration('KeyTakeaway', 'postkit-key-takeaway', 'A highlighted summary or list of essential points.', {
        title: { kind: 'string', description: 'The takeaway heading.' },
        eyebrow: {
            kind: 'string',
            description: 'A short label above the heading.',
        },
        items: {
            kind: 'json',
            description: 'A JSON array of takeaway bullets.',
        },
    }, 'mdx'),
    Poll: publicationDeclaration('Poll', 'postkit-poll', 'An interactive reader poll whose submission handler is host-owned.', {
        question: {
            kind: 'string',
            required: true,
            description: 'The poll question.',
        },
        description: {
            kind: 'string',
            description: 'Supporting poll copy.',
        },
        options: {
            kind: 'json',
            required: true,
            description: 'A JSON array of stable option IDs and labels.',
        },
        totalVotes: {
            kind: 'number',
            description: 'An optional total vote count.',
        },
        selectedId: {
            kind: 'string',
            description: 'An optional initially selected option.',
        },
    }),
    ProductCard: publicationDeclaration('ProductCard', 'postkit-product-card', 'A product or recommendation card with explicit commercial linking.', {
        title: {
            kind: 'string',
            required: true,
            description: 'The product name.',
        },
        href: {
            kind: 'string',
            required: true,
            description: 'The product destination.',
        },
        description: {
            kind: 'string',
            description: 'The product summary.',
        },
        actionLabel: {
            kind: 'string',
            description: 'The product action label.',
        },
        imageSrc: { kind: 'string', description: 'The product image URL.' },
        imageAlt: {
            kind: 'string',
            description: 'Alternative text for the product image.',
        },
        price: { kind: 'string', description: 'The displayed price.' },
        rating: { kind: 'number', description: 'A five-point rating.' },
        badge: { kind: 'string', description: 'A short product badge.' },
        rel: {
            kind: 'string',
            description: 'The link relationship, normally sponsored.',
        },
    }),
    PullQuote: publicationDeclaration('PullQuote', 'postkit-pull-quote', 'A prominent quotation with optional attribution and citation.', {
        quote: {
            kind: 'string',
            required: true,
            description: 'The quoted text.',
        },
        attribution: {
            kind: 'string',
            description: 'The quoted speaker or source.',
        },
        cite: { kind: 'string', description: 'The cited work.' },
    }),
    RelatedContent: publicationDeclaration('RelatedContent', 'postkit-related-content', 'A semantic list of related articles or resources.', {
        items: {
            kind: 'json',
            required: true,
            description: 'A JSON array of related content links.',
        },
        title: { kind: 'string', description: 'The related-content heading.' },
    }),
    SeriesNavigation: publicationDeclaration('SeriesNavigation', 'postkit-series-navigation', 'Previous and next navigation for a named article series.', {
        title: {
            kind: 'string',
            required: true,
            description: 'The series title.',
        },
        current: {
            kind: 'number',
            description: 'The current article position.',
        },
        total: {
            kind: 'number',
            description: 'The number of articles in the series.',
        },
        previous: {
            kind: 'json',
            description: 'The previous article title and URL.',
        },
        next: {
            kind: 'json',
            description: 'The next article title and URL.',
        },
    }),
    SponsorBlock: publicationDeclaration('SponsorBlock', 'postkit-sponsor-block', 'A clearly disclosed sponsor message and destination.', {
        name: {
            kind: 'string',
            required: true,
            description: 'The sponsor name.',
        },
        message: { kind: 'string', description: 'The sponsor message.' },
        href: { kind: 'string', description: 'The sponsor destination.' },
        actionLabel: {
            kind: 'string',
            description: 'The sponsor action label.',
        },
        logoSrc: { kind: 'string', description: 'The sponsor logo URL.' },
        logoAlt: {
            kind: 'string',
            description: 'Alternative text for the sponsor logo.',
        },
        disclosure: {
            kind: 'string',
            description: 'The commercial disclosure label.',
        },
    }),
    Stat: publicationDeclaration('Stat', 'postkit-stat', 'A prominent metric with context and trend.', {
        value: {
            kind: 'string',
            required: true,
            description: 'The displayed metric value.',
        },
        label: {
            kind: 'string',
            required: true,
            description: 'The metric label.',
        },
        trend: { kind: 'string', description: 'The metric trend.' },
        description: {
            kind: 'string',
            description: 'Supporting metric context.',
        },
    }),
};
export const postkitDeclarationManifest = Object.freeze({
    id: 'postkit.article',
    version: POSTKIT_DECLARATION_VERSION,
    syntax: 'postkit-directive-v1',
    components: {
        ...foundationalDeclarations,
        ...technicalDeclarations,
        ...publicationDeclarations,
        AppearsOn: {
            name: 'AppearsOn',
            directive: 'postkit-appears-on',
            description: 'A provenance-aware list of destinations where the post was syndicated.',
            childMode: 'none',
            directiveRemarkPlugins: ['directives', 'postkit'],
            props: {
                ...postkitPresentationProps,
                items: {
                    kind: 'json',
                    required: true,
                    description: 'A JSON array of syndicated publication references.',
                },
                label: {
                    kind: 'string',
                    description: 'The accessible heading for the destination list.',
                },
                presentation: {
                    kind: 'enum',
                    values: ['inline', 'list', 'badges', 'card'],
                    description: 'How syndicated destinations are arranged.',
                },
                showDates: {
                    kind: 'boolean',
                    description: 'Whether publication dates are shown.',
                },
            },
        },
        Audio: {
            name: 'Audio',
            directive: 'postkit-audio',
            description: 'An accessible audio player with an optional caption.',
            childMode: 'none',
            directiveRemarkPlugins: ['directives', 'postkit'],
            props: {
                ...postkitPresentationProps,
                src: {
                    kind: 'string',
                    required: true,
                    description: 'The audio file URL.',
                },
                title: {
                    kind: 'string',
                    required: true,
                    description: 'An accessible title for the recording.',
                },
                caption: {
                    kind: 'string',
                    description: 'Visible supporting text below the player.',
                },
                preload: {
                    kind: 'enum',
                    values: ['none', 'metadata', 'auto'],
                    description: 'Browser preload behavior.',
                },
            },
        },
        AuthorCard: {
            name: 'AuthorCard',
            directive: 'postkit-author-card',
            description: 'A semantic author biography with portrait and profile links.',
            childMode: 'mdx',
            directiveRemarkPlugins: ['directives', 'postkit'],
            props: {
                ...postkitPresentationProps,
                name: {
                    kind: 'string',
                    required: true,
                    description: 'The author display name.',
                },
                role: {
                    kind: 'string',
                    description: 'The author role, title, or affiliation.',
                },
                avatarSrc: {
                    kind: 'string',
                    description: 'The author portrait URL.',
                },
                avatarAlt: {
                    kind: 'string',
                    description: 'Alternative text for the author portrait.',
                },
                href: {
                    kind: 'string',
                    description: 'The author profile URL.',
                },
                bio: {
                    kind: 'string',
                    description: 'A plain-text author biography.',
                },
                links: {
                    kind: 'json',
                    description: 'A JSON array of author links with label, href, and optional rel fields.',
                },
                presentation: {
                    kind: 'enum',
                    values: ['card', 'compact', 'inline'],
                    description: 'How much author detail is displayed.',
                },
            },
        },
        CallToAction: {
            name: 'CallToAction',
            directive: 'postkit-call-to-action',
            description: 'A focused article callout with primary and secondary actions.',
            childMode: 'mdx',
            directiveRemarkPlugins: ['directives', 'postkit'],
            props: {
                ...postkitPresentationProps,
                title: {
                    kind: 'string',
                    required: true,
                    description: 'The call-to-action heading.',
                },
                eyebrow: {
                    kind: 'string',
                    description: 'A short label displayed above the heading.',
                },
                description: {
                    kind: 'string',
                    description: 'Plain-text supporting copy.',
                },
                primaryLabel: {
                    kind: 'string',
                    description: 'The primary action label.',
                },
                primaryHref: {
                    kind: 'string',
                    description: 'The primary action destination.',
                },
                secondaryLabel: {
                    kind: 'string',
                    description: 'The secondary action label.',
                },
                secondaryHref: {
                    kind: 'string',
                    description: 'The secondary action destination.',
                },
                alignment: {
                    kind: 'enum',
                    values: ['start', 'center'],
                    description: 'The content and action alignment.',
                },
            },
        },
        Carousel: {
            name: 'Carousel',
            directive: 'postkit-carousel',
            description: 'A keyboard-operable image and content carousel.',
            childMode: 'mdx',
            directiveRemarkPlugins: ['directives', 'postkit'],
            props: {
                ...postkitPresentationProps,
                items: {
                    kind: 'json',
                    description: 'A JSON array of carousel items.',
                },
                label: {
                    kind: 'string',
                    description: 'The accessible name for the carousel.',
                },
                initialIndex: {
                    kind: 'number',
                    description: 'The initially visible zero-based item index.',
                },
            },
        },
        Chart: {
            name: 'Chart',
            directive: 'postkit-chart',
            description: 'An accessible bar or line chart with optional data table.',
            childMode: 'none',
            directiveRemarkPlugins: ['directives', 'postkit'],
            props: {
                ...postkitPresentationProps,
                data: {
                    kind: 'json',
                    required: true,
                    description: 'A JSON array of labeled data records.',
                },
                series: {
                    kind: 'json',
                    description: 'A JSON array describing the values to graph.',
                },
                title: {
                    kind: 'string',
                    required: true,
                    description: 'The visible and accessible chart title.',
                },
                description: {
                    kind: 'string',
                    description: 'A concise explanation of the chart.',
                },
                type: {
                    kind: 'enum',
                    values: ['bar', 'line'],
                    description: 'The chart presentation.',
                },
                showTable: {
                    kind: 'boolean',
                    description: 'Whether to show an accessible source-data table.',
                },
            },
        },
        Figure: {
            name: 'Figure',
            directive: 'postkit-figure',
            description: 'A responsive image with an optional caption and attribution.',
            childMode: 'none',
            directiveRemarkPlugins: ['directives', 'postkit'],
            props: {
                ...postkitPresentationProps,
                src: {
                    kind: 'string',
                    required: true,
                    description: 'The image URL.',
                },
                alt: {
                    kind: 'string',
                    required: true,
                    description: 'Alternative text, or an explicitly empty value for a decorative image.',
                },
                caption: {
                    kind: 'string',
                    description: 'Visible supporting text below the image.',
                },
                credit: {
                    kind: 'string',
                    description: 'The image attribution or credit.',
                },
                creditHref: {
                    kind: 'string',
                    description: 'A URL for the image attribution.',
                },
                href: {
                    kind: 'string',
                    description: 'An optional destination when the image is activated.',
                },
                width: {
                    kind: 'number',
                    description: 'The intrinsic image width in pixels.',
                },
                height: {
                    kind: 'number',
                    description: 'The intrinsic image height in pixels.',
                },
                aspectRatio: {
                    kind: 'string',
                    description: 'A CSS aspect ratio such as 16 / 9.',
                },
                objectFit: {
                    kind: 'enum',
                    values: ['contain', 'cover'],
                    description: 'How the image fits its media frame.',
                },
                objectPosition: {
                    kind: 'string',
                    description: 'The focal position within the media frame.',
                },
                loading: {
                    kind: 'enum',
                    values: ['eager', 'lazy'],
                    description: 'Browser image loading behavior.',
                },
                sizes: {
                    kind: 'string',
                    description: 'Responsive image display-size hints.',
                },
                srcSet: {
                    kind: 'string',
                    description: 'Responsive image source candidates.',
                },
                layout: {
                    kind: 'enum',
                    values: ['inline', 'wide', 'bleed'],
                    description: 'The figure width relative to article content.',
                },
            },
        },
        LinkPreview: {
            name: 'LinkPreview',
            directive: 'postkit-link-preview',
            description: 'A portable inline link, metadata card, native media player, or isolated rich embed.',
            childMode: 'none',
            directiveRemarkPlugins: ['directives', 'postkit'],
            props: {
                ...postkitPresentationProps,
                href: {
                    kind: 'string',
                    required: true,
                    description: 'The destination URL.',
                },
                presentation: {
                    kind: 'enum',
                    values: ['inline', 'card', 'embed', 'media', 'auto'],
                    description: 'The requested link treatment. Auto chooses from resolved metadata.',
                },
                images: {
                    kind: 'enum',
                    values: ['none', 'first', 'carousel'],
                    description: 'How resolved preview images are displayed.',
                },
                media: {
                    kind: 'enum',
                    values: ['auto', 'audio', 'video'],
                    description: 'The preferred native media type.',
                },
                activation: {
                    kind: 'enum',
                    values: ['click', 'immediate'],
                    description: 'Whether an external interactive embed waits for reader consent.',
                },
                provider: {
                    kind: 'string',
                    description: 'A provider override for PostkitProvider, an editor, or a build-time resolver integration.',
                },
                metadata: {
                    kind: 'json',
                    description: 'A normalized @postkit/unfurl result serialized as JSON.',
                },
                title: {
                    kind: 'string',
                    description: 'An author-supplied title override.',
                },
                description: {
                    kind: 'string',
                    description: 'An author-supplied description override.',
                },
                siteName: {
                    kind: 'string',
                    description: 'An author-supplied site-name override.',
                },
                image: {
                    kind: 'string',
                    description: 'An author-supplied primary image override.',
                },
                imageAlt: {
                    kind: 'string',
                    description: 'Alternative text for the primary image override.',
                },
                favicon: {
                    kind: 'string',
                    description: 'An author-supplied site icon override.',
                },
                iframeTitle: {
                    kind: 'string',
                    description: 'An accessible title for a resolved iframe embed.',
                },
            },
        },
        NewsletterSignup: {
            name: 'NewsletterSignup',
            directive: 'postkit-newsletter-signup',
            description: 'A provider-agnostic newsletter form connected by PostkitProvider.',
            childMode: 'mdx',
            directiveRemarkPlugins: ['directives', 'postkit'],
            props: {
                ...postkitPresentationProps,
                title: {
                    kind: 'string',
                    required: true,
                    description: 'The newsletter signup heading.',
                },
                description: {
                    kind: 'string',
                    description: 'Plain-text supporting copy.',
                },
                list: {
                    kind: 'string',
                    description: 'A host-defined newsletter or audience identifier.',
                },
                emailLabel: {
                    kind: 'string',
                    description: 'The accessible email field label.',
                },
                emailPlaceholder: {
                    kind: 'string',
                    description: 'The email field placeholder.',
                },
                buttonLabel: {
                    kind: 'string',
                    description: 'The submit button label.',
                },
                privacy: {
                    kind: 'string',
                    description: 'A short privacy or consent note.',
                },
                successMessage: {
                    kind: 'string',
                    description: 'The default successful-submission message.',
                },
                errorMessage: {
                    kind: 'string',
                    description: 'The default failed-submission message.',
                },
                alignment: {
                    kind: 'enum',
                    values: ['start', 'center'],
                    description: 'The content and form alignment.',
                },
            },
        },
        ShareActions: {
            name: 'ShareActions',
            directive: 'postkit-share-actions',
            description: 'Reader-initiated native, copy, email, and configured social sharing actions.',
            childMode: 'none',
            directiveRemarkPlugins: ['directives', 'postkit'],
            props: {
                ...postkitPresentationProps,
                url: {
                    kind: 'string',
                    required: true,
                    description: 'The canonical URL to share.',
                },
                title: {
                    kind: 'string',
                    description: 'The title included with the share.',
                },
                text: {
                    kind: 'string',
                    description: 'Supporting text included with the share.',
                },
                services: {
                    kind: 'json',
                    description: 'A JSON array of configured service identifiers.',
                },
                label: {
                    kind: 'string',
                    description: 'The accessible heading for the actions.',
                },
                layout: {
                    kind: 'enum',
                    values: ['inline', 'buttons'],
                    description: 'How share actions are arranged.',
                },
            },
        },
        SocialPost: {
            name: 'SocialPost',
            directive: 'postkit-social-post',
            description: 'A consistently styled social post card or consent-gated provider embed.',
            childMode: 'none',
            directiveRemarkPlugins: ['directives', 'postkit'],
            props: {
                ...postkitPresentationProps,
                href: {
                    kind: 'string',
                    required: true,
                    description: 'The original social post URL.',
                },
                provider: {
                    kind: 'string',
                    description: 'The metadata resolver override.',
                },
                resolution: {
                    kind: 'enum',
                    values: ['live', 'snapshot', 'snapshot-fallback'],
                    description: 'Whether Postkit resolves the current post, renders frozen metadata, or falls back to live resolution when no snapshot exists.',
                },
                snapshotInfo: {
                    kind: 'enum',
                    values: ['auto', 'visible', 'hidden'],
                    description: 'Whether snapshot capture provenance is displayed in the rendered card.',
                },
                service: {
                    kind: 'string',
                    description: 'The social service branding identifier.',
                },
                presentation: {
                    kind: 'enum',
                    values: ['card', 'embed', 'auto'],
                    description: 'The native-card or provider-embed treatment.',
                },
                branding: {
                    kind: 'enum',
                    values: ['none', 'subtle', 'full'],
                    description: 'How strongly the service identity is displayed.',
                },
                activation: {
                    kind: 'enum',
                    values: ['click', 'immediate'],
                    description: 'Whether an interactive embed waits for consent.',
                },
                metadata: {
                    kind: 'json',
                    description: 'A normalized social post, unfurl result, or versioned Postkit snapshot envelope.',
                },
                authorName: {
                    kind: 'string',
                    description: 'An author-supplied display-name override.',
                },
                authorHandle: {
                    kind: 'string',
                    description: 'An author-supplied social handle override.',
                },
                authorAvatar: {
                    kind: 'string',
                    description: 'An author-supplied avatar URL override.',
                },
                text: {
                    kind: 'string',
                    description: 'An author-supplied post-text override.',
                },
                publishedAt: {
                    kind: 'string',
                    description: 'An ISO publication timestamp override.',
                },
                showMetrics: {
                    kind: 'boolean',
                    description: 'Whether available engagement counts are shown.',
                },
                iframeTitle: {
                    kind: 'string',
                    description: 'An accessible title for a provider iframe.',
                },
            },
        },
        Video: {
            name: 'Video',
            directive: 'postkit-video',
            description: 'A responsive HTML video player with caption support.',
            childMode: 'none',
            directiveRemarkPlugins: ['directives', 'postkit'],
            props: {
                ...postkitPresentationProps,
                src: {
                    kind: 'string',
                    required: true,
                    description: 'The video file URL.',
                },
                title: {
                    kind: 'string',
                    required: true,
                    description: 'An accessible title for the video.',
                },
                poster: {
                    kind: 'string',
                    description: 'The preview image URL.',
                },
                caption: {
                    kind: 'string',
                    description: 'Visible supporting text below the player.',
                },
                aspectRatio: {
                    kind: 'string',
                    description: 'A CSS aspect ratio such as 16 / 9.',
                },
                preload: {
                    kind: 'enum',
                    values: ['none', 'metadata', 'auto'],
                    description: 'Browser preload behavior.',
                },
            },
        },
    },
});
export function postkitDeclarationFor(name) {
    return postkitDeclarationManifest.components[name];
}
