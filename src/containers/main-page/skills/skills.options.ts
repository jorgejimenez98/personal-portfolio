import { TFunction } from 'i18next'

export const skills = (t: TFunction) => {
  return [
    {
      title: 'Frontend',
      icon: 'fa-globe',
      skills: ['React', 'Vue', 'Angular', 'Next.js', 'Nuxtjs', 'Html', 'Vite', 'RestAPI', 'Module Federation', 'Webpack'],
    },
    {
      title: 'Backend',
      icon: 'fa-server',
      skills: ['Node.js', 'Django', 'Nestjs', 'Express.js', 'Flask', t('MainSkills.Microservices'), 'Solr', 'POO'],
    },
    {
      title: 'Mobile',
      icon: 'fa-mobile',
      skills: ['React Native', 'Android (Java)'],
    },
    {
      title: t('MainSkills.Databases'),
      icon: 'fa-database',
      skills: ['PostgreSQL', 'MongoDB', 'MySQL', 'Redis', 'MariaDB', 'SQL Server', 'Firebase', 'Supabase'],
    },
    {
      title: 'DevOps',
      icon: 'fa-wrench',
      skills: ['Docker', 'AWS', 'Jenkins', 'GitLab CI', 'Docker-Compose', 'CI/CD', 'Git', 'Github', 'Gitlab', 'Bitbucket', 'Jenkins', 'SonarQube'],
    },
    {
      title: t('MainSkills.Languages'),
      icon: 'fa-code',
      skills: ['JavaScript', 'Python', 'Java', 'TypeScript'],
    },
    {
      title: t('MainSkills.Styles'),
      icon: 'fa-palette',
      skills: ['CSS', 'SCSS', 'TailwindCSS', 'PostCSS', 'MaterialUI', 'AntDesign', 'ChakraUI', 'Bootstrap', 'Shadcn UI'],
    },
    {
      title: t('MainSkills.Libraries'),
      icon: 'fa-book',
      skills: ['Puppetter', 'Antd-Plots', 'RTK-Query', 'TanStank Query', 'Solr', 'Axios', 'Formik', 'Vee-Validate', t('MainSkills.Others')],
    },
    {
      title: 'Testing',
      icon: 'fa-user-nurse',
      skills: ['Jest', 'React-testing-library', 'Vue-Testing-Library', 'Cypress', 'Pytest'],
    },
    {
      title: t('MainSkills.State'),
      icon: 'fa-share',
      skills: ['Zustand', 'Recoil', 'Redux-Toolkit', 'Redux-Thunk', 'Redux-Sagas', 'Pinia', 'ApolloJS', 'React-Context'],
    }
  ]
}
