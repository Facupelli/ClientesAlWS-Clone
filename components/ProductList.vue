<script setup lang="ts">
const { fetchProducts } = useUtils();

const { productList } = await fetchProducts();

useState("productList", () => productList);
</script>

<template>
  <section
    class="grid grid-cols-2 sm:grid-cols-[repeat(auto-fit,minmax(240px,240px))] gap-2 sm:gap-4 px-2"
  >
    <Suspense>
      <ProductCard v-for="product in productList" :product="product" />

      <template #fallback> Loading.... </template>
    </Suspense>
  </section>
</template>
