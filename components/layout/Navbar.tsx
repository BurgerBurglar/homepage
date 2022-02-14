import { HamburgerIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Container,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  FlexProps,
  HStack,
  IconButton,
  Input,
  Link,
  LinkProps,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Select,
  Stack,
  useBoolean,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import Image from "next/image";
import NextLink from "next/link";
import { ReactElement, useRef } from "react";
import { useBreakPoint } from "../../utils/useBreakPoint";

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
  const isMobile = useBreakPoint(768);

  const [isOpen, { toggle, off }] = useBoolean();
  const btnRef = useRef<HTMLButtonElement>(null);

  const icon = (
    <NavLink
      href="/"
      h="36px"
      content={<Image src="/favicon.ico" alt="logo" width={36} height={36} />}
    />
  );

  const navLinks = [
    <NavLink key={0} href="/blogs" content="blogs" />,
    <NavLink key={1} href="/retro" content="retro" />,
  ];

  const selection = (
    <Select
      variant="unstyled"
      defaultValue="en"
      fontWeight="bold"
      w="8em"
      ml="auto"
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
  );

  return (
    <>
      <Flex
        as="nav"
        bgColor="nav"
        color={color}
        direction="column"
        position="fixed"
        zIndex={9}
        w="full"
      >
        <Container maxW="container.lg">
          <Flex
            minH="3rem"
            justifyContent="space-between"
            align="center"
            fontSize="1.2rem"
            {...props}
          >
            {isMobile ? (
              <>
                <IconButton
                  ref={btnRef}
                  icon={<HamburgerIcon />}
                  aria-label="drawer"
                  colorScheme="blue"
                  bgColor="nav"
                  position="relative"
                  left={-4}
                  onClick={toggle}
                />
                {icon}
              </>
            ) : (
              <>
                <HStack spacing="5rem" w="full">
                  {[icon, navLinks]}
                </HStack>
                {/* {selection} */}
              </>
            )}
          </Flex>
          {!isMobile || !isOpen ? null : (
            <VStack spacing={4} align="start" py={4}>
              {[
                navLinks,
                // selection
              ]}
            </VStack>
          )}
        </Container>
      </Flex>
      {!isMobile || !isOpen ? null : (
        <Box
          className="overlay"
          position="fixed"
          w="100vw"
          h="100vh"
          zIndex={3}
          onClick={off}
        />
      )}
    </>
  );
};
