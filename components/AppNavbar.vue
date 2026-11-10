<template>
  <header class="site-header" id="inicio">
    <nav class="navbar" :aria-label="text.navAriaLabel">
      <!-- Mobile: brand left -->
      <div class="nav__brand">
        <img class="nav__logo-icon" src="/img/favicon.png" :alt="text.logoAlt" />
      </div>

      <div class="nav__group nav__group--left">
        <template v-for="item in leftItems" :key="item.href">
          <a v-if="item.isExternal" class="nav__item" :href="item.href" target="_blank" rel="noopener noreferrer">{{ item.label }}</a>
          <NuxtLink v-else :to="{ path: '/', hash: item.href }" class="nav__item">{{ item.label }}</NuxtLink>
        </template>
      </div>

      <div class="nav__group nav__group--center">
        <img class="nav__logo-icon" src="/img/favicon.jpg" alt="" aria-hidden="true" />
      </div>

      <div class="nav__group nav__group--right">
        <template v-for="item in rightItems" :key="item.href">
          <a v-if="item.isExternal" class="nav__item" :href="item.href" target="_blank" rel="noopener noreferrer">{{ item.label }}</a>
          <NuxtLink v-else :to="{ path: '/', hash: item.href }" class="nav__item">{{ item.label }}</NuxtLink>
        </template>
      </div>

      <button class="nav__hamburger" :class="{ 'is-active': isOpen }" id="hamburger" :aria-label="text.openMenuLabel" :aria-expanded="isOpen" @click="isOpen = !isOpen">
        <span></span><span></span><span></span>
      </button>
    </nav>

    <!-- Seletor de idiomas independente, posicionado fora e à direita da barra de navegação -->
    <LanguageSelector />
  </header>

  <div class="nav__drawer" :class="{ 'is-open': isOpen }" id="drawer" :aria-hidden="!isOpen">
    <template v-for="item in navItems" :key="item.href">
      <a v-if="item.isExternal" class="nav__item" :href="item.href" target="_blank" @click="isOpen = false">{{ item.label }}</a>
      <NuxtLink v-else :to="{ path: '/', hash: item.href }" class="nav__item" @click="isOpen = false">{{ item.label }}</NuxtLink>
    </template>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useI18n } from '~/composables/useI18n'

const { navItems, t } = useI18n()
const text = computed(() => t.value.navbar)
const isOpen = ref(false)

const leftItems = computed(() => navItems.value.slice(0, 3))
const rightItems = computed(() => navItems.value.slice(3))
</script>
