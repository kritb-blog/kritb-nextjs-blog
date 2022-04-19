import { GetServerSideProps } from "next";
import Head from "next/head";
import Layout from "../../components/Layout";
import Date from "../../components/Date";
import utilStyles from "../../styles/utils.module.css";
import { NotionDbConnector } from "@kritb-blog/notion-db-connector";

export default function Post({
  page,
  block,
}: {
  page: {
    id: string;
    created_time: string;
    properties: {
      ["Name"]: {
        id: string;
        title: [
          {
            plain_text: string;
          }
        ];
      };
    };
  };
  block: {
    object: string;
    results: [
      {
        id: string;
        object: string;
      }
    ];
  };
}) {
  const title = page.properties["Name"].title[0].plain_text;
  return (
    <Layout>
      <Head>
        <title>{title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={page.created_time} />
        </div>
        {block.results.map((r) => (
          <div key={r.id}>{r.object}</div>
        ))}
      </article>
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const connector = new NotionDbConnector(process.env.NOTION_TOKEN);
  const page = await connector.fetchPage({
    page_id: params.id as string,
  });

  const block = await connector.fetchBlockChildren(
    {
      block_id: page.id,
      children: [],
    },
    20
  );

  return {
    props: {
      page,
      block,
    },
  };
};
