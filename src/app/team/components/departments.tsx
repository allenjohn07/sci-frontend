"use client";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { fetchTeams } from "../../../api/fetchTeams";
import { DepartmentSection } from "./departmentSection";
import { Loading } from "./loading";
import {Error} from "./error"

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

const Departments = () => {
  const { data: teams, isFetching, isError } = useQuery<Team[]>({
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

export default Departments;
