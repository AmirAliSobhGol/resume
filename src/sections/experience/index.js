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

const Experience = () => (
  <div>
    <h1 className="section-header">Experience</h1>
    <div>
      <Role>Software engineer</Role>
      <strong className="title">Bamilo</strong>
      <div className="m-t-4">
        <FaCalendar /> 2018 - current
      </div>
      <div className="m-t-10">
        responsible for setting up the swarm cluster, providing observability
        into the system, setting up the required tooling for a monorepo,
        developing some of the services and doing performance optimizations.
        main achievements are:
        <List>
          <li>
            <b>Increased read throughput by 100x</b> and{' '}
            <b>reduced response latency by 10x</b> by implementing CQRS pattern.
          </li>
          <li>
            <b>Reduced database resource usage</b> and{' '}
            <b>increased write throughput by 50%</b> via proper sharding.
          </li>
          <li>
            <b>decreased mean time to repair</b> of read services{' '}
            <b>by 30 minutes</b> and increased message delivery reliability by
            replacing NATS with rabbitmq
          </li>
          <li>
            increased development speed through leveraging the power of
            monorepos
          </li>
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
