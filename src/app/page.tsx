"use client";

import Competitions from "@/components/competitions";
import InstagramEmbed from "@/components/InstagramEmbed";
import { MoreLinks } from "@/components/links";
import { fadeInUp, staggerContainer } from "@/lib/motion";
import { Box, Heading, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";

export default function Home() {
  return (
    <Box
      className="container text-blue-gray-900"
      maxW="screen-lg"
      mx="auto"
      px={{ base: 4, md: 8 }}
      py={{ base: 10, md: 14 }}
    >
      <motion.div
        className="space-y-10"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
      <motion.section variants={fadeInUp}>
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
            WCA approved India&apos;s official Regional Organization
          </Text>
        </Heading>
      </motion.section>
      <motion.section variants={fadeInUp}>
        <Box w="full" display="flex" justifyContent="center">
          <InstagramEmbed
            postUrl="https://www.instagram.com/p/C4Yf-CqS7q2/"
            caption={true}
          />
        </Box>
      </motion.section>
      <motion.section variants={fadeInUp}>
        <Competitions />
      </motion.section>
      <motion.section variants={fadeInUp}>
        <MoreLinks />
      </motion.section>
      </motion.div>
    </Box>
  );
}
