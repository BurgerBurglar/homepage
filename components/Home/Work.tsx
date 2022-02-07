import { Flex, Heading, Link, Stack, Tag, Text, Wrap } from "@chakra-ui/react";
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
  <Flex
    justify="space-between"
    border="1px"
    borderColor="gray.300"
    rounded="lg"
    overflow="hidden"
    shadow="lg"
    bgColor="#FFFFFF22"
  >
    <NextLink href={link} passHref>
      <Link display="inherit">
        <Image src={image} alt={name} width={500} height={300} />
      </Link>
    </NextLink>
    <Stack spacing={3} justify="center" mx={5}>
      <Heading as="h3" fontSize="1.5rem">
        {name}
      </Heading>
      <Text>{description}</Text>
      <Wrap>
        {tags.map((tag) => (
          <Tag key={tag} colorScheme="linkedin" fontFamily="mono">
            {tag}
          </Tag>
        ))}
      </Wrap>
    </Stack>
  </Flex>
);
export const Work: React.FC = () => {
  return (
    <Stack spacing={5} fontSize="1.2rem">
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
  );
};
