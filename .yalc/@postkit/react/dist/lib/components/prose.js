'use client';
import { jsx as _jsx } from "react/jsx-runtime";
import { chakra, } from '@chakra-ui/react';
import { createElement } from 'react';
import { postkitProseRecipe, } from '../recipes/prose.recipe.js';
import { postkitSlotClassName, usePostkitSlotRecipe, } from '../recipes/types.js';
import { postkitRecipeKeys } from '../theme.js';
import { createPostkitLink, } from '../link.js';
function createPostkitProseElement(element, slot) {
    const StyledElement = chakra(element);
    const Component = StyledElement;
    function PostkitProseElement(props) {
        const recipe = usePostkitSlotRecipe(postkitRecipeKeys.prose, postkitProseRecipe);
        const styles = recipe();
        const { className, css, ...rest } = props;
        return createElement(Component, {
            ...rest,
            'data-postkit-prose-element': slot,
            className: postkitSlotClassName(recipe.classNameMap[slot], className),
            css: [styles[slot], css],
        });
    }
    PostkitProseElement.displayName = `PostkitProse.${slot}`;
    return PostkitProseElement;
}
export function PostkitProse({ className, css, ...props }) {
    const recipe = usePostkitSlotRecipe(postkitRecipeKeys.prose, postkitProseRecipe);
    const styles = recipe();
    return (_jsx(chakra.div, { "data-postkit-component": "Prose", "data-postkit-prose": "", ...props, className: postkitSlotClassName(recipe.classNameMap.root, className), css: [styles.root, css] }));
}
export function createPostkitProseLink(Link) {
    const StyledLink = chakra(Link);
    function PostkitProseLink({ className, ...props }) {
        const recipe = usePostkitSlotRecipe(postkitRecipeKeys.prose, postkitProseRecipe);
        const styles = recipe();
        return (_jsx(StyledLink, { ...props, "data-postkit-prose-element": "a", className: postkitSlotClassName(recipe.classNameMap.a, className), css: styles.a }));
    }
    PostkitProseLink.displayName = 'PostkitProse.a';
    return PostkitProseLink;
}
export const postkitProseComponents = Object.freeze({
    wrapper: PostkitProse,
    h1: createPostkitProseElement('h1', 'h1'),
    h2: createPostkitProseElement('h2', 'h2'),
    h3: createPostkitProseElement('h3', 'h3'),
    h4: createPostkitProseElement('h4', 'h4'),
    h5: createPostkitProseElement('h5', 'h5'),
    h6: createPostkitProseElement('h6', 'h6'),
    p: createPostkitProseElement('p', 'p'),
    a: createPostkitProseLink(createPostkitLink()),
    blockquote: createPostkitProseElement('blockquote', 'blockquote'),
    ul: createPostkitProseElement('ul', 'ul'),
    ol: createPostkitProseElement('ol', 'ol'),
    li: createPostkitProseElement('li', 'li'),
    hr: createPostkitProseElement('hr', 'hr'),
    pre: createPostkitProseElement('pre', 'pre'),
    code: createPostkitProseElement('code', 'code'),
    strong: createPostkitProseElement('strong', 'strong'),
    em: createPostkitProseElement('em', 'em'),
    del: createPostkitProseElement('del', 'del'),
    table: createPostkitProseElement('table', 'table'),
    thead: createPostkitProseElement('thead', 'thead'),
    tbody: createPostkitProseElement('tbody', 'tbody'),
    tr: createPostkitProseElement('tr', 'tr'),
    th: createPostkitProseElement('th', 'th'),
    td: createPostkitProseElement('td', 'td'),
    img: createPostkitProseElement('img', 'img'),
    figure: createPostkitProseElement('figure', 'figure'),
    figcaption: createPostkitProseElement('figcaption', 'figcaption'),
    sup: createPostkitProseElement('sup', 'sup'),
    sub: createPostkitProseElement('sub', 'sub'),
    section: createPostkitProseElement('section', 'section'),
    dl: createPostkitProseElement('dl', 'dl'),
    dt: createPostkitProseElement('dt', 'dt'),
    dd: createPostkitProseElement('dd', 'dd'),
    kbd: createPostkitProseElement('kbd', 'kbd'),
    mark: createPostkitProseElement('mark', 'mark'),
    small: createPostkitProseElement('small', 'small'),
    details: createPostkitProseElement('details', 'details'),
    summary: createPostkitProseElement('summary', 'summary'),
    input: createPostkitProseElement('input', 'input'),
    br: createPostkitProseElement('br', 'br'),
});
