<script setup>
import MobileMenu from "./MobileMenu.vue"
const route = useRoute()
const links = computed(() => [
  {name: "home", to: "/"},
  {name: "destination", to: "/destination"},
  {name: "crew", to: "/crew"},
  {name: "technology", to: "/technology"},
])

const isMobileMenuOpen = ref(false)
const isScrolled = ref(false)

function handleScroll() {
  isScrolled.value = window.scrollY > 0
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  document.body.classList.remove('overflow-y-hidden')
})

// Watch for prop changes to manage body overflow
watch(() => isMobileMenuOpen.value, (newValue) => {
  if (newValue) {
    document.body.classList.add('overflow-y-hidden')
  } else {
    document.body.classList.remove('overflow-y-hidden')
  }
})

</script>

<template>
  <div class="absolute top-0 lg:top-10 w-full z-40">
    <div class="flex items-center justify-between md:gap-x-10 lg:gap-x-16 w-full relative p-6 md:p-0 md:pl-10 lg:pl-16">
      <img src="../public/images/shared/logo.svg" alt="logo">

      <div class="hidden md:flex relative w-full justify-end items-center">
<!--        <div class="hidden lg:inline grow translate-x-10 w-full top-1/2 h-0.5 bg-white/25 top-0 right-3/4 z-50 left-0"></div>-->
        <nav
            :class="[
      'hidden md:flex items-center justify-end gap-x-6 lg:gap-x-12 pr-10 lg:pr-24 pl-28 lg:pl-60 backdrop-blur-[120px] backdrop-brightness-200 md:backdrop-brightness-200',
      route.path === '/' ? 'bg-blue-900/7' : 'bg-blue-900'
    ]">
          <div v-for="(link, index) in links" :key="link.to">
            <nuxt-link
                class="text-base text-white py-9 uppercase relative inline-block cursor-pointer
                after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-1 after:bg-white/60 hover:after:w-full
                 after:transition-all after:duration-300 router-link-exact-active:bg-white router-link-exact-active:after:w-full"
                :to="link.to"
                :class="{ 'after:w-full': $route.path === link.to, 'after:!bg-white': $route.path === link.to }"
            >
              <span class="font-bold mr-2">0{{ index }} </span> {{ link.name }}
            </nuxt-link>
          </div>
        </nav>
      </div>

      <button class="md:hidden" @click="isMobileMenuOpen = true">
        <img class="h-6" src="../public/images/shared/icon-hamburger.svg" alt="hamburger-icon">
      </button>
    </div>
  </div>
  <MobileMenu
      :is-open="isMobileMenuOpen"
      :links="links"
      @close="isMobileMenuOpen = false"
  />
</template>