import React from 'react';
import {differenceInCalendarYears} from 'date-fns';

const getFormattedWorkExprience = (startDate) => {
  const workingYears = differenceInCalendarYears(new Date(), startDate);
  return workingYears
}

const Summary = () => {
  const age = differenceInCalendarYears(new Date(), new Date(1998, 2, 14));
  const workingYears = getFormattedWorkExprience(new Date(2015, 6, 1));
  return (
    <div>
      <h1 className="section-header">
        Summary
      </h1>
      <p className="m-t-10">
        a {age} year old self-taught full-stack web developer with {workingYears}+ years of experience
        using various cutting-edge technologies such as react, angular etc. to develop responsive
        web applications, who is looking for a full-time position with an interest in developing
        progressive web applications.
      </p>
    </div>
  );
}

export default Summary;