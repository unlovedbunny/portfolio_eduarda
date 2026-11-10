import { useI18n } from '~/composables/useI18n'

export default defineNuxtPlugin(() => {
  const { initLocale } = useI18n()
  initLocale()
})

