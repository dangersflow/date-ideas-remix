import { Skeleton } from "@mantine/core";

export default function IdeaSkeleton() {
  return (
    <>
      <Skeleton height={8} mt={6} radius="xl" />
      <Skeleton height={8} mt={6} width="70%" radius="xl" />
    </>
  );
}
