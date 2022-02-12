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
import { ReactElement } from "react";

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
  const color = "white";
  return (
    <Flex
      as="nav"
      position="fixed"
      zIndex={9}
      w="full"
      align="center"
      bgColor="nav"
      fontWeight="bold"
      // borderBottom="2px solid"
      // borderColor="accent"
      {...props}
    >
      <Container maxW="container.lg" display="flex" alignItems="center">
        <HStack spacing="5rem" color={color} fontSize="1.2rem" w="full">
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
            fontWeight="bold"
            w="fit-content"
            sx={{
              option: {
                bgColor: "nav",
                color: color,
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
