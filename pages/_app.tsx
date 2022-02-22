import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import "../styles/globals.css";
import { useRouter } from "next/router";
import theme from "../theme";
import { Layout } from "../components/layout/Layout";
import "@fontsource/noto-serif/400.css";
import "@fontsource/noto-serif/400-italic.css";
import "@fontsource/noto-serif/700.css";
import "@fontsource/noto-serif/700-italic.css";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const { pathname } = router;

  if (pathname === "/retro") return <Component {...pageProps} />;
  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}

export default MyApp;
