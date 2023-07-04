<script setup lang="ts">
import { Product } from "types";

defineProps<{
  variants: string[];
}>();
</script>

<template>
  <ul class="flex flex-wrap gap-3">
    <li
      v-for="variant in variants"
      class="font-semibold flex justify-center items-center border-b-2 px-3 py-1 border-gray-200"
    >
      <!-- <input type="radio" :id="variant" />
      <label :for="variant">
        {{ variant }}
      </label> -->
      {{ variant }}
    </li>
  </ul>
</template>
