import {
  Container,
  Flex,
  FlexProps,
  HStack,
  Link,
  LinkProps,
  Select,
  Spacer,
} from "@chakra-ui/react";
import Image from "next/image";
import NextLink from "next/link";
import { ReactElement, useRef, useState } from "react";
import "swiper/css";
import "swiper/css/effect-creative";
import "swiper/css/pagination";
import getNavbarBgColor from "../../utils/getNavbarBgColor";
import isClientSide from "../../utils/isClientSide";

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
  const navbarRef = useRef<HTMLDivElement>(null);
  const [navbarBg, setNavbarBg] = useState<string>("corn");

  const updateBg = () => {
    if (!isClientSide()) return;
    window.onscroll = () => {
      const position = window.scrollY;
      const newNavbarBg = getNavbarBgColor(position);
      if (
        newNavbarBg !== undefined &&
        navbarRef.current !== null &&
        navbarBg !== newNavbarBg
      ) {
        setNavbarBg(newNavbarBg);
      }
    };
  };
  updateBg();

  return (
    <Flex
      ref={navbarRef}
      as="nav"
      position="fixed"
      zIndex={9}
      w="full"
      align="center"
      bgColor={navbarBg}
      borderBottom="2px solid"
      borderColor="#007acc33"
      {...props}
    >
      <Container maxW="container.lg" display="flex" alignItems="center">
        <HStack spacing="5rem" color="gray.800" fontSize="1.2rem" w="full">
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

          <Select
            variant="unstyled"
            defaultValue="en"
            w="fit-content"
            sx={{
              option: {
                color: "gray.800",
              },
            }}
          >
            <option value="en">English</option>
            <option value="zh-CN">简体中文</option>
          </Select>
        </HStack>
      </Container>
    </Flex>
  );
};
