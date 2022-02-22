import { Container, Heading, Stack, Text } from "@chakra-ui/react";
import { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import React from "react";
import getBlogs from "../lib/contentful/getEntries";
import { Blog } from "../lib/contentful/types";

interface Props {
  blogs: Blog[];
}
const Blogs: NextPage<Props> = ({ blogs }) => {
  return (
    <>
      <Head>
        <title>Blogs</title>
        <meta name="description" content="Shuo Tian blogs" />
      </Head>
      <Container maxW="container.md" mb={5}>
        <Heading mb={5}>Blogs</Heading>
        <Stack>
          {blogs.map((blog) => (
            <Stack
              key={blog.id}
              fontFamily="'Merriweather','Georgia',serif"
              fontSize="1.2rem"
              p={5}
            >
              <Heading as="h3" color="accent">
                {blog.title}
              </Heading>
              <Text>{blog.createdAt}</Text>
              <Text>{blog.content}</Text>
            </Stack>
          ))}
        </Stack>
      </Container>
    </>
  );
};
export const getStaticProps: GetStaticProps<Props> = async () => {
  const blogs = await getBlogs();

  return { props: { blogs } };
};
export default Blogs;
