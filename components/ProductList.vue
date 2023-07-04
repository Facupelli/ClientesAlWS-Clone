<script setup>
import { onClickOutside } from "@vueuse/core";

const { fetchProducts } = useUtils();
const { cart, addToCart } = useCart();
const productList = await fetchProducts();

const modalRef = ref();
const showModal = ref(false);
const productSelected = useState("cart", () => null);

const setSelectedProduct = (product) => {
  productSelected.value = product;
};

const close = () => {
  showModal.value = false;
};

onClickOutside(modalRef, close);

const handleAddToCart = (product) => {
  if (product.variedades?.length > 0) {
    setSelectedProduct(product);
    return (showModal.value = true);
  }
  addToCart(product);
};
</script>

<template>
  <Modal :is-open="showModal" ref="modalRef">
    <template #header>
      <h1>Elige una opción</h1>
    </template>

    <template #body>
      <div v-if="productSelected" class="grid gap-4">
        <ul class="flex flex-wrap gap-2">
          <li
            v-for="variant in productSelected.variedades"
            class="font-semibold flex justify-center items-center border-b-2 px-3 py-1 border-gray-200"
          >
            {{ variant }}
          </li>
        </ul>
        <ul
          v-if="productSelected.variedades2.length > 0"
          class="flex flex-wrap gap-2"
        >
          <li
            v-for="variant in productSelected.variedades2"
            class="font-semibold flex justify-center items-center border-b-2 px-3 py-1 border-gray-200"
          >
            {{ variant }}
          </li>
        </ul>
      </div>
    </template>

    <!-- <template #footer>
      <h1>FOOTER</h1>
    </template> -->
  </Modal>

  <section class="grid grid-cols-2 gap-1">
    <ProductCard
      v-for="product in productList"
      :product="product"
      :handle-add-to-cart="() => handleAddToCart(product)"
    />
  </section>
</template>
