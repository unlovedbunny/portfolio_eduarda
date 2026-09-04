import { _ as __nuxt_component_0 } from "./nuxt-link-BLRZBsOT.js";
import { N as NAV_ITEMS, P as PROFILE, _ as _sfc_main$2 } from "./portfolio-0N12G8vI.js";
import { defineComponent, ref, computed, withCtx, unref, createTextVNode, toDisplayString, useSSRContext, mergeProps } from "vue";
import { ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderAttr, ssrRenderClass, ssrRenderAttrs, ssrRenderSlot } from "vue/server-renderer";
import "C:/Users/NICHOLAS.LIMA/Documents/Projects/portfolio_backup/node_modules/ufo/dist/index.mjs";
import "../server.mjs";
import "C:/Users/NICHOLAS.LIMA/Documents/Projects/portfolio_backup/node_modules/ofetch/dist/node.mjs";
import "#internal/nuxt/paths";
import "C:/Users/NICHOLAS.LIMA/Documents/Projects/portfolio_backup/node_modules/hookable/dist/index.mjs";
import "C:/Users/NICHOLAS.LIMA/Documents/Projects/portfolio_backup/node_modules/unctx/dist/index.mjs";
import "C:/Users/NICHOLAS.LIMA/Documents/Projects/portfolio_backup/node_modules/h3/dist/index.mjs";
import "vue-router";
import "C:/Users/NICHOLAS.LIMA/Documents/Projects/portfolio_backup/node_modules/defu/dist/defu.mjs";
import "./v3-CSG3mOVW.js";
import "C:/Users/NICHOLAS.LIMA/Documents/Projects/portfolio_backup/node_modules/@unhead/vue/dist/index.mjs";
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "AppNavbar",
  __ssrInlineRender: true,
  setup(__props) {
    const profile = PROFILE;
    const navItems = NAV_ITEMS;
    const isOpen = ref(false);
    const leftItems = computed(() => navItems.slice(0, 3));
    const rightItems = computed(() => navItems.slice(3));
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _component_NuxtImg = _sfc_main$2;
      _push(`<!--[--><nav class="navbar"><div class="nav__brand">`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(unref(profile).name)}`);
          } else {
            return [
              createTextVNode(toDisplayString(unref(profile).name), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><ul class="nav__menu nav__menu--left"><!--[-->`);
      ssrRenderList(leftItems.value, (item) => {
        _push(`<li class="nav__item">`);
        if (item.isExternal) {
          _push(`<a${ssrRenderAttr("href", item.href)} target="_blank" class="nav__link">${ssrInterpolate(item.label)}</a>`);
        } else {
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: { path: "/", hash: item.href },
            class: "nav__link"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(item.label)}`);
              } else {
                return [
                  createTextVNode(toDisplayString(item.label), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
        }
        _push(`</li>`);
      });
      _push(`<!--]--></ul><div class="nav__logo">`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: "/img/miller.png",
        alt: "Emilly Miller Logo"
      }, null, _parent));
      _push(`</div><ul class="nav__menu nav__menu--right"><!--[-->`);
      ssrRenderList(rightItems.value, (item) => {
        _push(`<li class="nav__item">`);
        if (item.isExternal) {
          _push(`<a${ssrRenderAttr("href", item.href)} target="_blank" class="nav__link">${ssrInterpolate(item.label)}</a>`);
        } else {
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: { path: "/", hash: item.href },
            class: "nav__link"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(item.label)}`);
              } else {
                return [
                  createTextVNode(toDisplayString(item.label), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
        }
        _push(`</li>`);
      });
      _push(`<!--]--></ul><button class="nav__hamburger" aria-label="Abrir menu"><span class="${ssrRenderClass([{ "nav__hamburger-line--open": isOpen.value }, "nav__hamburger-line"])}"></span><span class="${ssrRenderClass([{ "nav__hamburger-line--open": isOpen.value }, "nav__hamburger-line"])}"></span><span class="${ssrRenderClass([{ "nav__hamburger-line--open": isOpen.value }, "nav__hamburger-line"])}"></span></button></nav><div class="${ssrRenderClass([{ "nav__mobile--open": isOpen.value }, "nav__mobile"])}"><ul class="nav__mobile-menu"><!--[-->`);
      ssrRenderList(unref(navItems), (item) => {
        _push(`<li class="nav__mobile-item">`);
        if (item.isExternal) {
          _push(`<a${ssrRenderAttr("href", item.href)} target="_blank" class="nav__mobile-link">${ssrInterpolate(item.label)}</a>`);
        } else {
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: { path: "/", hash: item.href },
            class: "nav__mobile-link",
            onClick: ($event) => isOpen.value = false
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(item.label)}`);
              } else {
                return [
                  createTextVNode(toDisplayString(item.label), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
        }
        _push(`</li>`);
      });
      _push(`<!--]--></ul></div><!--]-->`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AppNavbar.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "default",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AppNavbar = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "page" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_AppNavbar, null, null, _parent));
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=default-BMo7jeMP.js.map
