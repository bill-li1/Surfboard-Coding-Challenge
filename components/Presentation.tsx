import { Box } from "@chakra-ui/react";
import { useContext } from "react";
import { SocketContext } from "../videochat/socketContext";
import Agenda from "./Agenda";

const Presentation = () => {

  const { callAccepted, callEnded } =
    useContext(SocketContext);

  const long = (callAccepted && !callEnded)
  return (
    <Box minH="100%" display="flex" w={long ? "50%" : "60%"} p="15px">
      <Box
        bgColor="#3E3E43"
        borderRadius="20px"
        display="flex"
        minH="100%"
        minW="100%"
      >
        <Agenda />
      </Box>
    </Box>
  );
};

export default Presentation;
