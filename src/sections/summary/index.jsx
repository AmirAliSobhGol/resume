import React from 'react';
import { differenceInCalendarYears } from 'date-fns';

const getFormattedWorkExprience = startDate => {
  return differenceInCalendarYears(new Date(), startDate);
};

const isBackend = process.env.REACT_APP_POSITION === 'backend';
const isFrontend = !isBackend;
const technologies = isBackend
  ? 'node.js, elasticsearch, redis'
  : 'react, angular';
const interest = isBackend
  ? 'scalable microservices'
  : 'progressive web applications';

const Summary = () => {
  const age = differenceInCalendarYears(new Date(), new Date(1998, 2, 14));
  const workingYears = getFormattedWorkExprience(new Date(2015, 6, 1));
  return (
    <div>
      <h1 className="section-header">Summary</h1>
      <p className="m-t-10">
        a {age} year old self-taught full-stack web developer with{' '}
        {workingYears}+ years of experience using various cutting-edge
        technologies such as {technologies} etc. to develop{' '}
        {isFrontend && 'responsive'}
        web applications, who is looking for a full-time position with an
        interest in developing {interest}.
      </p>
    </div>
  );
};

export default Summary;
