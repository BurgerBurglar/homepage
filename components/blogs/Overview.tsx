import { Stack, Heading, Text } from "@chakra-ui/react";
import React from "react";
import { Blog } from "../../lib/contentful/types";
import Markdown from "./Markdown";

interface OverviewProps {
  blog: Blog;
}

const Overview: React.FC<OverviewProps> = ({ blog }) => {
  return (
    <Stack p={5}>
      <Heading as="h3" color="accent">
        {blog.title}
      </Heading>
      <Text fontSize="1rem">{blog.createdAt}</Text>
      <Markdown markdown={blog.content} />
    </Stack>
  );
};
export default Overview;
