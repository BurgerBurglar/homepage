import { Flex, FlexProps, Icon, Link } from "@chakra-ui/react";
import React from "react";
import {
  IoIosArrowDropdownCircle,
  IoIosArrowDropupCircle,
} from "react-icons/io";

interface GoToProps extends FlexProps {
  to: string;
  isTop?: boolean;
  color: string;
  hoverBg: string;
}

export const GoTo: React.FC<GoToProps> = ({
  children,
  to,
  isTop = false,
  color,
  hoverBg,
  ...props
}) => {
  const icon = isTop ? IoIosArrowDropupCircle : IoIosArrowDropdownCircle;
  return (
    <Flex justify="center" {...props}>
      <Link
        href={to}
        display="flex"
        alignItems="center"
        bgColor="accent"
        textTransform="uppercase"
        fontSize="1.1rem"
        color={color}
        rounded="full"
        w="fit-content"
        px="1em"
        py="0.2em"
        _hover={{
          bgColor: hoverBg,
          transition: "background-color 0.6s ease",
        }}
      >
        {children}
        <Icon as={icon} fontSize="1.5rem" ml="0.5rem" />
      </Link>
    </Flex>
  );
};
