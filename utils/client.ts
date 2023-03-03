import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "gy06xl9w",
  dataset: "production",
  apiVersion: "2023-03-03",
  useCdn: false,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
});
