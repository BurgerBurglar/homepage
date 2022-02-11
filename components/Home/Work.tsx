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

interface CardProps {
  name: string;
  link: string;
  description: string;
  image: string;
  tags: string[];
}

const Card: React.FC<CardProps> = ({
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
  return (
    <Flex
      className="project"
      flexDirection={projectDirection}
      justify="center"
      color="millet"
      w="full"
    >
      <AspectRatio
        ratio={3 / 2}
        flexShrink={0}
        position="relative"
        maxW={imageMaxW}
        w="full"
      >
        <NextLink href={link} passHref>
          <Link>
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
          <Heading as="h3" fontSize="1.5rem" flexShrink={0} maxW="20em">
            {name}
          </Heading>
          <Box flexShrink={0} w="2em" />
          <Box bgColor="white" w="full" h="1px" />
        </Flex>
        <Flex className="description-wrapper" align="center" w="full">
          <Text flexShrink={0} w="15em" maxW="100%">
            {description}
          </Text>
          <Box flexShrink={0} w="2em" />
          <Box bgColor="white" w="full" h="0.2rem" />
        </Flex>
        <Wrap>
          {tags.map((tag) => (
            <Center
              key={tag}
              fontFamily="mono"
              border="1px solid"
              color="gray.50"
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

export const Work: React.FC = () => {
  return (
    <Box bgColor="dark">
      <Stack
        id="projects"
        spacing={8}
        align="center"
        color="gray.100"
        fontSize="1.2rem"
        w="full"
        maxW="container.lg"
        mx="auto"
        p={5}
      >
        <Heading
          position="relative"
          color="millet"
          borderBottom="solid 0.2rem"
          borderColor="millet"
          pb={2}
        >
          Things that I&apos;ve made
        </Heading>
        <Card
          name="Megacritic"
          link="https://megacritic.vercel.app/"
          description="A incrementally generated static site for movie fanatics."
          image="/megacritic.webp"
          tags={["React", "Next.js", "TypeScript"]}
        />
        <Card
          name="Megacritic"
          link="https://megacritic.vercel.app/"
          description="A incrementally generated static site for movie fanatics."
          image="/megacritic.webp"
          tags={["React", "Next.js", "TypeScript"]}
        />
        <Card
          name="Megacritic"
          link="https://megacritic.vercel.app/"
          description="A incrementally generated static site for movie fanatics."
          image="/megacritic.webp"
          tags={["React", "Next.js", "TypeScript"]}
        />
      </Stack>
    </Box>
  );
};
