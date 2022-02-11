import {
  Box,
  Flex,
  Icon,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import Image from "next/image";
import { BsMouse } from "react-icons/bs";

interface MeProps {}

export const Me: React.FC<MeProps> = () => {
  const color = "gray.800";
  const bgColor = "millet";
  return (
    <Flex
      position="relative"
      justify="center"
      align="center"
      textAlign="center"
      fontSize="1.5rem"
      bg={bgColor}
      color={color}
      h="100vh"
    >
      <Stack align="stretch" spacing={5} zIndex={2} px={5} maxW="container.sm">
        <Flex justify="center" w="full">
          <Image src="/photo.jpg" alt="me" width={300} height={300} />
        </Flex>
        <Stack>
          <Text>Hi, my name is</Text>
          <Box fontSize="3rem" fontWeight="bold" lineHeight="1em">
            <Text color="theme">Shuo Tian.</Text>
            <Text>I make websites.</Text>
          </Box>
          <Text w="fit-content" wordBreak="break-word">
            I&apos;m a front-end developer who loves making the web more
            performant, accessible, and intuitive.
          </Text>
        </Stack>
      </Stack>
      <Flex
        direction="column"
        align="center"
        position="absolute"
        right="5rem"
        bottom="10rem"
        opacity={0.5}
      >
        <Icon as={BsMouse} mb={3} />
        <Box
          className="line"
          w="2px"
          h="5rem"
          bgColor={color}
          transform="translateY(9.5px)"
        />
        <Box
          className="arrow"
          w="10px"
          h="10px"
          borderTop="2px solid"
          borderRight="2px solid"
          borderColor={color}
          transform="rotate(135deg)"
        />
      </Flex>
    </Flex>
  );
};
