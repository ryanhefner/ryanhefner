import { postkitDeclarationManifest, } from './declarations.js';
const componentByDirective = new Map(Object.values(postkitDeclarationManifest.components).flatMap((declaration) => [
    [declaration.directive, declaration],
    [declaration.name.toLowerCase(), declaration],
]));
function coerceHastValue(value, kind) {
    if (kind === 'boolean') {
        return value === null || value === undefined || value === 'true';
    }
    return value ?? '';
}
function validateAttributes(declaration, attributes, strict) {
    const validated = {};
    for (const [name, value] of Object.entries(attributes)) {
        const prop = declaration.props[name];
        if (!prop) {
            if (strict) {
                throw new TypeError(`Unknown ${declaration.name} prop "${name}" in Postkit directive.`);
            }
            continue;
        }
        if (prop.kind === 'enum' &&
            value !== null &&
            value !== undefined &&
            !prop.values?.includes(value)) {
            throw new TypeError(`Invalid ${declaration.name} ${name} value "${value}".`);
        }
        validated[name] = value;
    }
    for (const [name, prop] of Object.entries(declaration.props)) {
        if (prop.required &&
            (validated[name] === undefined || validated[name] === null)) {
            throw new TypeError(`Postkit ${declaration.name} directive requires "${name}".`);
        }
    }
    return validated;
}
function mdxAttributes(attributes) {
    return Object.entries(attributes).map(([name, value]) => ({
        type: 'mdxJsxAttribute',
        name,
        value: value === null || value === undefined ? null : value,
    }));
}
function transformDirective(node, declaration, options) {
    const sourceAttributes = node.attributes && !Array.isArray(node.attributes) ? node.attributes : {};
    const attributes = validateAttributes(declaration, sourceAttributes, options.strict);
    if (options.output === 'hast') {
        node.data = {
            ...node.data,
            hName: declaration.name,
            hProperties: Object.fromEntries(Object.entries(attributes).map(([name, value]) => [
                name,
                coerceHastValue(value, declaration.props[name]?.kind ?? 'string'),
            ])),
        };
        return;
    }
    node.type =
        node.type === 'textDirective' ? 'mdxJsxTextElement' : 'mdxJsxFlowElement';
    node.name = declaration.name;
    node.attributes = mdxAttributes(attributes);
    node.children ??= [];
    delete node.data;
}
function visit(node, options) {
    if (node.type === 'containerDirective' ||
        node.type === 'leafDirective' ||
        node.type === 'textDirective') {
        const declaration = node.name
            ? componentByDirective.get(node.name)
            : undefined;
        if (declaration) {
            transformDirective(node, declaration, options);
        }
    }
    node.children?.forEach((child) => visit(child, options));
}
/**
 * Remark-compatible transformer for Postkit directives. Pair it with a
 * directive parser (for example `remark-directive`) before this plugin.
 */
export function remarkPostkit(options = {}) {
    const resolved = {
        output: options.output ?? 'mdx',
        strict: options.strict ?? true,
    };
    return (tree) => {
        visit(tree, resolved);
    };
}
export function isPostkitComponentName(value) {
    return Object.prototype.hasOwnProperty.call(postkitDeclarationManifest.components, value);
}
