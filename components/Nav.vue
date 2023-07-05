<script setup>
import { onClickOutside } from "@vueuse/core";

const nav = ref();
const el = ref();

const nuxtApp = useNuxtApp();
nuxtApp.hook("page:start", () => {
  nav.value = false;
});

const close = () => {
  nav.value = false;
};

onClickOutside(el, close);
</script>

<template>
  <nav
    class="flex px-6 relative bg-slate-700 text-white/90 h-[60px] items-center"
  >
    <NuxtLink to="/">
      <h1>Clientes al WS</h1>
    </NuxtLink>
    <label for="nav-toggle" class="ml-auto">+++</label>
    <input v-model="nav" id="nav-toggle" type="checkbox" class="peer hidden" />
    <div
      ref="el"
      class="absolute top-0 left-[-80%] z-10 w-[70vw] max-w-[400px] h-screen peer-checked:left-0 bg-slate-800 transition-all duration-300 ease-in-out"
    >
      <ul class="grid gap-4 p-8 text-white font-bold">
        <li>
          <NuxtLink to="/">INICIO</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/cart">CARRITO</NuxtLink>
        </li>
      </ul>
    </div>
    <div
      class="absolute top-0 left-0 bg-gray-700/20 backdrop-blur-sm backdrop-opacity-80 w-full h-screen hidden peer-checked:block"
    />
  </nav>
</template>
