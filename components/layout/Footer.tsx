import { Center, Container, Flex } from "@chakra-ui/react"
import React from "react"

export const Footer: React.FC = () => {
  const year = new Date().getFullYear()
  return (
    <Flex color="plain" bgColor="dark" h="3rem">
      <Container>
        <Center h="full">© Shuo Tian {year}, no rights reserved.</Center>
      </Container>
    </Flex>
  )
}
