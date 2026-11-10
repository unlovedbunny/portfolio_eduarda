<template>
  <section class="hire">
    <div class="hire__card">
      <div class="hire__photo-wrap">
        <div class="hire__blob" aria-hidden="true"></div>
        <img class="hire__photo" src="/img/schneider2.png" alt="Eduarda, Front-end Developer" />
        
        <!-- Borogodó Badge with Image -->
        <div class="hire__borogodo">
          <div class="hire__borogodo-inner">
            <img src="~/assets/img/kanagawa.jpg" alt="Kanagawa" class="hire__borogodo-img" />
            <svg viewBox="0 0 100 100" class="hire__borogodo-text">
              <path id="circlePath" d="M 50, 50 m -38, 0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0" fill="transparent" />
              <text>
                <textPath href="#circlePath" startOffset="0%">
                  {{ text.badge }}
                </textPath>
              </text>
            </svg>
          </div>
        </div>
      </div>

      <div class="hire__content" id="contratar">
        <h2 class="hire__title">
          {{ text.title }} <span class="hire__title--accent">{{ text.titleAccent }}</span>{{ text.titleSuffix }}
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
        <a class="hire__cta" href="#contato">{{ text.cta }}</a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { SKILL_GROUPS, SITE_TEXT } from '~/data/portfolio'
const skillGroups = SKILL_GROUPS
const text = SITE_TEXT.skills
</script>
