import Image from "next/image";
import React from "react";
import { useFont } from "../../utils/useFont";

interface FooterProps {}

export const Footer: React.FC<FooterProps> = () => {
  const font = useFont();
  return (
    <>
      <footer>
        <Image src="/genie.webp" alt="genie" width={50} height={50} />
        <Image src="/copyleft.webp" alt="copyleft" width={10} height={10} />
        <span className="copyleft">
          2022 Shuo Tian no rights reserved do whatever you want
        </span>
        <Image src="/funstuff.gif" alt="genie" width={50} height={50} />
      </footer>
      <style jsx>{`
        footer {
          text-align: left;
          flex-grow: 0;
          height: fit-content;
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
