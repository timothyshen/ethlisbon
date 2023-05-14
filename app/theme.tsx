import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
    styles: {
      global: () => ({
        body: {
          bg: "#f7fcfe",
        },
      }),
    },
  });

export default theme