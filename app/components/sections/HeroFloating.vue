<script setup lang="ts">
// La lista de tecnologías vive en app/utils/techStack.ts.
// Aquí solo se define dónde flota cada chip en escritorio.
const layout: Record<string, string> = {
    Nuxt: 'left-[6%] top-[26%] animate-float',
    Tailwind: 'right-[7%] top-[22%] animate-float-slow [animation-delay:-3s]',
    TypeScript: 'left-[9%] bottom-[24%] animate-float-slow [animation-delay:-5s]',
    Vue: 'right-[10%] bottom-[30%] animate-float [animation-delay:-2s]',
    Git: 'left-[14%] top-[46%] animate-float-slow [animation-delay:-4s]',
}

// Solo flotan las tecnologías que tienen posición asignada
const chips = techStack
    .filter((tech) => tech.label in layout)
    .map((tech) => ({ ...tech, classes: layout[tech.label] }))

const chipBase =
    'absolute flex items-center gap-2 rounded-xl border border-navy-primary/10 dark:border-white/10 bg-white/70 dark:bg-white/5 px-3 py-2 text-sm font-body font-medium text-navy-primary dark:text-white shadow-lg shadow-navy-primary/5 dark:shadow-black/20 backdrop-blur-md motion-reduce:animate-none'
</script>

<template>
    <!-- Solo desde xl, para no tapar el titular -->
    <div aria-hidden="true" class="pointer-events-none absolute inset-0 hidden xl:block">
        <div v-for="chip in chips" :key="chip.label" :class="[chipBase, chip.classes]">
            <Icon :name="chip.icon" class="h-4 w-4 text-orange-accent" />
            {{ chip.label }}
        </div>

        <!-- Mini ventana de código -->
        <div
            class="absolute right-[5%] bottom-[12%] w-52 rounded-xl text-left border border-navy-primary/10 dark:border-white/10 bg-white/70 dark:bg-white/5 p-3 font-mono text-xs shadow-lg shadow-navy-primary/5 dark:shadow-black/20 backdrop-blur-md animate-float-slow [animation-delay:-1s] motion-reduce:animate-none">
            <div class="mb-2 flex gap-1.5">
                <span class="h-2.5 w-2.5 rounded-full bg-red-400/80" />
                <span class="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
                <span class="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
            </div>
            <p class="text-navy-primary/70 dark:text-white/70">
                <span class="text-orange-accent">const</span> dev = {
            </p>
            <p class="pl-3 text-navy-primary/70 dark:text-white/70">
                role: <span class="text-emerald-600 dark:text-emerald-400">'fullstack'</span>,
            </p>
            <p class="text-navy-primary/70 dark:text-white/70">}</p>
        </div>
    </div>
</template>