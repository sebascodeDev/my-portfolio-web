<script setup lang="ts">
const { data: projects } = await useAsyncData('projects', () => {
    return queryCollection('proyectos').all()
})
</script>

<template>
    <section id="proyectos"
        class="flex min-h-screen scroll-mt-20 flex-col justify-center bg-navy-light px-6 py-20 sm:px-8 dark:bg-dark-bg-alt">
        <div class="mx-auto mb-12 w-full max-w-2xl text-center">
            <h2 class="font-heading text-3xl font-bold text-navy-primary dark:text-white">
                Proyectos
            </h2>
            <p class="mt-3 font-body text-blue-gray-muted dark:text-dark-text-secondary">
                Una selección de lo que he construido, con demo en vivo y código en GitHub.
            </p>
        </div>

        <div v-if="projects?.length" class="mx-auto flex w-full max-w-6xl flex-wrap justify-center gap-6">
            <UiProjectCard v-for="project in projects" :key="project.title" :image="project.image"
                class="w-full md:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)]" :category="project.category"
                :title="project.title" :description="project.description" :tags="project.tags"
                :case-study-url="`/proyectos/${project.path?.split('/').pop()}`" :live-url="project.liveUrl"
                :repo-url="project.repoUrl" />
        </div>

        <p v-else class="text-center font-body text-blue-gray-muted dark:text-dark-text-secondary">
            Pronto habrá proyectos por aquí.
        </p>
    </section>
</template>