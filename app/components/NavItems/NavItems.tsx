/* eslint-disable jsx-a11y/anchor-has-content */
import { Group, NavLink } from "@mantine/core";
import { IconActivity, IconChevronRight } from "@tabler/icons-react";

export function NavItems() {
  return (
    <Group>
      <NavLink
        label="Date Ideas"
        leftSection={<IconActivity size="1rem" stroke={1.5} />}
        rightSection={<IconChevronRight size="0.8rem" stroke={1.5} />}
        active
        href="/dates"
        description="Generate random date ideas!"
      />
      <NavLink
        label="Food Ideas"
        leftSection={<IconActivity size="1rem" stroke={1.5} />}
        rightSection={<IconChevronRight size="0.8rem" stroke={1.5} />}
        active
        href="/foods"
        description="Grab random bite to eat!"
      />
      <NavLink
        label="Dessert Ideas"
        leftSection={<IconActivity size="1rem" stroke={1.5} />}
        rightSection={<IconChevronRight size="0.8rem" stroke={1.5} />}
        active
        href="/desserts"
        description="Got a sweet tooth? Grab a dessert!"
      />
    </Group>
  );
}
