import { NextApiRequest, NextApiResponse } from "next";
import { NotionDbConnector } from "@kritb-blog/notion-db-connector";

export default async (_: NextApiRequest, res: NextApiResponse) => {
  const connector = new NotionDbConnector(process.env.NOTION_TOKEN);
  const result = await connector.fetchDb({
    database_id: process.env.NOTION_DATABASE_ID,
    filter: { property: "Status", select: { equals: "Completed" } },
  });
  res.status(200).json(result);
};
