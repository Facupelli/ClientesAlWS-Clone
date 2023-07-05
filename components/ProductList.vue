<script setup lang="ts">
import ProductVariants from "./ProductVariants.vue";
import Modal from "./Modal.vue";
import { Product } from "types";

const productList = useState("productList");
const { cart, addToCart } = useCart();

const child = ref<InstanceType<typeof Modal> | null>(null);
const selectedProduct = ref<Product | null>(null);
const selectedVariant = ref<string | null>(null);
const selectedVariant2 = ref<string | null>(null);

const setSelectedProduct = (product: Product) => {
  selectedProduct.value = product;
};

const setSelectedVariant = (variant: string) => {
  selectedVariant.value = variant;
};

const setSelectedVariant2 = (variant: string) => {
  selectedVariant2.value = variant;
};

const handleAddClick = (product: Product) => {
  if (product.variedades && product.variedades?.length > 0) {
    selectedVariant.value = null;
    selectedVariant2.value = null;
    if (child.value) {
      setSelectedProduct(product);
      return child.value.openModal();
    }
  }
  addToCart(product);
};

const handleAddToCart = () => {
  if (!selectedVariant.value || !selectedVariant2.value) {
    return;
  }

  if (selectedProduct.value && child.value) {
    const product = {
      ...selectedProduct.value,
      variedades: [selectedVariant.value],
      variedades2: [selectedVariant2.value],
    };

    addToCart(product);
    return child.value.closeModal();
  }
};
</script>

<template>
  <Modal ref="child">
    <template #header>
      <h1>Elige una opción de cada variedad</h1>
    </template>

    <template #body>
      <div v-if="selectedProduct" class="grid gap-6">
        <div
          v-if="
            selectedProduct.variedades && selectedProduct.variedades?.length > 0
          "
          class="grid gap-4"
        >
          <ProductVariants
            :variants="selectedProduct.variedades"
            :selected-variant="selectedVariant"
            @select-variant="setSelectedVariant"
          />
        </div>
        <div
          v-if="
            selectedProduct.variedades2 &&
            selectedProduct.variedades2?.length > 0
          "
          class="grid gap-4"
        >
          <ProductVariants
            :variants="selectedProduct.variedades2"
            :selected-variant="selectedVariant2"
            @select-variant="setSelectedVariant2"
          />
        </div>
      </div>
    </template>

    <template #footer>
      <div class="flex justify-end">
        <button
          class="py-1 px-4 rounded-md bg-green-300"
          @click="handleAddToCart"
        >
          agregar
        </button>
      </div>
    </template>
  </Modal>

  <section class="grid grid-cols-2 gap-2 px-2">
    <ProductCard
      v-for="product in productList"
      :product="product"
      @add-click="handleAddClick"
    />
  </section>
</template>
