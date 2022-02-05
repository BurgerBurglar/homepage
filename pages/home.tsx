import { NextUIProvider } from "@nextui-org/react";
import { NextPage } from "next";
import "swiper/css";
import "swiper/css/effect-creative";
import "swiper/css/pagination";
import { Slides } from "../components/Home/Slides";
interface Props {}
const Home: NextPage<Props> = () => {
  return (
    <>
      <NextUIProvider>
        <Slides>
          {[
            "Slide 1",
            "Slide 2",
            "Slide 3",
            "Slide 4",
            "Slide 5",
            "Slide 6",
            "Slide 7",
            "Slide 8",
            "Slide 9",
          ]}
        </Slides>
      </NextUIProvider>
    </>
  );
};
export default Home;
