<template>
  <section v-if="project.sections?.length || project.links?.length" class="pp-section">
    <div class="pp-wrap">
      <div v-if="project.sections?.length" class="pp-info">
        <article
          v-for="section in project.sections"
          :key="section.title"
          class="pp-info__card"
        >
          <h2 class="pp-info__title">{{ section.title }}</h2>
          <p v-for="(p, i) in section.paragraphs" :key="i" class="pp-info__text">{{ p }}</p>
          <ul v-if="section.items?.length" class="pp-info__list">
            <li v-for="item in section.items" :key="item.text">
              <strong v-if="item.label">{{ item.label }}:</strong> {{ item.text }}
            </li>
          </ul>
        </article>
      </div>

      <div v-if="project.links?.length" class="pp-actions pp-actions--links">
        <a
          v-for="link in project.links"
          :key="link.href"
          :href="link.href"
          target="_blank"
          rel="noopener noreferrer"
          class="pp-btn pp-btn--ghost"
        >
          {{ link.label }} <IconsIconArrowUpRight />
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { Project } from '~/types/portfolio'

defineProps<{
  project: Project
}>()
</script>
