<script setup lang="ts">
import { Product } from "types";
const { formatPrice } = useUtils();
const { removeFromCart } = useCart();

defineProps<{
  item: Product;
}>();
</script>

<template>
  <div class="flex gap-4">
    <div>
      <nuxt-img
        :src="item.imagen"
        :alt="item.nombre"
        width="45"
        height="45"
        class="rounded-full"
      />
    </div>
    <div>
      <p class="font-semibold">{{ item.nombre }}</p>
      <div class="flex gap-4">
        <p>{{ item.variedades[0] }}</p>
        <p>{{ item.variedades2[0] }}</p>
      </div>
    </div>
    <p class="font-bold ml-auto">{{ formatPrice(item.precio) }}</p>
    <div>
      <button @click="() => removeFromCart(item.id)">x</button>
    </div>
  </div>
</template>
