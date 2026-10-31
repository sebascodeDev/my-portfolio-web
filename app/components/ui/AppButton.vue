<!-- components/ui/AppButton.vue -->
<script setup lang="ts">
const NuxtLink = resolveComponent('NuxtLink')

withDefaults(defineProps<{
  label?: string
  variant?: 'primary' | 'secondary'
  to?: string
}>(), {
  variant: 'primary',
})
</script>

<template>
  <component :is="to ? NuxtLink : 'button'" :to="to" :type="to ? undefined : 'button'" :class="[
    'font-heading font-semibold px-6 py-2 rounded-button transition',
    variant === 'primary'
      ? 'bg-orange-accent text-white hover:bg-orange-accent/80 active:bg-orange-accent/80'
      : 'bg-transparent dark:bg-dark-surface dark:text-white dark:border-blue-gray-muted border-1 border-navy text-navy  hover:border-orange-accent active:border-orange-accent'
  ]">
    {{ label }}
  </component>
</template>