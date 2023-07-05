<script setup lang="ts">
const { fetchProducts } = useUtils();
const nuxtApp = useNuxtApp();

nuxtApp.hook("app:mounted", async () => {
  const products = await fetchProducts();

  useState("productList", () => products);
});
</script>

<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
