import { NextPage } from "next";
import Head from "next/head";
import "swiper/css";
import "swiper/css/effect-creative";
import "swiper/css/pagination";
import { Slides } from "../components/Home/Slides";
interface Props {}

const Home: NextPage<Props> = () => {
  return (
    <>
      <Head>
        <title>Shuo Tian</title>
      </Head>

      <Slides></Slides>
    </>
  );
};
export default Home;
