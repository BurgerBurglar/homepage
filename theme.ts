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
    theme: "#007acc",
    millet: "#f0efd1",
    dark: "#0f102e",
  },
});

export default theme;
