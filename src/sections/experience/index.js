import React from 'react';
import {FaCalendar} from 'react-icons/lib/fa'
import styled from 'styled-components';

const Role = styled.p`
  font-size: 24px;
  margin-bottom: 4px;
`;

const List = styled.ul`
  list-style-position: inside;
  padding-left:0;
`;

const Experience = () => (
  <div>
    <h1 className="section-header">
      Experience
    </h1>
    <Role>Full-stack Developer</Role>
    <strong className="title">Pixels&Code</strong>
    <div className="m-t-4">
      <FaCalendar/> 2015 - Present
    </div>
    <div className="m-t-10">
      <List>
        <li>Developed and managed for 3+ web applications using modern frameworks</li>
        <li>Constantly improved tooling for a more reliable, automated, efficient development</li>
        <li>Worked collaboratively with the clients to achieve satisfactory results on time</li>
      </List>
    </div>
  </div>
);

export default Experience;
