<script setup>
const { cart } = useCart();
</script>

<template>
  <div>
    <section class="px-4 grid gap-8">
      <CartItem v-for="item in cart" :item="item" />
    </section>
  </div>
</template>
