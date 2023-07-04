<script setup lang="ts">
import { Product } from "types";

const { formatPrice } = useUtils();

defineProps<{
  product: Product;
  handleAddToCart: (product: Product) => void;
}>();
</script>

<template>
  <article class="grid gap-1">
    <div v-if="product.imagen">
      <nuxt-img
        :src="product.imagen"
        :alt="product.nombre"
        width="300"
        height="169"
      />
    </div>
    <h1 class="font-semibold">{{ product.nombre }}</h1>
    <p class="text-xs line-clamp-3">
      {{ product.descripcion }}
    </p>
    <p class="font-bold">{{ formatPrice(product.precio) }}</p>
    <button
      @click="handleAddToCart(product)"
      class="p-1 bg-green-300 rounded-md"
    >
      agregar
    </button>
  </article>
</template>
