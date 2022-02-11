import {
  Button,
  Container,
  Flex,
  FlexProps,
  HStack,
  Link,
  LinkProps,
  Spacer,
  Switch,
  useColorMode,
} from "@chakra-ui/react";
import Image from "next/image";
import NextLink from "next/link";
import { ReactElement } from "react";
import { IoMdMoon, IoMdSunny } from "react-icons/io";
import "swiper/css";
import "swiper/css/effect-creative";
import "swiper/css/pagination";

interface NavLinkProps extends LinkProps {
  href: string;
  content: string | ReactElement;
}

const NavLink: React.FC<NavLinkProps> = ({ href, content, ...linkProps }) => (
  <NextLink href={href} passHref>
    <Link {...linkProps}>{content}</Link>
  </NextLink>
);

interface NavbarProps extends FlexProps {}
export const Navbar: React.FC<NavbarProps> = (props) => {
  return (
    <Flex
      as="nav"
      position="fixed"
      zIndex={9}
      w="full"
      align="center"
      bgColor="#007acc11"
      borderBottom="2px solid"
      borderColor="#007acc33"
      {...props}
    >
      <Container maxW="container.lg" display="flex" alignItems="center">
        <HStack spacing={8} color="gray.800" fontSize="1.2rem" w="full">
          <NavLink
            href="/home"
            h="36px"
            content={
              <Image src="/favicon.ico" alt="logo" width={36} height={36} />
            }
          />
          <NavLink href="/blogs" content="blogs" />
          <NavLink href="/" content="retro" />
          <Spacer />
        </HStack>
      </Container>
    </Flex>
  );
};
