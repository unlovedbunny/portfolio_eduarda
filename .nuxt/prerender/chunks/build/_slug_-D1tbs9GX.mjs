import { _ as __nuxt_component_0 } from './nuxt-link-BLRZBsOT.mjs';
import { a as __nuxt_component_1, _ as __nuxt_component_2 } from './IconArrowUpRight-DuIpt6DR.mjs';
import { defineComponent, computed, mergeProps, withCtx, createTextVNode, createVNode, unref, ref, useSSRContext } from 'file://C:/Users/NICHOLAS.LIMA/Documents/Projects/portfolio_backup/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderAttr, ssrRenderClass } from 'file://C:/Users/NICHOLAS.LIMA/Documents/Projects/portfolio_backup/node_modules/vue/server-renderer/index.mjs';
import { a as PROJECTS, _ as _sfc_main$4 } from './portfolio-0N12G8vI.mjs';
import { useRoute } from 'file://C:/Users/NICHOLAS.LIMA/Documents/Projects/portfolio_backup/node_modules/vue-router/vue-router.node.mjs';
import { u as useSeoMeta } from './v3-CSG3mOVW.mjs';
import 'file://C:/Users/NICHOLAS.LIMA/Documents/Projects/portfolio_backup/node_modules/ufo/dist/index.mjs';
import './server.mjs';
import 'file://C:/Users/NICHOLAS.LIMA/Documents/Projects/portfolio_backup/node_modules/ofetch/dist/node.mjs';
import '../_/nitro.mjs';
import 'file://C:/Users/NICHOLAS.LIMA/Documents/Projects/portfolio_backup/node_modules/h3/dist/index.mjs';
import 'file://C:/Users/NICHOLAS.LIMA/Documents/Projects/portfolio_backup/node_modules/destr/dist/index.mjs';
import 'file://C:/Users/NICHOLAS.LIMA/Documents/Projects/portfolio_backup/node_modules/hookable/dist/index.mjs';
import 'file://C:/Users/NICHOLAS.LIMA/Documents/Projects/portfolio_backup/node_modules/node-mock-http/dist/index.mjs';
import 'file://C:/Users/NICHOLAS.LIMA/Documents/Projects/portfolio_backup/node_modules/klona/dist/index.mjs';
import 'file://C:/Users/NICHOLAS.LIMA/Documents/Projects/portfolio_backup/node_modules/defu/dist/defu.mjs';
import 'file://C:/Users/NICHOLAS.LIMA/Documents/Projects/portfolio_backup/node_modules/scule/dist/index.mjs';
import 'file://C:/Users/NICHOLAS.LIMA/Documents/Projects/portfolio_backup/node_modules/radix3/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file://C:/Users/NICHOLAS.LIMA/Documents/Projects/portfolio_backup/node_modules/pathe/dist/index.mjs';
import 'file://C:/Users/NICHOLAS.LIMA/Documents/Projects/portfolio_backup/node_modules/ipx/dist/index.mjs';
import 'file://C:/Users/NICHOLAS.LIMA/Documents/Projects/portfolio_backup/node_modules/unstorage/dist/index.mjs';
import 'file://C:/Users/NICHOLAS.LIMA/Documents/Projects/portfolio_backup/node_modules/unstorage/drivers/fs.mjs';
import 'file:///C:/Users/NICHOLAS.LIMA/Documents/Projects/portfolio_backup/node_modules/@nuxt/nitro-server/dist/runtime/utils/cache-driver.js';
import 'file://C:/Users/NICHOLAS.LIMA/Documents/Projects/portfolio_backup/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file://C:/Users/NICHOLAS.LIMA/Documents/Projects/portfolio_backup/node_modules/ohash/dist/index.mjs';
import 'file://C:/Users/NICHOLAS.LIMA/Documents/Projects/portfolio_backup/node_modules/unctx/dist/index.mjs';
import './_plugin-vue_export-helper-1tPrXgE0.mjs';
import '../_/renderer.mjs';
import 'file://C:/Users/NICHOLAS.LIMA/Documents/Projects/portfolio_backup/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file://C:/Users/NICHOLAS.LIMA/Documents/Projects/portfolio_backup/node_modules/unhead/dist/server.mjs';
import 'node:async_hooks';
import 'file://C:/Users/NICHOLAS.LIMA/Documents/Projects/portfolio_backup/node_modules/devalue/index.js';
import 'file://C:/Users/NICHOLAS.LIMA/Documents/Projects/portfolio_backup/node_modules/unhead/dist/plugins.mjs';
import 'file://C:/Users/NICHOLAS.LIMA/Documents/Projects/portfolio_backup/node_modules/unhead/dist/utils.mjs';

