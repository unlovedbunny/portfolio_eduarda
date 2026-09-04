<template>
  <section class="hire">
    <div class="hire__card">
      <div class="hire__photo-wrap">
        <div class="hire__blob" aria-hidden="true"></div>
        <img class="hire__photo" src="/img/miller.png" alt="Emilly, Front-end Developer" />
      </div>

      <div class="hire__content" id="contratar">
        <h2 class="hire__title">
          Minhas <span class="hire__title--accent">Stacks</span>!
        </h2>

        <div class="hire__skills">
          <div class="hire__skills-group" v-for="group in skillGroups" :key="group.label">
            <h3 class="hire__skills-label">{{ group.label }}</h3>
            <div class="hire__skills-tags">
              <span class="hire__skill-tag" v-for="skill in group.skills" :key="skill.name">
                <img class="hire__skill-icon" :src="skill.icon" alt="" />{{ skill.name }}
              </span>
            </div>
          </div>
        </div>

        <!-- CTA -->
        <a class="hire__cta" href="#contato">Fale Comigo</a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { SKILL_GROUPS } from '~/data/portfolio'
const skillGroups = SKILL_GROUPS
</script>
