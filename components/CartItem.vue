<script setup lang="ts">
import { Product } from "types";
const { formatPrice } = useUtils();
const { removeFromCart } = useCart();

defineProps<{
  item: Product;
}>();
</script>

<template>
  <div class="flex gap-4 h-20 w-full">
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
        <p class="text-black/60" v-if="typeof item.variedades === 'string'">
          {{ item.variedades }}
        </p>
        <p class="text-black/60" v-if="typeof item.variedades2 === 'string'">
          {{ item.variedades2 }}
        </p>
      </div>
    </div>
    <p class="font-bold ml-auto">{{ formatPrice(item.precio) }}</p>
    <div>
      <button @click="() => removeFromCart(item.id)">X</button>
    </div>
  </div>
</template>
