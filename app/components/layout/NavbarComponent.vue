<script setup>

const isMenuOpen = ref(false)

const links = [
    { label: 'Servicios', href: '#servicios' },
    { label: 'Proyectos', href: '#proyectos' },
    { label: 'Sobre mi', href: '#contacto' },
]

const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value
    console.info(`Menu is now ${isMenuOpen.value ? 'open' : 'closed'}`)
}

watch(isMenuOpen, (isOpen) => {
    if (import.meta.client) {
        document.body.style.overflow = isOpen ? 'hidden' : ''
    }
})


</script>


<template>
    <nav v-show="!isMenuOpen"
        class="fixed top-0 w-full z-50 bg-white/70 dark:bg-dark-bg/70 backdrop-blur-md border-b border-blue-gray-muted/20 p-[var(--navbar-padding)] flex justify-between items-center">

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

        <button @click="toggleMenu" class="md:hidden text-navy-primary dark:text-white z-50 pointer-events-auto " aria-label="Abrir menú">
            <Icon :name="isMenuOpen ? 'lucide:x' : 'lucide:menu'" class="w-7 h-7" />
        </button>


    </nav>

    <transition enter-active-class="transition-all duration-300 ease-out" enter-from-class="opacity-0 translate-x-full"
        enter-to-class="opacity-100 translate-x-0" leave-active-class="transition-all duration-200 ease-in"
        leave-from-class="opacity-100 translate-x-0" leave-to-class="opacity-0 translate-x-full">
        <div v-if="isMenuOpen"
            class="fixed bg-white/20 inset-0 dark:bg-dark-bg/20 backdrop-blur-md z-40 flex flex-col md:hidden overflow-y-auto"
            @click="toggleMenu">
            <div
                class="flex items-center justify-between w-full border-b border-blue-gray-muted/20 p-[var(--navbar-padding)]">
                <UiLogoSV />
                <button @click="closeMenu"
                    class="w-11 h-11 rounded-lg bg-white/5 flex items-center justify-center text-white pointer-events-auto hover:bg-white/10 transition-colors duration-200"
                    aria-label="Cerrar menú">
                    <Icon name="lucide:x" class="w-6 h-6" />
                </button>
            </div>
            <div class="flex flex-col items-center justify-center gap-6 mt-8">
                <ul
                    class="md:flex gap-6 text-navy-primary font-body dark:text-blue-gray-muted text-sm md:text-base font-medium">
                    <li class="hover:text-orange-accent" v-for="link in links" :key="link.label">
                        <a :href="link.href">{{ link.label }}</a>
                    </li>
                </ul>
            </div>
        </div>
    </transition>
</template> 