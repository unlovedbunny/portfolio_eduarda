<template>
  <section class="services" :aria-label="text.sectionAria">
    <!-- Imagem de fundo -->
    <img class="services__bg" src="/img/bg_sobre.jpg" alt="" aria-hidden="true" />
    <div class="services__ambient" aria-hidden="true"></div>

    <div class="services__inner">
      <!-- Cabeçalho -->
      <header class="services__header">
        <div class="services__title-wrap">
          <h2 class="services__title">
            {{ text.title }}<span class="services__title--accent">{{ text.titleAccent }}</span>
          </h2>
        </div>
        <p class="services__desc">{{ text.description }}</p>
      </header>

      <!-- Galeria Cinematográfica Centralizada -->
      <div class="services__carousel" id="servicesCarousel">
        <button
          type="button"
          class="services__nav services__nav--prev"
          :aria-label="text.prevAria"
          @click="prev"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M15 18L9 12L15 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </button>

        <div class="services__viewport">
          <div
            class="services__track"
            :class="{ 'is-dragging': isDragging }"
            ref="carouselTrack"
            :style="{ '--drag-x': `${dragOffset}px` }"
            @touchstart.passive="touchStart"
            @touchmove.passive="touchMove"
            @touchend="touchEnd"
            @mousedown="touchStart"
            @mousemove="touchMove"
            @mouseup="touchEnd"
            @mouseleave="touchEnd"
          >
            <article
              v-for="(project, index) in projects"
              :key="project.slug"
              class="service-card"
              :class="getCardStateClass(index)"
              :data-project-index="index + 1"
              :aria-hidden="getRelativeOffset(index) !== 0"
              @click="onCardClick(index, project.slug)"
            >
              <!-- Topo do card: setas + contador -->
              <div class="service-card__indicators">
                <button
                  type="button"
                  class="indicator-arrow indicator-arrow--left"
                  :aria-label="text.prevAria"
                  @click.stop="prev"
                >
                  ←
                </button>
                <div class="project-counter-wrap">
                  <span class="project-counter">{{ String(index + 1).padStart(2, '0') }}</span>
                  <span class="project-counter-sep">/</span>
                  <span class="project-total">{{ String(projects.length).padStart(2, '0') }}</span>
                </div>
                <button
                  type="button"
                  class="indicator-arrow indicator-arrow--right"
                  :aria-label="text.nextAria"
                  @click.stop="next"
                >
                  →
                </button>
              </div>

              <!-- Moldura e imagem principal em destaque -->
              <div class="service-card__media">
                <div class="service-card__frame-bar" aria-hidden="true">
                  <span class="frame-dot"></span>
                  <span class="frame-dot"></span>
                  <span class="frame-dot"></span>
                  <span class="frame-eyebrow">{{ project.eyebrow }}</span>
                </div>
                <div class="service-card__image-wrap">
                  <img :src="project.image" :alt="project.title" draggable="false" />
                  <div class="service-card__shine" aria-hidden="true"></div>
                </div>
              </div>

              <!-- Informações coordenadas do projeto -->
              <div class="service-card__body">
                <div class="service-card__heading">
                  <span class="service-card__eyebrow">{{ project.eyebrow }}</span>
                  <h3 class="service-card__title">{{ project.title }}</h3>
                  <p class="service-card__desc">{{ project.description }}</p>
                </div>

                <div class="service-card__footer">
                  <div class="service-card__tags">
                    <span
                      v-for="tag in project.tags.slice(0, 4)"
                      :key="tag"
                      class="service-card__tag"
                    >
                      {{ tag }}
                    </span>
                  </div>

                  <NuxtLink
                    :to="`/projetos/${project.slug}`"
                    class="service-card__cta"
                    @click.stop
                  >
                    <span>{{ text.cardLink }}</span>
                    <svg width="16" height="16" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                      <path d="M4 14L14 4M14 4H6M14 4V12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </NuxtLink>
                </div>
              </div>
            </article>
          </div>
        </div>

        <button
          type="button"
          class="services__nav services__nav--next"
          :aria-label="text.nextAria"
          @click="next"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M9 6L15 12L9 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </button>
      </div>

      <!-- Barra inferior de progresso e indicadores -->
      <div class="services__bottom-bar">
        <div class="services__dots" role="tablist" :aria-label="text.paginationAria">
          <button
            v-for="(project, index) in projects"
            :key="project.slug"
            type="button"
            class="services__dot"
            :class="{ 'services__dot--active': currentIndex === index }"
            :aria-label="`${text.goToProject} ${project.title}`"
            :aria-selected="currentIndex === index"
            @click="goTo(index)"
          >
            <span class="services__dot-num">{{ String(index + 1).padStart(2, '0') }}</span>
            <span class="services__dot-label">{{ project.title }}</span>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { useI18n } from '~/composables/useI18n'
import { useCarousel } from '~/composables/useCarousel'

const router = useRouter()
const { projects, t } = useI18n()
const text = computed(() => t.value.projects)

const {
  currentIndex,
  isDragging,
  dragOffset,
  carouselTrack,
  getRelativeOffset,
  getCardStateClass,
  touchStart,
  touchMove,
  touchEnd,
  next,
  prev,
  goTo
} = useCarousel(projects.value.length)

function onCardClick(index: number, slug: string) {
  if (Math.abs(dragOffset.value) > 10) return
  const offset = getRelativeOffset(index)
  if (offset !== 0) {
    goTo(index)
  } else {
    router.push(`/projetos/${slug}`)
  }
}
</script>
