<script setup lang="ts">
const { text, isAnimating } = useTypewriter(['Landing Page', 'Web App', 'Sitio Web'])
</script>


<template>
    <section
        class="relative isolate min-h-screen overflow-hidden text-center justify-center px-6 sm:px-8 items-center flex flex-col gap-6 bg-white dark:bg-dark-bg">

        <SectionsHeroBackground class="-z-10" />
        <SectionsHeroFloating class="-z-10" />

        <div class="absolute inset-0 pointer-events-none bg-hero-glow">
        </div>

        <UiBadge label="Fullstack Developer & Landing Expert" variant="orange" />

        <h1 class="text-5xl lg:text-7xl font-bold text-navy-primary max-w-2xl leading-tight dark:text-white">
            Transformo ideas en <br />
            <span class="sr-only">Landing Page</span>
            <span aria-hidden="true" class="whitespace-nowrap text-orange-accent">
                {{ text }}<span class="ml-1 inline-block h-[0.85em] w-[3px] translate-y-[0.08em] bg-current"
                    :class="isAnimating ? 'animate-blink' : 'opacity-0'" />
            </span><br />
            de alto impacto
        </h1>
        <p class="text-base sm:text-lg lg:text-xl text-blue-gray-muted dark:text-dark-text-secondary max-w-xl mx-auto leading-relaxed">
            Soy Sebastián. Creo experiencias digitales rápidas, claras y
            optimizadas para conversión usando el stack tecnológico más moderno.</p>

        <div class="flex w-full max-w-sm flex-col gap-3 sm:w-auto sm:max-w-none sm:flex-row sm:gap-4">
            <UiAppButton label="Ver Proyectos" href="#proyectos" class="w-full sm:w-auto" />

            <UiAppButton label="Consultoría Gratuita" variant="secondary" href="#contacto" class="w-full sm:w-auto" />
        </div>

        <SectionsHeroTechRow />

    </section>
</template>