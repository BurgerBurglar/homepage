import React from "react";
import { Footer } from "./Footer";
import { Navbar } from "./Navbar";

interface LayoutProps {}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className="content">{children}</div>
      <Footer />
      <style jsx>{`
        .content {
          flex-grow: 1;
          display: flex;
        }
      `}</style>
    </>
  );
};
