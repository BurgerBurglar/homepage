import { Center, Container, Flex } from "@chakra-ui/react";
import React from "react";

export const Footer: React.FC = () => {
  return (
    <Flex color="white" bgColor="dark" h="3rem">
      <Container>
        <Center h="full">© Shuo Tian 2022, no rights reserved</Center>
      </Container>
    </Flex>
  );
};
