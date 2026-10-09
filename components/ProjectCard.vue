<template>
  <div class="services__card-inner">
    <div class="services__card-content">
      <div class="services__card-tags">
        <span class="services__card-tag" v-for="tag in project.tags.slice(0, 2)" :key="tag">{{ tag }}</span>
      </div>
      <h3 class="services__card-title">{{ project.title }}</h3>
      <NuxtLink :to="`/projetos/${project.slug}`" class="services__card-link">
        {{ text.link }}
        <IconsIconArrowUpRight />
      </NuxtLink>
    </div>
    <div class="services__card-image">
      <NuxtImg :src="project.image" :alt="project.title" loading="lazy" />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Project } from '~/types/portfolio'
import { SITE_TEXT } from '~/data/portfolio'

defineProps<{
  project: Project
}>()

const text = SITE_TEXT.projectCard
</script>
