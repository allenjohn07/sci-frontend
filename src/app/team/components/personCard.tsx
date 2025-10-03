import React, { useState } from "react";
import {
  Box,
  Text,
  Image,
  Spinner,
  Center,
  VStack,
  Link as ChakraLink,
} from "@chakra-ui/react";
import Link from "next/link";

interface Person {
  id: string;
  name: string;
  image: string;
  url: string;
  wca_id?: string;
}

export const PersonCard = ({ person }: { person: Person }) => {
  const [imageError, setImageError] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const imageUrl = person?.image.includes("missing")
    ? "/Imageplaceholder.svg"
    : person?.image;

  return (
    <ChakraLink
      as={Link}
      href={person.url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`View ${person.name}'s profile`}
      _hover={{ textDecoration: "none" }}
      className="flex flex-col"
      mb={2}
    >
      <Box
        shadow="md"
        rounded="lg"
        mx={1}
        my={1}
        _hover={{ shadow: "lg" }}
        transition="all 0.2s ease-in-out"
      >
        <VStack w="full" rounded="lg" p={2}>
          <Box
            position="relative"
            w={{ base: "300px", md: "250px", lg: "200px" }}
            h={{ base: "300px", md: "250px", lg: "200px" }}
          >
            {!imageLoaded && !imageError && (
              <Center position="absolute" inset={0} bg="gray.200" rounded="lg">
                <Spinner size="lg" color="gray.600" />
              </Center>
            )}
            {!imageError ? (
              <Image
                src={imageUrl}
                alt={`${person.name}${
                  person.wca_id ? ` (${person.wca_id})` : ""
                }`}
                w="full"
                h="full"
                objectFit="cover"
                rounded="lg"
                opacity={!imageLoaded ? 0 : 1}
                transition="opacity 0.2s"
                onLoad={() => setImageLoaded(true)}
                onError={() => {
                  setImageError(true);
                  setImageLoaded(true);
                }}
                loading="lazy"
              />
            ) : (
              <Center position="absolute" inset={0} bg="gray.200" rounded="lg">
                <Text color="gray.500" fontSize="xs" textAlign="center">
                  No Image
                </Text>
              </Center>
            )}
          </Box>
        </VStack>
      </Box>
      <Text textAlign="center" fontSize="sm" fontWeight="medium">
        {person.name}
      </Text>
    </ChakraLink>
  );
};
