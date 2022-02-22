import { AspectRatio, Box, Flex, Icon, Stack, Text } from "@chakra-ui/react";
import Image from "next/image";
import { BsMouse } from "react-icons/bs";
import { NAVBAR_HEIGHT } from "../../utils/constants";
import { GoTo } from "./GoTo";

interface MeProps {}

export const Me: React.FC<MeProps> = () => {
  return (
    <Flex
      id="me"
      position="relative"
      justify="center"
      align="center"
      textAlign="center"
      fontSize="1.5rem"
      bg="plain"
      color="text"
      minH={`calc(100vh - ${NAVBAR_HEIGHT})`}
      pt="4rem"
      pb="2rem"
    >
      <Stack align="stretch" spacing={5} zIndex={2} px={5} maxW="container.sm">
        <Flex justify="center">
          <AspectRatio ratio={1} w="full" maxW={300}>
            <Image src="/photo.jpg" alt="me" layout="fill" priority />
          </AspectRatio>
        </Flex>
        <Stack>
          <Text>Hi, my name is</Text>
          <Box
            fontSize="clamp(2rem, 10vmin, 3rem)"
            fontWeight="bold"
            lineHeight="1em"
          >
            <Text as="h2" color="accent">
              Shuo Tian.
            </Text>
            <Text>I make websites.</Text>
          </Box>
          <Text w="fit-content" wordBreak="break-word">
            I&apos;m a front-end developer who loves making the web more
            performant, accessible, and intuitive.
          </Text>
        </Stack>
        <GoTo to="#work" color="plain" hoverBg="dark">
          <Text>
            Check out{" "}
            <Box as="span" fontWeight="bold">
              my work
            </Box>
          </Text>
        </GoTo>
      </Stack>
      <Flex
        display={{ base: "none", md: "flex" }}
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
          bgColor="text"
          transform="translateY(9.5px)"
        />
        <Box
          className="arrow"
          w="10px"
          h="10px"
          borderTop="2px solid"
          borderRight="2px solid"
          borderColor="text"
          transform="rotate(135deg)"
        />
      </Flex>
    </Flex>
  );
};
