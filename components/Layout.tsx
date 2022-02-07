import { Box } from "@chakra-ui/react";
import React from "react";
import { Footer } from "./Footer";
import { Navbar } from "./Navbar";

export const Layout: React.FC = ({ children }) => {
  const navbarH = "3rem";
  return (
    <>
      <Navbar h={navbarH} />
      <Box className="content" pt={navbarH}>
        {children}
      </Box>
      <Footer />
    </>
  );
};
