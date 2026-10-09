<template>
  <section class="hero">
    <div class="hero__headline">
      <div class="hero__hello-wrap">
        <span class="hero__hello-badge">{{ text.badge }}</span>
        <img class="hero__hello-arrow" src="/img/vector.png" alt="" aria-hidden="true" />
      </div>
      <h1 class="hero__title">
        {{ text.greeting }}<span class="hero__title--accent">{{ profile.name }},</span><br />
        {{ profile.role }}
      </h1>
    </div>

    <aside class="hero__testimonial" aria-label="Testimonial">
      <img class="hero__quote-icon" src="/img/quote-up.png" alt="" aria-hidden="true" />
      <p class="hero__testimonial-text">
        <template v-for="(line, i) in testimonialLines" :key="i">
          {{ line }}<br v-if="i < testimonialLines.length - 1" />
        </template>
      </p>
    </aside>

    <!-- Right experience (desktop/tablet) -->
    <aside class="hero__experience" aria-label="Experience">
      <div class="hero__stars" aria-label="5 stars">
        <img src="/img/star.png" alt="5 estrelas" />
      </div>
      <p class="hero__years">{{ profile.yearsExperience }}</p>
      <p class="hero__exp-label">{{ profile.experienceLabel }}</p>
    </aside>

    <!-- Photo + circle + CTA -->
    <div class="hero__photo-wrap">
      <div class="hero__circle"></div>
      <img class="hero__photo" src="/img/schneider.png" alt="Eduarda Schneider, Front-end Developer" />
      <div class="hero__cta-pill">
        <NuxtLink to="#servicesCarousel" class="hero__cta-primary">
          {{ text.ctaPortfolio }}
          <svg class="hero__cta-arrow" width="16" height="16" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M4 14L14 4M14 4H6M14 4V12" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </NuxtLink>
        <NuxtLink to="#contato" class="hero__cta-secondary">{{ text.ctaContact }}</NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { PROFILE, SITE_TEXT } from '~/data/portfolio'
const profile = PROFILE
const text = SITE_TEXT.hero
const testimonialLines = PROFILE.testimonial.split('\n')
</script>
