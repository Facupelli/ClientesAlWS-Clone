<script setup lang="ts">
import { Product } from "types";

const props = defineProps<{
  product: Product;
}>();

const selectedVariant = ref<string | null>(null);
const selectedVariant2 = ref<string | null>(null);

const handleSelectVariant = (variant: string) => {
  selectedVariant.value = variant;
};

const handleSelectVariant2 = (variant: string) => {
  selectedVariant2.value = variant;
};

const emits = defineEmits(["addToCart"]);

const addToCart = async () => {
  const variedades = selectedVariant.value;
  const variedades2 = selectedVariant2.value;

  await emits("addToCart", {
    ...props.product,
    variedades,
    variedades2,
  });

  selectedVariant.value = null;
  selectedVariant2.value = null;
};
</script>

<template>
  <div
    v-if="product.variedades && product.variedades?.length > 0"
    class="grid gap-4"
  >
    <ProductVariantList
      :variants="product.variedades"
      :selected-variant="selectedVariant"
      @select-variant="handleSelectVariant"
    />
  </div>
  <div
    v-if="product.variedades2 && product.variedades2?.length > 0"
    class="grid gap-4"
  >
    <ProductVariantList
      :variants="product.variedades2"
      :selected-variant="selectedVariant2"
      @select-variant="handleSelectVariant2"
    />
  </div>

  <div class="flex justify-end py-2">
    <button class="py-1 px-4 rounded-md bg-green-300" @click="addToCart">
      agregar
    </button>
  </div>
</template>
