import { NextApiRequest, NextApiResponse } from "next";
import { NotionDbConnector } from "@kritb-blog/notion-db-connector";

export default async (_: NextApiRequest, res: NextApiResponse) => {
  const connector = new NotionDbConnector(process.env.NOTION_TOKEN);
  const result = await connector.fetchDb({
    database_id: process.env.NOTION_DATABASE_ID,
    filter: {
      property: "Status",
      select: { equals: "Completed" },
    },
  });

  if (!result || result.results.length === 0) return res.status(200).json({});

  const block = await connector.fetchBlockChildren(
    {
      block_id: result.results[0].id,
      children: [],
    },
    20
  );
  res.status(200).json({ result, block });
};
