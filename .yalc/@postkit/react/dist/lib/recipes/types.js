'use client';
import { useChakraContext, useSlotRecipe, } from '@chakra-ui/react';
export function postkitSlotClassName(generated, supplied) {
    return [generated, supplied].filter(Boolean).join(' ') || undefined;
}
export function usePostkitSlotRecipe(key, fallback) {
    const system = useChakraContext();
    const recipe = system.getSlotRecipe(key, fallback);
    return useSlotRecipe({ recipe });
}
