<script setup lang="ts"></script>

<template>
  <footer
    class="border-t border-navy-primary/10 bg-navy-light py-12 sm:py-16 dark:border-white/10 dark:bg-dark-surface">
    <div class="mx-auto max-w-2xl px-6 sm:px-8">
      <div class="flex flex-col items-center gap-4">
        <!-- Logo SVG -->
        <div class="flex flex-col items-center gap-2">
          <div class="h-8 w-20 flex items-center justify-center">
            <UiLogoSV class="h-8 w-auto" />
          </div>
        </div>

        <div class="flex items-center justify-between pt-2">
          <div class="flex gap-2">
            <a href="https://github.com/sebascodeDev" aria-label="GitHub" target="_blank" rel="noopener noreferrer"
              class="flex h-11 w-11 items-center justify-center rounded-lg bg-navy-primary/10 dark:bg-white/5 text-navy-primary dark:text-white hover:bg-navy-primary/20 dark:hover:bg-white/20 active:bg-navy-primary/30 dark:active:bg-white/30 transition-colors">
              <Icon aria-hidden="true" name="bi:github" class="h-4 w-4" />
            </a>
            <a href="https://www.linkedin.com/in/svalarezodev/" aria-label="LinkedIn" target="_blank"
              rel="noopener noreferrer"
              class="flex h-11 w-11 items-center justify-center rounded-lg bg-navy-primary/10 dark:bg-white/5 text-navy-primary dark:text-white hover:bg-navy-primary/20 dark:hover:bg-white/20 active:bg-navy-primary/30 dark:active:bg-white/30 transition-colors">
              <Icon aria-hidden="true" name="bi:linkedin" class="h-4 w-4" />
            </a>
            <a href="https://twitter.com/svalarezoDev" aria-label="X (Twitter)" target="_blank"
              rel="noopener noreferrer"
              class="flex h-11 w-11 items-center justify-center rounded-lg bg-navy-primary/10 dark:bg-white/5 text-navy-primary dark:text-white hover:bg-navy-primary/20 dark:hover:bg-white/20 active:bg-navy-primary/30 dark:active:bg-white/30 transition-colors">
              <Icon aria-hidden="true" name="bi:twitter-x" class="h-4 w-4" />
            </a>
          </div>
        </div>

        <!-- Derechos reservados -->
        <div class="text-center text-sm text-navy-primary/60 dark:text-white/60">
          <p>&copy; {{ new Date().getFullYear() }} Sebastián Valarezo. Todos los derechos reservados.</p>
        </div>
      </div>
    </div>
  </footer>
</template>