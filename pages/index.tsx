import { Box } from "@chakra-ui/react";
import { ContextProvider } from "../videochat/socketContext";
import VideoChat from "../components/Videochat";
import Presentation from "../components/Presentation";

const Page = () => {
  return (
    <ContextProvider>
      <Box minH="100vh" display="flex">
        <VideoChat />
        <Presentation />
      </Box>
    </ContextProvider>
  );
};

export default Page;
