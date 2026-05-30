import { LoadingSpinner } from "@/components/LoadingSpinner";
import { fadeInUp } from "@/lib/motion";
import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { useMemo } from "react";
import { fetchCompetitions } from "../api/fetchCompetitions";
import PastCompetitions from "./pastCompetitions";
import UpComingCompetitions from "./upComingCompetitions";

const endOfDay = (dateStr) => {
  const [year, month, day] = dateStr.split("-").map(Number);
  return new Date(year, month - 1, day, 23, 59, 59, 999);
};

const startOfToday = () => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return today;
};

const Competitions = () => {
  
  // fetch competitions from the api
  const { data, isFetching, isError } = useQuery({
    queryKey: ["competitions"],
    queryFn: () => fetchCompetitions(),
  });

  // filter upcoming and past competitions and memoize them
  const upComingCompetitons = useMemo(
    () =>
      data?.filter(
        (competition) => endOfDay(competition.end_date) >= startOfToday()
      ),
    [data]
  );
  const pastCompetitons = useMemo(
    () =>
      data
        ?.filter((competition) => endOfDay(competition.end_date) < startOfToday())
        .reverse(),
    [data]
  );

  if (isFetching) return <LoadingSpinner />;
  if (isError) return <p>Error: {isError}</p>;

  return (
    <motion.div
      className="space-y-10"
      variants={fadeInUp}
      initial="hidden"
      animate="visible"
    >
      <UpComingCompetitions upComingCompetitons={upComingCompetitons} />
      <PastCompetitions pastCompetitons={pastCompetitons} />
    </motion.div>
  );
};

export default Competitions;
