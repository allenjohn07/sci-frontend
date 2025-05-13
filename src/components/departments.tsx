"use client"

import { useQuery } from '@tanstack/react-query';
import React from 'react'
import { fetchTeams } from '../api/fetchTeams';

const Departments = () => {

    const { data, isFetching } = useQuery({
        queryKey: ["teams"],
        queryFn: () => fetchTeams(),
      });
    
      if (isFetching) {
        return <p>Loading...</p>;
      }

  return (
    <div>
          {data?.map((dept: any) => (
            <div key={dept.name} className="mb-5">
              <h2 className="text-start md:text-center text-2xl mb-4">{dept.name}</h2>
              <div className="flex flex-wrap justify-center">
                {dept.members?.map((person: any) => (
                  <div className="flex flex-col items-center" key={person.id}>
                    <img
                      src={person.image}
                      alt={person.name}
                      className="p-2 rounded-large"
                      width="170"
                    />
                    <div className="text-center" style={{ fontSize: "1em" }}>
                      {person.name}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
  )
}

export default Departments