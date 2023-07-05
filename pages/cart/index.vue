<script setup>
const { formatPrice } = useUtils();
const { cart } = useCart();

const cartTotal = computed(() =>
  cart.value.reduce((acc, curr) => {
    return acc + Number(curr.precio);
  }, 0)
);
</script>

<template>
  <div class="grid gap-16 min-h-[calc(100vh_-_50px)]">
    <section class="px-4 h-fit">
      <div class="grid gap-8 max-w-[800px] mx-auto">
        <p v-if="cart.length === 0" class="px-2 text-black/90">
          Tu carrito está vacío.
          <NuxtLink to="/" class="underline hover:text-black/50"
            >Agrega productos!</NuxtLink
          >
        </p>
        <TransitionGroup tag="ul" name="fade" class="relative">
          <CartItem v-for="item in cart" :item="item" :key="item.id" />
        </TransitionGroup>
      </div>
    </section>
    <div class="flex justify-center">
      <p class="text-base">
        TOTAL:
        <span class="font-bold text-lg">{{ formatPrice(cartTotal) }}</span>
      </p>
    </div>
    <CartForm />
  </div>
</template>

<style>
.fade-move,
.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s cubic-bezier(0.55, 0, 0.1, 1);
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translate(50px, 0);
}

.fade-leave-active {
  position: absolute;
}
</style>
