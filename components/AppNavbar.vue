<template>
  <nav class="navbar">
    <!-- Mobile: brand left -->
    <div class="nav__brand">
      <img class="nav__logo-icon" src="/img/favicon.png" :alt="text.logoAlt" />
    </div>

    <div class="nav__group nav__group--left">
      <template v-for="item in leftItems" :key="item.label">
        <a v-if="item.isExternal" class="nav__item" :href="item.href" target="_blank" rel="noopener noreferrer">{{ item.label }}</a>
        <NuxtLink v-else :to="{ path: '/', hash: item.href }" class="nav__item">{{ item.label }}</NuxtLink>
      </template>
    </div>

    <div class="nav__group nav__group--center">
      <img class="nav__logo-icon" src="/img/favicon.png" alt="" aria-hidden="true" />
    </div>

    <div class="nav__group nav__group--right">
      <template v-for="item in rightItems" :key="item.label">
        <a v-if="item.isExternal" class="nav__item" :href="item.href" target="_blank" rel="noopener noreferrer">{{ item.label }}</a>
        <NuxtLink v-else :to="{ path: '/', hash: item.href }" class="nav__item">{{ item.label }}</NuxtLink>
      </template>
    </div>

    <button class="nav__hamburger" :class="{ 'is-active': isOpen }" id="hamburger" :aria-label="text.openMenuLabel" :aria-expanded="isOpen" @click="isOpen = !isOpen">
      <span></span><span></span><span></span>
    </button>
  </nav>

  <div class="nav__drawer" :class="{ 'is-open': isOpen }" id="drawer" :aria-hidden="!isOpen">
    <template v-for="item in navItems" :key="item.label">
      <a v-if="item.isExternal" class="nav__item" :href="item.href" target="_blank" @click="isOpen = false">{{ item.label }}</a>
      <NuxtLink v-else :to="{ path: '/', hash: item.href }" class="nav__item" @click="isOpen = false">{{ item.label }}</NuxtLink>
    </template>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { NAV_ITEMS, SITE_TEXT } from '~/data/portfolio'

const navItems = NAV_ITEMS
const text = SITE_TEXT.navbar
const isOpen = ref(false)

const leftItems = computed(() => navItems.slice(0, 3))
const rightItems = computed(() => navItems.slice(3))
</script>
