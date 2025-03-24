import { useEffect, useState } from "react";
import RankingFilter from "./rankingsFilter";
import RankingsTable from "./rankingsTable";
import ChakraAlert from "./chakraAlert";

export default function RankingsPage() {
  const [filterParams, setFilterParams] = useState({
    event: "",
    state: "",
    type: "",
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container about_page_div px-4 md:px-8 py-8 md:py-14 text-blue-gray-900 min-h-screen">
      <h1 className="mb-6 border-b md:text-center pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        Rankings
      </h1>
      <ChakraAlert/>
      <RankingFilter setFilterParams={setFilterParams} />
      <RankingsTable filterParams={filterParams} />
    </div>
  );
}
