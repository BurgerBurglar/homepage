import Image from "next/image";
import React from "react";
import { useFont } from "../utils/useFont";

interface FooterProps {}

export const Footer: React.FC<FooterProps> = () => {
  const font = useFont();
  return (
    <>
      <footer>
        <Image src="/copyleft.webp" alt="copyleft" width={10} height={10} />
        <span className="copyleft">
          2022 Shuo Tian no rights reserved do whatever you want
        </span>
      </footer>
      <style jsx>{`
        footer {
          text-align: center;
          flex-grow: 0;
          height: 2rem;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: #000000cc;
          color: white;
        }

        footer .copyleft {
          margin: 0 0.3rem;
        }

        * {
          font-family: ${font};
        }
      `}</style>
    </>
  );
};
