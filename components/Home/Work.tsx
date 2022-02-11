import {
  Box,
  Center,
  Flex,
  Grid,
  Heading,
  HStack,
  Link,
  Spacer,
  Stack,
  Tag,
  Text,
  Wrap,
} from "@chakra-ui/react";
import Image from "next/image";
import NextLink from "next/link";

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
}) => (
  <Flex className="project" justify="center" color="millet" w="full">
    <NextLink href={link} passHref>
      <Link display="inherit" flex="500px 0 0">
        <Image src={image} alt={name} width={500} height={300} />
      </Link>
    </NextLink>
    <Stack className="info" spacing={3} justify="center" w="40%" mx={8}>
      <Flex className="heading-wrapper" align="center" w="full">
        <Heading as="h3" fontSize="1.5rem" maxW="20em">
          {name}
        </Heading>
        <Box flex="2em 0 0" />
        <Box bgColor="white" w="full" h="1px" />
      </Flex>
      <Flex className="description-wrapper" align="center" w="full">
        <Text flexShrink={0} maxW="20em">
          {description}
        </Text>
        <Box flex="2em 0 0" />
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
            py="0.2em"
          >
            {tag}
          </Center>
        ))}
      </Wrap>
    </Stack>
  </Flex>
);

export const Work: React.FC = () => {
  return (
    <Box bgColor="dark">
      <Stack
        spacing={8}
        align="center"
        color="gray.100"
        fontSize="1.2rem"
        w="full"
        maxW="container.xl"
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
          image="/megacritic.avif"
          tags={["React", "Next.js", "TypeScript"]}
        />
        <Card
          name="Megacritic"
          link="https://megacritic.vercel.app/"
          description="A incrementally generated static site for movie fanatics."
          image="/megacritic.avif"
          tags={["React", "Next.js", "TypeScript"]}
        />
        <Card
          name="Megacritic"
          link="https://megacritic.vercel.app/"
          description="A incrementally generated static site for movie fanatics."
          image="/megacritic.avif"
          tags={["React", "Next.js", "TypeScript"]}
        />
      </Stack>
    </Box>
  );
};
