"use client";

import { LoadingSpinner } from "@/components/LoadingSpinner";
import { fadeInUp, staggerContainer } from "@/lib/motion";
import {
  Container,
  Heading,
  Text,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import React from "react";

// Dynamically import with loading state
const ImagesComponent = dynamic(
  () => import("@/components/images").then((mod) => mod.ImagesComponent),
  {
    loading: () => <LoadingSpinner />,
    ssr: false,
  }
);

const About = () => {
  return (
    <Container
      maxW="container.xl"
      className="about_page_div"
      px={{ base: 4, md: 8 }}
      py={{ base: 8, md: 14 }}
      color="blue.900"
    >
      <motion.div
        className="space-y-8"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        <motion.section variants={fadeInUp}>
          <Heading
            as="h1"
            fontSize="3xl"
            mb={6}
            textAlign={{ base: "left", md: "center" }}
            fontWeight="semibold"
            letterSpacing="tight"
          >
            About Us
          </Heading>
        </motion.section>

        <motion.section variants={fadeInUp}>
          <Text fontSize={{ base: "lg", md: "xl" }} fontWeight="semibold">
            Who Are We
          </Text>
          <Text mb={4}>
            SpeedCubers India (SCI) is the official regional organization
            dedicated to advancing the art and sport of speedcubing across
            India. Just as Cubing China and Cubing USA serve their respective
            countries, SCI aims to unify and support the Indian
            cubing community, ensuring it thrives at both grassroots and
            competitive levels.
          </Text>
        </motion.section>

        <motion.section variants={fadeInUp}>
          <Text fontSize={{ base: "lg", md: "xl" }} fontWeight="semibold">
            Our Mission
          </Text>
          <Text mb={4}>
            Our mission is to bring structure, organization, and resources
            to the cubing community in India. We recognize that cubing in
            India is an unorganized sector with significant potential for
            growth. Through SCI, we aim to address these gaps by channeling
            resources—financial, logistical, and otherwise—where they are
            most needed, helping the community grow in every possible way.
          </Text>
        </motion.section>

        <motion.section variants={fadeInUp}>
          <Text fontSize={{ base: "lg", md: "xl" }} fontWeight="semibold">
            What We Do
          </Text>
          <Text mb={4}>
            SCI will oversee and support sub-regional organizations
            (sub-ROs) within each state, centralizing funds and resources to
            ensure effective distribution across the country. This
            centralization will allow us to extend cubing into regions that
            have yet to be discovered, promoting inclusivity and widespread
            participation.
          </Text>
        </motion.section>

        <motion.section variants={fadeInUp}>
          <Text fontSize={{ base: "lg", md: "xl" }} fontWeight="semibold">
            Our Goals
          </Text>
          <Text mb={4}>
            <Text as="span" fontWeight="semibold">
              Infrastructure Support
            </Text>
            : We provide essential infrastructure, such as payment gateways,
            website development, and marketing support, to help sub-ROs
            organize competitions and events efficiently. <br />
            <Text as="span" fontWeight="semibold">
              Competitions and Eligibility
            </Text>
            : By organizing and standardizing cubing activities, SCI makes
            Indian cubers eligible to apply for prestigious international
            competitions, such as the Asian Championships and World
            Championships. <br />
            <Text as="span" fontWeight="semibold">
              Community Building
            </Text>
            : Our short-term goal includes launching a comprehensive website
            that will host state rankings, while our long-term vision
            includes creating an interactive platform featuring cubing news,
            blogs by cubers, and an engaging community space.
          </Text>
        </motion.section>

        <motion.section variants={fadeInUp}>
          <Text fontSize={{ base: "lg", md: "xl" }} fontWeight="semibold">
            Why Choose SpeedCubers India?
          </Text>
          <Text>
            By choosing to be a part of SpeedCubers India, you are
            contributing to a larger movement that aims to elevate the
            cubing community in India. Together, we can ensure that every
            cuber in India has access to the resources, support, and
            opportunities they need to excel.
          </Text>
        </motion.section>

        <motion.section variants={fadeInUp}>
          <ImagesComponent />
        </motion.section>
      </motion.div>
    </Container>
  );
};

export default About;
