import React from 'react';
import { FaCalendar } from 'react-icons/lib/fa';
import Separator from '../../components/separator';
import styled from 'styled-components';

const Role = styled.p`
  font-size: 24px;
  margin-bottom: 4px;
`;

const List = styled.ul`
  list-style-position: inside;
  padding-left: 0;
`;

const ListItem = styled.li`
  margin-top: 4px;
  padding-bottom: 4px;
`;

const Experience = () => (
  <div>
    <h1 className="section-header">Experience</h1>
    <div>
      <Role>Software engineer</Role>
      <strong className="title">Rocket Internet group - IIG</strong>
      <div className="m-t-4">
        <FaCalendar /> 2018 - current
      </div>
      <div className="m-t-10">
        <List>
          <ListItem>
            Increased read throughput by 195x and reduced response latency by
            53x by implementing CQRS pattern.
          </ListItem>
          <ListItem>
            increased write throughput by more than 50% via sharding and micro
            batching.
          </ListItem>
          <ListItem>
            decreased mean time to repair of read services by 20 minutes and
            increased reliability of message delivery by replacing NATS with
            rabbitmq.
          </ListItem>
          <ListItem>
            increased development speed through leveraging the power of
            monorepos.
          </ListItem>
        </List>
      </div>
    </div>

    <Separator />

    <div>
      <Role>Full-stack Developer</Role>
      <strong className="title">Pixels&Code</strong>
      <div className="m-t-4">
        <FaCalendar /> 2015 - 2018
      </div>
      <div className="m-t-10" />
    </div>
  </div>
);

export default Experience;
