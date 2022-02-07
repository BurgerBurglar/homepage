import { Box, Container, Stack, Text } from "@chakra-ui/react";
import { NextPage } from "next";
import Head from "next/head";
import { Slides } from "../components/Home/Slides";
interface Props {}

const Home: NextPage<Props> = () => {
  return (
    <>
      <Head>
        <title>Shuo Tian</title>
      </Head>
      <Slides>
        <Container maxW="container.lg">
          <Stack spacing={5} fontSize="1.2rem" fontFamily="mono">
            <Text color="telegram.800">Hi, my name is</Text>
            <Box fontSize="3rem" fontWeight="bold" lineHeight="1em">
              <Text
                bgGradient="linear(to-l, #7928CA, #FF0080)"
                bgClip="text"
                w="fit-content"
              >
                Shuo Tian.
              </Text>
              <Text color="gray.600">I make websites.</Text>
            </Box>
            <Text color="gray.600" fontFamily="body">
              I&apos;m a front-end developer who loves making the web more
              performant, accessible, and intuitive.
            </Text>
          </Stack>
        </Container>

        <Container maxW="container.lg">
          <Stack spacing={5} fontSize="1.2rem" fontFamily="mono">
            <Text color="telegram.800">Hi, my name is</Text>
            <Box fontSize="3rem" fontWeight="bold" lineHeight="1em">
              <Text
                bgGradient="linear(to-l, #7928CA, #FF0080)"
                bgClip="text"
                w="fit-content"
              >
                Shuo Tian.
              </Text>
              <Text color="gray.600">I make websites.</Text>
            </Box>
            <Text color="gray.600" fontFamily="body">
              I&apos;m a front-end developer who loves making the web more
              performant, accessible, and intuitive.
            </Text>
          </Stack>
        </Container>
      </Slides>
    </>
  );
};
export default Home;
