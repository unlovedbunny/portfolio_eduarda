<template>
  <header class="pp-topbar">
    <NuxtLink to="/#servicesCarousel" class="pp-back">
      <IconsIconChevron /> {{ text.back }}
    </NuxtLink>
    <div class="pp-brand">
      <img src="/img/favicon.png" :alt="text.brandAlt" />
      <span>{{ profile.name }}</span>
    </div>
  </header>

  <section class="pp-hero">
    <div class="pp-wrap">
      <span class="pp-eyebrow">{{ project.eyebrow }}</span>
      <h1 class="pp-title">{{ project.title }}</h1>
      <p class="pp-lead">{{ project.description }}</p>

      <div class="pp-tags">
        <span class="pp-tag" v-for="tag in project.tags" :key="tag">{{ tag }}</span>
      </div>

      <div class="pp-actions">
        <a v-if="project.liveUrl" :href="project.liveUrl" target="_blank" rel="noopener noreferrer" class="pp-btn pp-btn--primary">
          {{ text.openOnline }} <IconsIconArrowUpRight />
        </a>
        <a v-if="project.driveUrl" :href="project.driveUrl" target="_blank" rel="noopener noreferrer" class="pp-btn pp-btn--primary">
          {{ text.openOnline }} <IconsIconArrowUpRight />
        </a>
        <NuxtLink to="/#contato" class="pp-btn pp-btn--ghost">{{ text.contact }}</NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { Project } from '~/types/portfolio'
import { PROFILE, SITE_TEXT } from '~/data/portfolio'

defineProps<{
  project: Project
}>()

const text = SITE_TEXT.projectPage
const profile = PROFILE
</script>
