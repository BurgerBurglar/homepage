import contentfulClient from "./client";
import { Blog, BlogFields } from "./types";

const getBlogs = async () => {
  const { items } = await contentfulClient.getEntries<BlogFields>();
  const blogs: Blog[] = items.map(
    ({
      sys: { id, createdAt, updatedAt },
      fields: { title, slug, content, topics },
    }) => ({ id, title, slug, content, topics, createdAt, updatedAt })
  );
  return blogs;
};
export default getBlogs;
