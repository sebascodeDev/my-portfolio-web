<!-- components/ui/ThemeToggle.vue -->
<script setup lang="ts">

const colorMode = useColorMode()

const toggle = () => {
  colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
}
</script>

<template>
  <button
    @click="toggle"
    class="relative w-10 h-10 rounded-full flex items-center justify-center bg-navy-primary/10 dark:bg-white/10 hover:bg-navy-primary/20 dark:hover:bg-white/20 transition-colors"
    aria-label="Cambiar tema"
  >
    <Icon
      name="lucide:sun"
      class="absolute w-5 h-5 text-orange-accent transition-all duration-300"
      :class="colorMode.value === 'dark'
        ? 'opacity-0 rotate-90 scale-0'
        : 'opacity-100 rotate-0 scale-100'"
    />
    <Icon
      name="lucide:moon"
      class="absolute w-5 h-5 text-navy-primary dark:text-white transition-all duration-300"
      :class="colorMode.value === 'dark'
        ? 'opacity-100 rotate-0 scale-100'
        : 'opacity-0 -rotate-90 scale-0'"
    />
  </button>
</template>