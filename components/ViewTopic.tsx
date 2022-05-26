import { Image, IconButton, Box, Text, Divider } from "@chakra-ui/react";
import React from "react";
import { ITopic } from "../util/types";
import { BsArrowReturnLeft } from "react-icons/Bs";

interface props {
  topic: ITopic | null;
  goBack: () => void;
}

const convertMinsToHrsMins = (minutes: number) => {
  var h = Math.floor(minutes / 60);
  var m = minutes % 60;
  if (h > 0) {
    return h + " h " + m + " min";
  }
  return m + " min ";
};

const ViewTopic = ({ topic, goBack }: props) => {
  return (
    <Box>
      <Box display="flex" flexDir="row" mb={4}>
        <Box mt={4} mr={2}>
          <IconButton
            onClick={() => goBack()}
            icon={<BsArrowReturnLeft />}
            aria-label="GoBack"
            bgColor="#5D5D64"
          />
        </Box>
        <Box fontSize="5xl" m="auto" textAlign="center">
          {topic?.title}
        </Box>
      </Box>
      <Divider mb={4} />
      <Box mx={75} mt={8}>
        <Text fontSize="18">{topic?.description}</Text>
        <Box mb={4} mt={8}>
          {topic?.image && topic?.image.length > 0 ? (
            <Image src={topic?.image} alt="topic image" m="auto" />
          ) : null}
        </Box>
        <Text display="flex" fontSize="20" textColor="gray.400" pt={2}>
          Estimated Time: {convertMinsToHrsMins(Number(topic?.duration))}
        </Text>
      </Box>
    </Box>
  );
};

export default ViewTopic;
