"use client";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { fetchTeams } from "../api/fetchTeams";

const Departments = () => {
  const { data, isFetching } = useQuery({
    queryKey: ["teams"],
    queryFn: () => fetchTeams(),
  });

  if (isFetching) {
    return <p>Loading...</p>;
  }
 

  return (
    <div className="container mx-auto px-4">
      {data?.map((dept: any) => (
        <div key={dept.name} className="mb-8">
          <h2 className="text-start md:text-center text-2xl mb-6 font-semibold">
            {dept.name}
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 justify-items-center">
            {dept.members?.map((person: any) => (
              <div
                className="flex flex-col items-center space-y-3 w-full max-w-[180px]"
                key={person.id}
              >
                <div className="w-[150px] h-[150px] rounded-lg overflow-hidden shadow-md bg-gray-100">
                  <img
                    src={person.avatar?.url || "/default-avatar.png"}
                    alt={person.wca_id || person.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-center text-sm font-medium">
                  {person.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Departments;
