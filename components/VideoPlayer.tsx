import React, { useContext } from "react";
import { Box, Text, Grid, GridItem } from "@chakra-ui/react";

import { SocketContext } from "../videochat/socketContext";

/*
const useStyles = makeStyles((theme) => ({
  video: {
    width: '550px',
    [theme.breakpoints.down('xs')]: {
      width: '300px',
    },
  },
  gridContainer: {
    justifyContent: 'center',
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
    },
  },
  paper: {
    padding: '10px',
    border: '2px solid black',
    margin: '10px',
  },
}));
*/

const VideoPlayer = () => {
  const { name, callAccepted, myVideo, userVideo, callEnded, stream, call } =
    useContext(SocketContext);

  const long = (callAccepted && !callEnded)
  return (
    <Box justifyContent="center" w="100%" m="auto" display="flex" flexDir="row">
      {stream && (
        <Box p="10px" borderRadius="20" bgColor="#5D5D64" m="auto" mr={long ? "15px" : "auto"}>
          <Grid>
            <Text m="auto" pb="2" fontSize={30}>{name || "Name"}</Text>
            <video playsInline muted ref={myVideo} autoPlay width={long ? "390px" : "585px"} />
          </Grid>
        </Box>
      )}
      {callAccepted && !callEnded && (
        <Box p="10px" borderRadius="20" bgColor="#5D5D64" m="auto" ml={long ? "0px" : "auto"}>
          <Grid>
            <Text m="auto" pb="2" fontSize={30}>{name || "Name"}</Text>
            <video playsInline muted ref={userVideo} autoPlay width={"390px"} />
          </Grid>
        </Box>
      )}
    </Box>
  );
};

export default VideoPlayer;
