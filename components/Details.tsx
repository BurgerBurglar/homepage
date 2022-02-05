import Image from "next/image";
import React from "react";
import { DiJavascript1 } from "react-icons/di";
import { FaReact } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import {
  SiTypescript,
  SiNextdotjs,
  SiSass,
  SiMaterialui,
  SiGraphql,
  SiPostgresql,
  SiMongodb,
  SiRedis,
  SiNodedotjs,
  SiLinkedin,
  SiGithub,
  SiMaildotru,
} from "react-icons/si";

interface DetailsProps {}

export const Details: React.FC<DetailsProps> = () => {
  return (
    <>
      <div className="details">
        <section>
          <h2>I&apos;ve made these websites...</h2>
          <li>
            <a href="https://megacritic.vercel.app/">Megacritic</a>
          </li>
          <li>
            <a href="">No name</a>
          </li>
          <li>
            <a href="">Pet finder</a>
          </li>
        </section>
        <section>
          <h2>I know these skills...</h2>
          <ul className="skills">
            <li>
              <SiTypescript color="#007acc" /> TypeScript{" "}
              <span style={{ color: "red" }}>♥</span>
            </li>
            <li>
              <DiJavascript1 color="#F0DB4F" /> JavaScript
            </li>
            <li>
              <FaReact color="#61DBFB" /> React.js
            </li>
            <li>
              <SiNextdotjs color="white" /> Next.js
            </li>
            <li>
              <IoLogoCss3 color="#264de4" /> CSS / <SiSass color="#CD6799" />{" "}
              SASS
            </li>
            <li>
              <SiMaterialui color="#007FFF" /> MaterialUI
            </li>
            <li>
              <SiGraphql color="#e535ab" /> GraphQL
            </li>
            <li>
              <SiPostgresql color="326690" /> SQL
            </li>
            <li>
              NoSQL (<SiMongodb color="4DB33D" /> MongoDB,{" "}
              <SiRedis color="D82C20" /> Redis...)
            </li>
            <li>
              <Image src="/python.png" alt="python" height={25} width={25} />{" "}
              Python!!!
            </li>
            <li>
              <SiNodedotjs color="#3C873A" /> Node.js
            </li>
          </ul>
        </section>
        <section>
          <h2>Please reach me at...</h2>
          <li>
            <a href="https://www.linkedin.com/in/shuo-tian/">
              <SiLinkedin color="#2867B2" /> LinkedIn
            </a>
          </li>
          <li>
            <a href="https://github.com/BurgerBurglar/">
              <SiGithub /> GitHub
            </a>
          </li>
          <li>
            <a href="tianshuo1996@outlook.com">
              <SiMaildotru /> Email me
            </a>
          </li>
        </section>
      </div>
      <style jsx>{`
        .details {
          width: 100%;
          display: flex;
          justify-content: center;
        }

        section {
          margin-left: 2rem;
        }
        section:first-child {
          margin-left: 0;
        }

        h2 {
          font-size: 1.5rem;
        }

        li,
        a {
          width: fit-content;
          font-size: 1.2rem;
          color: white;
        }

        li:hover,
        a:hover {
          color: red;
          transform: rotateY(1turn);
          transition: transform 2s;
        }
      `}</style>
    </>
  );
};
