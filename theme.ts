import { extendTheme } from "@chakra-ui/react"
import { GlobalStyleProps, mode } from "@chakra-ui/theme-tools"

const theme = extendTheme({
  config: {
    initialColorMode: "dark",
  },
  fonts: {
    heading: `'Open Sans', sans-serif`,
    body: `'Open Sans', sans-serif`,
  },
  styles: {
    global: (props: GlobalStyleProps) => ({
      "html, body": {
        bg: mode("gray.200", "gray.700")(props),
      },
    }),
  },
})

export default theme
