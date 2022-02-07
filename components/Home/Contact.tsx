import { Heading, Link, Stack, Text, Wrap, WrapItem } from "@chakra-ui/react";
import { SiGithub, SiLinkedin, SiMaildotru } from "react-icons/si";

interface ContactProps {}

export const Contact: React.FC<ContactProps> = () => {
  return (
    <Stack spacing={3}>
      <Heading>Let&apos;s get in touch</Heading>
      <Text fontSize="1.2rem">
        Want to hire me, work with me on a side project, or simply say hi?
      </Text>
      <Wrap spacing={2} fontSize="1.2rem">
        <WrapItem w="6rem">
          <Link href="https://www.linkedin.com/in/shuo-tian/">
            <SiLinkedin fontSize="1.5rem" color="#2867B2" /> LinkedIn
          </Link>
        </WrapItem>
        <WrapItem w="6rem">
          <Link href="https://github.com/BurgerBurglar/">
            <SiGithub fontSize="1.5rem" /> GitHub
          </Link>
        </WrapItem>
        <WrapItem w="6rem">
          <Link href="mailto:tianshuo1996@outlook.com">
            <SiMaildotru fontSize="1.5rem" /> Email
          </Link>
        </WrapItem>
      </Wrap>
    </Stack>
  );
};
