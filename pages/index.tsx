import Head from "next/head";
import Layout, { siteTitle } from "../components/Layout";
import utilStyles from "../styles/utils.module.css";
import { FunctionComponent } from "react";
import { GetServerSideProps } from "next";
import { getMonth } from "date-fns";
import Main from "../components/Main";

interface Props {
  data: any;
}

export const Home: FunctionComponent<Props> = ({ data }) => {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <Main pages={data.pages} />
      </section>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=10, stale-while-revalidate=59"
  );

  const currentMonth = getMonth(new Date());
  const response = await fetch(
    `${process.env.SITE_URL}/api/posts/${currentMonth}?status=Completed`
  );
  const data = await response.json();

  return {
    props: { data },
  };
};

export default Home;
