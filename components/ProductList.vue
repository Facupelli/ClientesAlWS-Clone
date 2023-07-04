<script setup>
const { fetchProducts } = useUtils();
const { cart, addToCart } = useCart();
const productList = await fetchProducts();

const showModal = ref(false);

const handleAddToCart = (product) => {
  // if (product.variedades?.length > 0) {
  //   showModal.value = true;
  // }
  addToCart(product);
};
</script>

<template>
  <Modal :is-open="showModal">
    <template #header>
      <h1>Elige una opción</h1>
    </template>

    <template #body>
      <ul v-if="product">
        <li v-for="variant in product.variedades">{{ variant }}</li>
      </ul>
    </template>

    <template #footer>
      <h1>FOOTER</h1>
    </template>
  </Modal>

  <section class="grid grid-cols-2 gap-4">
    <ProductCard
      v-for="product in productList"
      :product="product"
      :handle-add-to-cart="handleAddToCart"
    />
  </section>
</template>
