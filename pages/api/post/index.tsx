import type { NextApiRequest, NextApiResponse } from "next";

import { allPostsQuery } from "../../../utils/queries";
//client -> sanity infos (like projectId, dataset,token...) required to make the request
import { client } from "../../../utils/client";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    const query = allPostsQuery();

    const data = await client.fetch(query);

    res.status(200).json(data);
  } else if (req.method === "POST") {
    const doc = req.body;

    client.create(doc).then(() => {
      res.status(200).json("video created");
    });
  }
}
