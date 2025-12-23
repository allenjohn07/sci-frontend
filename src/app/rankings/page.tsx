"use client";

import React, { useState } from "react";
import { Box, Heading } from "@chakra-ui/react";
import RankingAlert from "./components/rankingsAlert";
import RankingFilter from "./components/rankingsFilter";
import RankingsTable from "./components/rankingsTable";

const Rankings = () => {

  const [filterParams, setFilterParams] = useState({
      event: "",
      state: "",
      type: "",
    });

  return (
    <Box
      className="container about_page_div"
      px={{ base: 4, md: 8 }}
      py={{ base: 8, md: 14 }}
      color="blue-gray-900"
      minH="100vh"
    >
      <Heading
        as="h1"
        fontSize="3xl"
        mb={6}
        pb={2}
        borderBottom="1px solid"
        borderColor="gray.300"
        textAlign={{ base: "left", md: "center" }}
        fontWeight="semibold"
        letterSpacing="tight"
      >
        Rankings
      </Heading>
      <RankingAlert />
      <RankingFilter setFilterParams={setFilterParams} />
      <RankingsTable filterParams={filterParams} />
    </Box>
  );
};

export default Rankings;
