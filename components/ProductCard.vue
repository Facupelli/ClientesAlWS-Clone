<script setup lang="ts">
import { Product } from "types";

const { formatPrice } = useUtils();

defineProps<{
  product: Product;
}>();
</script>

<template>
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
          @click="$emit('addClick', product)"
          class="py-1 px-5 bg-slate-700 text-white/90 text-sm rounded-md"
        >
          agregar
        </button>
      </div>
    </div>
  </article>
</template>
