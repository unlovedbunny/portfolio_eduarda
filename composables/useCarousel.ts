import { ref, onMounted, onUnmounted, type Ref } from 'vue'

export function useCarousel(totalItems: number) {
  const currentIndex = ref(0)
  const isDragging = ref(false)
  const startPos = ref(0)
  const currentTranslate = ref(0)
  const prevTranslate = ref(0)
  const carouselTrack = ref<HTMLElement | null>(null)
  
  const cardsPerView = ref(1)

  const updateCardsPerView = () => {
    if (window.innerWidth >= 1300) cardsPerView.value = 3
    else if (window.innerWidth >= 1024) cardsPerView.value = 2
    else if (window.innerWidth >= 768) cardsPerView.value = 2
    else cardsPerView.value = 1
  }

  const getMaxIndex = () => {
    return Math.max(0, totalItems - cardsPerView.value)
  }

  const setPositionByIndex = () => {
    const maxIndex = getMaxIndex()
    if (currentIndex.value > maxIndex) currentIndex.value = maxIndex
    if (currentIndex.value < 0) currentIndex.value = 0
    
    // Each card is usually ~380px or based on flex-basis.
    // In original code, the calculation used offsetWidth and gap
    if (carouselTrack.value && carouselTrack.value.children.length > 0) {
      const card = carouselTrack.value.children[0] as HTMLElement
      const gap = parseInt(window.getComputedStyle(carouselTrack.value).gap) || 20
      const moveAmount = card.offsetWidth + gap
      currentTranslate.value = currentIndex.value * -moveAmount
      prevTranslate.value = currentTranslate.value
      setSliderPosition()
    }
  }

  const setSliderPosition = () => {
    if (carouselTrack.value) {
      carouselTrack.value.style.transform = `translateX(${currentTranslate.value}px)`
    }
  }

  const touchStart = (event: TouchEvent | MouseEvent) => {
    isDragging.value = true
    startPos.value = getPositionX(event)
    if (carouselTrack.value) {
      carouselTrack.value.style.transition = 'none'
    }
  }

  const touchMove = (event: TouchEvent | MouseEvent) => {
    if (!isDragging.value) return
    const currentPosition = getPositionX(event)
    currentTranslate.value = prevTranslate.value + currentPosition - startPos.value
    setSliderPosition()
  }

  const touchEnd = () => {
    isDragging.value = false
    const movedBy = currentTranslate.value - prevTranslate.value
    
    if (movedBy < -100 && currentIndex.value < getMaxIndex()) currentIndex.value += 1
    if (movedBy > 100 && currentIndex.value > 0) currentIndex.value -= 1

    if (carouselTrack.value) {
      carouselTrack.value.style.transition = 'transform 0.3s ease-out'
    }
    setPositionByIndex()
  }

  const getPositionX = (event: TouchEvent | MouseEvent) => {
    return event.type.includes('mouse') ? (event as MouseEvent).pageX : (event as TouchEvent).touches[0].clientX
  }

  const next = () => {
    if (currentIndex.value < getMaxIndex()) {
      currentIndex.value += 1
      setPositionByIndex()
    }
  }

  const prev = () => {
    if (currentIndex.value > 0) {
      currentIndex.value -= 1
      setPositionByIndex()
    }
  }
  
  const goTo = (index: number) => {
    currentIndex.value = index;
    setPositionByIndex()
  }

  onMounted(() => {
    updateCardsPerView()
    window.addEventListener('resize', () => {
      updateCardsPerView()
      setPositionByIndex()
    })
    
    // Allow slight delay for DOM to settle sizes
    setTimeout(() => {
      setPositionByIndex()
    }, 100)
  })

  onUnmounted(() => {
    window.removeEventListener('resize', updateCardsPerView)
  })

  return {
    currentIndex,
    carouselTrack,
    touchStart,
    touchMove,
    touchEnd,
    next,
    prev,
    goTo,
    cardsPerView,
    getMaxIndex
  }
}
