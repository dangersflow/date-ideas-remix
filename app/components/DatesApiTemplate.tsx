import { Button, Stack, Title } from "@mantine/core";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { useRevalidator } from "react-router-dom";
import classes from "./Welcome/Welcome.module.css";

//function to generate random number from 0 to 100
// function getRandomInt(max: number) {
//   return Math.floor(Math.random() * max);
// }

interface DatesApiTemplateProps {
  data: { name: string };
  title: string;
}

export default function DatesApiTemplate(props: DatesApiTemplateProps) {
  const [hasFetchedOnce, setHasFetchedOnce] = useState(false);
  //const [hasAnimationFinished, setHasAnimationFinished] = useState(false);
  const revalidator = useRevalidator();
  const { data } = props;

  return (
    <Stack
      justify="space-between"
      ta="center"
      style={{
        height: "calc(100vh - 8rem)",
        marginLeft: "2rem",
        marginRight: "2rem",
      }}
    >
      <motion.div />
      <AnimatePresence mode="popLayout">
        {!hasFetchedOnce ? (
          <motion.div
            key="helloString"
            exit={{ opacity: 0, y: "350px" }}
            transition={{
              type: "spring",
              stiffness: 2500,
              damping: 300,
              mass: 10,
              velocity: 1,
            }}
          >
            <Title className={classes.title}>
              {`Press the button for an idea! :)`}
            </Title>
          </motion.div>
        ) : (
          <motion.div
            key={(data as { name: string }).name}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ opacity: 0, y: "350px" }}
            transition={{
              type: "spring",
              stiffness: 2500,
              damping: 300,
              mass: 10,
              velocity: 1,
            }}
          >
            <Title className={classes.title}>{data.name}</Title>
          </motion.div>
        )}
        <Button
          size="xl"
          variant="light"
          onClick={() => {
            if (!hasFetchedOnce) {
              setHasFetchedOnce(true);
            } else {
              revalidator.revalidate();
            }
          }}
        >
          Generate
        </Button>
      </AnimatePresence>
    </Stack>
  );
}
