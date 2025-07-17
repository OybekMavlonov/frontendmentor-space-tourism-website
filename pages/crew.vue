<script setup>
import {crew} from "../data.json"
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

const config = useRuntimeConfig()
const getImageUrl = (item) => {
  return config.app.baseURL + item.images.png.slice(1)
}
</script>

<template>
  <div
      class="bg-[url('/frontendmentor-space-tourism-website/images/crew/background-crew-mobile.jpg')]
      sm:bg-[url('/frontendmentor-space-tourism-website/images/crew/background-crew-tablet.jpg')]
      lg:bg-[url('/frontendmentor-space-tourism-website/images/crew/background-crew-desktop.jpg')]
       bg-cover h-screen md:h-full lg:h-screen bg-center w-full relative">
    <div class="container px-10 mx-auto relative text-center lg:text-start">
      <h4 class="text-xl sm:text-2xl lg:text-3xl text-white uppercase md:text-start pt-28 sm:pt-32 lg:pt-48">
        <span class="opacity-25 mr-4">02</span>
        Meet your crew
      </h4>
      <div ref="emblaRef" class="overflow-hidden w-full">
        <div class="flex gap-6" ref="emblaRef">
          <div ref="emblaRef" class="shrink-0 flex-grow-0 basis-full squircle-xl bg-cover" v-for="item in crew"
               :key="item.name">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-x-10 mb-8 lg:mb-0 mt-14 lg:mt-20 lg:max-h-[60vh]">
              <div>
                <h2 class="text-white/50 text-xl md:text-2xl lg:text-3xl uppercase">{{ item.role }}</h2>
                <h1 class="text-white text-3xl md:text-4xl lg:text-6xl uppercase mt-2 md:mt-4 mb-3 md:mb-6">{{ item.name }}</h1>
                <p class="text-blue-300 text-base md:text-lg">{{ item.bio }}</p>
              </div>
              <img :src="getImageUrl(item)" :alt="item.name" class=" max-h-[60vh] w-full object-contain mt-20 lg:mt-0">
            </div>
          </div>
        </div>

        <!-- Dots BELOW carousel and aligned left -->
        <div class="absolute bottom-[57%] md:bottom-[55%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 lg:bottom-14 lg:left-24 flex gap-4">
          <button
              v-for="(dot, dotIndex) in crew.length"
              :key="dotIndex"
              @click="scrollTo(dotIndex)"
              :class="[
            'w-4 h-4 rounded-full transition-all duration-300',
            dotIndex === selectedIndex
              ? 'bg-white'
              : 'bg-white/20 hover:bg-white/50',
          ]"
          ></button>
        </div>
      </div>
    </div>
  </div>
</template>