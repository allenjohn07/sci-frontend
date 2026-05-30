"use client";

import { Center, Spinner, Stack, Text } from "@chakra-ui/react";

type LoadingSpinnerProps = {
  label?: string;
  minH?: string;
  py?: number | string | Record<string, number | string>;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
};

export function LoadingSpinner({
  label = "Loading...",
  minH,
  py = { base: 12, md: 16 },
  size = "lg",
}: LoadingSpinnerProps) {
  return (
    <Center minH={minH} py={py} w="full">
      <Stack align="center" gap={3}>
        <Spinner size={size} color="black" />
        <Text fontSize="sm" color="black" fontWeight="medium">
          {label}
        </Text>
      </Stack>
    </Center>
  );
}
