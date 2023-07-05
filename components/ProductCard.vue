<script setup lang="ts">
import Modal from "./Modal.vue";

import { Product } from "types";
import SelectVariant from "./SelectVariant.vue";

const { formatPrice } = useUtils();
const { addToCart } = useCart();

const child = ref<InstanceType<typeof Modal> | null>(null);

const handleAddClick = (product: Product) => {
  if (product.variedades && product.variedades?.length > 0) {
    if (child.value) {
      return child.value.openModal();
    }
  }
  addToCart(product);
};

const handleAddToCart = (product: Product) => {
  if (!product.variedades || !product.variedades2) {
    return;
  }
  if (product && child.value) {
    addToCart(product);
    return child.value.closeModal();
  }
};

defineProps<{
  product: Product;
}>();
</script>

<template>
  <Modal ref="child">
    <template #header>
      <h1>Elige una opción de cada variedad</h1>
    </template>

    <template #body>
      <div class="grid gap-6">
        <SelectVariant :product="product" @add-to-cart="handleAddToCart" />
      </div>
    </template>
  </Modal>

  <article class="grid gap-1 pb-6">
    <div v-if="product.imagen">
      <nuxt-img
        :src="product.imagen"
        :alt="product.nombre"
        width="240"
        height="175"
        class="rounded-md"
      />
    </div>
    <div class="grid gap-2 px-2">
      <h1 class="">{{ product.nombre }}</h1>
      <!-- <p class="text-xs line-clamp-3">
        {{ product.descripcion }}
      </p> -->
      <div class="flex justify-between items-baseline">
        <p class="font-bold">{{ formatPrice(product.precio) }}</p>
        <button
          @click="() => handleAddClick(product)"
          class="py-1 px-5 bg-slate-700 text-white/90 text-sm rounded-md"
        >
          agregar
        </button>
      </div>
    </div>
  </article>
</template>
