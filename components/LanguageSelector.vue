<template>
  <div
    ref="rootRef"
    class="lang-selector"
    :class="{ 'is-open': isOpen }"
    @keydown="onKeydown"
  >
    <button
      ref="triggerRef"
      type="button"
      class="lang-selector__trigger"
      aria-haspopup="listbox"
      :aria-expanded="isOpen"
      :aria-label="t.meta.selectorAria"
      @click="toggleMenu"
    >
      <!-- Ícone de tradução inspirado na referência visual (painel duplo 文/A) -->
      <span class="lang-selector__icon" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <!-- Painel esquerdo (fundo claro com traços do ideograma 文) -->
          <path
            d="M3.5 5.2L11.5 3.2V18.8L3.5 20.8V5.2Z"
            stroke="currentColor"
            stroke-width="1.65"
            stroke-linejoin="round"
          />
          <path
            d="M5.6 9.1H9.6M7.6 7.5V9.1M8.9 9.1C8.5 11.1 7.4 12.7 5.7 13.7M6.3 10.6C7.1 11.7 8.2 12.8 9.5 13.5"
            stroke="currentColor"
            stroke-width="1.35"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <!-- Painel direito preenchido com a letra A em contraste -->
          <path
            d="M12.5 3.2L20.5 5.2V20.8L12.5 18.8V3.2Z"
            fill="currentColor"
            stroke="currentColor"
            stroke-width="1.65"
            stroke-linejoin="round"
          />
          <path
            d="M14.7 15.2L16.5 9.4L18.3 15.2M15.2 13.7H17.8"
            stroke="var(--lang-icon-cutout, #2a241d)"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </span>

      <!-- Bandeira do idioma atualmente ativo -->
      <span class="lang-selector__current-flag" aria-hidden="true">
        <!-- Brasil (pt-BR) -->
        <svg v-if="locale === 'pt-BR'" viewBox="0 0 28 20" xmlns="http://www.w3.org/2000/svg">
          <rect width="28" height="20" rx="3" fill="#009B3A" />
          <polygon points="14,2.4 25.2,10 14,17.6 2.8,10" fill="#FEDF00" />
          <circle cx="14" cy="10" r="4.3" fill="#002776" />
          <path d="M10.1 9.1C12.3 8.1 15.7 8.4 17.9 10.3" stroke="#FFFFFF" stroke-width="1.15" fill="none" stroke-linecap="round" />
        </svg>

        <!-- Reino Unido (en) -->
        <svg v-else-if="locale === 'en'" viewBox="0 0 28 20" xmlns="http://www.w3.org/2000/svg">
          <rect width="28" height="20" rx="3" fill="#012169" />
          <path d="M0 0L28 20M28 0L0 20" stroke="#FFFFFF" stroke-width="3.6" />
          <path d="M0 0L28 20M28 0L0 20" stroke="#C8102E" stroke-width="1.8" />
          <path d="M14 0V20M0 10H28" stroke="#FFFFFF" stroke-width="5.6" />
          <path d="M14 0V20M0 10H28" stroke="#C8102E" stroke-width="3.2" />
        </svg>

        <!-- Espanha (es) -->
        <svg v-else-if="locale === 'es'" viewBox="0 0 28 20" xmlns="http://www.w3.org/2000/svg">
          <rect width="28" height="20" rx="3" fill="#AA151B" />
          <rect y="5" width="28" height="10" fill="#F1BF00" />
          <rect x="6.5" y="7.2" width="3.2" height="4.4" rx="1" fill="#AA151B" />
          <circle cx="8.1" cy="9.4" r="0.9" fill="#F1BF00" />
        </svg>

        <!-- Itália (it) -->
        <svg v-else viewBox="0 0 28 20" xmlns="http://www.w3.org/2000/svg">
          <rect width="28" height="20" rx="3" fill="#FFFFFF" />
          <rect width="9.34" height="20" fill="#009246" />
          <rect x="18.66" width="9.34" height="20" fill="#CE2B37" />
        </svg>
      </span>

      <svg
        class="lang-selector__chevron"
        width="12"
        height="12"
        viewBox="0 0 12 12"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M2.5 4.5L6 8L9.5 4.5"
          stroke="currentColor"
          stroke-width="1.6"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </button>

    <!-- Popover suspenso com seta superior e exclusivamente bandeiras -->
    <Transition name="lang-popover">
      <div
        v-if="isOpen"
        class="lang-selector__popover"
        role="listbox"
        :aria-label="t.meta.selectorListAria"
        :aria-activedescendant="`lang-opt-${locale}`"
      >
        <span class="lang-selector__arrow" aria-hidden="true"></span>

        <button
          v-for="(item, idx) in locales"
          :id="`lang-opt-${item.code}`"
          :key="item.code"
          :ref="(el) => setOptionRef(el as HTMLButtonElement | null, idx)"
          type="button"
          role="option"
          class="lang-selector__option"
          :class="{ 'is-active': locale === item.code }"
          :aria-selected="locale === item.code"
          :aria-label="t.meta.languages[item.code]"
          @click="selectLocale(item.code)"
        >
          <span class="lang-selector__flag" aria-hidden="true">
            <!-- Brasil (pt-BR) -->
            <svg v-if="item.code === 'pt-BR'" viewBox="0 0 28 20" xmlns="http://www.w3.org/2000/svg">
              <rect width="28" height="20" rx="3" fill="#009B3A" />
              <polygon points="14,2.4 25.2,10 14,17.6 2.8,10" fill="#FEDF00" />
              <circle cx="14" cy="10" r="4.3" fill="#002776" />
              <path d="M10.1 9.1C12.3 8.1 15.7 8.4 17.9 10.3" stroke="#FFFFFF" stroke-width="1.15" fill="none" stroke-linecap="round" />
            </svg>

            <!-- Reino Unido (en) -->
            <svg v-else-if="item.code === 'en'" viewBox="0 0 28 20" xmlns="http://www.w3.org/2000/svg">
              <rect width="28" height="20" rx="3" fill="#012169" />
              <path d="M0 0L28 20M28 0L0 20" stroke="#FFFFFF" stroke-width="3.6" />
              <path d="M0 0L28 20M28 0L0 20" stroke="#C8102E" stroke-width="1.8" />
              <path d="M14 0V20M0 10H28" stroke="#FFFFFF" stroke-width="5.6" />
              <path d="M14 0V20M0 10H28" stroke="#C8102E" stroke-width="3.2" />
            </svg>

            <!-- Espanha (es) -->
            <svg v-else-if="item.code === 'es'" viewBox="0 0 28 20" xmlns="http://www.w3.org/2000/svg">
              <rect width="28" height="20" rx="3" fill="#AA151B" />
              <rect y="5" width="28" height="10" fill="#F1BF00" />
              <rect x="6.5" y="7.2" width="3.2" height="4.4" rx="1" fill="#AA151B" />
              <circle cx="8.1" cy="9.4" r="0.9" fill="#F1BF00" />
            </svg>

            <!-- Itália (it) -->
            <svg v-else viewBox="0 0 28 20" xmlns="http://www.w3.org/2000/svg">
              <rect width="28" height="20" rx="3" fill="#FFFFFF" />
              <rect width="9.34" height="20" fill="#009246" />
              <rect x="18.66" width="9.34" height="20" fill="#CE2B37" />
            </svg>
          </span>

          <span class="lang-selector__active-dot" aria-hidden="true"></span>
          <span class="sr-only">{{ t.meta.languages[item.code] }}</span>
        </button>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { ref, nextTick, onMounted, onBeforeUnmount } from 'vue'
