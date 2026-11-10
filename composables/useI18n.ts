import { computed, watch } from 'vue'
import ptBR from '~/locales/pt-BR/translation.json'
import en from '~/locales/en/translation.json'
import es from '~/locales/es/translation.json'
import it from '~/locales/it/translation.json'
import {
  PROFILE,
  TIMELINE,
  SKILL_GROUPS,
  CONTACTS,
  PROJECTS
} from '~/data/portfolio'
import type {
  ProfileData,
  NavItem,
  TimelineItem,
  SkillGroup,
  ContactLink,
  Project
} from '~/types/portfolio'

export type LocaleCode = 'pt-BR' | 'en' | 'es' | 'it'
export type TranslationSchema = typeof ptBR

export interface LocaleOption {
  code: LocaleCode
  /** Nome nativo para acessibilidade (leitores de tela) */
  nativeName: string
}

export const SUPPORTED_LOCALES: LocaleOption[] = [
  { code: 'pt-BR', nativeName: 'Português (Brasil)' },
  { code: 'en', nativeName: 'English' },
  { code: 'es', nativeName: 'Español' },
  { code: 'it', nativeName: 'Italiano' }
]

export const DEFAULT_LOCALE: LocaleCode = 'pt-BR'
export const LOCALE_STORAGE_KEY = 'portfolio-eduarda-locale'

const TRANSLATIONS: Record<LocaleCode, TranslationSchema> = {
  'pt-BR': ptBR,
  en,
  es,
  it
}

const SKILL_GROUP_KEYS: (keyof TranslationSchema['skills']['groups'])[] = [
  'programmingLanguages',
  'webFrameworks',
  'aiData',
  'toolsInfra',
  'backend',
  'toolsData'
]

const CONTACT_PLATFORM_KEYS: (keyof TranslationSchema['contact']['platforms'])[] = [
  'email',
  'linkedin',
  'instagram',
  'github',
  'lattes'
]

export function isValidLocale(value: unknown): value is LocaleCode {
  return (
    typeof value === 'string' &&
    (value === 'pt-BR' || value === 'en' || value === 'es' || value === 'it')
  )
}

/**
 * Gerenciador central de internacionalização (i18n) do portfólio.
 * - Mantém estado global reativo entre todas as seções e páginas sem recarregar.
 * - Persiste a escolha no localStorage e sincroniza o atributo `lang` do `<html>`.
 * - Preserva dados estruturais (imagens, ícones, links externos) combinados às traduções.
 */
export function useI18n() {
  const locale = useState<LocaleCode>('portfolio-locale', () => DEFAULT_LOCALE)
  const initialized = useState<boolean>('portfolio-locale-init', () => false)

  function applyDocumentLang(code: LocaleCode) {
    if (import.meta.client && typeof document !== 'undefined') {
      document.documentElement.setAttribute('lang', code)
    }
  }

  function initLocale() {
    if (!import.meta.client || initialized.value) return
    initialized.value = true
    try {
      const saved = window.localStorage.getItem(LOCALE_STORAGE_KEY)
      if (isValidLocale(saved)) {
        locale.value = saved
      }
    } catch {
      // Ambientes com bloqueio a localStorage mantêm o idioma padrão (pt-BR)
    }
    applyDocumentLang(locale.value)
  }

  function setLocale(next: LocaleCode) {
    if (!isValidLocale(next)) return
    locale.value = next
    applyDocumentLang(next)
    if (import.meta.client) {
      try {
        window.localStorage.setItem(LOCALE_STORAGE_KEY, next)
      } catch {
        // Ignora erro caso armazenamento esteja indisponível
      }
    }
  }

  if (import.meta.client && !initialized.value) {
    initLocale()
  }

  if (import.meta.client) {
    watch(locale, (val) => {
      applyDocumentLang(val)
    })
  }

  const t = computed<TranslationSchema>(() => TRANSLATIONS[locale.value] ?? TRANSLATIONS[DEFAULT_LOCALE])

  const profile = computed<ProfileData>(() => ({
    ...PROFILE,
    name: t.value.hero.name,
    role: t.value.hero.role,
    testimonial: t.value.hero.testimonial,
    yearsExperience: t.value.hero.yearsExperience,
    experienceLabel: t.value.hero.experienceLabel
  }))

  const navItems = computed<NavItem[]>(() => [
    { label: t.value.navbar.items.home, href: '#inicio' },
    { label: t.value.navbar.items.trajectory, href: '#trajetoria' },
    { label: t.value.navbar.items.about, href: '#contratar' },
    { label: t.value.navbar.items.resume, href: PROFILE.resumeUrl, isExternal: true },
    { label: t.value.navbar.items.projects, href: '#servicesCarousel' },
    { label: t.value.navbar.items.contact, href: '#contato' }
  ])

  const timeline = computed<TimelineItem[]>(() =>
    TIMELINE.map((item, idx) => {
      const localized = t.value.experience.items[idx]
      if (!localized) return item
      return {
        ...item,
        company: localized.company,
        period: localized.period,
        role: localized.role,
        description: localized.description
      }
    })
  )

  const skillGroups = computed<SkillGroup[]>(() =>
    SKILL_GROUPS.map((group, idx) => {
      const key = SKILL_GROUP_KEYS[idx]
      return {
        ...group,
        label: key ? t.value.skills.groups[key] : group.label
      }
    })
  )

  const contacts = computed<ContactLink[]>(() =>
    CONTACTS.map((contact, idx) => {
      const key = CONTACT_PLATFORM_KEYS[idx]
      return {
        ...contact,
        platform: key ? t.value.contact.platforms[key] : contact.platform
      }
    })
  )

  const projects = computed<Project[]>(() =>
    PROJECTS.map((project) => {
      const itemsMap = t.value.projects.items as Record<string, any>
      const localized = itemsMap[project.slug]
      if (!localized) return project

      return {
        ...project,
        title: localized.title ?? project.title,
        eyebrow: localized.eyebrow ?? project.eyebrow,
        description: localized.description ?? project.description,
        tags: localized.tags ?? project.tags,
        links: localized.links ?? project.links,
        sections: localized.sections ?? project.sections,
        gallery: project.gallery.map((g, idx) => ({
          ...g,
          alt: localized.galleryAlts?.[idx] ?? g.alt
        }))
      }
    })
  )

  return {
    locale,
    locales: SUPPORTED_LOCALES,
    t,
    setLocale,
    initLocale,
    profile,
    navItems,
    timeline,
    skillGroups,
    contacts,
    projects
  }
}

