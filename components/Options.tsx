import React, { useState, useContext } from "react";
import { Button, Input, Grid, Text, Box } from "@chakra-ui/react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import {
  BsClipboardCheck,
  BsTelephoneFill,
  BsFillTelephoneXFill,
} from "react-icons/bs";
import { SocketContext } from "../videochat/socketContext";

const Sidebar = ({ children }: any) => {
  const { me, callAccepted, name, setName, callEnded, call, leaveCall, callUser } =
    useContext(SocketContext);
  const [idToCall, setIdToCall] = useState("");
  console.log("children", children)

  const long = !(call.isReceivingCall && !callAccepted)
  return (
    <Box w="660px" h="400px" m="auto" p="2" mt="15px">
      <Box bgColor="#5D5D64" p={5} borderRadius={20} h={long ? "270px" : "200px"}>
        <form noValidate autoComplete="off">
          <Grid w="100%" display="flex" flexDir="row">
            <Grid p="10px 20px" w="50%">
              <Text fontSize={22} mb={2}>Username</Text>
              <Input
                type="Text"
                placeholder="Your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                w="100%"
              />
              <Box mt={6}>
                <CopyToClipboard text={me}>
                  <Button
                    colorScheme="orange"
                    w="100%"
                    leftIcon={<BsClipboardCheck fontSize="large" />}
                  >
                    Copy Your ID
                  </Button>
                </CopyToClipboard>
              </Box>
            </Grid>
            <Grid p="10px 20px" w="50%">
              <Text fontSize="22" mb={2}>Make a call</Text>
              <Input
                type="Text"
                placeholder="Caller Id"
                value={idToCall}
                onChange={(e) => setIdToCall(e.target.value)}
                w="100%"
              />
              {callAccepted && !callEnded ? (
                <Button
                  colorScheme="red"
                  leftIcon={<BsFillTelephoneXFill fontSize="large" />}
                  w="100%"
                  onClick={leaveCall}
                  mt={6}
                >
                  Hang Up
                </Button>
              ) : (
                <Button
                  colorScheme="twitter"
                  leftIcon={<BsTelephoneFill fontSize="large" />}
                  w="100%"
                  onClick={() => callUser(idToCall)}
                  mt={6}
                >
                  Call
                </Button>
              )}
            </Grid>
          </Grid>
        </form>
      </Box>
      {children}
    </Box >
  );
};

export default Sidebar;
