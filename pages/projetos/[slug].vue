<template>
  <div class="pp-container" v-if="project">
    <ProjectHero :project="project" />
    <ProjectDetails :project="project" />
    <ProjectGallery :project="project" />
    <ProjectFooter />
  </div>
  <div v-else class="pp-not-found">
    <h1>{{ text.notFoundTitle }}</h1>
    <NuxtLink to="/">{{ text.backHome }}</NuxtLink>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useI18n } from '~/composables/useI18n'

definePageMeta({
  layout: 'project'
})

const { projects, t } = useI18n()
const text = computed(() => t.value.projectPage)
const route = useRoute()
const project = computed(() => projects.value.find(p => p.slug === route.params.slug))

useSeoMeta({
  title: () => project.value ? `${project.value.title} | ${text.value.seoSuffix}` : text.value.notFoundTitle,
  description: () => project.value?.description ?? '',
  ogTitle: () => project.value ? `${project.value.title} | ${text.value.seoSuffix}` : text.value.notFoundTitle,
  ogImage: () => project.value?.image ?? '/img/schneider2.png',
})
</script>
