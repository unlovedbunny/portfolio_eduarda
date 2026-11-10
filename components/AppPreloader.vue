<template>
  <div
    v-if="visible"
    class="preloader"
    :class="{ 'is-leaving': leaving }"
    role="presentation"
    aria-hidden="true"
  >
    <p class="preloader__word" :class="{ 'preloader__word--first': index === 0 }">
      <span class="preloader__dot"></span>{{ greetings[index] }}
    </p>
  </div>
</template>

<script setup lang="ts">
/**
 * Tela de boas-vindas: as saudações se alternam e, no fim, o painel sobe
 * com a borda de baixo curva, revelando a página.
 * Roda uma vez por sessão (não repete ao voltar de uma página de projeto).
 */
import { onBeforeUnmount, onMounted, ref } from 'vue'
import { SITE_TEXT } from '~/data/portfolio'

const greetings = SITE_TEXT.preloader.greetings

const FIRST_WORD_MS = 1000 // permanece por 1s
const EXIT_MS = 950        // duração da subida suave (0.95s)
// As demais línguas + subida somam ~4s, fechando 5s no total
const OTHERS_DURATION_MS = 3050
const WORD_MS = Math.max(
  120,
  Math.round(OTHERS_DURATION_MS / Math.max(1, greetings.length - 1))
)

const done = useState('preloader-done', () => false)
const visible = ref(!done.value)
const leaving = ref(false)
const index = ref(0)

const timers: ReturnType<typeof setTimeout>[] = []
const later = (fn: () => void, ms: number) => timers.push(setTimeout(fn, ms))

function lockScroll(lock: boolean) {
  document.documentElement.classList.toggle('is-preloading', lock)
}

function finish() {
  visible.value = false
  done.value = true
  lockScroll(false)
}

function leave() {
  leaving.value = true
  later(finish, EXIT_MS)
}

function next() {
  if (index.value >= greetings.length - 1) {
    leave()
    return
  }
  index.value++
  later(next, WORD_MS)
}

onMounted(() => {
  if (done.value) return
  lockScroll(true)
  window.scrollTo(0, 0)

  // Movimento reduzido: só a primeira palavra e um fade rápido
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    later(leave, 600)
    return
  }
  later(next, FIRST_WORD_MS)
})

onBeforeUnmount(() => {
  timers.forEach(clearTimeout)
  if (visible.value) {
    done.value = true
    lockScroll(false)
  }
})
</script>

