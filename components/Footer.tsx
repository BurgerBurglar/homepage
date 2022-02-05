import React from "react";
import { useFont } from "../utils/useFont";

interface FooterProps {}

export const Footer: React.FC<FooterProps> = () => {
  const font = useFont();
  return (
    <>
      <footer>© 2022 Shuo Tian</footer>
      <style jsx>{`
        footer {
          text-align: center;
          flex-grow: 0;
          height: 2rem;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        * {
          font-family: ${font};
        }
      `}</style>
    </>
  );
};
