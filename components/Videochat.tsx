import { Box } from "@chakra-ui/react";
import { useContext } from "react";
import { SocketContext } from "../videochat/socketContext";
import Sidebar from "./Options";
import Notifications from "./Notifications";
import VideoPlayer from "./VideoPlayer";

const VideoChat = () => {
  const { callAccepted, callEnded } =
    useContext(SocketContext);

  const long = (callAccepted && !callEnded)
  return (
    <Box minH="100%" w={long ? "50%" : "40%"} p="15px">
      <Box
        bgColor="#3E3E43"
        borderRadius="20px"
        display="flex"
        h="calc(65% - 15px)"
        minW="100%"
        flexDir="column"
        alignContent="center"
      >
        <VideoPlayer />
      </Box>
      <Box
        bgColor="#3E3E43"
        borderRadius="20px"
        display="flex"
        h="calc(35% - 15px)"
        position="relative"
        mt="30px"
        minW="100%"
        flexDir="column"
        alignContent="center"
      >
        <Sidebar>
          <Notifications />
        </Sidebar>
      </Box>
    </Box>
  );
};

export default VideoChat;
