<!-- components/ui/AppButton.vue -->
<script setup lang="ts">
withDefaults(defineProps<{
  label?: string
  variant?: 'primary' | 'secondary'
}>(), {
  variant: 'primary',
  label: 'Button'
})
</script>

<template>
  <button :class="[
    'font-heading font-semibold px-6 py-2 rounded-button transition',
    variant === 'primary'
      ? 'bg-orange-accent text-white hover:bg-orange-hover'
      : 'bg-transparent dark:bg-dark-surface dark:text-white dark:border-blue-gray-muted border-1 border-navy text-navy hover:border-orange-accent'
  ]">
    {{ label }}
  </button>
</template>