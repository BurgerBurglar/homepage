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
          name="Chinesify"
          link="https://chinesify.shuo.rocks/"
          description="Your name in Chinese, without sounding funny."
          image="/chinesify.webp"
          tags={[
            "Full-stack",
            "React",
            "TypeScript",
            "Tailwind CSS",
            "Python",
            "FastAPI",
          ]}
        />
        <Card
          name="No Name"
          link="https://no-name.shuo.rocks/"
          description="Let's meet, anonymously."
          image="/no-name.webp"
          tags={[
            "Full-stack",
            "React",
            "TypeScript",
            "Express.js",
            "Prisma",
            "PostgreSQL",
            "Cloudinary",
            "Markdown",
          ]}
        />
        <Card
          name="Take Me Home"
          link="https://takemehome.shuo.rocks/"
          description="Adopt, don't shop."
          image="/take-me-home.webp"
          tags={["React", "Next.js", "TypeScript", "Chakra UI"]}
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
