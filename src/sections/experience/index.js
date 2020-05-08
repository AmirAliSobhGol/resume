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
      <Role>SRE</Role>
      <strong className="title">Cafebazaar</strong>
      <div className="m-t-4">
        <FaCalendar /> 2019 - present
      </div>
      <div className="m-t-10">
        <List>
          <ListItem>
            Increased SLO adoption rate of teams to 50% with more on the way by
            organizing workshops and pitching the idea to management.
          </ListItem>
          <ListItem>
            reduced false alarms from more than one daily to less than one a
            week by applying SRE principles.
          </ListItem>
          <ListItem>
            enabled querying of data from a few days to upto a year, increased
            retention from a month to a year and removed cyclic dependency of
            our monitoring system by using M3DB, organizing workshops, writing
            documentation and providing guidance on proper usage.
          </ListItem>
        </List>
        <p>
          Worked with{' '}
          <strong>
            Kubernetes, Nomad, Kafka, Ansible, Prometheus, M3DB, ELK, Golang.
          </strong>
        </p>
      </div>
    </div>

    <div>
      <Role>Software engineer</Role>
      <strong className="title">Bamilo - Iran Internet group</strong>
      <div className="m-t-4">
        <FaCalendar /> 2018 - 2019
      </div>
      <div className="m-t-10">
        <List>
          <ListItem>
            Increased read throughput by 10x and reduced response latency by
            ~53x by implementing CQRS pattern.
          </ListItem>
          <ListItem>
            increased write throughput by more than 50% via sharding and micro
            batching.
          </ListItem>
        </List>
        <p>
          Worked with{' '}
          <strong>
            Node.js, Swarm, Elasticsearch, Redis, RabbitMQ, Gitlab CI
          </strong>
        </p>
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
      <p>
        Worked with{' '}
        <strong>
          Node.js, Couchbase, Elasticsearch, K8s, React, Angular 1&2
        </strong>
      </p>
    </div>
  </div>
);

export default Experience;
