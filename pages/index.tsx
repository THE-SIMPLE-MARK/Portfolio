import SEO from "components/SEO"
import Header from "components/header"
import { Flex, useColorModeValue } from "@chakra-ui/react"
import { GetStaticProps } from "next"

interface HomeProps {
  locale: string | undefined
  locales: string[] | undefined
  defaultLocale: string | undefined
}

export default function Home({ locale, locales, defaultLocale }: HomeProps) {
  return (
    <>
      <SEO />
      <Flex as="main">
        <Header localeData={{ locale, locales, defaultLocale }} />
      </Flex>
    </>
  )
}

export const getStaticProps: GetStaticProps = async context => {
  return {
    props: {
      locale: context.locale,
      locales: context.locales,
      defaultLocale: context.defaultLocale,
    },
  }
}