import { useI18n, type LocaleCode } from '~/composables/useI18n'

const { locale, locales, t, setLocale } = useI18n()

const isOpen = ref(false)
const rootRef = ref<HTMLElement | null>(null)
const triggerRef = ref<HTMLButtonElement | null>(null)
const optionRefs = ref<(HTMLButtonElement | null)[]>([])

function setOptionRef(el: HTMLButtonElement | null, idx: number) {
  optionRefs.value[idx] = el
}

function toggleMenu() {
  isOpen.value = !isOpen.value
  if (isOpen.value) {
    nextTick(() => {
      const currentIdx = locales.findIndex((l) => l.code === locale.value)
      optionRefs.value[currentIdx >= 0 ? currentIdx : 0]?.focus()
    })
  }
}

function closeMenu(restoreFocus = false) {
  if (!isOpen.value) return
  isOpen.value = false
  if (restoreFocus) {
    nextTick(() => triggerRef.value?.focus())
  }
}

function selectLocale(code: LocaleCode) {
  setLocale(code)
  closeMenu(true)
}

function focusOption(index: number) {
  const count = locales.length
  const normalized = ((index % count) + count) % count
  optionRefs.value[normalized]?.focus()
}

function onKeydown(e: KeyboardEvent) {
  if (!isOpen.value) {
    if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
      e.preventDefault()
      toggleMenu()
    }
    return
  }

  const activeIdx = optionRefs.value.findIndex((el) => el === document.activeElement)

  switch (e.key) {
    case 'Escape':
      e.preventDefault()
      closeMenu(true)
      break
    case 'ArrowDown':
    case 'ArrowRight':
      e.preventDefault()
      focusOption((activeIdx >= 0 ? activeIdx : 0) + 1)
      break
    case 'ArrowUp':
    case 'ArrowLeft':
      e.preventDefault()
      focusOption((activeIdx >= 0 ? activeIdx : 0) - 1)
      break
    case 'Home':
      e.preventDefault()
      focusOption(0)
      break
    case 'End':
      e.preventDefault()
      focusOption(locales.length - 1)
      break
    case 'Tab':
      closeMenu(false)
      break
  }
}

function onClickOutside(e: MouseEvent) {
  if (!isOpen.value) return
  const target = e.target as Node | null
  if (rootRef.value && target && !rootRef.value.contains(target)) {
    closeMenu(false)
  }
}

onMounted(() => {
  document.addEventListener('pointerdown', onClickOutside)
})

onBeforeUnmount(() => {
  document.removeEventListener('pointerdown', onClickOutside)
})
</script>

