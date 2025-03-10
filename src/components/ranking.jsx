import { useEffect, useState } from "react";
import RankingFilter from "./rankingsFilter";
import RankingsTable from "./rankingsTable";

export default function RankingsPage() {

  const [filterParams, setFilterParams] = useState({"event": "", "state": "", "type": ""});
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container about_page_div px-4 md:px-8 py-8 md:py-14 text-blue-gray-900 min-h-screen">
      <h1 className="mb-6 border-b md:text-center pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        Rankings
      </h1>
      <p className="text-sm md:text-medium border-b mb-6 pb-6">**Important Notice:**<span className="text-muted-foreground"> This ranking considers only the competitions organized by SCI. If you want to get listed in this ranking, please attend a competition organized by SCI. If you have aleady participated in any SCI competition and if your name is not there in the ranking list, please claim your state by sending an email to <a className="text-blue-900 hover:underline hover:underline-offset-2" href="mailto:speedcubersindiadata@gmail.com" target="_blank" rel="noopener noreferrer">speedcubersindiadata@gmail.com</a> by attaching your ID proof.</span></p>
      <RankingFilter setFilterParams={setFilterParams}/>
      <RankingsTable filterParams={filterParams}/>
    </div>
  );
}
