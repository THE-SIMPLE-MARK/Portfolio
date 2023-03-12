import {
  Flex,
  Text,
  Avatar,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  IconButton,
  Grid,
  Link,
} from "@chakra-ui/react"
import { HamburgerIcon, MoonIcon, SunIcon } from "@chakra-ui/icons"
import NextLink from "next/link"

interface localeData {
  locale: string | undefined
  locales: string[] | undefined
  defaultLocale: string | undefined
}

export default function Header({ localeData }: { localeData: localeData }) {
  const { locale, locales, defaultLocale } = localeData

  const languageNameFormatter = new Intl.DisplayNames(locale, {
    type: "language",
    style: "short",
  })

  return (
    <>
      <Flex pos="absolute" top="0" left="0" p="10px" w="100%" align="center">
        <Grid
          alignItems="center"
          templateColumns={{ base: "1fr 1fr", md: "1fr auto 1fr" }}
          w="inherit"
        >
          <Flex justifySelf="start" gap="15px" align="center">
            <Avatar src="/logo.png" borderRadius="full" size="md" />
            <Text
              bgGradient="linear-gradient(110.12deg, #80D0C7 0%, #0093E9 68.83%)"
              backgroundClip="text"
              fontSize="2xl"
              fontWeight="semibold"
              whiteSpace="nowrap"
            >
              Mark Boszormenyi
            </Text>
          </Flex>

          <Text
            flex="1"
            textAlign="center"
            fontSize="2xl"
            textTransform="uppercase"
            gridColumn="2 / 3"
            display={{ base: "none", md: "block" }}
          >
            Home
          </Text>

          <Menu>
            <MenuButton
              as={IconButton}
              aria-label="options"
              icon={<HamburgerIcon />}
              variant="outline"
              justifySelf="end"
            />
            <MenuList>
              <MenuOptionGroup
                defaultValue={defaultLocale}
                title="Language"
                type="radio"
              >
                {locales?.map(locale => (
                  <Link
                    textDecor="none !important"
                    href="/"
                    as={NextLink}
                    locale={locale}
                    key={locale}
                  >
                    <MenuItemOption value={locale}>
                      {languageNameFormatter.of(locale)}
                    </MenuItemOption>
                  </Link>
                ))}
              </MenuOptionGroup>
            </MenuList>
          </Menu>
        </Grid>
      </Flex>
    </>
  )
}
