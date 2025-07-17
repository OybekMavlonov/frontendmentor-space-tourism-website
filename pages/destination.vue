<script setup>
import {destinations} from "../data.json"

const currentTab = ref(destinations[0])

const config = useRuntimeConfig()
const imageUrl = computed(() =>
    config.app.baseURL + currentTab.value.images.png.slice(1) // removes first slash
)
</script>

<template>
  <div
      class="bg-[url('/frontendmentor-space-tourism-website/images/destination/background-destination-mobile.jpg')]
      sm:bg-[url('/frontendmentor-space-tourism-website/images/destination/background-destination-tablet.jpg')]
      lg:bg-[url('/frontendmentor-space-tourism-website/images/destination/background-destination-desktop.jpg')]
       bg-cover h-screen md:h-full lg:h-screen bg-center w-full text-white">
    <div class="container px-10 mx-auto text-center md:text-start">
      <h4 class="text-xl md:text-2xl lg:text-3xl text-white uppercase pt-28 sm:pt-32 lg:pt-48">
        <span class="opacity-25 mr-4">01</span>
        Pick your destination
      </h4>
      <div
          class="container px-10 mx-auto grid grid-cols-1 lg:grid-cols-2 items-center justify-center mt-6 sm:mt-22 lg:gap-x-20 lg:mb-0">
        <Transition name="fade" mode="out-in">
          <div :key="currentTab.name" class="flex justify-center">
            <img
                class="mt-12 mb-14 lg:m-0 size-36 md:size-80 lg:w-full lg:h-full"
                :src="imageUrl"
                :alt="currentTab.name"
            >
          </div>
        </Transition>
        <div class="p-0 lg:px-12">
          <div class="flex items-center justify-center gap-x-8">
            <button
                v-for="item in destinations"
                :key="item.name"
                class="uppercase text-base md:text-lg text-blue-300 pb-2 border-b-2 border-transparent hover:border-white/60 transition-all duration-300"
                :class="[{'border-white text-white': currentTab.name === item.name }]"
                @click="currentTab = item"
            >
              {{ item.name }}
            </button>
          </div>

          <div class="relative min-h-[500px]">
            <Transition name="fade" mode="out-in">
              <div :key="currentTab.name" class="">
                <div class="mt-4 lg:mt-10 mb-2 md:mb-4 uppercase text-5xl lg:text-9xl">{{ currentTab.name }}</div>
                <p class="text-base lg:text-lg text-blue-300">{{ currentTab.description }}</p>
                <div class="w-full my-4 md:my-8 lg:my-10 h-0.5 bg-white/25"></div>
                <div class="grid grid-cols-1 md:grid-cols-2 uppercase gap-6 mb-10">
                  <div>
                    <div class="text-blue-300 text-sm mb-0 md:mb-3">avf. distance</div>
                    <div class="text-white text-lg lg:text-2xl">{{ currentTab.distance }}</div>
                  </div>
                  <div>
                    <div class="text-blue-300 text-sm mb-0 md:mb-3">est. travel time</div>
                    <div class="text-white text-lg lg:text-2xl">{{ currentTab.travel }}</div>
                  </div>
                </div>
              </div>
            </Transition>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>