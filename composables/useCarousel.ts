import { ref, onMounted, onUnmounted } from 'vue'

export function useCarousel(totalItems: number) {
  const currentIndex = ref(0)
  const isDragging = ref(false)
  const startPos = ref(0)
  const dragOffset = ref(0)
  const direction = ref<'next' | 'prev'>('next')
  const carouselTrack = ref<HTMLElement | null>(null)
  const cardsPerView = ref(1)

  const normalizeIndex = (index: number) => {
    if (totalItems <= 0) return 0
    return ((index % totalItems) + totalItems) % totalItems
  }

  /**
   * Retorna a distância circular assinada entre o card `index` e `currentIndex`.
   * Ex.:0 = projeto central ativo, -1 = anterior (esquerda), +1 = próximo (direita).
   */
  const getRelativeOffset = (index: number) => {
    if (totalItems <= 1) return 0
    let diff = index - currentIndex.value
    const half = Math.floor(totalItems / 2)
    if (diff > half) diff -= totalItems
    if (diff < -half) diff += totalItems
    return diff
  }

  const getCardStateClass = (index: number) => {
    const offset = getRelativeOffset(index)
    if (offset === 0) return 'is-active'
    if (offset === -1) return 'is-prev'
    if (offset === 1) return 'is-next'
    if (offset === -2) return 'is-far-prev'
    if (offset === 2) return 'is-far-next'
    return 'is-hidden'
  }

  const next = () => {
    if (totalItems <= 1) return
    direction.value = 'next'
    currentIndex.value = normalizeIndex(currentIndex.value + 1)
  }

  const prev = () => {
    if (totalItems <= 1) return
    direction.value = 'prev'
    currentIndex.value = normalizeIndex(currentIndex.value - 1)
  }

  const goTo = (index: number) => {
    const target = normalizeIndex(index)
    if (target === currentIndex.value) return
    const offset = getRelativeOffset(target)
    direction.value = offset >= 0 ? 'next' : 'prev'
    currentIndex.value = target
  }

  const getPositionX = (event: TouchEvent | MouseEvent) => {
    return event.type.includes('mouse')
      ? (event as MouseEvent).clientX
      : (event as TouchEvent).touches[0]?.clientX ?? 0
  }

  const touchStart = (event: TouchEvent | MouseEvent) => {
    isDragging.value = true
    startPos.value = getPositionX(event)
    dragOffset.value = 0
  }

  const touchMove = (event: TouchEvent | MouseEvent) => {
    if (!isDragging.value) return
    const currentPosition = getPositionX(event)
    const rawDelta = currentPosition - startPos.value
    // Resistência elástica suave durante o arraste
    dragOffset.value = Math.max(-140, Math.min(140, rawDelta * 0.55))
  }

  const touchEnd = () => {
    if (!isDragging.value) return
    isDragging.value = false
    const movedBy = dragOffset.value
    dragOffset.value = 0

    if (movedBy < -38) {
      next()
    } else if (movedBy > 38) {
      prev()
    }
  }

  const onKeyDown = (event: KeyboardEvent) => {
    if (event.key !== 'ArrowLeft' && event.key !== 'ArrowRight') return
    const tag = (event.target as HTMLElement | null)?.tagName
    if (tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT') return

    // Navega quando a seção do carrossel está visível na tela
    if (carouselTrack.value) {
      const rect = carouselTrack.value.getBoundingClientRect()
      const inViewport = rect.bottom > 80 && rect.top < window.innerHeight - 80
      if (!inViewport) return
    }

    event.preventDefault()
    if (event.key === 'ArrowRight') next()
    else prev()
  }

  onMounted(() => {
    window.addEventListener('keydown', onKeyDown)
  })

  onUnmounted(() => {
    window.removeEventListener('keydown', onKeyDown)
  })

  return {
    currentIndex,
    direction,
    isDragging,
    dragOffset,
    carouselTrack,
    cardsPerView,
    getRelativeOffset,
    getCardStateClass,
    touchStart,
    touchMove,
    touchEnd,
    next,
    prev,
    goTo
  }
}
