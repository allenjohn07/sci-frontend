"use client";

import React from "react";
import { Box, Button, Heading, Text } from "@chakra-ui/react";

const LoginPage = () => {
  const handleLogin = () => {
    window.location.replace("http://localhost:4000/api/auth/login");
  };

  return (
    <Box
      px={{ base: 4, md: 8 }}
      py={{ base: 8, md: 14 }}
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Box maxW="lg" w="full" p={{ base: 4, md: 12 }} paddingY={{base: 24}} borderWidth={1} borderRadius="lg">
        <Heading
          as="h2"
          fontSize="xl"
          mb={2}
          fontWeight="semibold"
          textAlign="center"
        >
          Welcome back
        </Heading>

        <Text fontSize="sm" textAlign="center" color="gray.600" mb={6}>
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

export default LoginPage;
