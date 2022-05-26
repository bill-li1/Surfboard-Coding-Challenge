import { ChakraProvider } from "@chakra-ui/react";
import Layout from "../components/layouts/main";
import Fonts from "../components/fonts";
import theme from "../lib/theme";
import { AppProps } from "next/app";
import "../styles.css";

const Website = ({ Component, pageProps, router }: AppProps) => {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <Layout>
        <Component {...pageProps} key={router.route} />
      </Layout>
    </ChakraProvider>
  );
};

export default Website;
