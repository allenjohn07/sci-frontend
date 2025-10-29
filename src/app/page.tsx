"use client";

import Competitions from "@/components/competitions";
import InstagramEmbed from "@/components/InstagramEmbed";
import { MoreLinks } from "@/components/links";
import { Box, Heading, Text } from "@chakra-ui/react";
import React from "react";

export default function Home() {
  return (
    <Box
      className="container space-y-10 text-blue-gray-900"
      maxW="screen-lg"
      mx="auto"
      px={{ base: 4, md: 8 }}
      py={{ base: 10, md: 14 }}
    >
      <Heading
        as="h2"
        scrollMargin="20"
        fontSize="3xl"
        textAlign="center"
        fontWeight="semibold"
        letterSpacing="tight"
        _first={{ mt: 0 }}
      >
        SpeedCubers India <br />
        <Text
          as="span"
          scrollMargin="20"
          fontSize="xl"
          fontWeight="normal"
          letterSpacing="tight"
          _first={{ mt: 0 }}
        >
          Awaiting WCA approval for being India&apos;s official RO
        </Text>
      </Heading>
      <Box w="full" display="flex" justifyContent="center">
        <InstagramEmbed
          postUrl="https://www.instagram.com/p/C4Yf-CqS7q2/"
          caption={true}
        />
      </Box>
      <Box>
        <Competitions />
      </Box>
      <MoreLinks />
    </Box>
  );
}
