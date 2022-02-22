import { Container, Heading, Stack } from "@chakra-ui/react";
import { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import React from "react";
import Overview from "../components/blogs/Overview";
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
            <Overview key={blog.id} blog={blog} />
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
