import { Box } from "@chakra-ui/react";
import React from "react";
import { NAVBAR_HEIGHT } from "../../utils/constants";
import { Footer } from "./Footer";
import { Navbar } from "./Navbar";

export const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Navbar h={NAVBAR_HEIGHT} />
      <Box className="content" pt={NAVBAR_HEIGHT}>
        {children}
      </Box>
      <Footer />
    </>
  );
};
