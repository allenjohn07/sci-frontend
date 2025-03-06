import React from 'react';
import UpComingCompetitions from './upComingCompetitions';
import { competitions } from '@/lib/competitions';
import PastCompetitions from './pastCompetitions';

const Competitions = () => {

    // sort competitions according to the end date and pass it to the respective components

  return (
    <div className="space-y-10 py-10">
      <UpComingCompetitions upComingCompetitons={competitions} />
      <PastCompetitions pastCompetitons={competitions} />
    </div>
  );
};

export default Competitions;
