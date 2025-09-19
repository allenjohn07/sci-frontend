"use client";
import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { fetchTeams } from "../../../api/fetchTeams";
import Link from "next/link";

const Departments = () => {
  const { data: teams, isFetching, isError } = useQuery({
    queryKey: ["teams"],
    queryFn: () => fetchTeams(),
  });

  if (isFetching) {
    return (
      <Loading />
    );
  }

  if (isError) {
    return (
      <Error />
    );
  }

  return (
    <div>
      {teams.map((dept: any) => (
        <div key={dept.name} className="mb-12">
          <h2 className="text-start text-lg md:text-xl font-semibold">
            {dept.name}
          </h2>
          {dept.members && dept.members.length > 0 ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 justify-items-center mb-4">
              {dept.members.map((person: any) => (
                <PersonCard key={person.id} person={person} />
              ))}
            </div>
          ) : (
            <div className="text-center text-gray-500 py-8">
              <p>No members in this department.</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};


const PersonCard = ({ person }: { person: any }) => {
  const [imageError, setImageError] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <Link className="shadow-md rounded-lg mx-1 my-1 hover:shadow-lg transition-all duration-200 ease-in-out" href={`${person.url}`} target="_blank" rel="noopener noreferrer">
      <div className="flex flex-col items-center w-full rounded-lg p-2">
        <div
          style={{
            width: "100%",
            height: '250px',
          }}
        >
          {!imageLoaded && !imageError && (
            <div className="flex items-center justify-center bg-gray-200 rounded-lg">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-600"></div>
            </div>
          )}
          <img
            src={person?.image.includes("missing") ? "/Imageplaceholder.svg" : person?.image}
            alt={person.wca_id || person.name}
            className="w-full h-full object-cover rounded-lg"
            onLoad={() => setImageLoaded(true)}
            onError={() => {
              setImageError(true);
              setImageLoaded(true);
            }}
            loading="lazy"
          />
          {imageError && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-200 rounded-lg">
              <div className="text-gray-500 text-xs text-center">No Image</div>
            </div>
          )}
        </div>
        <div className="text-center text-sm font-medium mt-1">
          {person.name}
        </div>
      </div>
    </Link>

  );
};

const Loading = () => {
  return (
    <div className="container mx-auto">
      <div className="flex items-center justify-center">
        <p className="text-lg">Loading departments...</p>
      </div>
    </div>
  )
}

const Error = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center">
        <p className="text-red-600 text-lg">Failed to load departments. Please try again later.</p>
      </div>
    </div>
  )
}


export default Departments;
