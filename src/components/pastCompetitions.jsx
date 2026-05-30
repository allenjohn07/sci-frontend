/* eslint-disable react/prop-types */
import { staggerContainer, staggerItem } from "@/lib/motion";
import { Box } from "@chakra-ui/react";
import { motion } from "framer-motion";
import CardComponent from "./card";

const PastCompetitions = ({ pastCompetitons }) => {
  return (
    <Box className="space-y-5">
      <h4 className="scroll-m-20 text-xl font-semibold tracking-tight border-b pb-2">
        Past Competitions
      </h4>
      <Box
        as={motion.div}
        display="flex"
        gap={4}
        overflowX="auto"
        pb={2}
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        css={{
            '&::-webkit-scrollbar': {
              height: '5px',
            },
            '&::-webkit-scrollbar-track': {
              borderRadius: '4px',
            },
            '&::-webkit-scrollbar-thumb': {
              background: '#d3d3d7/30',
              borderRadius: '4px',
            }
          }}
      >
        {pastCompetitons?.map((competition) => (
          <Box
            as={motion.div}
            key={competition.competitionId}
            variants={staggerItem}
          >
            <CardComponent
              competitionId={competition.competitionId}
              compImg={`https://competition-posters.s3.us-west-2.amazonaws.com/${competition.competitionId}.jpg`}
              name={competition.name}
            />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default PastCompetitions;
