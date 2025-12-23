"use client";
import React from "react";
import { Loading } from "./components/loading";
import { Error } from "./components/error";
import { fetchTeams } from "@/api/fetchTeams";
import { useQuery } from "@tanstack/react-query";
import { Box, Center, Grid, Heading, Text } from "@chakra-ui/react";
import { PersonCard } from "./components/personCard";

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
    <Box px={{ base: 4, md: 8 }} py={{ base: 8, md: 14 }} minH="100vh">
      <Heading
        as="h1"
        fontSize="3xl"
        mb={6}
        pb={2}
        borderBottom="1px solid"
        borderColor="gray.300"
        textAlign={{ base: "left", md: "center" }}
        fontWeight="semibold"
        letterSpacing="tight"
      >
        Our Team
      </Heading>
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

  return (
    <Box w="full">
      {teams?.map((dept) => (
        <Box key={dept.name} mb={{ base: 10, md: 16 }}>
          <Heading
            as="h2"
            textAlign="start"
            fontSize={{ base: "lg", md: "xl" }}
            fontWeight="semibold"
            mb={2}
            color="gray.800"
            css={{
              wordBreak: "break-word",
            }}
          >
            {dept.name}
          </Heading>
          {dept.members && dept.members.length > 0 ? (
            <Grid
              templateColumns={{
                base: "repeat(auto-fill, minmax(150px, 1fr))",
                md: "repeat(auto-fill, minmax(200px, 1fr))",
              }}
              gap={4}
              w="full"
            >
              {dept.members.map((person) => (
                <PersonCard key={person.id} person={person} />
              ))}
            </Grid>
          ) : (
            <Center
              textAlign="center"
              color="gray.500"
              py={{ base: 12, md: 16 }}
              bg="gray.50"
              rounded="lg"
              minH="200px"
            >
              <Text fontSize={{ base: "sm", md: "md" }}>
                No members in this department.
              </Text>
            </Center>
          )}
        </Box>
      ))}
    </Box>
  );
};

export default Team;
