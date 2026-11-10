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
import { computed } from 'vue'
import { useI18n } from '~/composables/useI18n'

const { t } = useI18n()
const text = computed(() => t.value.projectFooter)
</script>
