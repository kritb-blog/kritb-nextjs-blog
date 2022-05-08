import Head from "next/head";
import { ThemeProvider } from "styled-components";
import { Theme } from "@kritb-blog/ui-components";
import Layout, { siteTitle } from "../components/Layout";
import utilStyles from "../styles/utils.module.css";
import Calendar from "../components/Calendar";
import { FunctionComponent } from "react";

export const Home: FunctionComponent = () => {
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

export default Home;
