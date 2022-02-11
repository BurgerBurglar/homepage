import { NextPage } from "next";
import Head from "next/head";
import { Contact } from "../components/Home/Contact";
import { Me } from "../components/Home/Me";
import { Work } from "../components/Home/Work";
interface Props {}

const Home: NextPage<Props> = () => {
  return (
    <>
      <Head>
        <title>Shuo Tian</title>
      </Head>
      <Me />
      <Work />
      <Contact />
    </>
  );
};
export default Home;
