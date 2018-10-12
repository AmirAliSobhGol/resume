import React from 'react';
import { differenceInCalendarYears } from 'date-fns';

const getFormattedWorkExprience = startDate => {
  return differenceInCalendarYears(new Date(), startDate);
};

const Summary = () => {
  const age = differenceInCalendarYears(new Date(), new Date(1998, 2, 14));
  const workingYears = getFormattedWorkExprience(new Date(2015, 6, 1));
  return (
    <div>
      <h1 className="section-header">Summary</h1>
      <p className="m-t-10">
        a {age} year old self-taught software engineer with {workingYears}+
        years of experience in developing maintainable and scalable web
        applications who is seeking to automate himself out of a job as a site
        reliability engineer.
      </p>
    </div>
  );
};

export default Summary;
