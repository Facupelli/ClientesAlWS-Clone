<script setup lang="ts">
import { emit } from "process";

defineProps<{
  variants: string[];
}>();

const variantSelected = ref<string | null>(null);
</script>

<template>
  <ul class="flex flex-wrap gap-3">
    <li
      v-for="variant in variants"
      class="font-semibold flex justify-center items-center border-b-2 px-3 py-1 border-gray-200"
      :class="{ 'border-green-400': variantSelected === variant }"
    >
      <input
        v-model="variantSelected"
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
