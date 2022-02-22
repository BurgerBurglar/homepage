import { Box, CSSObject } from "@chakra-ui/react";
import "github-markdown-css";
import React from "react";
import ReactMarkdown from "react-markdown";

interface MarkdownProps {
  markdown: string;
  css?: CSSObject;
}

const Markdown: React.FC<MarkdownProps> = ({ markdown, css = {} }) => {
  return (
    <Box
      sx={{
        ".markdown-body": {
          bgColor: "transparent",
        },
        ".markdown-body a": {
          color: "textAccent",
        },
        ...css,
      }}
    >
      <ReactMarkdown className="markdown-body">{markdown}</ReactMarkdown>
    </Box>
  );
};
export default Markdown;
