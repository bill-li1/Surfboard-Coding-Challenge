import React, { useContext } from "react";
import { Button, Box, Text } from "@chakra-ui/react";

import { SocketContext } from "../videochat/socketContext";

const Notifications = () => {
  const { answerCall, call, callAccepted, notPickUp, showNotif } = useContext(SocketContext);

  return (
    <>
      {showNotif && call.isReceivingCall && !callAccepted && (
        <Box
          style={{ display: "flex", justifyContent: "space-around" }}
          mt={4}
          bgColor="#5D5D64"
          borderRadius="20px"
          h="60px"
        >
          <Text fontSize="18pt" pt="3" mr="auto" ml="8">{call.name} is calling you:</Text>
          <Button colorScheme="whatsapp" mt="2.5" mr="3" borderRadius="12" onClick={answerCall}>
            Answer
          </Button>
          <Button colorScheme="red" mt="2.5" borderRadius="12" mr="6" onClick={notPickUp}>
            Hang Up
          </Button>
        </Box>
      )}
    </>
  );
};

export default Notifications;
