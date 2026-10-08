// Atualiza --mx / --my (-1 a 1) no elemento interativo sob o cursor,
// permitindo que o box-shadow reaja ao movimento do mouse (ver mixin hover-lift em main.scss).
const SELECTOR = [
  '.nav__item',
  '.hero__cta-primary',
  '.hero__cta-secondary',
  '.services__nav',
  '.service-card',
  '.hire__photo-wrap',
  '.hire__skill-tag',
  '.hire__cta',
  '.contact-card',
  '.pp-btn',
  '.pp-gallery__item'
].join(',')

export default defineNuxtPlugin(() => {
  let current: HTMLElement | null = null

  const reset = (el: HTMLElement | null) => {
    el?.style.removeProperty('--mx')
    el?.style.removeProperty('--my')
  }

  document.addEventListener(
    'pointermove',
    (e: PointerEvent) => {
      if (e.pointerType === 'touch') return
      const el = (e.target as HTMLElement | null)?.closest<HTMLElement>(SELECTOR) ?? null

      if (el !== current) {
        reset(current)
        current = el
      }
      if (!el) return

      const r = el.getBoundingClientRect()
      const x = ((e.clientX - r.left) / r.width - 0.5) * 2
      const y = ((e.clientY - r.top) / r.height - 0.5) * 2
      el.style.setProperty('--mx', x.toFixed(3))
      el.style.setProperty('--my', y.toFixed(3))
    },
    { passive: true }
  )

  document.addEventListener('pointerleave', () => {
    reset(current)
    current = null
  })
})
