<script setup lang="ts">
const categoryClasses: Record<string, string> = {
  'Landing Page': 'bg-badge-landing-bg text-badge-landing-text dark:bg-badge-landing-bg-dark dark:text-badge-landing-text-dark',
  'App Móvil': 'bg-badge-app-movil-bg text-badge-app-movil-text dark:bg-badge-app-movil-bg-dark dark:text-badge-app-movil-text-dark',
  'Sitio Web': 'bg-badge-sitio-web-bg text-badge-sitio-web-text dark:bg-badge-sitio-web-bg-dark dark:text-badge-sitio-web-text-dark',
  'Web App': 'bg-badge-web-app-bg text-badge-web-app-text dark:bg-badge-web-app-bg-dark dark:text-badge-web-app-text-dark',
  'API / Backend': 'bg-badge-api-bg text-badge-api-text dark:bg-badge-api-bg-dark dark:text-badge-api-text-dark',
  'E-commerce': 'bg-badge-ecommerce-bg text-badge-ecommerce-text dark:bg-badge-ecommerce-bg-dark dark:text-badge-ecommerce-text-dark',
  'Dashboard': 'bg-badge-dashboard-bg text-badge-dashboard-text dark:bg-badge-dashboard-bg-dark dark:text-badge-dashboard-text-dark',
  'Automatización': 'bg-badge-automatizacion-bg text-badge-automatizacion-text dark:bg-badge-automatizacion-bg-dark dark:text-badge-automatizacion-text-dark',
  'Open Source': 'bg-badge-open-source-bg text-badge-open-source-text dark:bg-badge-open-source-bg-dark dark:text-badge-open-source-text-dark',
  'Juego': 'bg-badge-juego-bg text-badge-juego-text dark:bg-badge-juego-bg-dark dark:text-badge-juego-text-dark',
}

const props = defineProps<{
  category: string
}>()

const classes = computed(() => categoryClasses[props.category] ?? categoryClasses['Landing Page'])
</script>

<template>
  <span
    :class="classes"
    class="inline-block px-4 py-2 rounded-full font-semibold text-sm font-body backdrop-blur-sm shadow-sm"
  >
    {{ category }}
  </span>
</template>