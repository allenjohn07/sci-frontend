import React from 'react';
import UpComingCompetitions from './upComingCompetitions';
import { competitions } from '@/lib/competitions';
import PastCompetitions from './pastCompetitions';

const Competitions = () => {

    // sort competitions according to the end date and pass it to the respective components
    const upComingCompetitons = competitions.filter(competition => new Date(competition.end_date) > new Date());
    const pastCompetitons = competitions.filter(competition => new Date(competition.end_date) < new Date()).sort((a, b) => new Date(b.end_date) - new Date(a.end_date));

  return (
    <div className="space-y-10 py-10">
      <UpComingCompetitions upComingCompetitons={upComingCompetitons} />
      <PastCompetitions pastCompetitons={pastCompetitons} />
    </div>
  );
};

export default Competitions;
