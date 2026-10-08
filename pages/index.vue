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
useSeoMeta({
  title: 'Portfólio | Eduarda Schneider',
  description: 'Portfólio de Eduarda Schneider, Desenvolvedora Web Front-end. Transformo designs complexos do Figma em código de alta qualidade e performance.',
  ogTitle: 'Portfólio | Eduarda Schneider',
  ogDescription: 'Portfólio de Eduarda Schneider, Desenvolvedora Web Front-end.',
  ogImage: '/img/schneider.png',
  ogType: 'website',
})
</script>
