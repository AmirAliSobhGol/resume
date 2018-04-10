import React from 'react';
import style from 'styled-components';
import SkillBar from './skillbar'
import Separator from '../../components/separator';

const Grid = style.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -15px;
`;
const Column = style.div`
  flex-basis: 33%;
  padding:0 15px;
`;

const skills = [
  {title: 'React', proficiency: 90},
  {title: 'Angular 2+', proficiency: 80},
  {title: 'Angular.js', proficiency: 80},
  {title: 'Sass', proficiency: 75},
  {title: 'Webpack', proficiency: 80},
  {title: 'Git', proficiency: 70},
  {title: 'Scrum', proficiency: 75},
  {title: 'Pug', proficiency: 90},
  {title: 'Typescript', proficiency: 90},
  {title: 'Python/Django', proficiency: 65},
  {title: 'Node.js', proficiency: 90},
  {title: 'Elasticsearch', proficiency: 60},
  {title: 'Linux', proficiency: 70},
  {title: 'Docker', proficiency: 75},
  {title: 'Kubernetes', proficiency: 70},
];

const Skill = () => (
  <div>
    <h1 className="section-header">
      Skills
    </h1>
    <Grid>
      {skills.map(skill => (
        <Column>
          <SkillBar proficiency={skill.proficiency} title={skill.title}/>
          <Separator className="m-t-20"/>
        </Column>
      ))}
    </Grid>
  </div>
);

export default Skill;
