<script setup>
import {technology} from "../data.json"
import emblaCarouselVue from "embla-carousel-vue";

const [emblaRef, emblaApi] = emblaCarouselVue();
const selectedIndex = ref(0)


onMounted(() => {
  if (emblaApi.value) {
    emblaApi.value.on("select", () => {
      selectedIndex.value = emblaApi.value?.selectedScrollSnap() ?? 0
      currentTab.value = crew[selectedIndex.value]
    })
  }
})

function scrollTo(index) {
  emblaApi.value?.scrollTo(index)
}
</script>

<template>
  <div
      class="bg-[url('/frontendmentor-space-tourism-website/images/technology/background-technology-mobile.jpg')]
      sm:bg-[url('/frontendmentor-space-tourism-website/images/technology/background-technology-tablet.jpg')]
      md:bg-[url('/frontendmentor-space-tourism-website/images/technology/background-technology-desktop.jpg')]
       bg-cover h-screen md:h-full lg:h-screen bg-center w-full">
    <div class="container mx-auto text-center lg:text-start">
      <h4 class="px-10 lg:px-0 text-xl sm:text-2xl lg:text-3xl md:text-start text-white uppercase pt-28 sm:pt-32 lg:pt-48">
        <span class="opacity-25 mr-4">03</span>
        Space launch 101
      </h4>
      <div ref="emblaRef" class="overflow-hidden w-full relative">
        <div class="flex gap-6" ref="emblaRef">
          <div ref="emblaRef" class="shrink-0 flex-grow-0 basis-full" v-for="item in technology"
               :key="item.name">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-x-10 mb-20 mt-12">
              <img :src="item.images.portrait" :alt="item.name" class="lg:order-2 max-h-[30vh] md:max-h-[40vh] lg:max-h-[50vh] w-full">
              <div class="lg:order-1 lg:ml-36 px-10 lg:px-0 flex flex-col items-center mt-20 md:mt-28 lg:mt-0">
                <h2 class="text-white/50 text-xl md:text-2xl lg:text-3xl uppercase">The terminology ...</h2>
                <h1 class="text-white text-3xl md:text-4xl lg:text-6xl uppercase mt-2 lg:mt-4 mb-2 lg:mb-6">{{ item.name }}</h1>
                <p class="text-blue-300 text-base md:text-lg">{{ item.description }}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Dots BELOW carousel and aligned left -->
        <div class="absolute top-[50%] sm:top-[55%] md:top-[58%] lg:top-[50%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 lg:left-10  flex lg:flex-col gap-4 lg:gap-8">
          <button
              v-for="(dot, dotIndex) in technology.length"
              :key="dotIndex"
              @click="scrollTo(dotIndex)"
              :class="[
            'size-10 md:size-14 lg:size-20 rounded-full transition-all duration-300 text-white text-xl md:text-2xl lg:text-3xl',
            dotIndex === selectedIndex
              ? 'bg-white !text-blue-900'
              : 'bg-transparent border border-white/25 hover:border-white',
          ]"
          >{{dotIndex + 1}}</button>
        </div>
      </div>
    </div>
  </div>
</template>