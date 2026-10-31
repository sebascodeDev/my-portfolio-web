<script setup>
defineProps({
  label: String,
  variant: { type: String, default: 'neutral' }
})
</script>

<template>
  <span
    class="inline-block px-4 py-1.5 rounded-full text-xs md:text-sm font-semibold uppercase tracking-wide border"
    :class="{
      'bg-gray-light dark:bg-white/5 text-blue-gray-muted dark:text-white/70 border-transparent dark:border-white/10': variant === 'neutral',
      'bg-orange-light dark:bg-orange-accent/10 text-orange-accent border-orange-accent/30 dark:border-orange-accent/30': variant === 'orange',
      'bg-navy-light dark:bg-blue-400/10 text-navy-primary dark:text-blue-300 border-transparent dark:border-blue-400/30': variant === 'navy'
    }"
  >
    {{ label }}
  </span>
</template>