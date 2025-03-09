import React, { useMemo } from 'react';
import UpComingCompetitions from './upComingCompetitions';
import { competitions } from '@/lib/competitions';
import PastCompetitions from './pastCompetitions';

const Competitions = () => {

    // sort competitions according to the end date and pass it to the respective components
    const upComingCompetitons = useMemo(() => competitions.filter(competition => new Date(competition.end_date) > new Date()), [competitions]);
    const pastCompetitons = useMemo(() => competitions.filter(competition => new Date(competition.end_date) < new Date()).reverse(), [competitions]);

  return (
    <div className="space-y-10 py-10">
      <UpComingCompetitions upComingCompetitons={upComingCompetitons} />
      <PastCompetitions pastCompetitons={pastCompetitons} />
    </div>
  );
};

export default Competitions;
