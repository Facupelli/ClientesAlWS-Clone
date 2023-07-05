<script setup lang="ts">
const name = ref();
const phone = ref();
const deliveryType = ref("withdraw");
const address = ref();
</script>

<template>
  <section class="mt-auto">
    <div
      class="grid gap-4 mx-auto max-w-[800px] bg-gradient-to-b from-slate-200 to-slate-500 py-16 px-8 rounded-t-[50px]"
    >
      <div class="grid gap-1">
        <label class="text-sm">Tu nombre</label>
        <input class="p-2 rounded-md" v-model="name" />
      </div>
      <div class="grid gap-1">
        <label class="text-sm">Tu número de teléfono</label>
        <input class="p-2 rounded-md" v-model="phone" />
      </div>
      <div class="grid gap-2">
        <div class="flex items-center gap-4">
          <label class="text-sm basis-[120px]">Retiro en sucursal</label>
          <input
            class="p-2 rounded-md"
            type="radio"
            value="withdraw"
            v-model="deliveryType"
          />
        </div>
        <div class="flex items-center gap-4">
          <label class="text-sm basis-[120px]">Envío a domicilio</label>
          <input
            class="p-2 rounded-md"
            type="radio"
            value="delivery"
            v-model="deliveryType"
          />
        </div>
      </div>
      <div class="grid gap-1">
        <label class="text-sm">Tu dirección</label>
        <input class="p-2 rounded-md" v-model="address" />
      </div>
      <button
        class="p-2 bg-slate-600 rounded-md font-bold text-white/90 text-sm shadow-md"
      >
        PEDIR POR WS
      </button>
    </div>
  </section>
</template>
