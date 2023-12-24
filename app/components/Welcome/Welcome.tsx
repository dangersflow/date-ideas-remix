import { Title, Text, Anchor } from "@mantine/core";
import classes from "./Welcome.module.css";

export function Welcome() {
  return (
    <>
      <Title className={classes.title} ta="center" mt={100}>
        Welcome to{" "}
        <Text
          inherit
          variant="gradient"
          component="span"
          gradient={{ from: "pink", to: "yellow" }}
        >
          Date Ideas
        </Text>
      </Title>
      <Text color="dimmed" ta="center" size="lg" maw={580} mx="auto" mt="xl">
        This project aims to simplify the difficult decisions that come along
        with trying to figure out what to do with your significant other. Go on
        and get some ideas! Made with love. -Frank
      </Text>
    </>
  );
}