const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "ProjectHero",
  __ssrInlineRender: true,
  props: {
    project: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _component_IconsIconChevron = __nuxt_component_1;
      const _component_IconsIconArrowUpRight = __nuxt_component_2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "pp-header" }, _attrs))}><div class="pp-header__content"><span class="pp-header__eyebrow">${ssrInterpolate(__props.project.eyebrow)}</span><h1 class="pp-header__title">${ssrInterpolate(__props.project.title)}</h1><p class="pp-header__desc">${ssrInterpolate(__props.project.description)}</p><div class="pp-header__tags"><!--[-->`);
      ssrRenderList(__props.project.tags, (tag) => {
        _push(`<span class="pp-header__tag">${ssrInterpolate(tag)}</span>`);
      });
      _push(`<!--]--></div></div><div class="pp-header__actions">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "pp-btn pp-btn--secondary"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_IconsIconChevron, null, null, _parent2, _scopeId));
            _push2(` Voltar `);
          } else {
            return [
              createVNode(_component_IconsIconChevron),
              createTextVNode(" Voltar ")
            ];
          }
        }),
        _: 1
      }, _parent));
      if (__props.project.liveUrl) {
        _push(`<a${ssrRenderAttr("href", __props.project.liveUrl)} target="_blank" class="pp-btn pp-btn--primary"> Acessar online `);
        _push(ssrRenderComponent(_component_IconsIconArrowUpRight, null, null, _parent));
        _push(`</a>`);
      } else {
        _push(`<!---->`);
      }
      if (__props.project.driveUrl) {
        _push(`<a${ssrRenderAttr("href", __props.project.driveUrl)} target="_blank" class="pp-btn pp-btn--primary"> Acessar online `);
        _push(ssrRenderComponent(_component_IconsIconArrowUpRight, null, null, _parent));
        _push(`</a>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ProjectHero.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
function useLightbox() {
  const isOpen = ref(false);
  const currentImage = ref("");
  const openLightbox = (src) => {
    currentImage.value = src;
    isOpen.value = true;
    (void 0).body.style.overflow = "hidden";
  };
  const closeLightbox = () => {
    isOpen.value = false;
    currentImage.value = "";
    (void 0).body.style.overflow = "";
  };
  return {
    isOpen,
    currentImage,
    openLightbox,
    closeLightbox
  };
}
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "ProjectGallery",
  __ssrInlineRender: true,
  props: {
    project: {}
  },
  setup(__props) {
    const { isOpen, currentImage, openLightbox } = useLightbox();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtImg = _sfc_main$4;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "pp-gallery" }, _attrs))}><!--[-->`);
      ssrRenderList(__props.project.gallery, (item, index) => {
        _push(`<div class="${ssrRenderClass([{ "pp-gallery__item--wide": item.wide }, "pp-gallery__item"])}">`);
        _push(ssrRenderComponent(_component_NuxtImg, {
          src: item.src,
          alt: item.alt,
          onClick: ($event) => unref(openLightbox)(item.src),
          loading: "lazy"
        }, null, _parent));
        _push(`</div>`);
      });
      _push(`<!--]-->`);
      if (__props.project.video) {
        _push(`<div class="pp-gallery__item pp-gallery__item--wide">`);
        if (__props.project.video.type === "iframe") {
          _push(`<iframe${ssrRenderAttr("src", __props.project.video.src)} allow="autoplay" allowfullscreen></iframe>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="${ssrRenderClass([{ "pp-lightbox--active": unref(isOpen) }, "pp-lightbox"])}"><button class="pp-lightbox__close" aria-label="Fechar">\xD7</button><img class="pp-lightbox__img"${ssrRenderAttr("src", unref(currentImage))} alt="Imagem ampliada"></div></div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ProjectGallery.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "ProjectFooter",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "pp-footer" }, _attrs))}><div class="pp-footer__cta"><h2>Gostou do que viu?</h2><p>Estou dispon\xEDvel para novos projetos. Vamos construir algo incr\xEDvel juntos!</p>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/#contato",
        class: "pp-btn pp-btn--primary"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Entrar em Contato`);
          } else {
            return [
              createTextVNode("Entrar em Contato")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ProjectFooter.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[slug]",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const project = computed(() => PROJECTS.find((p) => p.slug === route.params.slug));
    if (project.value) {
      useSeoMeta({
        title: `${project.value.title} | Emilly Miller`,
        description: project.value.description,
        ogTitle: `${project.value.title} | Emilly Miller`,
        ogImage: project.value.image
      });
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ProjectHero = _sfc_main$3;
      const _component_ProjectGallery = _sfc_main$2;
      const _component_ProjectFooter = _sfc_main$1;
      const _component_NuxtLink = __nuxt_component_0;
      if (project.value) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "pp-container" }, _attrs))}>`);
        _push(ssrRenderComponent(_component_ProjectHero, { project: project.value }, null, _parent));
        _push(ssrRenderComponent(_component_ProjectGallery, { project: project.value }, null, _parent));
        _push(ssrRenderComponent(_component_ProjectFooter, null, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<div${ssrRenderAttrs(_attrs)}><h1>Projeto n\xE3o encontrado</h1>`);
        _push(ssrRenderComponent(_component_NuxtLink, { to: "/" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Voltar ao in\xEDcio`);
            } else {
              return [
                createTextVNode("Voltar ao in\xEDcio")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      }
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/projetos/[slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_slug_-D1tbs9GX.mjs.map
