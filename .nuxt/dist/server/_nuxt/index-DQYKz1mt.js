import { _ as _sfc_main$7, P as PROFILE, T as TIMELINE, S as SKILL_GROUPS, a as PROJECTS, C as CONTACTS } from "./portfolio-0N12G8vI.js";
import { _ as __nuxt_component_0 } from "./nuxt-link-BLRZBsOT.js";
import { defineComponent, mergeProps, unref, withCtx, createTextVNode, useSSRContext, ref, createVNode } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderClass, ssrRenderAttr } from "vue/server-renderer";
import { _ as __nuxt_component_2, a as __nuxt_component_1 } from "./IconArrowUpRight-DuIpt6DR.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import { a as useSeoMeta } from "./v3-CSG3mOVW.js";
import "C:/Users/NICHOLAS.LIMA/Documents/Projects/portfolio_backup/node_modules/defu/dist/defu.mjs";
import "C:/Users/NICHOLAS.LIMA/Documents/Projects/portfolio_backup/node_modules/ufo/dist/index.mjs";
import "C:/Users/NICHOLAS.LIMA/Documents/Projects/portfolio_backup/node_modules/h3/dist/index.mjs";
import "../server.mjs";
import "C:/Users/NICHOLAS.LIMA/Documents/Projects/portfolio_backup/node_modules/ofetch/dist/node.mjs";
import "#internal/nuxt/paths";
import "C:/Users/NICHOLAS.LIMA/Documents/Projects/portfolio_backup/node_modules/hookable/dist/index.mjs";
import "C:/Users/NICHOLAS.LIMA/Documents/Projects/portfolio_backup/node_modules/unctx/dist/index.mjs";
import "vue-router";
import "C:/Users/NICHOLAS.LIMA/Documents/Projects/portfolio_backup/node_modules/@unhead/vue/dist/index.mjs";
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "HeroSection",
  __ssrInlineRender: true,
  setup(__props) {
    const profile = PROFILE;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtImg = _sfc_main$7;
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<section${ssrRenderAttrs(mergeProps({
        class: "hero",
        id: "inicio"
      }, _attrs))}><div class="hero__photo">`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: "/img/bg_sobre.png",
        alt: "Emilly Miller Photo"
      }, null, _parent));
      _push(`</div><div class="hero__content"><div class="hero__badge"><span class="hero__badge-wave">👋</span> HELLO! </div><h1 class="hero__title"> I&#39;m <span>${ssrInterpolate(unref(profile).name)}</span>,<br> ${ssrInterpolate(unref(profile).role)}</h1><div class="hero__cta"><div class="hero__buttons">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "#servicesCarousel",
        class: "btn btn--primary"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Portfólio`);
          } else {
            return [
              createTextVNode("Portfólio")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "#contato",
        class: "btn btn--secondary"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Contato`);
          } else {
            return [
              createTextVNode("Contato")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div><div class="hero__testimonials"><p class="hero__testimonial-text"> &quot;${ssrInterpolate(unref(profile).testimonial.replace(/\n/g, " "))}&quot; </p></div><div class="hero__experience"><span class="hero__experience-number">${ssrInterpolate(unref(profile).yearsExperience)}</span><span class="hero__experience-text">${ssrInterpolate(unref(profile).experienceLabel)}</span></div></section>`);
    };
  }
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/HeroSection.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "ExperienceSection",
  __ssrInlineRender: true,
  setup(__props) {
    const timeline = TIMELINE;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtImg = _sfc_main$7;
      _push(`<section${ssrRenderAttrs(mergeProps({
        class: "experience",
        id: "trajetoria"
      }, _attrs))}><h2 class="experience__title">Minha Trajetória</h2><div class="experience__timeline"><!--[-->`);
      ssrRenderList(unref(timeline), (item) => {
        _push(`<div class="experience__item"><div class="${ssrRenderClass([`experience__dot--${item.dotColor}`, "experience__dot"])}"></div><div class="experience__content"><div class="experience__header"><div class="experience__company-info">`);
        _push(ssrRenderComponent(_component_NuxtImg, {
          src: item.logo,
          alt: `${item.company} logo`,
          class: "experience__logo"
        }, null, _parent));
        _push(`<h3 class="experience__company">${ssrInterpolate(item.company)}</h3></div><span class="experience__period">${ssrInterpolate(item.period)}</span></div><h4 class="experience__role">${ssrInterpolate(item.role)}</h4><p class="experience__desc">${ssrInterpolate(item.description)}</p></div></div>`);
      });
      _push(`<!--]--></div></section>`);
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ExperienceSection.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "SkillsSection",
  __ssrInlineRender: true,
  setup(__props) {
    const skillGroups = SKILL_GROUPS;
    const resumeUrl = PROFILE.resumeUrl;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _component_NuxtImg = _sfc_main$7;
      _push(`<section${ssrRenderAttrs(mergeProps({
        class: "hire",
        id: "contratar"
      }, _attrs))}><div class="hire__container"><div class="hire__header"><h2 class="hire__title">Minhas Stacks</h2><p class="hire__subtitle">Ferramentas e tecnologias que utilizo para criar soluções digitais.</p>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: unref(resumeUrl),
        target: "_blank",
        class: "btn btn--primary hire__btn"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Visualizar Currículo`);
          } else {
            return [
              createTextVNode("Visualizar Currículo")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="hire__skills"><!--[-->`);
      ssrRenderList(unref(skillGroups), (group) => {
        _push(`<div class="hire__skills-group"><h3 class="hire__skills-label">${ssrInterpolate(group.label)}</h3><div class="hire__skills-tags"><!--[-->`);
        ssrRenderList(group.skills, (skill) => {
          _push(`<div class="hire__skill-tag">`);
          _push(ssrRenderComponent(_component_NuxtImg, {
            src: skill.icon,
            alt: skill.name,
            class: "hire__skill-icon"
          }, null, _parent));
          _push(` ${ssrInterpolate(skill.name)}</div>`);
        });
        _push(`<!--]--></div></div>`);
      });
      _push(`<!--]--></div></div></section>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/SkillsSection.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
function useCarousel(totalItems) {
  const currentIndex = ref(0);
  const isDragging = ref(false);
  const startPos = ref(0);
  const currentTranslate = ref(0);
  const prevTranslate = ref(0);
  const carouselTrack = ref(null);
  const cardsPerView = ref(1);
  const getMaxIndex = () => {
    return Math.max(0, totalItems - cardsPerView.value);
  };
  const setPositionByIndex = () => {
    const maxIndex = getMaxIndex();
    if (currentIndex.value > maxIndex) currentIndex.value = maxIndex;
    if (currentIndex.value < 0) currentIndex.value = 0;
    if (carouselTrack.value && carouselTrack.value.children.length > 0) {
      const card = carouselTrack.value.children[0];
      const gap = parseInt((void 0).getComputedStyle(carouselTrack.value).gap) || 20;
      const moveAmount = card.offsetWidth + gap;
      currentTranslate.value = currentIndex.value * -moveAmount;
      prevTranslate.value = currentTranslate.value;
      setSliderPosition();
    }
  };
  const setSliderPosition = () => {
    if (carouselTrack.value) {
      carouselTrack.value.style.transform = `translateX(${currentTranslate.value}px)`;
    }
  };
  const touchStart = (event) => {
    isDragging.value = true;
    startPos.value = getPositionX(event);
    if (carouselTrack.value) {
      carouselTrack.value.style.transition = "none";
    }
  };
  const touchMove = (event) => {
    if (!isDragging.value) return;
    const currentPosition = getPositionX(event);
    currentTranslate.value = prevTranslate.value + currentPosition - startPos.value;
    setSliderPosition();
  };
  const touchEnd = () => {
    isDragging.value = false;
    const movedBy = currentTranslate.value - prevTranslate.value;
    if (movedBy < -100 && currentIndex.value < getMaxIndex()) currentIndex.value += 1;
    if (movedBy > 100 && currentIndex.value > 0) currentIndex.value -= 1;
    if (carouselTrack.value) {
      carouselTrack.value.style.transition = "transform 0.3s ease-out";
    }
    setPositionByIndex();
  };
  const getPositionX = (event) => {
    return event.type.includes("mouse") ? event.pageX : event.touches[0].clientX;
  };
  const next = () => {
    if (currentIndex.value < getMaxIndex()) {
      currentIndex.value += 1;
      setPositionByIndex();
    }
  };
  const prev = () => {
    if (currentIndex.value > 0) {
      currentIndex.value -= 1;
      setPositionByIndex();
    }
  };
  const goTo = (index) => {
    currentIndex.value = index;
    setPositionByIndex();
  };
  return {
    currentIndex,
    carouselTrack,
    touchStart,
    touchMove,
    touchEnd,
    next,
    prev,
    goTo,
    cardsPerView,
    getMaxIndex
  };
}
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "ProjectCard",
  __ssrInlineRender: true,
  props: {
    project: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _component_IconsIconArrowUpRight = __nuxt_component_2;
      const _component_NuxtImg = _sfc_main$7;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "services__card-inner" }, _attrs))}><div class="services__card-content"><div class="services__card-tags"><!--[-->`);
      ssrRenderList(__props.project.tags.slice(0, 2), (tag) => {
        _push(`<span class="services__card-tag">${ssrInterpolate(tag)}</span>`);
      });
      _push(`<!--]--></div><h3 class="services__card-title">${ssrInterpolate(__props.project.title)}</h3>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: `/projetos/${__props.project.slug}`,
        class: "services__card-link"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Ver Projeto `);
            _push2(ssrRenderComponent(_component_IconsIconArrowUpRight, null, null, _parent2, _scopeId));
          } else {
            return [
              createTextVNode(" Ver Projeto "),
              createVNode(_component_IconsIconArrowUpRight)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="services__card-image">`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: __props.project.image,
        alt: __props.project.title,
        loading: "lazy"
      }, null, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ProjectCard.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "ProjectsCarousel",
  __ssrInlineRender: true,
  setup(__props) {
    const projects = PROJECTS;
    const { currentIndex, cardsPerView } = useCarousel(projects.length);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_IconsIconChevron = __nuxt_component_1;
      _push(`<section${ssrRenderAttrs(mergeProps({
        class: "services",
        id: "servicesCarousel"
      }, _attrs))} data-v-5068a036><div class="services__header" data-v-5068a036><h2 class="services__title" data-v-5068a036>Meus Projetos Recentes</h2><div class="services__controls" data-v-5068a036><button class="services__control-btn prev" aria-label="Previous" data-v-5068a036>`);
      _push(ssrRenderComponent(_component_IconsIconChevron, null, null, _parent));
      _push(`</button><button class="services__control-btn next" aria-label="Next" data-v-5068a036>`);
      _push(ssrRenderComponent(_component_IconsIconChevron, { class: "rotate-180" }, null, _parent));
      _push(`</button></div></div><div class="services__carousel" data-v-5068a036><div class="services__track" data-v-5068a036><!--[-->`);
      ssrRenderList(unref(projects), (project) => {
        _push(`<div class="services__card" data-v-5068a036>`);
        _push(ssrRenderComponent(_sfc_main$3, { project }, null, _parent));
        _push(`</div>`);
      });
      _push(`<!--]--></div></div><div class="services__dots" data-v-5068a036><!--[-->`);
      ssrRenderList(Math.max(1, unref(projects).length - unref(cardsPerView) + 1), (_, index) => {
        _push(`<button class="${ssrRenderClass([{ active: unref(currentIndex) === index }, "services__dot"])}" data-v-5068a036></button>`);
      });
      _push(`<!--]--></div></section>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ProjectsCarousel.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-5068a036"]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "ContactSection",
  __ssrInlineRender: true,
  setup(__props) {
    const contacts = CONTACTS;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtImg = _sfc_main$7;
      const _component_IconsIconArrowUpRight = __nuxt_component_2;
      _push(`<section${ssrRenderAttrs(mergeProps({
        class: "contact",
        id: "contato"
      }, _attrs))}><div class="contact__container"><div class="contact__content"><h2 class="contact__title">Vamos trabalhar juntos!</h2><p class="contact__desc">Estou disponível para novos projetos e oportunidades. Entre em contato através de uma das plataformas abaixo.</p></div><div class="contact__links"><!--[-->`);
      ssrRenderList(unref(contacts), (link) => {
        _push(`<a${ssrRenderAttr("href", link.href)}${ssrRenderAttr("target", link.isExternal ? "_blank" : void 0)} class="contact__card"><div class="contact__card-icon">`);
        _push(ssrRenderComponent(_component_NuxtImg, {
          src: link.icon,
          alt: link.platform
        }, null, _parent));
        _push(`</div><div class="contact__card-info"><span class="contact__card-platform">${ssrInterpolate(link.platform)}</span><span class="contact__card-handle">${ssrInterpolate(link.handle)}</span></div>`);
        _push(ssrRenderComponent(_component_IconsIconArrowUpRight, { class: "contact__card-arrow" }, null, _parent));
        _push(`</a>`);
      });
      _push(`<!--]--></div></div></section>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ContactSection.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useSeoMeta({
      title: "Portfólio | Emilly Miller",
      description: "Portfólio de Emilly Miller, Desenvolvedora Web Front-end. Transformo designs complexos do Figma em código de alta qualidade e performance.",
      ogTitle: "Portfólio | Emilly Miller",
      ogDescription: "Portfólio de Emilly Miller, Desenvolvedora Web Front-end.",
      ogImage: "/img/miller.png",
      ogType: "website"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_HeroSection = _sfc_main$6;
      const _component_ExperienceSection = _sfc_main$5;
      const _component_SkillsSection = _sfc_main$4;
      const _component_ProjectsCarousel = __nuxt_component_3;
      const _component_ContactSection = _sfc_main$1;
      _push(`<main${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_HeroSection, null, null, _parent));
      _push(ssrRenderComponent(_component_ExperienceSection, null, null, _parent));
      _push(ssrRenderComponent(_component_SkillsSection, null, null, _parent));
      _push(ssrRenderComponent(_component_ProjectsCarousel, null, null, _parent));
      _push(ssrRenderComponent(_component_ContactSection, null, null, _parent));
      _push(`</main>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index-DQYKz1mt.js.map
