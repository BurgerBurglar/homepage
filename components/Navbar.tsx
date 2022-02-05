import Link from "next/link";
import React from "react";
import { useFont } from "../utils/useFont";

interface NavbarProps {}

export const Navbar: React.FC<NavbarProps> = () => {
  const font = useFont();
  return (
    <>
      <nav>
        <div className="navContainer">
          <span className="logo">
            <Link href="/" passHref>
              <a>Shuo Tian</a>
            </Link>
          </span>
          <ul className="navLinks">
            <li>
              <Link href="/" passHref>
                <a>Home</a>
              </Link>
            </li>
            <li>
              <Link href="/blogs" passHref>
                <a>Blogs</a>
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      <style jsx>{`
        nav {
          background-color: darkblue;
          height: 3rem;
          display: flex;
          justify-content: center;
        }

        .navContainer {
          padding: 0 1rem;
          display: flex;
          align-items: center;
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

        .navLinks {
          list-style: none;
          padding: 0;
          margin-left: 2rem;
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
