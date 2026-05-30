/* eslint-disable react/prop-types */
import { Box, Image, Text } from "@chakra-ui/react";
import { Tooltip } from "./ui/tooltip";

const CARD_WIDTH = "200px";
const POSTER_HEIGHT = "240px";
const WCA_COMPETITION_URL = "https://www.worldcubeassociation.org/competitions";

export default function CardComponent({ compImg, name, competitionId }) {
    const competitionUrl = `${WCA_COMPETITION_URL}/${competitionId}`;

    return (
        <Tooltip content={name} showArrow openDelay={300}>
            <Box
                as="a"
                href={competitionUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={name}
                w={CARD_WIDTH}
                flexShrink={0}
                display="block"
                cursor="pointer"
                borderWidth="1px"
                borderRadius="lg"
                bg="gray.50"
                overflow="hidden"
                transition="box-shadow 0.2s ease, transform 0.2s ease"
                boxShadow="sm"
                _hover={{
                    boxShadow: "md",
                    transform: "translateY(-2px)",
                }}
            >
                <Image
                    alt={name}
                    src={compImg}
                    objectFit="cover"
                    w={CARD_WIDTH}
                    h={POSTER_HEIGHT}
                    pointerEvents="none"
                />
                <Box py={1.5} px={2}>
                    <Text
                        fontSize="10px"
                        lineHeight="1.25"
                        fontWeight="semibold"
                        noOfLines={2}
                    >
                        {name}
                    </Text>
                </Box>
            </Box>
        </Tooltip>
    );
}
