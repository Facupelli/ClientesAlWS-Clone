<script setup>
const { cart } = useCart();
</script>

<template>
  <div class="grid gap-16 min-h-[calc(100vh_-_50px)]">
    <section class="px-4 grid gap-8 h-fit">
      <p v-if="cart.length === 0" class="px-2 text-black/90">
        Tu carrito está vacío.
        <NuxtLink to="/" class="underline hover:text-black/50"
          >Agrega productos!</NuxtLink
        >
      </p>
      <CartItem v-for="item in cart" :item="item" />
    </section>
    <CartForm />
  </div>
</template>
