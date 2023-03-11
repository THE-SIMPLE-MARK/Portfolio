import SEO from "components/SEO"
import Header from "components/header"
import { Flex, useColorModeValue } from "@chakra-ui/react"

export default function Home() {
  return (
    <>
      <SEO />
      <Flex as="main">
        <Header />
      </Flex>
    </>
  )
}
