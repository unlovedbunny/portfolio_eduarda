<template>
  <section v-if="project.gallery.length || project.video" class="pp-section">
    <div class="pp-wrap">
      <h2 class="pp-section__title">{{ text.galleryTitle }}</h2>

      <div class="pp-gallery">
        <figure
          v-for="(item, index) in project.gallery"
          :key="index"
          class="pp-gallery__item"
          :class="{ 'pp-gallery__item--wide': item.wide }"
        >
          <NuxtImg :src="item.src" :alt="item.alt" loading="lazy" @click="openLightbox(item.src)" />
        </figure>

        <div v-if="project.video" class="pp-gallery__item pp-gallery__item--wide pp-video">
          <iframe v-if="project.video.type === 'iframe'" :src="project.video.src" allow="autoplay" allowfullscreen></iframe>
        </div>
      </div>
    </div>

    <!-- Lightbox -->
    <div class="pp-lightbox" :class="{ 'is-open': isOpen }" @click="closeLightbox">
      <button class="pp-lightbox__close" :aria-label="text.lightboxClose">&times;</button>
      <img :src="currentImage" :alt="text.lightboxImageAlt" @click.stop />
    </div>
  </section>
</template>

<script setup lang="ts">
import type { Project } from '~/types/portfolio'
import { useLightbox } from '~/composables/useLightbox'
import { SITE_TEXT } from '~/data/portfolio'

defineProps<{
  project: Project
}>()

const text = SITE_TEXT.projectPage
const { isOpen, currentImage, openLightbox, closeLightbox } = useLightbox()
</script>
