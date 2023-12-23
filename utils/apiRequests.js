import { json } from '@remix-run/node';

// Define a default query function that will receive the query key
export const defaultQueryFn = async ({ queryKey }) => {
  const res = await fetch(`http://${process.env.API_URL}/api/${queryKey}`);
  return json(await res.json());
};
