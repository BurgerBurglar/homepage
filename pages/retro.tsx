import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Details } from "../components/retro/Details";
import { Layout } from "../components/retro/Layout";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Shuo Tian</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <div className="background">
          <main>
            <h1>
              Hello, my name is{" "}
              <span className="name">
                {"Shuo Tian".split("").map((char, i) => (
                  <span key={i}>{char}</span>
                ))}
              </span>
              , a front-end developer.
            </h1>
            <div className="photo">
              <Image
                src="/photo.jpg"
                width={300}
                height={300}
                alt="my photo"
                priority
              />
              <div className="photoTag">Best Seller</div>
            </div>
            <Details />
          </main>
        </div>
      </Layout>
      <style jsx>{`
        .background {
          min-width: 100%;
          min-height: 100%;
          background-image: url("/rainbow-cat.gif"),
            linear-gradient(#eb01a5, #d13531);
          background-repeat: repeat;
          background-size: 10%;
          background-blend-mode: darken;
        }
        main {
          flex: 1;
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          color: white;
          max-width: 1440px;
          background-color: #000000dd;
          border: solid;
          border-width: 0 2px;
          border-color: black;
          margin: auto;
          padding: 0 1rem;
          overflow: hidden;
        }
        .name span:hover {
          color: red;
        }
        .photo {
          position: relative;
          max-width: 80vw;
        }
        .photo:hover {
          box-shadow: 0px 0px 30px yellow;
          transform: translateY(-0.2rem);
        }
        .photo .photoTag {
          position: absolute;
          top: 0;
          right: max(-3rem, -10vw);
          padding: 1rem;
          background-color: #ff0000bb;
          color: yellow;
          font-size: min(1.5rem, 5vmin);
          transform: rotate(45deg);
          border-radius: 50%;
        }
        a,
        button {
          cursor: url("/pointer.png"), pointer;
        }
        * {
          cursor: url("/mouse.png"), auto;
          font-family: "Comic Neue", cursive;
        }
      `}</style>
    </>
  );
};

export default Home;