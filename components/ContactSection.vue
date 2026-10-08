<template>
  <section class="contact" id="contato">
    <div class="contact__inner">
      <!-- Cabeçalho -->
      <header class="contact__header">
        <h2 class="contact__title">
          Fale <span class="contact__title--accent">comigo</span>
        </h2>
        <p class="contact__desc">
          Vamos conversar sobre o seu próximo projeto. Me encontre em qualquer
          uma dessas redes.
        </p>
      </header>

      <div class="contact__grid">
        <a
          v-for="link in contacts"
          :key="link.platform"
          class="contact-card"
          :href="link.href"
          :target="link.isExternal ? '_blank' : undefined"
          :rel="link.isExternal ? 'noopener noreferrer' : undefined"
          :aria-label="`Open ${link.platform}`"
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
import { CONTACTS } from '~/data/portfolio'
const contacts = CONTACTS
</script>
