import { Box } from "@chakra-ui/react";
import Head from "next/head";
import React from "react";

interface Props {
  children: JSX.Element[] | JSX.Element;
}

const Main = ({ children }: Props) => {
  console.log(children);
  return (
    <Box as="main">
      <Head>
        <title>Surfboard Project</title>
      </Head>
      <Box minH="100vh" pb={12}>
        {children}
      </Box>
    </Box>
  );
};

export default Main;
