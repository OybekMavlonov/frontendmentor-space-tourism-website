<script setup lang="ts">
const props = defineProps<{
  links: any[];
  isOpen: boolean;
}>();

const emit = defineEmits<{
  (e: 'close'): void;
}>();

const route = useRoute()

watch(() => route.fullPath, () => {
  emit('close')
})
</script>

<template>
  <transition
      enter-active-class="transition-opacity duration-500 ease-in-out"
      leave-active-class="transition-opacity duration-500 ease-in-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
  >
    <div
      v-if="isOpen"
      role="presentation"
      class="fixed inset-0 size-full bg-blue-900/15 z-50"
      @click="isOpen = false"
    />
  </transition>
  <aside
    class="flex flex-col fixed top-0 right-0 w-80 h-full bg-blue-900/15 backdrop-blur-md z-50 transition-transform duration-500 ease-in-out"
    :class="{
      'translate-x-0': isOpen,
      'translate-x-full': !isOpen,
    }"
  >
    <header class="flex items-center justify-end mb-12 p-8">
      <button @click="emit('close');">
        <img class="h-6" src="../public/images/shared/icon-close.svg" alt="close-icon">
      </button>
    </header>
    <nav class="flex flex-col gap-y-8 overflow-auto pl-8">
        <nuxt-link v-for="(link, index) in links" :key="link.to"
            class="text-base text-white uppercase relative flex cursor-pointer w-full border-r-4 border-transparent hover:border-white
                 router-link-exact-active:border-white"
            :to="link.to"
            :class="{ 'border-white': $route.path === link.to | $route.path === link.to + '/', 'after:!bg-white': $route.path === link.to | $route.path === link.to + '/' }"
        >
          <span class="font-bold mr-2">0{{ index }} </span> {{ link.name }}
        </nuxt-link>
    </nav>
  </aside>
</template>
