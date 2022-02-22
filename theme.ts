import { extendTheme } from "@chakra-ui/react";
const theme = extendTheme({
  styles: {
    global: () => ({
      body: {
        bg: "#f0f0f0",
      },
    }),
  },
  colors: {
    plain: "#FEFAE0",
    lessPlain: "#E9D8A6",
    dark: "#112330",
    accent: "#BB3E03",
    lessAccent: "#EE9B00",
    text: "#001219",
    textAccent: "#d23669",
    nav: "#01497C",
  },
});

export default theme;
