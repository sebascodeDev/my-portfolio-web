<script setup lang="ts">
withDefaults(defineProps<{
    label: string
    href?: string
    variant?: 'primary' | 'secondary'
}>(), {
    variant: 'primary',
})
</script>

<template>
    <component :is="href ? 'a' : 'button'" :href="href" :class="[
        href && 'inline-flex items-center justify-center',
        'font-heading font-semibold px-6 py-2 rounded-button transition',
        variant === 'primary'
            ? 'bg-orange-accent text-white hover:bg-orange-accent/80 active:bg-orange-accent/80'
            : 'border border-navy-primary bg-transparent text-navy-primary hover:border-orange-accent dark:border-blue-gray-muted dark:bg-dark-surface dark:text-white'
    ]">
        {{ label }}
    </component>
</template>