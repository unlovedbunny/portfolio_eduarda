<template>
  <div>
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
import { SITE_TEXT } from '~/data/portfolio'

useSeoMeta({
  title: SITE_TEXT.seo.title,
  description: SITE_TEXT.seo.description,
  ogTitle: SITE_TEXT.seo.ogTitle,
  ogDescription: SITE_TEXT.seo.ogDescription,
  ogImage: '/img/schneider.png',
  ogType: 'website',
})
</script>
