import { Box, useColorModeValue } from "@chakra-ui/react";
import React from "react";
import { Footer } from "./Footer";
import { Navbar } from "./Navbar";

export const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Box>
        <Navbar />
        <Box className="content">{children}</Box>
        <Footer />
      </Box>
    </>
  );
};
