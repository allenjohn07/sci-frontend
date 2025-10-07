"use client";
import React from "react";
import { Loading } from "./components/loading";
import { Error } from "./components/error";
import { fetchTeams } from "@/api/fetchTeams";
import { useQuery } from "@tanstack/react-query";
import { DepartmentSection } from "./components/departmentSection";
import { Box } from "@chakra-ui/react";

interface Person {
  id: string;
  name: string;
  image: string;
  url: string;
  wca_id?: string;
}

interface Team {
  name: string;
  members: Person[];
}

const Team = () => {
  return (
    <Box
      px={{ base: 4, md: 8 }}
      py={{ base: 8, md: 14 }}
      minH="100vh"
    >
      <h1 className="mb-6 border-b md:text-center pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        Our Team
      </h1>
      <Departments />
    </Box>
  );
};

const Departments = () => {
  const {
    data: teams,
    isFetching,
    isError,
  } = useQuery<Team[]>({
    queryKey: ["teams"],
    queryFn: () => fetchTeams(),
  });

  if (isFetching) {
    return <Loading />;
  }

  if (isError) {
    return <Error />;
  }

  return <DepartmentSection teams={teams || []} />;
};

export default Team;
