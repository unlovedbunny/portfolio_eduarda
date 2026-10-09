<template>
  <div class="pp-container" v-if="project">
    <ProjectHero :project="project" />
    <ProjectDetails :project="project" />
    <ProjectGallery :project="project" />
    <ProjectFooter />
  </div>
  <div v-else>
    <h1>{{ text.notFoundTitle }}</h1>
    <NuxtLink to="/">{{ text.backHome }}</NuxtLink>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { PROJECTS, SITE_TEXT } from '~/data/portfolio'

definePageMeta({
  layout: 'project'
})

const text = SITE_TEXT.projectPage
const route = useRoute()
const project = computed(() => PROJECTS.find(p => p.slug === route.params.slug))

if (project.value) {
  useSeoMeta({
    title: `${project.value.title} | ${text.seoSuffix}`,
    description: project.value.description,
    ogTitle: `${project.value.title} | ${text.seoSuffix}`,
    ogImage: project.value.image,
  })
}
</script>
