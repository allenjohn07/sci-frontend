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
    <Box>
      {teams.map((dept) => (
        <Box key={dept.name} mb={12}>
          <Heading 
            as="h2" 
            textAlign="start" 
            fontSize={{ base: "lg", md: "xl" }} 
            fontWeight="semibold"
          >
            {dept.name}
          </Heading>
          {dept.members && dept.members.length > 0 ? (
            <Grid
              templateColumns={{
                base: "repeat(auto-fill, minmax(200px, 1fr))",
              }}
              justifyItems="center"
              mb={4}
            >
              {dept.members.map((person) => (
                <PersonCard key={person.id} person={person} />
              ))}
            </Grid>
          ) : (
            <Center textAlign="center" color="gray.500" py={8}>
              <Text>No members in this department.</Text>
            </Center>
          )}
        </Box>
      ))}
    </Box>
  );
};