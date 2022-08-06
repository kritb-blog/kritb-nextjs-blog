import Head from "next/head";
import { ThemeProvider } from "styled-components";
import { Theme } from "@kritb-blog/ui-components";
import Layout, { siteTitle } from "../components/Layout";
import utilStyles from "../styles/utils.module.css";
import Calendar from "../components/Calendar";
import { FunctionComponent } from "react";
import { GetServerSideProps } from "next";
import { getMonth } from "date-fns";
import axios from "axios";

interface Props {
  data: any;
}

export const Home: FunctionComponent<Props> = ({ data }) => {
  console.log(JSON.stringify(data));
  return (
    <ThemeProvider
      theme={{ primary: Theme.Colors.Primary, active: Theme.Colors.Active }}
    >
      <Layout home>
        <Head>
          <title>{siteTitle}</title>
        </Head>
        <section className={utilStyles.headingMd}>
          <Calendar />
        </section>
      </Layout>
    </ThemeProvider>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=10, stale-while-revalidate=59"
  );
  const currentMonth = getMonth(new Date());
  const response = await axios.get(`/api/posts/${currentMonth}`, {
    baseURL: process.env.SITE_URL,
  });

  return {
    props: { data: response },
  };
};

export default Home;
