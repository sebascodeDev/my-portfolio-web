<!-- components/ui/ProjectCard.vue -->
<script setup lang="ts">
defineProps<{
  image: string
  category: string
  title: string
  description: string
  tags: string[]
  liveUrl?: string
  repoUrl?: string
}>()
</script>

<template>
  <article
    class="group bg-white dark:bg-dark-bg border border-2 border-navy-primary/10 dark:border-white/10 rounded-2xl overflow-hidden hover:border-orange-accent/40 dark:hover:border-white/20 transition-colors"
  >
    <div class="relative aspect-[4/3] overflow-hidden">
      <img :src="image" :alt="title" class="w-full h-full object-cover" />
      <UiCategoryBadge :category="category" class="absolute top-4 right-4" />
    </div>

    <!-- Contenido -->
    <div class="p-6">
      <h3 class="font-heading font-bold text-2xl text-navy-primary dark:text-white mb-2 leading-tight">
        {{ title }}
      </h3>

      <p class="text-blue-gray-muted dark:text-dark-text-secondary font-body text-sm mb-5 line-clamp-2">
        {{ description }}
      </p>

      <!-- Tags -->
      <div class="flex flex-wrap gap-2 mb-6">
        <span
          v-for="tag in tags"
          :key="tag"
          class="px-3 py-1.5 rounded-lg bg-navy-primary/5 dark:bg-white/5 text-navy-primary/70 dark:text-white/70 text-sm font-body"
        >
          {{ tag }}
        </span>
      </div>

      <!-- Footer: Ver en vivo + Ver código (ambos secundarios) -->
      <div class="flex items-center gap-3">
        <a
          v-if="liveUrl"
          :href="liveUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="flex-1 flex items-center justify-center gap-2 py-3 rounded-lg bg-navy-primary/5 dark:bg-white/5 hover:bg-navy-primary/10 dark:hover:bg-white/10 text-navy-primary dark:text-white font-heading font-semibold text-sm transition-colors"
          :class="{ 'flex-1': repoUrl, 'w-full': !repoUrl }"
        >
          <Icon name="lucide:external-link" class="w-4 h-4" />
          Ver en Vivo
        </a>

        <a
          v-if="repoUrl"
          :href="repoUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="flex items-center justify-center gap-2 py-3 rounded-lg bg-navy-primary/5 dark:bg-white/5 hover:bg-navy-primary/10 dark:hover:bg-white/10 text-navy-primary dark:text-white font-heading font-semibold text-sm transition-colors"
          :class="liveUrl ? 'px-4' : 'flex-1'"
        >
          <Icon name="lucide:github" class="w-4 h-4" />
          <span :class="{ 'hidden sm:inline': liveUrl }">Código</span>
        </a>
      </div>
    </div>
  </article>
</template>