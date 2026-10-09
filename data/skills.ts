import type { SkillGroup } from '~/types/portfolio'

/** Stacks agrupadas por categoria. Para adicionar uma tecnologia, inclua uma linha no grupo desejado. */
export const SKILL_GROUPS: SkillGroup[] = [
  {
    label: 'Front-end',
    skills: [
      { name: 'HTML5', icon: '/img/icons/html5.svg' },
      { name: 'CSS3 / SCSS', icon: '/img/icons/css3.svg' },
      { name: 'JavaScript', icon: '/img/icons/javascript.svg' },
      { name: 'React', icon: '/img/icons/react.svg' },
      { name: 'Figma to Code', icon: '/img/icons/figma.svg' },
      { name: 'Next.js', icon: '/img/icons/nextjs.svg' },
      { name: 'Tailwind', icon: '/img/icons/tailwindcss.svg' }
    ]
  },
  {
    label: 'Back-end',
    skills: [
      { name: 'Node.js', icon: '/img/icons/nodejs.svg' },
      { name: 'Express', icon: '/img/icons/express.svg' },
      { name: 'Python', icon: '/img/icons/python.svg' },
      { name: 'FastAPI', icon: '/img/icons/fastapi.svg' }
    ]
  },
  {
    label: 'Ferramentas & Dados',
    skills: [
      { name: 'Git', icon: '/img/icons/git.svg' },
      { name: 'GitHub', icon: '/img/icons/github.svg' },
      { name: 'GitLab', icon: '/img/icons/gitlab.svg' },
      { name: 'Docker', icon: '/img/icons/docker.svg' },
      { name: 'MySQL', icon: '/img/icons/mysql.svg' },
      { name: 'Google Sheets', icon: '/img/icons/googlesheets.svg' },
      { name: 'ClickUp', icon: '/img/icons/clickup.svg' },
      { name: 'Matplotlib', icon: '/img/icons/matplotlib.svg' }
    ]
  }
]
