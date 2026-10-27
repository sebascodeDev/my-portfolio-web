<template>
    <section
        class="relative isolate min-h-screen overflow-hidden text-center justify-center items-center flex flex-col gap-6 bg-white dark:bg-dark-bg">

        <SectionsHeroBackground class="-z-10" />
        <SectionsHeroFloating class="-z-10" />

        <div class="absolute inset-0 pointer-events-none"
            style="background: radial-gradient(circle at 50% 40%, rgba(244, 129, 6, 0.15), transparent 60%);">
        </div>

        <UiBadge label="Fullstack Developer & Landing Expert" variant="orange" />

        <h1 class="text-5xl lg:text-7xl font-bold text-navy-primary max-w-2xl leading-tight dark:text-white">
            Transformo ideas en <br />
            <span class="text-orange-accent">Landing Page</span><br>
            de alto impacto
        </h1>
        <p class="text-sm md:text-base lg:text-xl text-blue-gray-muted max-w-xl mx-auto leading-relaxed">
            Soy Sebastián. Creo experiencias digitales rápidas, claras y
            optimizadas para conversión usando el stack tecnológico más moderno.</p>

        <div class="flex gap-4">
            <UiAppButton label="Ver Proyectos" variant="primary" />
            <UiAppButton label="Consultoría Gratuita" variant="secondary" />
        </div>

    </section>
</template>