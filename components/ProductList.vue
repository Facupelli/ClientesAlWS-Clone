<script setup lang="ts">
const productList = useState("productList");
</script>

<template>
  <section class="grid grid-cols-2 gap-2 px-2">
    <ProductCard v-for="product in productList" :product="product" />
  </section>
</template>
