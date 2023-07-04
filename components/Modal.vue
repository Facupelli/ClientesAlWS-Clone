<script setup lang="ts">
import { onClickOutside } from "@vueuse/core";

// const props = defineProps<{
//   show: boolean;
// }>();

const modalRef = ref(null);
const showModal = ref(false);

const closeModal = () => {
  showModal.value = false;
};

const openModal = () => {
  showModal.value = true;
};

onClickOutside(modalRef, closeModal);

// watch(
//   () => props.show,
//   (show: boolean) => {
//     showModal.value = show;
//   }
// );

defineExpose({
  closeModal,
  openModal,
});
</script>

<template>
  <teleport to="body">
    <transition
      enter-active-class="transition ease-out duration-200 transform"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition ease-in duration-200 transform"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        class="block fixed z-10 inset-0 overflow-y-auto bg-black/30 backdrop-blur-sm"
        v-show="showModal"
      >
        <transition
          enter-active-class="transition ease-out duration-300 transform "
          enter-from-class="opacity-0 translate-y-10 scale-95"
          enter-to-class="opacity-100 translate-y-0 scale-100"
          leave-active-class="ease-in duration-200"
          leave-from-class="opacity-100 translate-y-0 scale-100"
          leave-to-class="opacity-0 translate-y-10 translate-y-0 scale-95"
        >
          <dialog
            class="absolute w-[90%] shadow-md rounded-md z-10 p-0 top-5"
            v-show="showModal"
            open
            ref="modalRef"
          >
            <div class="">
              <div
                class="bg-gray-100 p-4 font-bold rounded-t-md flex items-center justify-between"
              >
                <slot name="header"> </slot>
                <div>
                  <button @click="closeModal">X</button>
                </div>
              </div>

              <div class="p-4">
                <slot name="body"> </slot>
              </div>

              <div class="p-4">
                <slot name="footer"> </slot>
              </div>
            </div>
          </dialog>
        </transition>
      </div>
    </transition>
  </teleport>
</template>
