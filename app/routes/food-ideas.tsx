import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { defaultQueryFn } from "utils/apiRequests";
import DatesApiTemplate from "~/components/DatesApiTemplate";

export async function loader() {
  const res = await defaultQueryFn({ queryKey: "meals" });
  return json(await res.json());
}

export default function DateIdeasPage() {
  const data = useLoaderData<typeof loader>();

  return <DatesApiTemplate data={data} title="Food Ideas" />;
}
