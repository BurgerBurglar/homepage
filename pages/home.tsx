import { Container } from "@chakra-ui/react";
import { NextPage } from "next";
import Head from "next/head";
import { Me } from "../components/Home/Me";
import { Slides } from "../components/Home/Slides";
import { Work } from "../components/Home/Work";
interface Props {}

const Home: NextPage<Props> = () => {
  return (
    <>
      <Head>
        <title>Shuo Tian</title>
      </Head>
      <Slides>
        <Container maxW="container.lg">
          <Me />
        </Container>
        <Container maxW="container.lg">
          <Work />
        </Container>
      </Slides>
    </>
  );
};
export default Home;
