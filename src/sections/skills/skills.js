export const skills = {
  node: { title: 'Node.js', proficiency: 90 },
  typescript: { title: 'Typescript', proficiency: 75 },
  containerOrchestrator: { title: 'Kubernetes/Swarm', proficiency: 85 },
  docker: { title: 'Docker', proficiency: 85 },
  linux: { title: 'Linux', proficiency: 75 },
  microservices: { title: 'Microservices', proficiency: 75 },
  bash: { title: 'Bash', proficiency: 70 },
  git: { title: 'Git', proficiency: 80 },
  prometheus: { title: 'Prometheus', proficiency: 65 },
  gitlab: { title: 'GitlabCI', proficiency: 90 },
  redis: { title: 'Redis', proficiency: 75 },
  elasticsearch: { title: 'Elasticsearch', proficiency: 65 }
};

export const skillList = [...Object.values(skills)];
