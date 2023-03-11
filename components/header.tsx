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
  useColorMode,
  Grid,
} from "@chakra-ui/react"
import { HamburgerIcon, MoonIcon, SunIcon } from "@chakra-ui/icons"
import { useRouter } from "next/router"

export default function Header() {
  const { colorMode, toggleColorMode } = useColorMode()
  const router = useRouter()
  const { pathname, query, asPath, locale, locales } = router

  function changeLocale(locale: string) {
    // change just the locale and maintain all other route information including href's query
    router.push({ pathname, query }, asPath, { locale })
  }

  const languageNameFormatter = new Intl.DisplayNames(locale, {
    type: "language",
    style: "short",
  })

  return (
    <>
      <Flex p="10px" w="100%" align="center">
        <Grid alignItems="center" templateColumns="repeat(3, 1fr)" w="inherit">
          <Flex justifySelf="start" gap="15px" align="center">
            <Avatar src="/logo.png" borderRadius="full" size="md" />
            <Text
              bgGradient="linear-gradient(110.12deg, #80D0C7 0%, #0093E9 68.83%)"
              backgroundClip="text"
              fontSize="2xl"
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
              <MenuItem
                onClick={toggleColorMode}
                icon={colorMode === "dark" ? <SunIcon /> : <MoonIcon />}
              >
                Switch to {colorMode === "dark" ? "light" : "dark"} mode
              </MenuItem>
              <MenuDivider />
              <MenuOptionGroup
                defaultValue="english"
                title="Language"
                type="radio"
              >
                {locales?.map(locale => (
                  <MenuItemOption
                    value={locale}
                    key="locale"
                    onClick={() => changeLocale(locale)}
                  >
                    {languageNameFormatter.of(locale)}
                  </MenuItemOption>
                ))}
              </MenuOptionGroup>
            </MenuList>
          </Menu>
        </Grid>
      </Flex>
    </>
  )
}
