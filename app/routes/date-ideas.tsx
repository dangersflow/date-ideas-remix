import { Button, Stack, Title } from "@mantine/core";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { defaultQueryFn } from "utils/apiRequests";
import { useRevalidator } from "react-router-dom";

export async function loader() {
  const res = await defaultQueryFn({ queryKey: "activities" });
  return json(await res.json());
}

//function to generate random number from 0 to 100
// function getRandomInt(max: number) {
//   return Math.floor(Math.random() * max);
// }

export default function DateIdeasPage() {
  const [hasFetchedOnce, setHasFetchedOnce] = useState(false);
  //const [hasAnimationFinished, setHasAnimationFinished] = useState(false);
  const data = useLoaderData<typeof loader>();
  const revalidator = useRevalidator();

  return (
    <Stack
      justify="space-between"
      ta="center"
      style={{
        height: "calc(100vh - 150px)",
        marginLeft: "2rem",
        marginRight: "2rem",
      }}
    >
      <Title
        size="h1"
        style={{
          textAlign: "left",
          fontSize: "3rem",
          fontWeight: "bold",
        }}
      >
        Date Ideas
      </Title>

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
            <Title
              size="h1"
              style={{
                fontSize: "3rem",
                fontWeight: "lighter",
                fontStyle: "italic",
              }}
            >
              Press the button for an idea!
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
            <Title
              size="h1"
              style={{
                fontSize: "4rem",
                fontWeight: "bold",
                fontStyle: "italic",
              }}
            >
              {data.name}
            </Title>
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
