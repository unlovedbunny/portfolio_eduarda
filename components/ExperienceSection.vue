<template>
  <section class="experience" id="trajetoria">
    <div class="experience__inner">
      <!-- Título -->
      <h2 class="experience__title">
        {{ text.title }} <span class="experience__title--accent">{{ text.titleAccent }}</span>
      </h2>

      <!-- Timeline -->
      <div class="timeline">
        <article class="timeline__item" v-for="item in timeline" :key="item.company">
          <div class="timeline__left">
            <div class="timeline__company-wrap">
              <img class="timeline__logo" :src="item.logo" :alt="`Logo ${item.company}`" />
              <h3 class="timeline__company">{{ item.company }}</h3>
            </div>
            <p class="timeline__period">{{ item.period }}</p>
          </div>

          <div class="timeline__dot" :class="`timeline__dot--${item.dotColor}`" aria-hidden="true"></div>

          <div class="timeline__right">
            <h3 class="timeline__role">{{ item.role }}</h3>
            <p class="timeline__desc">{{ item.description }}</p>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { TIMELINE, SITE_TEXT } from '~/data/portfolio'
const timeline = TIMELINE
const text = SITE_TEXT.experience
</script>

<style scoped>
.timeline__company-wrap {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 4px;
}

.timeline__logo {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  object-fit: cover;
  background-color: #ffffff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
</style>
