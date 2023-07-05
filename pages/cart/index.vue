<script setup>
const { cart } = useCart();
</script>

<template>
  <div class="grid gap-16 min-h-[calc(100vh_-_50px)]">
    <section class="px-4 grid gap-8 h-fit">
      <CartItem v-for="item in cart" :item="item" />
    </section>
    <CartForm />
  </div>
</template>
