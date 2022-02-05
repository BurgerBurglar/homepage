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
} from "react-icons/si";

interface DetailsProps {}

export const Details: React.FC<DetailsProps> = () => {
  return (
    <>
      <div className="details">
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
            <IoLogoCss3 color="#264de4" /> CSS / <SiSass color="#CD6799" /> SASS
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
      </div>
      <style jsx>{`
        h2 {
          font-size: 1.5rem;
        }

        li {
          width: fit-content;
          font-size: 1.2rem;
        }

        li:hover {
          color: red;
          transform: rotateY(1turn);
          transition: transform 2s;
        }
      `}</style>
    </>
  );
};
