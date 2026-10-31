<script setup lang="ts">
// Desfases distintos para que no floten todos a la vez
const delays = [
    '[animation-delay:-0.5s]',
    '[animation-delay:-1.5s]',
    '[animation-delay:-3s]',
    '[animation-delay:-4s]',
    '[animation-delay:-2s]',
]
</script>

<template>
    <!-- Debajo de xl; desde xl lo reemplazan los chips flotantes -->
    <ul aria-hidden="true" class="flex max-w-sm flex-wrap justify-center gap-3 px-4 pt-2 xl:hidden">
        <li v-for="(tech, i) in techStack" :key="tech.label"
            class="flex items-center gap-2 rounded-xl border border-navy-primary/10 bg-white/70 px-3 py-1.5 font-body text-xs font-medium text-navy-primary backdrop-blur-md animate-float-sm motion-reduce:animate-none dark:border-white/10 dark:bg-white/5 dark:text-white"
            :class="delays[i]">
            <Icon :name="tech.icon" class="h-3.5 w-3.5 text-orange-accent" />
            {{ tech.label }}
        </li>
    </ul>
</template>