<template>
  <div class="pp-header">
    <div class="pp-header__content">
      <span class="pp-header__eyebrow">{{ project.eyebrow }}</span>
      <h1 class="pp-header__title">{{ project.title }}</h1>
      <p class="pp-header__desc">{{ project.description }}</p>
      <div class="pp-header__tags">
        <span class="pp-header__tag" v-for="tag in project.tags" :key="tag">{{ tag }}</span>
      </div>
    </div>
    
    <div class="pp-header__actions">
      <NuxtLink to="/" class="pp-btn pp-btn--secondary">
        <IconsIconChevron /> Voltar
      </NuxtLink>
      
      <a v-if="project.liveUrl" :href="project.liveUrl" target="_blank" class="pp-btn pp-btn--primary">
        Acessar online <IconsIconArrowUpRight />
      </a>
      <a v-if="project.driveUrl" :href="project.driveUrl" target="_blank" class="pp-btn pp-btn--primary">
        Acessar online <IconsIconArrowUpRight />
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Project } from '~/types/portfolio'

defineProps<{
  project: Project
}>()
</script>
