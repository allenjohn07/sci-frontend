import {
  Box,
  Text,
  Center,
} from "@chakra-ui/react";

export const Error = () => {
  return (
    <Box maxW="container.xl" mx="auto" px={4} py={8}>
      <Center>
        <Text color="red.600" fontSize="lg">
          Failed to load departments. Please try again later.
        </Text>
      </Center>
    </Box>
  );
};
