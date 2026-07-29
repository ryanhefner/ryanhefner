'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Box, Button, Flex, Image, Link, Text, } from '@chakra-ui/react';
import { Children, useId, useState } from 'react';
import { parseJsonProp } from '../json-props.js';
import { postkitCarouselRecipe, } from '../recipes/carousel.recipe.js';
import { postkitSlotClassName, usePostkitSlotRecipe, } from '../recipes/types.js';
import { postkitRecipeKeys } from '../theme.js';
function parsedInitialIndex(value) {
    const parsed = typeof value === 'string' ? Number.parseInt(value, 10) : (value ?? 0);
    return Number.isFinite(parsed) ? Math.max(0, parsed) : 0;
}
function itemContent(item, styles, slotStyles, classNames) {
    const content = (_jsxs(Box, { children: [item.image ? (_jsx(Image, { src: item.image.src, alt: item.image.alt, className: classNames.media, css: [styles.media, slotStyles?.media] })) : null, item.title || item.description ? (_jsxs(Box, { className: classNames.content, css: [styles.content, slotStyles?.content], children: [item.title ? (_jsx(Text, { as: "h3", className: classNames.title, css: [styles.title, slotStyles?.title], children: item.title })) : null, item.description ? (_jsx(Text, { className: classNames.description, css: [
                            styles.description,
                            item.title ? undefined : { marginTop: '0' },
                            slotStyles?.description,
                        ], children: item.description })) : null] })) : null] }));
    return item.href ? (_jsx(Link, { href: item.href, className: classNames.link, css: [styles.link, slotStyles?.link], children: content })) : (content);
}
export function PostkitCarousel({ items, children, label = 'Article carousel', initialIndex, rootProps, slotStyles, size, variant, unstyled, }) {
    const generatedId = useId();
    const recipe = usePostkitSlotRecipe(postkitRecipeKeys.carousel, postkitCarouselRecipe);
    const styles = unstyled
        ? {}
        : recipe({ size, variant });
    const { css: rootCss, className: rootClassName, ...restRootProps } = rootProps ?? {};
    const itemSlides = items
        ? parseJsonProp(items, 'Carousel items').map((item) => itemContent(item, styles, slotStyles, recipe.classNameMap))
        : [];
    const childSlides = Children.toArray(children);
    const slides = itemSlides.length > 0 ? itemSlides : childSlides;
    const startingIndex = Math.min(parsedInitialIndex(initialIndex), Math.max(0, slides.length - 1));
    const [selectedIndex, setSelectedIndex] = useState(startingIndex);
    const boundedIndex = Math.min(selectedIndex, Math.max(0, slides.length - 1));
    const statusId = `${generatedId}-status`;
    if (slides.length === 0) {
        return (_jsx(Box, { "data-postkit-component": "Carousel", role: "note", ...restRootProps, className: postkitSlotClassName(recipe.classNameMap.root, rootClassName), css: [styles.root, slotStyles?.root, rootCss], children: _jsx(Text, { className: recipe.classNameMap.emptyState, css: [styles.emptyState, slotStyles?.emptyState], children: "This carousel does not have any slides." }) }));
    }
    const selectPrevious = () => {
        setSelectedIndex((current) => {
            const boundedCurrent = Math.min(current, slides.length - 1);
            return boundedCurrent <= 0 ? slides.length - 1 : boundedCurrent - 1;
        });
    };
    const selectNext = () => {
        setSelectedIndex((current) => {
            const boundedCurrent = Math.min(current, slides.length - 1);
            return boundedCurrent >= slides.length - 1 ? 0 : boundedCurrent + 1;
        });
    };
    return (_jsxs(Box, { "data-postkit-component": "Carousel", role: "region", "aria-roledescription": "carousel", "aria-label": label, ...restRootProps, className: postkitSlotClassName(recipe.classNameMap.root, rootClassName), css: [styles.root, slotStyles?.root, rootCss], children: [_jsx(Box, { role: "group", "aria-roledescription": "slide", "aria-label": `${boundedIndex + 1} of ${slides.length}`, className: recipe.classNameMap.slide, css: [styles.slide, slotStyles?.slide], children: slides[boundedIndex] }), _jsxs(Flex, { className: recipe.classNameMap.controls, css: [styles.controls, slotStyles?.controls], children: [_jsx(Button, { size: "sm", variant: "outline", onClick: selectPrevious, "aria-describedby": statusId, className: recipe.classNameMap.previousTrigger, css: [styles.previousTrigger, slotStyles?.previousTrigger], children: "Previous" }), _jsxs(Text, { id: statusId, "aria-live": "polite", className: recipe.classNameMap.status, css: [styles.status, slotStyles?.status], children: [boundedIndex + 1, " / ", slides.length] }), _jsx(Button, { size: "sm", variant: "outline", onClick: selectNext, "aria-describedby": statusId, className: recipe.classNameMap.nextTrigger, css: [styles.nextTrigger, slotStyles?.nextTrigger], children: "Next" })] })] }));
}
