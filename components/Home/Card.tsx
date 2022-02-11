import {
  AspectRatio,
  Box,
  Center,
  Flex,
  Heading,
  Link,
  Stack,
  Text,
  Wrap,
} from "@chakra-ui/react";
import Image from "next/image";
import NextLink from "next/link";
import { useBreakPoint } from "../../utils/useBreakPoint";
import useHover from "../../utils/useHover";

interface CardProps {
  name: string;
  link: string;
  description: string;
  image: string;
  tags: string[];
}

export const Card: React.FC<CardProps> = ({
  name,
  link,
  description,
  image,
  tags,
}) => {
  const isSmallScreen = useBreakPoint(768);
  const projectDirection = isSmallScreen ? "column" : "row";
  const middleGap = isSmallScreen ? "1rem" : "3rem";
  const imageMaxW = isSmallScreen ? "full" : 500;

  const { isHovered, handleMouseHover } = useHover();
  const headingColor = isHovered ? "accent" : "millet";
  const otherColor = isHovered ? "corn" : "millet";
  const borderColor = isHovered ? "corn" : "#00000000";

  const transition = { transition: "0.3s ease-in" };

  return (
    <Flex
      className="project"
      flexDirection={projectDirection}
      justify="center"
      border="1px solid"
      borderColor={borderColor}
      w="full"
      onMouseEnter={handleMouseHover}
      onMouseLeave={handleMouseHover}
      {...transition}
    >
      <AspectRatio
        ratio={3 / 2}
        flexShrink={0}
        position="relative"
        maxW={imageMaxW}
        w="full"
      >
        <NextLink href={link} passHref>
          <Link
            sx={{
              img: {},
            }}
            {...transition}
          >
            <Image src={image} alt={name} layout="fill" />
          </Link>
        </NextLink>
      </AspectRatio>
      <Box w={middleGap} h={middleGap} />
      <Stack
        className="info"
        spacing={3}
        justify="center"
        flex="0 1 1"
        w="full"
        minW={0}
      >
        <Flex className="heading-wrapper" align="center" w="full">
          <Heading
            as="h3"
            color={headingColor}
            fontSize="1.5rem"
            flexShrink={0}
            maxW="20em"
            {...transition}
          >
            {name}
          </Heading>
          <Box flexShrink={0} w="2em" />
          <Box bgColor={headingColor} w="full" h="1px" {...transition} />
        </Flex>
        <Flex
          className="description-wrapper"
          align="center"
          color={otherColor}
          w="full"
          {...transition}
        >
          <Text flexShrink={0} w="15em" maxW="100%">
            {description}
          </Text>
          <Box flexShrink={0} w="2em" />
          <Box bgColor={otherColor} w="full" h="0.2rem" {...transition} />
        </Flex>
        <Wrap color={otherColor} {...transition}>
          {tags.map((tag) => (
            <Center
              key={tag}
              fontFamily="mono"
              border="1px solid"
              px="0.5em"
              py="0.1em"
            >
              {tag}
            </Center>
          ))}
        </Wrap>
      </Stack>
    </Flex>
  );
};
