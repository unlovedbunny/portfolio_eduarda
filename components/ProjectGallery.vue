<template>
  <div class="pp-gallery">
    <!-- Imagens Normais e Video -->
    <template v-for="(item, index) in project.gallery" :key="index">
      <div class="pp-gallery__item" :class="{ 'pp-gallery__item--wide': item.wide }">
        <NuxtImg :src="item.src" :alt="item.alt" @click="openLightbox(item.src)" loading="lazy" />
      </div>
    </template>
    
    <div v-if="project.video" class="pp-gallery__item pp-gallery__item--wide">
      <iframe v-if="project.video.type === 'iframe'" :src="project.video.src" allow="autoplay" allowfullscreen></iframe>
    </div>
    
    <!-- Lightbox -->
    <div class="pp-lightbox" :class="{ 'pp-lightbox--active': isOpen }" @click="closeLightbox">
      <button class="pp-lightbox__close" aria-label="Fechar">&times;</button>
      <img class="pp-lightbox__img" :src="currentImage" alt="Imagem ampliada" @click.stop />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Project } from '~/types/portfolio'
import { useLightbox } from '~/composables/useLightbox'

defineProps<{
  project: Project
}>()

const { isOpen, currentImage, openLightbox, closeLightbox } = useLightbox()
</script>
