import { Box, Center, Flex, Heading, Icon, Link, Text } from "@chakra-ui/react";
import { SiGithub, SiLinkedin, SiMaildotru } from "react-icons/si";
import { GoTo } from "./GoTo";

interface ContactProps {}

const Spacing = () => <Box flex="0 1" w="10rem" h="full" />;

export const Contact: React.FC<ContactProps> = () => {
  return (
    <Center id="contact" bgColor="corn" h="100vh" px="1rem">
      <Flex
        className="contact-container"
        justify="center"
        align="center"
        textAlign="center"
        border="1px solid"
        borderColor="theme"
        maxW="full"
        px="1rem"
        py="10rem"
      >
        <Spacing />
        <Flex direction="column" align="center" position="relative">
          <Heading fontSize="4rem">Let&apos;s get in touch.</Heading>
          <Text fontSize="1.5rem" mt={3}>
            Want to hire me, work with me on a side project, or simply say hi?
          </Text>
          <Flex
            justify="space-between"
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
          </Flex>
          {/* <GoTo
            to="#me"
            color="corn"
            hoverBg="dark"
            isTop
            position="absolute"
            bottom="15%"
          >
            <Text>
              Back to the{" "}
              <Box as="span" fontWeight="bold">
                Top
              </Box>
            </Text>
          </GoTo> */}
        </Flex>
        <Spacing />
      </Flex>
    </Center>
  );
};
