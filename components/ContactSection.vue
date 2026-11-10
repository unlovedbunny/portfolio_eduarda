<template>
  <section class="contact" id="contato">
    <!-- Mãos com efeito dither (OriginKit hero-40), atrás de todo o conteúdo -->
    <div class="contact__hands" aria-hidden="true">
      <DitherReveal src="/img/white-hands.png" tint="#fd853a" :focus-y="48" :shift-right="0.03" />
    </div>

    <div class="contact__inner">
      <!-- Cabeçalho -->
      <header class="contact__header">
        <h2 class="contact__title">
          {{ text.title }} <span class="contact__title--accent">{{ text.titleAccent }}</span>
        </h2>
        <p class="contact__desc">{{ text.description }}</p>
      </header>

      <div class="contact__grid">
        <a
          v-for="link in contacts"
          :key="link.href"
          class="contact-card"
          :href="link.href"
          :target="link.isExternal ? '_blank' : undefined"
          :rel="link.isExternal ? 'noopener noreferrer' : undefined"
          :aria-label="`${text.openPlatformAria} ${link.platform}`"
        >
          <div class="contact-card__icon" :data-tooltip="link.platform">
            <img :src="link.icon" alt="" />
          </div>
          <div class="contact-card__info">
            <span class="contact-card__label">{{ link.platform }}</span>
            <span class="contact-card__handle">{{ link.handle }}</span>
          </div>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from '~/composables/useI18n'

const { contacts, t } = useI18n()
const text = computed(() => t.value.contact)
</script>
