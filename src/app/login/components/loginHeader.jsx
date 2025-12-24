import React from "react";
import { Box, Heading } from "@chakra-ui/react";

const LoginHeader = () => {
  return (
    <Box
      flex="1"
      p={{ base: 0, md: 12 }}
      pb={{ base: 4, md: 12 }}
      mb={{ base: 6, md: 0 }}
      borderBottom={{ base: "1px solid", md: "none" }}
      borderRight={{ base: "none", md: "1px solid" }}
      borderColor={{ base: "gray.200", md: "gray.200" }}
    >
       <Heading
          as="h1"
          textAlign={"center"}
          fontSize={{ base: "3xl", md: "4xl" }}
          fontWeight="semibold"
          letterSpacing="tight"
          display={{ base: "none", md: "block" }}
        >
          Login to <br /> Speedcubers India
        </Heading>
        <Heading
          as="h1"
          fontSize={{ base: "3xl", md: "4xl" }}
          fontWeight="semibold"
          letterSpacing="tight"
          display={{ base: "block", md: "none" }}
        >
          Login
        </Heading>
    </Box>
  );
};

export default LoginHeader;
