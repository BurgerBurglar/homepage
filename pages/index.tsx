import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Details } from "../components/Details";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
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
            <Image src="/photo.jpg" width={300} height={300} alt="my photo" />
            <div className="photoTag">Best Seller</div>
          </div>
          <Details />
        </main>
      </div>
      <style jsx>{`
        .background {
          min-width: 100%;
          min-height: 100%;
          background-image: url("/background.webp"),
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
        }
        .name span:hover {
          color: red;
        }
        .photo {
          position: relative;
        }
        .photo:hover {
          box-shadow: 0px 0px 30px yellow;
          transform: translateY(-0.2rem);
        }
        .photo .photoTag {
          position: absolute;
          top: 0;
          right: -3rem;
          padding: 1rem;
          background-color: #ff0000bb;
          color: yellow;
          font-size: 1.5rem;
          transform: rotate(45deg);
          border-radius: 50%;
        }

        * {
          font-family: "Comic Neue", cursive;
        }
      `}</style>
    </>
  );
};

export default Home;
