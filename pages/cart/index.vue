<script setup>
const { cart } = useCart();
</script>

<template>
  <div>
    <h1>CART PAGE</h1>
    <div v-for="item in cart">{{ item.nombre }}</div>
  </div>
</template>
