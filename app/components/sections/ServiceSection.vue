<script setup lang="ts">
const services = [
    {
        icon: 'lucide:layout-template',
        title: 'Landing Pages',
        description:
            'Páginas pensadas para una sola meta: que tu visitante actúe. Mensaje directo, diseño claro y carga rápida.',
        features: ['Diseño enfocado en conversión', 'Optimizadas para velocidad', 'Llamados a la acción claros'],
    },
    {
        icon: 'lucide:app-window',
        title: 'Web Apps',
        description:
            'Aplicaciones web a medida con lógica, datos y paneles, desde un MVP hasta un producto completo.',
        features: ['Formularios y paneles de gestión', 'Persistencia de datos', 'Interfaz clara e interactiva'],
    },
    {
        icon: 'lucide:globe',
        title: 'Sitios Web',
        description:
            'Sitios corporativos y de portafolio con varias páginas, fáciles de mantener y de ampliar.',
        features: ['Varias secciones y páginas', 'Estructura lista para crecer', 'Identidad visual coherente'],
    },
]

const included = [
    { icon: 'lucide:search', label: 'SEO técnico' },
    { icon: 'lucide:zap', label: 'Rendimiento optimizado' },
    { icon: 'lucide:smartphone', label: 'Diseño responsive' },
    { icon: 'lucide:accessibility', label: 'Accesibilidad' },
    { icon: 'lucide:code-xml', label: 'Buenas prácticas de código' },
]
</script>

<template>
    <section id="servicios"
        class="flex min-h-screen scroll-mt-20 flex-col justify-center border-t border-navy-primary/10 bg-white px-6 py-20 sm:px-8 dark:border-white/10 dark:bg-dark-bg">
        <div class="mx-auto mb-12 w-full max-w-2xl text-center">
            <h2 class="font-heading text-3xl font-bold text-navy-primary dark:text-white">
                Servicios
            </h2>
            <p class="mt-3 font-body text-blue-gray-muted dark:text-dark-text-secondary">
                Del primer boceto al sitio publicado: desarrollo a medida, claro y optimizado.
            </p>
        </div>

        <div class="mx-auto grid w-full max-w-6xl grid-cols-1 gap-6 md:grid-cols-3">
            <article v-for="service in services" :key="service.title"
                class="flex flex-col rounded-2xl border border-navy-primary/10 bg-navy-light p-6 transition-colors hover:border-orange-accent/40 dark:border-white/10 dark:bg-dark-surface dark:hover:border-white/25">
                <div
                    class="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-orange-accent/10 text-orange-accent">
                    <Icon :name="service.icon" class="h-6 w-6" />
                </div>

                <h3 class="mb-2 font-heading text-xl font-bold text-navy-primary dark:text-white">
                    {{ service.title }}
                </h3>

                <p class="mb-5 font-body text-sm leading-relaxed text-blue-gray-muted dark:text-dark-text-secondary">
                    {{ service.description }}
                </p>

                <ul class="mt-auto flex flex-col gap-2">
                    <li v-for="feature in service.features" :key="feature"
                        class="flex items-start gap-2 font-body text-sm text-navy-primary/80 dark:text-white/80">
                        <Icon name="lucide:check" class="mt-0.5 h-4 w-4 shrink-0 text-orange-accent" />
                        {{ feature }}
                    </li>
                </ul>
            </article>
        </div>

        <!-- Incluido en todos los proyectos -->
        <div class="mx-auto mt-12 w-full max-w-6xl text-center">
            <p class="mb-4 font-heading text-sm font-semibold text-navy-primary dark:text-white">
                Incluido en todos mis proyectos
            </p>
            <ul class="flex flex-wrap justify-center gap-3">
                <li v-for="item in included" :key="item.label"
                    class="flex items-center gap-2 rounded-xl border border-navy-primary/10 bg-navy-primary/5 px-3 py-2 font-body text-sm text-navy-primary dark:border-white/10 dark:bg-white/5 dark:text-white">
                    <Icon :name="item.icon" class="h-4 w-4 text-orange-accent" />
                    {{ item.label }}
                </li>
            </ul>
        </div>
    </section>
</template>