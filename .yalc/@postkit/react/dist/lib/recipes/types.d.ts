import { type SlotRecipeConfig, type SystemStyleObject } from '@chakra-ui/react';
export type PostkitSlotStyles<Slot extends string> = Partial<Readonly<Record<Slot, SystemStyleObject>>>;
export declare function postkitSlotClassName(generated: string | undefined, supplied?: string): string | undefined;
export declare function usePostkitSlotRecipe<Recipe extends SlotRecipeConfig>(key: string, fallback: Recipe): Recipe extends SlotRecipeConfig<infer S extends string, infer T extends import("@chakra-ui/react").SlotRecipeVariantRecord<infer S extends string>> ? import("@chakra-ui/react").SystemSlotRecipeFn<S, import("@chakra-ui/react").RecipeVariantProps<Recipe>, import("@chakra-ui/react").RecipeVariantMap<T>> : never;
//# sourceMappingURL=types.d.ts.map