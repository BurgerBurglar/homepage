import {
  Box,
  Center,
  Flex,
  Heading,
  Icon,
  Link,
  Text,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import { SiGithub, SiLinkedin, SiMaildotru } from "react-icons/si";
import { GoTo } from "./GoTo";

interface ContactProps {}

export const Contact: React.FC<ContactProps> = () => {
  return (
    <Center id="contact" bgColor="millet" h="100vh">
      <Flex
        direction="column"
        align="center"
        position="relative"
        maxW="container.lg"
        w="full"
        border="1px solid"
        borderColor="theme"
        py="10rem"
        mx="2rem"
      >
        <Heading fontSize="4rem">Let&apos;s get in touch.</Heading>
        <Text fontSize="1.5rem" mt={3}>
          Want to hire me, work with me on a side project, or simply say hi?
        </Text>
        <Wrap spacing={2} fontSize="2rem" mt={8}>
          <WrapItem w="6rem">
            <Link href="https://www.linkedin.com/in/shuo-tian/">
              <Icon
                as={SiLinkedin}
                color="#2867B2"
                _hover={{
                  boxShadow: "0px 0px 0.3rem var(--chakra-colors-theme)",
                }}
              />
            </Link>
          </WrapItem>
          <WrapItem w="6rem">
            <Link href="https://github.com/BurgerBurglar/">
              <Icon
                as={SiGithub}
                rounded="full"
                _hover={{
                  boxShadow: "0px 0px 0.3rem var(--chakra-colors-theme)",
                }}
              />
            </Link>
          </WrapItem>
          <WrapItem w="6rem">
            <Link href="mailto:tianshuo1996@outlook.com">
              <Icon
                as={SiMaildotru}
                rounded="full"
                _hover={{
                  boxShadow: "0px 0px 0.3rem var(--chakra-colors-theme)",
                }}
              />
            </Link>
          </WrapItem>
        </Wrap>
        <GoTo to="#me" isTop position="absolute" bottom="15%">
          <Text>
            Back to the{" "}
            <Box as="span" fontWeight="bold">
              Top
            </Box>
          </Text>
        </GoTo>
      </Flex>
    </Center>
  );
};
