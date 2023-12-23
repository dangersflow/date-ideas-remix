"use client";

import { ActionIcon, Group, useMantineColorScheme } from "@mantine/core";
import { IconMoonStars, IconSun } from "@tabler/icons-react";

export function ColorSchemeToggle() {
  const { colorScheme, setColorScheme } = useMantineColorScheme();

  return (
    <Group justify="center">
      <ActionIcon
        size="xl"
        onClick={() => {
          if (colorScheme === "light") {
            setColorScheme("dark");
          } else {
            setColorScheme("light");
          }
        }}
      >
        {colorScheme === "light" ? <IconSun /> : <IconMoonStars />}
      </ActionIcon>
    </Group>
  );
}
