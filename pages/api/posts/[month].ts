import { NextApiRequest, NextApiResponse } from "next";
import { NotionDbConnector } from "@kritb-blog/notion-db-connector";
import {
  getDaysInMonth,
  setDate,
  setHours,
  setMilliseconds,
  setMinutes,
  setMonth,
  setSeconds,
} from "date-fns";
import NotionService from "../../../services/notion";

const setTimeToZero = (date: Date) =>
  setHours(setMinutes(setSeconds(setMilliseconds(date, 0), 0), 0), 0);
const getDateByMonth = (month: number) => {
  return {
    start: setMonth(setDate(setTimeToZero(new Date()), 1), month - 1),
    end: setMonth(
      setDate(setTimeToZero(new Date()), getDaysInMonth(month - 1)),
      month - 1
    ),
  };
};

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { month } = req.query;
  const connector = new NotionDbConnector(process.env.NOTION_TOKEN);
  const { start, end } = getDateByMonth(parseInt(month as string));
  try {
    const result = await connector.fetchDb({
      database_id: process.env.NOTION_DATABASE_ID,
      filter: {
        and: [
          {
            timestamp: "created_time",
            created_time: {
              on_or_before: end.toISOString(),
              after: start.toISOString(),
            },
          },
          {
            property: "Status",
            select: { equals: "Completed" },
          },
        ],
      },
    });

    if (!result || !result.results || result.results.length === 0)
      return res.status(200).json({});

    const block = await connector.fetchBlockChildren(
      {
        block_id: result.results[0].id,
        children: [],
      },
      20
    );

    res.setHeader(
      "Cache-Control",
      "public, s-maxage=10, stale-while-revalidate=59"
    );
    res.status(200).json(NotionService.convertDbToViewModel({ result, block }));
  } catch (ex) {
    console.error(ex);
    res.status(500);
  }
};
