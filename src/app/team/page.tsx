"use client";
import { fetchTeams } from "@/api/fetchTeams";
import { fadeInUp, staggerContainer, staggerItem } from "@/lib/motion";
import { Box, Center, Grid, Heading, Text } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import React from "react";
import { Error } from "./components/error";
import { Loading } from "./components/loading";
import { PersonCard, TEAM_CARD_WIDTH, teamMemberGridColumns } from "./components/personCard";

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

const MEMBERS_OWN_ROW_THRESHOLD = 3;
const MAX_PACKED_DEPARTMENTS = 3;

const groupDepartmentsIntoRows = (teams: Team[]): Team[][] => {
  const rows: Team[][] = [];
  let packRow: Team[] = [];

  const flushPackRow = () => {
    if (packRow.length > 0) {
      rows.push(packRow);
      packRow = [];
    }
  };

  for (const dept of teams) {
    const memberCount = dept.members?.length ?? 0;

    if (memberCount >= MEMBERS_OWN_ROW_THRESHOLD) {
      flushPackRow();
      rows.push([dept]);
      continue;
    }

    packRow.push(dept);
    if (packRow.length >= MAX_PACKED_DEPARTMENTS) {
      flushPackRow();
    }
  }

  flushPackRow();
  return rows;
};

const TeamRowContainer = ({ children }: { children: React.ReactNode }) => (
  <Box
    w="full"
    display="flex"
    justifyContent={{ base: "flex-start", md: "center" }}
  >
    {children}
  </Box>
);

const DepartmentMembers = ({ members }: { members: Person[] }) => {
  if (!members.length) {
    return (
      <Center
        textAlign="center"
        color="gray.500"
        py={{ base: 8, md: 10 }}
        bg="gray.50"
        rounded="lg"
        minH="160px"
        w={TEAM_CARD_WIDTH}
      >
        <Text fontSize={{ base: "sm", md: "md" }}>
          No members in this department.
        </Text>
      </Center>
    );
  }

  return (
    <motion.div variants={staggerContainer} initial="hidden" animate="visible">
      <Grid
        templateColumns={teamMemberGridColumns()}
        gap={{ base: 6, md: 8 }}
        w="fit-content"
        maxW="full"
      >
        {members.map((person) => (
          <motion.div key={person.id} variants={staggerItem}>
            <PersonCard person={person} />
          </motion.div>
        ))}
      </Grid>
    </motion.div>
  );
};

const DepartmentBlock = ({ dept }: { dept: Team }) => (
  <Box w={TEAM_CARD_WIDTH} flexShrink={0}>
    <Heading
      as="h2"
      textAlign="start"
      fontSize={{ base: "lg", md: "xl" }}
      fontWeight="semibold"
      mb={2}
      color="gray.800"
      css={{ wordBreak: "break-word" }}
    >
      {dept.name}
    </Heading>
    <DepartmentMembers members={dept.members ?? []} />
  </Box>
);

const DepartmentRow = ({ departments }: { departments: Team[] }) => {
  const isWideRow =
    departments.length === 1 &&
    (departments[0].members?.length ?? 0) >= MEMBERS_OWN_ROW_THRESHOLD;

  if (isWideRow) {
    const dept = departments[0];

    return (
      <motion.div variants={fadeInUp}>
        <TeamRowContainer>
          <Box
            w="fit-content"
            maxW="full"
            display="flex"
            flexDirection="column"
            alignItems="flex-start"
          >
            <Heading
              as="h2"
              textAlign="start"
              fontSize={{ base: "lg", md: "xl" }}
              fontWeight="semibold"
              mb={2}
              color="gray.800"
              css={{ wordBreak: "break-word" }}
            >
              {dept.name}
            </Heading>
            {dept.members && dept.members.length > 0 ? (
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
              >
                <Grid
                  templateColumns={teamMemberGridColumns(dept.members.length)}
                  gap={{ base: 6, md: 8 }}
                  w="fit-content"
                  maxW="full"
                >
                  {dept.members.map((person) => (
                    <motion.div key={person.id} variants={staggerItem}>
                      <PersonCard person={person} />
                    </motion.div>
                  ))}
                </Grid>
              </motion.div>
            ) : (
              <DepartmentMembers members={[]} />
            )}
          </Box>
        </TeamRowContainer>
      </motion.div>
    );
  }

  return (
    <motion.div variants={fadeInUp}>
      <TeamRowContainer>
        <Grid
          templateColumns={teamMemberGridColumns(departments.length)}
          gap={{ base: 6, md: 8 }}
          w="fit-content"
          maxW="full"
        >
          {departments.map((dept) => (
            <DepartmentBlock key={dept.name} dept={dept} />
          ))}
        </Grid>
      </TeamRowContainer>
    </motion.div>
  );
};

const Team = () => {
  return (
    <Box px={{ base: 4, md: 8 }} py={{ base: 8, md: 14 }} minH="100vh">
      <motion.div
        className="space-y-0"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        <motion.section variants={fadeInUp}>
          <Heading
            as="h1"
            fontSize="3xl"
            mb={6}
            textAlign={{ base: "left", md: "center" }}
            fontWeight="semibold"
            letterSpacing="tight"
          >
            Our Team
          </Heading>
        </motion.section>
        <motion.section variants={fadeInUp}>
          <Departments />
        </motion.section>
        <motion.section variants={fadeInUp}>
          <Box mt={{ base: 10, md: 14 }} textAlign={{ base: "start", md: "center" }}>
            <Text color="gray.600" fontSize={{ base: "sm", md: "md" }}>
              More teams to come. Stay tuned, we will be inviting applications
              soon.
            </Text>
          </Box>
        </motion.section>
      </motion.div>
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
    <motion.div
      className="w-full space-y-10 md:space-y-12"
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
    >
      {groupDepartmentsIntoRows(teams ?? []).map((row, index) => (
        <DepartmentRow key={row.map((dept) => dept.name).join("-") || index} departments={row} />
      ))}
    </motion.div>
  );
};

export default Team;
