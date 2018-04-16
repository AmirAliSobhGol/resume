const commonSkills = {
  git: { title: 'Git', proficiency: 70 },
  linux: { title: 'Linux', proficiency: 70 },
  scrum: { title: 'Scrum', proficiency: 75 },
  typescript: { title: 'Typescript', proficiency: 90 }
};

const backendSkills = {
  node: { title: 'Node.js', proficiency: 90 },
  python: { title: 'Python/Django', proficiency: 65 },
  hapijs: { title: 'Hapi.js', proficiency: 80 },
  elasticsearch: { title: 'Elasticsearch', proficiency: 60 },
  kubernetes: { title: 'Kubernetes', proficiency: 65 },
  docker: { title: 'Docker', proficiency: 75 },
  redis: { title: 'Redis', proficiency: 60 }
};

const frontendSkills = {
  react: { title: 'React', proficiency: 90 },
  angular: { title: 'Angular 1 & 2+', proficiency: 80 },
  sass: { title: 'Sass', proficiency: 75 },
  webpack: { title: 'Webpack', proficiency: 80 },
  pug: { title: 'Pug', proficiency: 90 }
};

export const frontendSkillList = [
  ...Object.values(frontendSkills),
  ...Object.values(commonSkills),
  backendSkills.node,
  backendSkills.docker
];

export const backendSkillList = [
  ...Object.values(backendSkills),
  ...Object.values(commonSkills),
  frontendSkills.react
];
