<template>
  <section class="services">
    <!-- Imagem de fundo -->
    <img class="services__bg" src="/img/bg_sobre.png" alt="" aria-hidden="true" />

    <div class="services__inner">
      <!-- Cabeçalho -->
      <header class="services__header">
        <h2 class="services__title">
          Alguns projetos,<span class="services__title--accent"> clique e saiba +</span>
        </h2>
        <p class="services__desc">
          Desenvolvimento de interfaces modernas, responsivas e com foco
          absoluto em otimização e refatoração de páginas para garantir a
          melhor performance.
        </p>
      </header>

      <!-- Carrossel -->
      <div class="services__carousel" id="servicesCarousel">
        <button class="services__nav services__nav--prev" aria-label="Previous projects" @click="prev">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M15 18L9 12L15 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </button>

        <button class="services__nav services__nav--next" aria-label="Next projects" @click="next">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M9 6L15 12L9 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </button>

        <!-- Track (parte que desliza) -->
        <div class="services__viewport">
          <div class="services__track" ref="carouselTrack" @touchstart="touchStart" @touchmove="touchMove" @touchend="touchEnd" @mousedown="touchStart" @mousemove="touchMove" @mouseup="touchEnd" @mouseleave="touchEnd">
            <NuxtLink v-for="project in projects" :key="project.slug" class="service-card" :to="`/projetos/${project.slug}`">
              <span class="service-card__title">{{ project.title }}</span>
              <div class="service-card__media">
                <img :src="project.image" :alt="project.title" />
              </div>
            </NuxtLink>
          </div>
        </div>
      </div>

      <div class="services__dots" aria-label="Carousel pagination">
        <button 
          v-for="(_, index) in Math.max(1, projects.length - cardsPerView + 1)" 
          :key="index"
          class="services__dot"
          :class="{ active: currentIndex === index }"
          @click="goTo(index)"
        ></button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { PROJECTS } from '~/data/portfolio'
import { useCarousel } from '~/composables/useCarousel'

const projects = PROJECTS
const { currentIndex, carouselTrack, touchStart, touchMove, touchEnd, next, prev, goTo, cardsPerView } = useCarousel(projects.length)
</script>
