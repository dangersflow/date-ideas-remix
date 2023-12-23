import "@mantine/core/styles.css";
import classes from "./components/Welcome/Welcome.module.css";

import { cssBundleHref } from "@remix-run/css-bundle";
import type { LinksFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import {
  ColorSchemeScript,
  AppShell,
  Burger,
  Flex,
  MantineProvider,
  Title,
} from "@mantine/core";
import { AnimatePresence, motion } from "framer-motion";
import { useDisclosure } from "@mantine/hooks";
import { ColorSchemeToggle } from "./components/ColorSchemeToggle/ColorSchemeToggle";
import { NavItems } from "./components/NavItems/NavItems";

export const links: LinksFunction = () => [
  ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
];

export default function App() {
  const [opened, { toggle }] = useDisclosure();

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
        <ColorSchemeScript />
      </head>
      <body>
        <MantineProvider>
          <AppShell
            header={{ height: 100 }}
            navbar={{
              width: 300,
              breakpoint: "sm",
              collapsed: { mobile: !opened },
            }}
            padding="md"
          >
            <AppShell.Header>
              <Flex
                align="center"
                justify="space-between"
                style={{
                  height: "100%",
                  marginLeft: "2rem",
                  marginRight: "2rem",
                }}
                gap="md"
              >
                <Flex gap="xl" align="center">
                  <Burger
                    opened={opened}
                    onClick={toggle}
                    hiddenFrom="sm"
                    size="sm"
                  />
                  <Title className={classes.appshelltitle}>
                    Date Idea Generator
                  </Title>
                </Flex>
                <ColorSchemeToggle />
              </Flex>
            </AppShell.Header>

            <AppShell.Navbar p="md">
              <NavItems />
            </AppShell.Navbar>

            <AppShell.Main>
              <AnimatePresence>
                <motion.div
                  initial={{ opacity: 0, y: "50px" }}
                  animate={{ opacity: 1, y: "0px" }}
                  exit={{ opacity: 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 35,
                  }}
                >
                  <Outlet />
                  <ScrollRestoration />
                  <Scripts />
                  <LiveReload />
                </motion.div>
              </AnimatePresence>
            </AppShell.Main>
          </AppShell>
        </MantineProvider>
      </body>
    </html>
  );
}
