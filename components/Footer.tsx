import { Center, Container, Flex } from "@chakra-ui/react";
import React from "react";

export const Footer: React.FC = () => {
  return (
    <Flex color="gray.300" bgColor="#ffffff22" flex="2rem 0 0 ">
      <Container>
        <Center h="full">© Shuo Tian 2022, no rights reserved</Center>
      </Container>
    </Flex>
  );
};
