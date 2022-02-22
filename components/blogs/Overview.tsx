import { Stack, Heading, Text } from "@chakra-ui/react";
import React from "react";
import { Blog } from "../../lib/contentful/types";
import formatDate from "../../utils/formatDate";
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
      <Text fontSize="1rem">{formatDate(blog.createdAt)}</Text>
      <Text as="div" noOfLines={{ base: 2, md: 1 }}>
        <Markdown markdown={blog.content} />
      </Text>
    </Stack>
  );
};
export default Overview;
