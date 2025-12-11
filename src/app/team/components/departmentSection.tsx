import {
  Box,
  Heading,
  Text,
  Grid,
  Center,
} from "@chakra-ui/react";
import { PersonCard } from "./personCard";

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

export const DepartmentSection = ({ teams }: { teams: Team[] }) => {
  return (
    <Box w="full">
      {teams.map((dept) => (
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
