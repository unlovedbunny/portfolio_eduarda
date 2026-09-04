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
  title: 'Portfólio | Emilly Miller',
  description: 'Portfólio de Emilly Miller, Desenvolvedora Web Front-end. Transformo designs complexos do Figma em código de alta qualidade e performance.',
  ogTitle: 'Portfólio | Emilly Miller',
  ogDescription: 'Portfólio de Emilly Miller, Desenvolvedora Web Front-end.',
  ogImage: '/img/miller.png',
  ogType: 'website',
})
</script>
