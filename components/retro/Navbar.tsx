import Link from "next/link";
import React from "react";
import { useBreakPoint } from "../../utils/useBreakPoint";
import { useFont } from "../../utils/useFont";

interface NavbarProps {}

export const Navbar: React.FC<NavbarProps> = () => {
  const font = useFont();
  const isMobile = useBreakPoint(520);
  const navFlexDirection = isMobile ? "column" : "row";
  const navAlign = isMobile ? "start" : "center";
  const linksMargin = isMobile ? 0 : "2rem";

  return (
    <>
      <nav>
        <div className="navContainer">
          <span className="logo">
            <Link href="/retro" passHref>
              <a>Shuo Tian</a>
            </Link>
          </span>
          <ul className="navLinks">
            <li>
              <Link href="/retro" passHref>
                <a>Home</a>
              </Link>
            </li>
            <li>
              <Link href="/blogs" passHref>
                <a>Blogs</a>
              </Link>
            </li>
            <li>
              <Link href="/" passHref>
                <a>Take me to the modern world</a>
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      <style jsx>{`
        nav {
          background-color: darkblue;
          display: flex;
          justify-content: center;
        }

        .navContainer {
          padding: 0 1rem;
          display: flex;
          flex-direction: ${navFlexDirection};
          align-items: ${navAlign};
          max-width: 1440px;
          width: 100%;
        }

        nav .logo a {
          font-size: 1.8rem;
          text-decoration: none;
          width: max-content;
          font-weight: 900;
          color: transparent;
          background: linear-gradient(
            to left,
            #a104ad,
            #0b2be0,
            #329941,
            #f7f658,
            #f16412,
            #e92153,
            #aa04a7
          );
          -webkit-text-fill-color: transparent;
          -webkit-text-stroke: 0.01em #eaeaea;
          -webkit-background-clip: text;
          background-clip: text;
          letter-spacing: 0.1rem;
        }
        .navLinks a:hover {
          color: yellow;
        }
        .navLinks {
          list-style: none;
          padding: 0;
          margin-left: ${linksMargin};
        }

        .navLinks li {
          display: inline;
          margin-left: 2rem;
        }

        .navLinks li:first-child {
          margin-left: 0;
        }

        .navLinks a {
          color: white;
        }

        * {
          font-family: ${font};
        }
      `}</style>
    </>
  );
};
