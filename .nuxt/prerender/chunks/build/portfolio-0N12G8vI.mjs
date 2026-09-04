import { defineComponent, useAttrs, ref, computed, mergeProps, unref, useSSRContext } from 'file://C:/Users/NICHOLAS.LIMA/Documents/Projects/portfolio_backup/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderSlot } from 'file://C:/Users/NICHOLAS.LIMA/Documents/Projects/portfolio_backup/node_modules/vue/server-renderer/index.mjs';
import { defu } from 'file://C:/Users/NICHOLAS.LIMA/Documents/Projects/portfolio_backup/node_modules/defu/dist/defu.mjs';
import { hasProtocol, withLeadingSlash, joinURL, parseURL, encodePath, encodeParam } from 'file://C:/Users/NICHOLAS.LIMA/Documents/Projects/portfolio_backup/node_modules/ufo/dist/index.mjs';
import { appendHeader } from 'file://C:/Users/NICHOLAS.LIMA/Documents/Projects/portfolio_backup/node_modules/h3/dist/index.mjs';
import { b as useRequestEvent, u as useNuxtApp, a as useRuntimeConfig } from './server.mjs';
import { a as useHead } from './v3-CSG3mOVW.mjs';

async function imageMeta(_ctx, url) {
  const meta = await _imageMeta(url).catch((err) => {
    console.error("Failed to get image meta for " + url, err + "");
    return {
      width: 0,
      height: 0,
      ratio: 0
    };
  });
  return meta;
}
async function _imageMeta(url) {
  {
    const imageMeta2 = await import('file://C:/Users/NICHOLAS.LIMA/Documents/Projects/portfolio_backup/node_modules/image-meta/dist/index.mjs').then((r) => r.imageMeta);
    const data = await fetch(url).then((res) => res.buffer());
    const metadata = imageMeta2(data);
    if (!metadata) {
      throw new Error(`No metadata could be extracted from the image \`${url}\`.`);
    }
    const { width, height } = metadata;
    const meta = {
      width,
      height,
      ratio: width && height ? width / height : void 0
    };
    return meta;
  }
}
function createMapper(map) {
  return (key) => {
    return key ? map[key] || key : map.missingValue;
  };
}
function createOperationsGenerator({ formatter, keyMap, joinWith = "/", valueMap } = {}) {
  if (!formatter) {
    formatter = (key, value) => `${key}=${value}`;
  }
  if (keyMap && typeof keyMap !== "function") {
    keyMap = createMapper(keyMap);
  }
  const map = valueMap || {};
  Object.keys(map).forEach((valueKey) => {
    if (typeof map[valueKey] !== "function") {
      map[valueKey] = createMapper(map[valueKey]);
    }
  });
  return (modifiers = {}) => {
    const operations = Object.entries(modifiers).filter(([_, value]) => typeof value !== "undefined").map(([key, value]) => {
      const mapper = map[key];
      if (typeof mapper === "function") {
        value = mapper(modifiers[key]);
      }
      key = typeof keyMap === "function" ? keyMap(key) : key;
      return formatter(key, value);
    });
    return operations.join(joinWith);
  };
}
function parseSize(input = "") {
  if (typeof input === "number") {
    return input;
  }
  if (typeof input === "string") {
    if (input.replace("px", "").match(/^\d+$/g)) {
      return Number.parseInt(input, 10);
    }
  }
}
function parseDensities(input = "") {
  if (input === void 0 || !input.length) {
    return [];
  }
  const densities = /* @__PURE__ */ new Set();
  for (const density of input.split(" ")) {
    const d = Number.parseInt(density.replace("x", ""));
    if (d) {
      densities.add(d);
    }
  }
  return Array.from(densities);
}
function checkDensities(densities) {
  if (densities.length === 0) {
    throw new Error("`densities` must not be empty, configure to `1` to render regular size only (DPR 1.0)");
  }
}
function parseSizes(input) {
  const sizes = {};
  if (typeof input === "string") {
    for (const entry of input.split(/[\s,]+/).filter((e) => e)) {
      const s = entry.split(":");
      if (s.length !== 2) {
        sizes["1px"] = s[0].trim();
      } else {
        sizes[s[0].trim()] = s[1].trim();
      }
    }
  } else {
    Object.assign(sizes, input);
  }
  return sizes;
}
function prerenderStaticImages(src = "", srcset = "", event) {
  if (!event) {
    return;
  }
  const paths = [
    src,
    ...srcset.split(", ").map((s) => s.trim().split(" ")[0].trim())
  ].filter((s) => s && s.includes("/_ipx/"));
  if (!paths.length) {
    return;
  }
  appendHeader(event, "x-nitro-prerender", paths.map((p) => encodeURIComponent(p)).join(", "));
}
function createImage(globalOptions) {
  const ctx = {
    options: globalOptions
  };
  const getImage2 = (input, options = {}) => {
    const image = resolveImage(ctx, input, options);
    if (globalOptions.event) {
      prerenderStaticImages(image.url, void 0, globalOptions.event);
    }
    return image;
  };
  const $img = (input, modifiers = {}, options = {}) => {
    return getImage2(input, {
      ...options,
      modifiers: defu(modifiers, options.modifiers || {})
    }).url;
  };
  for (const presetName in globalOptions.presets) {
    $img[presetName] = (source, modifiers, options) => $img(source, modifiers, { ...globalOptions.presets[presetName], ...options });
  }
  $img.options = globalOptions;
  $img.getImage = getImage2;
  $img.getMeta = (input, options) => getMeta(ctx, input, options);
  $img.getSizes = (input, options) => getSizes(ctx, input, options);
  ctx.$img = $img;
  return $img;
}
async function getMeta(ctx, input, options) {
  const image = resolveImage(ctx, input, { ...options });
  if (typeof image.getMeta === "function") {
    return await image.getMeta();
  } else {
    return await imageMeta(ctx, image.url);
  }
}
function resolveImage(ctx, input, options) {
  var _a, _b;
  if (input && typeof input !== "string") {
    throw new TypeError(`input must be a string (received ${typeof input}: ${JSON.stringify(input)})`);
  }
  if (!input || input.startsWith("data:")) {
    return {
      url: input
    };
  }
  const { provider, defaults } = getProvider(ctx, options.provider || ctx.options.provider);
  const preset = getPreset(ctx, options.preset);
  input = hasProtocol(input) ? input : withLeadingSlash(input);
  if (!provider.supportsAlias) {
    for (const base in ctx.options.alias) {
      if (input.startsWith(base)) {
        const alias = ctx.options.alias[base];
        if (alias) {
          input = joinURL(alias, input.slice(base.length));
        }
      }
    }
  }
  if (provider.validateDomains && hasProtocol(input)) {
    const inputHost = parseURL(input).host;
    if (!ctx.options.domains.find((d) => d === inputHost)) {
      return {
        url: input
      };
    }
  }
  const _options = defu(options, preset, defaults);
  _options.modifiers = { ..._options.modifiers };
  const expectedFormat = _options.modifiers.format;
  if ((_a = _options.modifiers) == null ? void 0 : _a.width) {
    _options.modifiers.width = parseSize(_options.modifiers.width);
  }
  if ((_b = _options.modifiers) == null ? void 0 : _b.height) {
    _options.modifiers.height = parseSize(_options.modifiers.height);
  }
  const image = provider.getImage(input, _options, ctx);
  image.format = image.format || expectedFormat || "";
  return image;
}
function getProvider(ctx, name) {
  const provider = ctx.options.providers[name];
  if (!provider) {
    throw new Error("Unknown provider: " + name);
  }
  return provider;
}
function getPreset(ctx, name) {
  if (!name) {
    return {};
  }
  if (!ctx.options.presets[name]) {
    throw new Error("Unknown preset: " + name);
  }
  return ctx.options.presets[name];
}
function getSizes(ctx, input, opts) {
  var _a, _b, _c, _d, _e;
  const width = parseSize((_a = opts.modifiers) == null ? void 0 : _a.width);
  const height = parseSize((_b = opts.modifiers) == null ? void 0 : _b.height);
  const sizes = parseSizes(opts.sizes);
  const densities = ((_c = opts.densities) == null ? void 0 : _c.trim()) ? parseDensities(opts.densities.trim()) : ctx.options.densities;
  checkDensities(densities);
  const hwRatio = width && height ? height / width : 0;
  const sizeVariants = [];
  const srcsetVariants = [];
  if (Object.keys(sizes).length >= 1) {
    for (const key in sizes) {
      const variant = getSizesVariant(key, String(sizes[key]), height, hwRatio, ctx);
      if (variant === void 0) {
        continue;
      }
      sizeVariants.push({
        size: variant.size,
        screenMaxWidth: variant.screenMaxWidth,
        media: `(max-width: ${variant.screenMaxWidth}px)`
      });
      for (const density of densities) {
        srcsetVariants.push({
          width: variant._cWidth * density,
          src: getVariantSrc(ctx, input, opts, variant, density)
        });
      }
    }
    finaliseSizeVariants(sizeVariants);
  } else {
    for (const density of densities) {
      const key = Object.keys(sizes)[0];
      let variant = key ? getSizesVariant(key, String(sizes[key]), height, hwRatio, ctx) : void 0;
      if (variant === void 0) {
        variant = {
          size: "",
          screenMaxWidth: 0,
          _cWidth: (_d = opts.modifiers) == null ? void 0 : _d.width,
          _cHeight: (_e = opts.modifiers) == null ? void 0 : _e.height
        };
      }
      srcsetVariants.push({
        width: density,
        src: getVariantSrc(ctx, input, opts, variant, density)
      });
    }
  }
  finaliseSrcsetVariants(srcsetVariants);
  const defaultVariant = srcsetVariants[srcsetVariants.length - 1];
  const sizesVal = sizeVariants.length ? sizeVariants.map((v) => `${v.media ? v.media + " " : ""}${v.size}`).join(", ") : void 0;
  const suffix = sizesVal ? "w" : "x";
  const srcsetVal = srcsetVariants.map((v) => `${v.src} ${v.width}${suffix}`).join(", ");
  return {
    sizes: sizesVal,
    srcset: srcsetVal,
    src: defaultVariant == null ? void 0 : defaultVariant.src
  };
}
function getSizesVariant(key, size, height, hwRatio, ctx) {
  const screenMaxWidth = ctx.options.screens && ctx.options.screens[key] || Number.parseInt(key);
  const isFluid = size.endsWith("vw");
  if (!isFluid && /^\d+$/.test(size)) {
    size = size + "px";
  }
  if (!isFluid && !size.endsWith("px")) {
    return void 0;
  }
  let _cWidth = Number.parseInt(size);
  if (!screenMaxWidth || !_cWidth) {
    return void 0;
  }
  if (isFluid) {
    _cWidth = Math.round(_cWidth / 100 * screenMaxWidth);
  }
  const _cHeight = hwRatio ? Math.round(_cWidth * hwRatio) : height;
  return {
    size,
    screenMaxWidth,
    _cWidth,
    _cHeight
  };
}
function getVariantSrc(ctx, input, opts, variant, density) {
  return ctx.$img(
    input,
    {
      ...opts.modifiers,
      width: variant._cWidth ? variant._cWidth * density : void 0,
      height: variant._cHeight ? variant._cHeight * density : void 0
    },
    opts
  );
}
function finaliseSizeVariants(sizeVariants) {
  var _a;
  sizeVariants.sort((v1, v2) => v1.screenMaxWidth - v2.screenMaxWidth);
  let previousMedia = null;
  for (let i = sizeVariants.length - 1; i >= 0; i--) {
    const sizeVariant = sizeVariants[i];
    if (sizeVariant.media === previousMedia) {
      sizeVariants.splice(i, 1);
    }
    previousMedia = sizeVariant.media;
  }
  for (let i = 0; i < sizeVariants.length; i++) {
    sizeVariants[i].media = ((_a = sizeVariants[i + 1]) == null ? void 0 : _a.media) || "";
  }
}
function finaliseSrcsetVariants(srcsetVariants) {
  srcsetVariants.sort((v1, v2) => v1.width - v2.width);
  let previousWidth = null;
  for (let i = srcsetVariants.length - 1; i >= 0; i--) {
    const sizeVariant = srcsetVariants[i];
    if (sizeVariant.width === previousWidth) {
      srcsetVariants.splice(i, 1);
    }
    previousWidth = sizeVariant.width;
  }
}
const operationsGenerator = createOperationsGenerator({
  keyMap: {
    format: "f",
    fit: "fit",
    width: "w",
    height: "h",
    resize: "s",
    quality: "q",
    background: "b"
  },
  joinWith: "&",
  formatter: (key, val) => encodeParam(key) + "_" + encodeParam(val)
});
const validateDomains = true;
const supportsAlias = true;
const getImage = (src, { modifiers = {}, baseURL } = {}, ctx) => {
  if (modifiers.width && modifiers.height) {
    modifiers.resize = `${modifiers.width}x${modifiers.height}`;
    delete modifiers.width;
    delete modifiers.height;
  }
  const params = operationsGenerator(modifiers) || "_";
  if (!baseURL) {
    baseURL = joinURL(ctx.options.nuxt.baseURL, "/_ipx");
  }
  return {
    url: joinURL(baseURL, params, encodePath(src).replace(/\/{2,}/g, "/"))
  };
};
const ipxStaticRuntime$z2ayZB4nNAG9_45S3kaUKaekDg17sBFPNqCgY7blWYwUM = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getImage,
  supportsAlias,
  validateDomains
}, Symbol.toStringTag, { value: "Module" }));
const imageOptions = {
  ...{
    "screens": {
      "xs": 320,
      "sm": 640,
      "md": 768,
      "lg": 1024,
      "xl": 1280,
      "xxl": 1536,
      "2xl": 1536
    },
    "presets": {},
    "provider": "ipxStatic",
    "domains": [],
    "alias": {},
    "densities": [
      1,
      2
    ],
    "format": [
      "webp"
    ]
  },
  providers: {
    ["ipxStatic"]: { provider: ipxStaticRuntime$z2ayZB4nNAG9_45S3kaUKaekDg17sBFPNqCgY7blWYwUM, defaults: {} }
  }
};
const useImage = (event) => {
  var _a;
  const config = useRuntimeConfig();
  const nuxtApp = useNuxtApp();
  return nuxtApp.$img || nuxtApp._img || (nuxtApp._img = createImage({
    ...imageOptions,
    event: (_a = nuxtApp.ssrContext) == null ? void 0 : _a.event,
    nuxt: {
      baseURL: config.app.baseURL
    },
    runtimeConfig: config
  }));
};
const baseImageProps = {
  // input source
  src: { type: String, required: false },
  // modifiers
  format: { type: String, required: false },
  quality: { type: [Number, String], required: false },
  background: { type: String, required: false },
  fit: { type: String, required: false },
  modifiers: { type: Object, required: false },
  // options
  preset: { type: String, required: false },
  provider: { type: String, required: false },
  sizes: { type: [Object, String], required: false },
  densities: { type: String, required: false },
  preload: {
    type: [Boolean, Object],
    required: false
  },
  // <img> attributes
  width: { type: [String, Number], required: false },
  height: { type: [String, Number], required: false },
  alt: { type: String, required: false },
  referrerpolicy: { type: String, required: false },
  usemap: { type: String, required: false },
  longdesc: { type: String, required: false },
  ismap: { type: Boolean, required: false },
  loading: {
    type: String,
    required: false,
    validator: (val) => ["lazy", "eager"].includes(val)
  },
  crossorigin: {
    type: [Boolean, String],
    required: false,
    validator: (val) => ["anonymous", "use-credentials", "", true, false].includes(val)
  },
  decoding: {
    type: String,
    required: false,
    validator: (val) => ["async", "auto", "sync"].includes(val)
  },
  // csp
  nonce: { type: [String], required: false }
};
const useBaseImage = (props) => {
  const options = computed(() => {
    return {
      provider: props.provider,
      preset: props.preset
    };
  });
  const attrs = computed(() => {
    return {
      width: parseSize(props.width),
      height: parseSize(props.height),
      alt: props.alt,
      referrerpolicy: props.referrerpolicy,
      usemap: props.usemap,
      longdesc: props.longdesc,
      ismap: props.ismap,
      crossorigin: props.crossorigin === true ? "anonymous" : props.crossorigin || void 0,
      loading: props.loading,
      decoding: props.decoding,
      nonce: props.nonce
    };
  });
  const $img = useImage();
  const modifiers = computed(() => {
    return {
      ...props.modifiers,
      width: parseSize(props.width),
      height: parseSize(props.height),
      format: props.format,
      quality: props.quality || $img.options.quality,
      background: props.background,
      fit: props.fit
    };
  });
  return {
    options,
    attrs,
    modifiers
  };
};
const imgProps = {
  ...baseImageProps,
  placeholder: { type: [Boolean, String, Number, Array], required: false },
  placeholderClass: { type: String, required: false },
  custom: { type: Boolean, required: false }
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "NuxtImg",
  __ssrInlineRender: true,
  props: imgProps,
  emits: ["load", "error"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const attrs = useAttrs();
    const isServer = true;
    const $img = useImage();
    const _base = useBaseImage(props);
    const placeholderLoaded = ref(false);
    const imgEl = ref();
    const sizes = computed(() => $img.getSizes(props.src, {
      ..._base.options.value,
      sizes: props.sizes,
      densities: props.densities,
      modifiers: {
        ..._base.modifiers.value,
        width: parseSize(props.width),
        height: parseSize(props.height)
      }
    }));
    const imgAttrs = computed(() => {
      const attrs2 = { ..._base.attrs.value, "data-nuxt-img": "" };
      if (!props.placeholder || placeholderLoaded.value) {
        attrs2.sizes = sizes.value.sizes;
        attrs2.srcset = sizes.value.srcset;
      }
      return attrs2;
    });
    const placeholder = computed(() => {
      let placeholder2 = props.placeholder;
      if (placeholder2 === "") {
        placeholder2 = true;
      }
      if (!placeholder2 || placeholderLoaded.value) {
        return false;
      }
      if (typeof placeholder2 === "string") {
        return placeholder2;
      }
      const size = Array.isArray(placeholder2) ? placeholder2 : typeof placeholder2 === "number" ? [placeholder2, placeholder2] : [10, 10];
      return $img(props.src, {
        ..._base.modifiers.value,
        width: size[0],
        height: size[1],
        quality: size[2] || 50,
        blur: size[3] || 3
      }, _base.options.value);
    });
    const mainSrc = computed(
      () => props.sizes ? sizes.value.src : $img(props.src, _base.modifiers.value, _base.options.value)
    );
    const src = computed(() => placeholder.value ? placeholder.value : mainSrc.value);
    if (props.preload) {
      const isResponsive = Object.values(sizes.value).every((v) => v);
      useHead({
        link: [{
          rel: "preload",
          as: "image",
          nonce: props.nonce,
          ...!isResponsive ? { href: src.value } : {
            href: sizes.value.src,
            imagesizes: sizes.value.sizes,
            imagesrcset: sizes.value.srcset
          },
          ...typeof props.preload !== "boolean" && props.preload.fetchPriority ? { fetchpriority: props.preload.fetchPriority } : {}
        }]
      });
    }
    {
      prerenderStaticImages(src.value, sizes.value.srcset, useRequestEvent());
    }
    const nuxtApp = useNuxtApp();
    nuxtApp.isHydrating;
    return (_ctx, _push, _parent, _attrs) => {
      if (!_ctx.custom) {
        _push(`<img${ssrRenderAttrs(mergeProps({
          ref_key: "imgEl",
          ref: imgEl,
          class: placeholder.value && !placeholderLoaded.value ? _ctx.placeholderClass : void 0
        }, {
          ...unref(isServer) ? { onerror: "this.setAttribute('data-error', 1)" } : {},
          ...imgAttrs.value,
          ...unref(attrs)
        }, { src: src.value }, _attrs))}>`);
      } else {
        ssrRenderSlot(_ctx.$slots, "default", {
          ...unref(isServer) ? { onerror: "this.setAttribute('data-error', 1)" } : {},
          imgAttrs: {
            ...imgAttrs.value,
            ...unref(attrs)
          },
          isLoaded: placeholderLoaded.value,
          src: src.value
        }, null, _push, _parent);
      }
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt/image/dist/runtime/components/NuxtImg.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const PROFILE = {
  name: "Emilly",
  role: "Dev Web",
  testimonial: "Transformo designs complexos\ndo Figma em c\xF3digo de alta\nqualidade e performance.",
  yearsExperience: "1 ano +",
  experienceLabel: "de Experi\xEAncia",
  resumeUrl: "https://drive.google.com/file/d/12TLa30BNAoI27QSkj0j07io3R5eu4nw-/view?usp=drive_link"
};
const NAV_ITEMS = [
  { label: "In\xEDcio", href: "#inicio" },
  { label: "Trajet\xF3ria", href: "#trajetoria" },
  { label: "Sobre", href: "#contratar" },
  { label: "Curr\xEDculo", href: PROFILE.resumeUrl, isExternal: true },
  { label: "Projetos", href: "#servicesCarousel" },
  { label: "Contato", href: "#contato" }
];
const TIMELINE = [
  {
    company: "XMX-Corp",
    logo: "/img/logo.jpeg",
    period: "10 de Julho de 2025 - Presente",
    role: "Dev Front-end Junior \u{1F1FA}\u{1F1F8}",
    description: "Desenvolvimento com React.js, SCSS e HTML com fidelidade de 100% ao Figma. Otimiza\xE7\xE3o t\xE9cnica de Landing Pages para tr\xE1fego pago (Core Web Vitals). \xD3tima em resolver conflitos e lidar com ambientes de alta demanda.",
    dotColor: "orange"
  },
  {
    company: "Minist\xE9rio P\xFAblico do RN",
    logo: "/img/mp-rn.png",
    period: "02 de Jun de 2025 - 07 de Jul de 2025",
    role: "Estagi\xE1ria",
    description: "Atua\xE7\xE3o no setor de tecnologia da informa\xE7\xE3o do Minist\xE9rio P\xFAblico do Rio Grande do Norte (MPRN), auxiliando nas demandas t\xE9cnicas, suporte e acompanhamento de processos internos do \xF3rg\xE3o.",
    dotColor: "dark"
  },
  {
    company: "UFRN",
    logo: "/img/ufrn.png",
    period: "2023 - Em andamento",
    role: "Bacharelado em TI",
    description: "Forma\xE7\xE3o acad\xEAmica focada em Tecnologia da Informa\xE7\xE3o. Al\xE9m do desenvolvimento de habilidades t\xE9cnicas s\xF3lidas, atuei como Vice-Presidente do Diret\xF3rio Acad\xEAmico do curso, aprimorando forte capacidade de lideran\xE7a, organiza\xE7\xE3o e comunica\xE7\xE3o assertiva.",
    dotColor: "orange"
  }
];
const SKILL_GROUPS = [
  {
    label: "Front-end",
    skills: [
      { name: "HTML5", icon: "/img/icons/html5.svg" },
      { name: "CSS3 / SCSS", icon: "/img/icons/css3.svg" },
      { name: "JavaScript", icon: "/img/icons/javascript.svg" },
      { name: "React", icon: "/img/icons/react.svg" },
      { name: "Figma to Code", icon: "/img/icons/figma.svg" },
      { name: "Next.js", icon: "/img/icons/nextjs.svg" },
      { name: "Tailwind", icon: "/img/icons/tailwindcss.svg" }
    ]
  },
  {
    label: "Back-end",
    skills: [
      { name: "Node.js", icon: "/img/icons/nodejs.svg" },
      { name: "Express", icon: "/img/icons/express.svg" },
      { name: "Python", icon: "/img/icons/python.svg" },
      { name: "FastAPI", icon: "/img/icons/fastapi.svg" }
    ]
  },
  {
    label: "Ferramentas & Dados",
    skills: [
      { name: "Git", icon: "/img/icons/git.svg" },
      { name: "GitHub", icon: "/img/icons/github.svg" },
      { name: "GitLab", icon: "/img/icons/gitlab.svg" },
      { name: "Docker", icon: "/img/icons/docker.svg" },
      { name: "MySQL", icon: "/img/icons/mysql.svg" },
      { name: "Google Sheets", icon: "/img/icons/googlesheets.svg" },
      { name: "ClickUp", icon: "/img/icons/clickup.svg" },
      { name: "Matplotlib", icon: "/img/icons/matplotlib.svg" }
    ]
  }
];
const CONTACTS = [
  { platform: "Email", href: "mailto:milleremilly5@gmail.com", icon: "/img/email.png", handle: "milleremilly5@gmail.com" },
  { platform: "LinkedIn", href: "https://www.linkedin.com/in/emilly-miller-8b624a303/", icon: "/img/linkedin.png", handle: "/in/emilly-miller-8b624a303", isExternal: true },
  { platform: "Instagram", href: "https://www.instagram.com/emillymilleer/", icon: "/img/insta.png", handle: "@emillymilleer", isExternal: true },
  { platform: "GitHub", href: "https://github.com/emmily5", icon: "/img/github.png", handle: "/emmily5", isExternal: true }
];
const PROJECTS = [
  {
    slug: "devscout",
    title: "DevScout \u{1F419}",
    eyebrow: "Intelig\xEAncia Artificial \u2022 Arquitetura Multi-Agente",
    description: "Assistente de pesquisa t\xE9cnica com arquitetura multi-agente: em vez de uma \xFAnica chamada a um LLM, tr\xEAs agentes especializados colaboram \u2014 pesquisando fontes reais na web, sintetizando uma resposta estruturada e revisando o resultado antes de entreg\xE1-lo, com autocorre\xE7\xE3o quando algo fica incompleto. Do zero ao deploy em produ\xE7\xE3o.",
    image: "/img/devscout.png",
    liveUrl: "https://devscout-multi-agente.vercel.app/",
    tags: ["Next.js", "TypeScript", "React", "LangGraph.js", "Groq", "Tavily", "Clerk", "PostgreSQL", "Drizzle ORM"],
    gallery: [
      { src: "/img/img1.png", alt: "DevScout \u2014 assistente de pesquisa t\xE9cnica multi-agente", wide: true },
      { src: "/img/img2.png", alt: "DevScout \u2014 assistente de pesquisa t\xE9cnica multi-agente", wide: true }
    ]
  },
  {
    slug: "imobiliaria-react",
    title: "Imobili\xE1ria em React",
    eyebrow: "Aplica\xE7\xE3o Web \u2022 React",
    description: "Plataforma de imobili\xE1ria constru\xEDda em React, com listagem de im\xF3veis, componentes reutiliz\xE1veis e interface responsiva. Foco em organiza\xE7\xE3o de componentes, estado e uma experi\xEAncia de navega\xE7\xE3o fluida.",
    image: "/img/imobilar.png",
    liveUrl: "https://imobilar.netlify.app/",
    tags: ["React", "JavaScript", "Componentiza\xE7\xE3o", "Responsivo"],
    gallery: [
      { src: "/img/imobilar.png", alt: "Plataforma imobili\xE1ria em React", wide: true }
    ]
  },
  {
    slug: "gestao-integrada",
    title: "Sistema Essence",
    eyebrow: "Software Local \u2022 Gest\xE3o de Vendas",
    description: "O Essence \xE9 uma ferramenta 100% offline criada para revendedores de perfumes substitu\xEDrem cadernos e planilhas. Sem mensalidade ou depend\xEAncia de internet, ele gerencia estoque, clientes e parcelas atrasadas com poucos cliques. Abaixo, um v\xEDdeo demonstrando o sistema em funcionamento.",
    image: "/img/image.png",
    driveUrl: "https://drive.google.com/file/d/1f8sen1zOLIYNFrvnZDQY7MMuZw-EOT1N/view?usp=sharing",
    video: {
      type: "iframe",
      src: "https://drive.google.com/file/d/1f8sen1zOLIYNFrvnZDQY7MMuZw-EOT1N/preview"
    },
    tags: ["Python (Flask)", "JavaScript Vanilla", "SQLite", "Offline First"],
    gallery: [
      { src: "/img/image.png", alt: "Sistema de Gest\xE3o Integrada", wide: true },
      { src: "/img/tela2.png", alt: "Sistema de Gest\xE3o Integrada", wide: true },
      { src: "/img/tela3.png", alt: "Sistema de Gest\xE3o Integrada", wide: true },
      { src: "/img/tela4.png", alt: "Sistema de Gest\xE3o Integrada", wide: true },
      { src: "/img/tela5.png", alt: "Sistema de Gest\xE3o Integrada", wide: true },
      { src: "/img/tela6.png", alt: "Sistema de Gest\xE3o Integrada", wide: true }
    ]
  },
  {
    slug: "landing-pages",
    title: "Landing Pages",
    eyebrow: "Landing Page \u2022 Tr\xE1fego Pago",
    description: "Landing page de alta convers\xE3o voltada para campanhas de tr\xE1fego pago. O foco esteve na performance t\xE9cnica \u2014 otimiza\xE7\xE3o das Core Web Vitals, carregamento r\xE1pido e uma estrutura pensada para converter visitantes em leads.",
    image: "/img/glucooff.png",
    liveUrl: "https://glucooff.com/",
    tags: ["HTML", "SCSS", "Core Web Vitals", "Performance"],
    gallery: [
      { src: "/img/glucooff.png", alt: "Landing page Glucooff", wide: true }
    ]
  },
  {
    slug: "portfolio-arquiteta",
    title: "Portf\xF3lio Arquiteta",
    eyebrow: "Site Institucional",
    description: "Site portf\xF3lio desenvolvido para a arquiteta Ana Julia Ramalho, com foco em apresentar os projetos de forma elegante e responsiva. Layout limpo, navega\xE7\xE3o fluida e desempenho otimizado em todos os dispositivos.",
    image: "/img/portifolio.png",
    liveUrl: "https://anajuliaramalhoarq.netlify.app/",
    tags: ["HTML", "CSS", "JavaScript", "Responsivo"],
    gallery: [
      { src: "/img/portifolio.png", alt: "Tela inicial do portf\xF3lio da arquiteta", wide: true }
    ]
  },
  {
    slug: "biblioteca-secoes",
    title: "Gerenciador de Se\xE7\xF5es e Componentes",
    eyebrow: "Serverless Hub \u2022 Design System",
    description: "Uma plataforma robusta desenvolvida para a empresa XMX-Corp, para catalogar, gerenciar e reutilizar trechos de c\xF3digo HTML, CSS e JavaScript. Centralize seus blocos modulares com screenshots automatizados, versionamento em banco de dados e acesso seguro para acelerar o desenvolvimento de interfaces com consist\xEAncia visual.",
    image: "/img/biblioteca.png",
    liveUrl: "https://biblioteca.biofraga.com/",
    video: {
      type: "iframe",
      src: "https://drive.google.com/file/d/1ky_B_GTdeP0vK0mZ67iDxmMD8nxUiu8F/preview"
    },
    tags: ["Cloudflare Workers", "Cloudflare D1 & R2", "Vanilla JS SPA", "HTML / SCSS / JS"],
    gallery: [
      { src: "/img/biblioteca.png", alt: "Biblioteca de se\xE7\xF5es reutiliz\xE1veis", wide: true }
    ]
  }
];

export { CONTACTS as C, NAV_ITEMS as N, PROFILE as P, SKILL_GROUPS as S, TIMELINE as T, _sfc_main as _, PROJECTS as a };
//# sourceMappingURL=portfolio-0N12G8vI.mjs.map
