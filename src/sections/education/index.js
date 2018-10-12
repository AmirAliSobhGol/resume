import React from 'react';
import styled from 'styled-components';
import { FaCalendar } from 'react-icons/lib/fa';

const Degree = styled.p`
  font-size: 24px;
  margin: 0;
`;

const Info = styled.div`
  flex-basis: 70%;
`;

const ContainerGPA = styled.div`
  flex-basis: 30%;
  padding: 8px 8px 8px 0;
`;

const GPA = styled.div`
  padding-left: 20px;
  width: 90px;
  float: right;
  text-align: center;
  border-left: 1px solid #6d6d6d;
  height: 50px;
`;

const TitleGPA = styled.p`
  margin: 0;
`;

const Education = () => (
  <div>
    <h1 className="section-header">Education</h1>

    <div className="flex">
      <Info>
        <Degree>Diploma</Degree>
        <div className="m-t-4">
          <strong className="title">Salam high school</strong>
        </div>
        <div className="m-t-4">
          <FaCalendar /> 2012-2015
        </div>
      </Info>
      <ContainerGPA>
        <GPA>
          <TitleGPA className="gray">GPA</TitleGPA>
          <p>
            <span className="bold">19.5</span>{' '}
            <span className="gray">/ 20</span>
          </p>
        </GPA>
      </ContainerGPA>
    </div>
  </div>
);

export default Education;
