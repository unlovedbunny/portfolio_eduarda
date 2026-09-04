import { ref } from 'vue'

export function useLightbox() {
  const isOpen = ref(false)
  const currentImage = ref('')

  const openLightbox = (src: string) => {
    currentImage.value = src
    isOpen.value = true
    document.body.style.overflow = 'hidden' // Prevent scrolling
  }

  const closeLightbox = () => {
    isOpen.value = false
    currentImage.value = ''
    document.body.style.overflow = '' // Restore scrolling
  }

  return {
    isOpen,
    currentImage,
    openLightbox,
    closeLightbox
  }
}
