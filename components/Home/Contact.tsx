import { Box, Center, Flex, Heading, Icon, Link, Text } from "@chakra-ui/react";
import { SiGithub, SiLinkedin, SiMaildotru } from "react-icons/si";
import { GoTo } from "./GoTo";

interface ContactProps {}

export const Contact: React.FC<ContactProps> = () => {
  return (
    <Center id="contact" bgColor="lessPlain" minH="100vh" px="1rem" py="4rem">
      <Flex direction="column" align="center" textAlign="center">
        <Heading fontSize="clamp(3rem, 7vw,4rem)">
          Let&apos;s get in touch.
        </Heading>
        <Text fontSize="1.5rem" mt={3}>
          Want to hire me, work with me on a side project, or simply say hi?
        </Text>
        <Flex
          justify="space-between"
          position="relative"
          fontSize="2rem"
          w="full"
          maxW="15rem"
          mt={8}
        >
          <Link href="https://www.linkedin.com/in/shuo-tian/">
            <Icon
              as={SiLinkedin}
              color="#2867B2"
              _hover={{
                boxShadow: "0px 0px 0.3rem var(--chakra-colors-theme)",
              }}
            />
          </Link>
          <Link href="https://github.com/BurgerBurglar/">
            <Icon
              as={SiGithub}
              rounded="full"
              _hover={{
                boxShadow: "0px 0px 0.3rem var(--chakra-colors-theme)",
              }}
            />
          </Link>
          <Link href="mailto:tianshuo1996@outlook.com">
            <Icon
              as={SiMaildotru}
              rounded="full"
              _hover={{
                boxShadow: "0px 0px 0.3rem var(--chakra-colors-theme)",
              }}
            />
          </Link>
          <GoTo
            to="#me"
            color="lessPlain"
            hoverBg="dark"
            isTop
            position="absolute"
            top="calc(100% + 20px)"
          >
            <Text>
              Back to the{" "}
              <Box as="span" fontWeight="bold">
                Top
              </Box>
            </Text>
          </GoTo>
        </Flex>
      </Flex>
    </Center>
  );
};
