"use client";

import { Button, Box, Heading, Text } from "@chakra-ui/react";
import React from "react";

const LoginForm = () => {
  const handleLogin = () => {
    window.location.replace("http://localhost:4000/api/auth/login");
  };

  return (
    <Box flex="1" p={{ base: 0, md: 12 }}>
      <Box maxW="md">
        <Heading
          as="h2"
          fontSize="xl"
          mb={2}
          fontWeight="semibold"
          textAlign={"center"}
        >
          Welcome back
        </Heading>

        <Text fontSize="sm" textAlign={"center"} color="gray.600" mb={6}>
          Sign in with your WCA account to continue
        </Text>

        <Button
          onClick={handleLogin}
          w="full"
          bg="gray.200"
          _hover={{ bg: "gray.300" }}
        >
          Login with WCA
        </Button>
      </Box>
    </Box>
  );
};

export default LoginForm;
