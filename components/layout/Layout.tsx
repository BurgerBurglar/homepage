import { Box, useColorModeValue } from "@chakra-ui/react";
import React from "react";
import { Footer } from "./Footer";
import { Navbar } from "./Navbar";

export const Layout: React.FC = ({ children }) => {
  const navbarH = "3rem";
  const bgColor = useColorModeValue("#ffffffBB", "#000000BB");
  return (
    <>
      <Box>
        <Navbar h={navbarH} />
        <Box className="content">{children}</Box>
        <Footer />
      </Box>
    </>
  );
};
