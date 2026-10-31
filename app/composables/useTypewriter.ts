interface TypewriterOptions {
  typeSpeed?: number
  deleteSpeed?: number
  holdTime?: number
  startDelay?: number
}

export function useTypewriter(words: string[], options: TypewriterOptions = {}) {
  const { typeSpeed = 90, deleteSpeed = 50, holdTime = 2500, startDelay = 3000 } = options

  // Arranca con la primera palabra completa: el primer render ya es el definitivo
  const text = ref(words[0] ?? '')
  const isAnimating = ref(false)

  let timer: ReturnType<typeof setTimeout> | undefined
  let wordIndex = 0

  const wait = (ms: number, fn: () => void) => {
    timer = setTimeout(fn, ms)
  }

  const typeWord = () => {
    const target = words[wordIndex] ?? ''
    if (text.value.length < target.length) {
      text.value = target.slice(0, text.value.length + 1)
      wait(typeSpeed, typeWord)
    } else {
      wait(holdTime, deleteWord)
    }
  }

  const deleteWord = () => {
    if (text.value.length > 0) {
      text.value = text.value.slice(0, -1)
      wait(deleteSpeed, deleteWord)
    } else {
      wordIndex = (wordIndex + 1) % words.length
      typeWord()
    }
  }

  onMounted(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion || words.length < 2) return

    isAnimating.value = true
    wait(startDelay, deleteWord)
  })

  onBeforeUnmount(() => clearTimeout(timer))

  return { text, isAnimating }
}