<template>
  <div class="pp-container" v-if="project">
    <ProjectHero :project="project" />
    <ProjectGallery :project="project" />
    <ProjectFooter />
  </div>
  <div v-else>
    <h1>Projeto não encontrado</h1>
    <NuxtLink to="/">Voltar ao início</NuxtLink>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { PROJECTS } from '~/data/portfolio'

definePageMeta({
  layout: 'project'
})

const route = useRoute()
const project = computed(() => PROJECTS.find(p => p.slug === route.params.slug))

if (project.value) {
  useSeoMeta({
    title: `${project.value.title} | Emilly Miller`,
    description: project.value.description,
    ogTitle: `${project.value.title} | Emilly Miller`,
    ogImage: project.value.image,
  })
}
</script>
