<script setup lang="ts">
defineProps<{
  variants: string[];
  selectedVariant: string | null;
}>();
</script>

<template>
  <ul class="flex flex-wrap gap-3">
    <li
      v-for="variant in variants"
      class="font-semibold flex justify-center items-center border-b-2 px-3 py-1 border-gray-200"
      :class="{ 'border-slate-600': selectedVariant === variant }"
    >
      <input
        type="radio"
        :id="variant"
        :value="variant"
        class="hidden"
        @click="$emit('selectVariant', variant)"
      />
      <label :for="variant">
        {{ variant }}
      </label>
    </li>
  </ul>
</template>
