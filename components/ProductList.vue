<script setup lang="ts">
import ProductVariants from "./ProductVariants.vue";
import { Product } from "types";

const { fetchProducts } = useUtils();
const { cart, addToCart } = useCart();
const productList = await fetchProducts();

const child = ref(null);
const productSelected = ref<Product | null>(null);

const setSelectedProduct = (product: Product) => {
  productSelected.value = product;
};

const handleAddToCart = (product: Product) => {
  if (product.variedades && product.variedades?.length > 0) {
    if (child.value) {
      setSelectedProduct(product);
      return child.value.openModal();
    }
  }
  addToCart(product);
};
</script>

<template>
  <Modal ref="child">
    <template #header>
      <h1>Elige una opción de cada variedad</h1>
    </template>

    <template #body>
      <div v-if="productSelected" class="grid gap-6">
        <div
          v-if="
            productSelected.variedades && productSelected.variedades?.length > 0
          "
          class="grid gap-4"
        >
          <ProductVariants :variants="productSelected.variedades" />
        </div>
        <div
          v-if="
            productSelected.variedades2 &&
            productSelected.variedades2?.length > 0
          "
          class="grid gap-4"
        >
          <ProductVariants :variants="productSelected.variedades2" />
        </div>
      </div>
    </template>

    <template #footer>
      <!-- <div class="flex justify-end">
        <button class="py-1 px-4 rounded-md bg-green-200">aceptar</button>
      </div> -->
    </template>
  </Modal>

  <section class="grid grid-cols-2 gap-1">
    <ProductCard
      v-for="product in productList"
      :key="product.id"
      :product="product"
      :handle-add-to-cart="() => handleAddToCart(product)"
    />
  </section>
</template>
