<script setup>

const isMenuOpen = ref(false)

const links = [
    { label: 'Servicios', href: '#servicios', id: "01" },
    { label: 'Proyectos', href: '#proyectos', id: "02" },
    { label: 'Sobre mi', href: '#contacto', id: "03" },
]

const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value
}

watch(isMenuOpen, (isOpen) => {
    if (import.meta.client) {
        document.body.style.overflow = isOpen ? 'hidden' : ''
    }
})

const closeMenu = () => {
    isMenuOpen.value = false
}


</script>


<template>
    <nav "
        class=" fixed top-0 w-full z-50 bg-white/70 dark:bg-dark-bg/70 backdrop-blur-md border-b
        border-blue-gray-muted/20 p-[var(--navbar-padding)] flex justify-between items-center">

        <UiLogoSV />
        <ul
            class="hidden md:flex gap-6 text-navy-primary font-body dark:text-blue-gray-muted text-sm md:text-base font-medium">
            <li class="hover:text-orange-accent" v-for="link in links" :key="link.label">
                <a :href="link.href">{{ link.label }}</a>
            </li>
        </ul>

        <div class="hidden md:flex items-center gap-4">
            <UiAppButton label="Contáctame" variant="primary" />
            <UiToggleTheme />
        </div>

        <button @click="toggleMenu"
            class="md:hidden w-11 h-11 rounded-lg bg-navy-primary/10 dark:bg-white/5 flex items-center justify-center text-navy-primary dark:text-white pointer-events-auto dark:hover:bg-white/20 hover:bg-navy-primary/20 transition-colors duration-200"
            aria-label="Abrir menú">
            <Icon :name="isMenuOpen ? 'lucide:x' : 'lucide:menu'" class="w-7 h-7" />
        </button>


    </nav>

    <transition enter-active-class="transition-all duration-300 ease-out" enter-from-class="opacity-0 translate-x-full"
        enter-to-class="opacity-100 translate-x-0" leave-active-class="transition-all duration-200 ease-in"
        leave-from-class="opacity-100 translate-x-0" leave-to-class="opacity-0 translate-x-full">
        <div v-if="isMenuOpen"
            class="fixed inset-0 z-40 flex h-dvh flex-col bg-white/70 backdrop-blur-md dark:bg-dark-bg/70 md:hidden">
            <!-- Header -->
            <!-- <div
                class="flex w-full shrink-0 items-center justify-between border-b border-blue-gray-muted/20 p-[var(--navbar-padding)]">
                <UiLogoSV />
                <button @click="closeMenu"
                    class="flex h-11 w-11 items-center justify-center rounded-lg bg-navy-primary/10 dark:bg-white/5 text-navy-primary dark:text-white transition-colors duration-200 dark:hover:bg-white/20 hover:bg-navy-primary/20"
                    aria-label="Cerrar menú">
                    <Icon name="lucide:x" class="h-6 w-6" />
                </button>
            </div>
 -->
            <!-- Links: ocupa todo el alto disponible -->
            <ul
                class="flex flex-1 flex-col justify-center gap-6 overflow-y-auto p-[var(--navbar-padding)] font-body text-2xl font-bold text-navy-primary dark:text-navy-light">
                <li v-for="link in links" :key="link.label"
                    class="group flex items-center gap-3 hover:text-orange-accent">
                    <span class="text-sm text-blue-gray-muted group-hover:text-orange-accent">
                        {{ link.id }}
                    </span>
                    <a :href="link.href">{{ link.label }}</a>
                </li>
            </ul>

            <!-- Footer: botones, email y redes -->
            <div class="shrink-0 space-y-3 border-t border-blue-gray-muted/20 p-[var(--navbar-padding)]">
                <a href="#contacto"
                    class="block rounded-xl bg-orange-accent py-4 text-center text-base font-semibold text-white hover:bg-orange-hover transition-colors">
                    Consultoría Gratuita
                </a>
                <div class="flex items-center justify-between pt-2">
                    <a href="mailto:svalarezo.dev@outlook.com"
                        class="flex items-center gap-2 text-sm dark:text-white text-navy-primary hover:text-orange-accent transition-colors">
                        <Icon name="lucide:mail" class="h-4 w-4 text-orange-accent" />
                        svalarezo.dev@outlook.com
                    </a>
                    <div class="flex gap-2">
                        <a href="https://github.com/sebascodeDev" target="_blank" rel="noopener noreferrer"
                            class="flex h-11 w-11 items-center justify-center rounded-lg bg-navy-primary/10 dark:bg-white/5 text-navy-primary dark:text-white hover:bg-navy-primary/20 dark:hover:bg-white/20 transition-colors">
                            <Icon name="bi:github" class="h-4 w-4" />
                        </a>
                        <a href="https://www.linkedin.com/in/svalarezodev/" target="_blank" rel="noopener noreferrer"
                            class="flex h-11 w-11 items-center justify-center rounded-lg bg-navy-primary/10 dark:bg-white/5 text-navy-primary dark:text-white hover:bg-navy-primary/20 dark:hover:bg-white/20 transition-colors">
                            <Icon name="bi:linkedin" class="h-4 w-4" />
                        </a>
                        <a href="https://twitter.com/svalarezoDev" target="_blank" rel="noopener noreferrer"
                            class="flex h-11 w-11 items-center justify-center rounded-lg bg-navy-primary/10 dark:bg-white/5 text-navy-primary dark:text-white hover:bg-navy-primary/20 dark:hover:bg-white/20 transition-colors">
                            <Icon name="bi:twitter-x" class="h-4 w-4" />
                        </a>
                    </div>
                    <!-- aquí tus iconos de GitHub, LinkedIn y X -->
                </div>
            </div>
        </div>
    </transition>
</template>