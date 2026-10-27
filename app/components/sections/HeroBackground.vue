<template>
  <div aria-hidden="true" class="pointer-events-none absolute inset-0 overflow-hidden">
    <!-- Orbe naranja, arriba a la izquierda -->
    <div
      class="absolute -top-32 -left-24 h-96 w-96 transform-gpu rounded-full bg-orange-accent/20 blur-3xl animate-drift motion-reduce:animate-none"
    />

    <!-- Orbe azul, a la derecha, con movimiento desfasado -->
    <div
      class="absolute top-1/3 -right-32 h-[28rem] w-[28rem] transform-gpu rounded-full bg-navy-primary/20 dark:bg-blue-500/10 blur-3xl animate-drift [animation-delay:-8s] [animation-direction:alternate-reverse] motion-reduce:animate-none"
    />

    <!-- Cuadrícula sutil que se desvanece hacia los bordes -->
    <div class="hero-grid absolute inset-0 text-navy-primary/[0.06] dark:text-white/[0.04]" />
  </div>
</template>

<style scoped>
.hero-grid {
  background-image:
    linear-gradient(to right, currentColor 1px, transparent 1px),
    linear-gradient(to bottom, currentColor 1px, transparent 1px);
  background-size: 48px 48px;
  mask-image: radial-gradient(ellipse at center, black 30%, transparent 75%);
}
</style>