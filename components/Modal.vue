<script setup lang="ts">
defineProps<{
  isOpen: boolean;
}>();
</script>

<template>
  <dialog
    :open="isOpen"
    class="absolute w-[80%] shadow-md rounded-md z-10 p-0 top-5"
  >
    <div class="">
      <div class="bg-gray-100 p-4 font-bold">
        <slot name="header"> </slot>
      </div>

      <div class="p-4">
        <slot name="body"> </slot>
      </div>

      <div class="p-4">
        <slot name="footer"> </slot>
      </div>
    </div>
  </dialog>
  <div
    class="block fixed z-0 top-0 left-0 w-full h-screen backdrop-blur-sm isOpen ? 'bg-red/10':'bg-red/10'"
    :class="{ hidden: !isOpen }"
  />
</template>
