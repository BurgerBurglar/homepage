import { Box, Heading, Stack, Text } from "@chakra-ui/react";
import { Card } from "./Card";
import { GoTo } from "./GoTo";

export const Work: React.FC = () => {
  return (
    <Box id="work" bgColor="dark">
      <Stack
        id="projects"
        spacing={8}
        align="center"
        color="lessPlain"
        fontSize="1.2rem"
        w="full"
        maxW="container.lg"
        mx="auto"
        p={5}
        pt="clamp(2rem, 10vmin, 4rem)"
        pb="2.2rem"
      >
        <Heading
          position="relative"
          borderBottom="solid 0.2rem"
          borderColor="lessPlain"
          pb={2}
          mb="1.5rem"
        >
          Things that I&apos;ve made
        </Heading>
        <Card
          name="Megacritic"
          link="https://megacritic.shuo.rocks/"
          description="For movie fanatics. Rate, review, and explore."
          image="/megacritic.webp"
          tags={["React", "Next.js", "TypeScript", "Chakra UI"]}
        />
        <Card
          name="Take Me Home"
          link="https://takemehome.shuo.rocks/"
          description="Wanna adopt?"
          image="/take-me-home.webp"
          tags={["React", "Next.js", "TypeScript"]}
        />
        <Card
          name="No Name"
          link="https://megacritic.vercel.app/"
          description="Post, comment, and reply anonymously."
          image="/megacritic.webp"
          tags={[
            "React",
            "Next.js",
            "TypeScript",
            "Express.js",
            "Prisma",
            "PostgreSQL",
            "Cloudinary",
            "Markdown",
          ]}
        />
      </Stack>
      <GoTo
        to="#contact"
        color="dark"
        hoverBg="lessPlain"
        pb="clamp(2rem, 10vmin, 4rem)"
      >
        <Text>
          Wanna{" "}
          <Box as="span" fontWeight="bold">
            talk
          </Box>
          ?
        </Text>
      </GoTo>
    </Box>
  );
};
