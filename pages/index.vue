<script setup>
</script>

<template>
  <div
      class="lg:bg-[url('/frontendmentor-space-tourism-website/images/home/background-home-desktop.jpg')]
      sm:bg-[url('/frontendmentor-space-tourism-website/images/home/background-home-tablet.jpg')] bg-[url('/frontendmentor-space-tourism-website/images/home/background-home-mobile.jpg')]
      bg-[url('/images/home/background-home-mobile.jpg')]
      bg-cover h-full lg:h-screen bg-center w-full text-white flex items-center lg:items-end">
    <div class="container px-10 mx-auto grid grid-cols-1 lg:grid-cols-2 items-center justify-center mt-32 md:mt-44 lg:gap-x-20 mb-10 lg:mb-32">
      <div class="text-center lg:text-start mb-16 lg:mb-0">
        <h4 class="text-xl lg:text-3xl text-blue-300 uppercase">So, you want to ravel to</h4>
        <h1 class="text-6xl lg:text-9xl my-3 lg:my-6 uppercase">space</h1>
        <p class="text-base lg:text-lg text-blue-300">Let's face it; if you want to go to space, you might as well genuinely go to
          outer space
          and not hover kind of on the edge of it. Well sit back, and relax because we'll give you a truly out of this
          world experience!</p>
      </div>
      <div class="flex items-center justify-center">
        <nuxt-link to="destination" class="relative z-10 size-36 md:size-64 rounded-full bg-white flex items-center justify-center outline-0
                       text-blue-900 hover:text-blue-900/50 text-xl md:text-3xl tracking-widest transition-colors duration-300 ease-in-out
                       after:content-[''] after:absolute after:inset-[-80px] after:rounded-full after:bg-white/10
                       after:opacity-0 hover:after:opacity-100 after:transition-opacity after:duration-700 after:ease-in-out">
          EXPLORE
        </nuxt-link>
      </div>
    </div>
  </div>
</template>