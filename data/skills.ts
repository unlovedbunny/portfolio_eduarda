import type { SkillGroup } from '~/types/portfolio'

/** Stacks agrupadas por categoria. Para adicionar uma tecnologia, inclua uma linha no grupo desejado. */
export const SKILL_GROUPS: SkillGroup[] = [
  {
    label: 'Linguagens de Programação',
    skills: [
      { name: 'Python', icon: '/img/icons/python.svg' },
      { name: 'Java', icon: '/img/icons/java.svg' },
      { name: 'TypeScript', icon: '/img/icons/typescript.svg' },
      { name: 'C', icon: '/img/icons/c.svg' },
      { name: 'Lua', icon: '/img/icons/lua.svg' },
      { name: 'Scala', icon: '/img/icons/scala.svg' },
      { name: 'PHP', icon: '/img/icons/php.svg' }
    ]
  },
  {
    label: 'Web & Frameworks',
    skills: [
      { name: 'Next.js', icon: '/img/icons/nextjs.svg' },
      { name: 'Figma to Code', icon: '/img/icons/figma.svg' },
      { name: 'CSS3', icon: '/img/icons/css3.svg' },
      { name: 'React', icon: '/img/icons/react.svg' },
      { name: 'Vue.js', icon: '/img/icons/vue.svg' },
      { name: 'Nuxt', icon: '/img/icons/nuxt.svg' },
      { name: 'Node.js', icon: '/img/icons/nodejs.svg' },
      { name: 'Django', icon: '/img/icons/django.svg' },
      { name: 'Flutter', icon: '/img/icons/flutter.svg' },
      { name: 'Tailwind CSS', icon: '/img/icons/tailwindcss.svg' }
    ]
  },
  {
    label: 'Inteligência Artificial & Dados',
    skills: [
      { name: 'PyTorch', icon: '/img/icons/pytorch.svg' },
      { name: 'TensorFlow', icon: '/img/icons/tensorflow.svg' },
      { name: 'MySQL', icon: '/img/icons/mysql.svg' },
      { name: 'PostgreSQL', icon: '/img/icons/postgresql.svg' },
      { name: 'Firebase', icon: '/img/icons/firebase.svg' },
      { name: 'Arduino / IoT', icon: '/img/icons/arduino.svg' }
    ]
  },
  {
    label: 'Ferramentas & Infraestrutura',
    skills: [
      { name: 'Docker', icon: '/img/icons/docker.svg' },
      { name: 'Git', icon: '/img/icons/git.svg' },
      { name: 'GitLab', icon: '/img/icons/gitlab.svg' },
      { name: 'Azure', icon: '/img/icons/azure.svg' },
      { name: 'VS Code', icon: '/img/icons/vscode.svg' },
      { name: 'Linux', icon: '/img/icons/linux.svg' }
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
