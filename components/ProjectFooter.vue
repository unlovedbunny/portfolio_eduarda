<template>
  <footer class="pp-footer">
    <div class="pp-wrap">
      <h2 class="pp-footer__title">{{ text.title }}</h2>
      <p class="pp-footer__desc">{{ text.description }}</p>
      <NuxtLink to="/#contato" class="pp-btn pp-btn--primary">{{ text.button }}</NuxtLink>
    </div>
  </footer>
</template>

<script setup lang="ts">
// footer component for project pages
import { SITE_TEXT } from '~/data/portfolio'
const text = SITE_TEXT.projectFooter
</script>
