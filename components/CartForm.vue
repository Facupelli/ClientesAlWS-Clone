<template>
  <section
    class="mt-auto grid gap-4 bg-gradient-to-b from-slate-200 to-slate-400 py-16 px-8 rounded-t-[40px]"
  >
    <div class="grid gap-1">
      <label class="text-sm">Tu nombre</label>
      <input class="p-2 rounded-md" />
    </div>
    <div class="grid gap-1">
      <label class="text-sm">Tu número de teléfono</label>
      <input class="p-2 rounded-md" />
    </div>
    <div class="grid gap-2">
      <div class="flex items-center gap-4">
        <label class="text-sm basis-[120px]">Retiro en sucursal</label>
        <input class="p-2 rounded-md" type="radio" />
      </div>
      <div class="flex items-center gap-4">
        <label class="text-sm basis-[120px]">Envío a domicilio</label>
        <input class="p-2 rounded-md" type="radio" />
      </div>
    </div>
    <div class="grid gap-1">
      <label class="text-sm">Tu dirección</label>
      <input class="p-2 rounded-md" />
    </div>
    <button
      class="p-2 bg-slate-500 rounded-md font-bold text-white/90 text-sm shadow-md"
    >
      PEDIR POR WS
    </button>
  </section>
</template>
