import {
  Box,
  Text,
  Center,
} from "@chakra-ui/react";

export const Loading = () => {
  return (
    <Box maxW="container.xl" mx="auto">
      <Center my="40">
        <Text fontSize="lg">Loading departments...</Text>
      </Center>
    </Box>
  );
};
