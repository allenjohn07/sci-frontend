import React, { useState } from "react";
import {
  Box,
  Text,
  Image,
  Spinner,
  Center,
  VStack,
  Link as ChakraLink,
  AspectRatio,
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
      w="full"
      display="flex"
      flexDirection="column"
    >
      <VStack w="full" align="stretch">
        <Box
          bg="white"
          shadow="md"
          rounded="lg"
          overflow="hidden"
          _hover={{ 
            shadow: "xl",
            transform: "translateY(-4px)",
          }}
          transition="all 0.3s ease-in-out"
          w="full"
        >
          <AspectRatio ratio={1} w="full">
            <Box position="relative" w="full" h="full">
              {!imageLoaded && !imageError && (
                <Center 
                  position="absolute" 
                  inset={0} 
                  bg="gray.100"
                >
                  <Spinner 
                    size={{ base: "md", md: "lg" }} 
                    color="gray.500"
                  />
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
                  opacity={!imageLoaded ? 0 : 1}
                  transition="opacity 0.3s ease-in-out"
                  onLoad={() => setImageLoaded(true)}
                  onError={() => {
                    setImageError(true);
                    setImageLoaded(true);
                  }}
                  loading="lazy"
                />
              ) : (
                <Center 
                  position="absolute" 
                  inset={0} 
                  bg="gray.100"
                  flexDirection="column"
                  gap={2}
                >
                  <Box
                    w={{ base: 8, md: 10 }}
                    h={{ base: 8, md: 10 }}
                    bg="gray.300"
                    rounded="full"
                  />
                  <Text 
                    color="gray.500" 
                    fontSize={{ base: "xs", md: "sm" }}
                    fontWeight="medium"
                  >
                    No Image
                  </Text>
                </Center>
              )}
            </Box>
          </AspectRatio>
        </Box>
        <Box px={1}>
          <Text 
            textAlign="center" 
            fontSize={{ base: "sm", md: "md" }}
            fontWeight="semibold"
            color="gray.800"
            lineHeight="1.2"
            overflow="hidden"
            textOverflow="ellipsis"
            css={{
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
            }}
          >
            {person.name}
          </Text>
          {person.wca_id && (
            <Text
              textAlign="center"
              fontSize={{ base: "xs", md: "sm" }}
              color="gray.500"
              mt={1}
            >
              {person.wca_id}
            </Text>
          )}
        </Box>
      </VStack>
    </ChakraLink>
  );
};
