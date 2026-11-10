<template>
  <div>
    <AppPreloader />
    <main class="page">
      <AppNavbar />
      <HeroSection />
    </main>
    <ProjectsCarousel />
    <ExperienceSection />
    <SkillsSection />
    <ContactSection />
  </div>
</template>

<script setup lang="ts">
import { useI18n } from '~/composables/useI18n'

const { t } = useI18n()

useSeoMeta({
  title: () => t.value.seo.title,
  description: () => t.value.seo.description,
  ogTitle: () => t.value.seo.ogTitle,
  ogDescription: () => t.value.seo.ogDescription,
  ogImage: '/img/schneider2.png',
  ogType: 'website',
})
</script>
