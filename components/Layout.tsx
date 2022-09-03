import Head from "next/head";
import styles from "./layout.module.scss";
import BadgeGroup from "./BadgeGroup";

export const siteTitle = "KritB's Blog";

export default function Layout({
  children,
}: {
  children: React.ReactNode;
  home?: boolean;
}) {
  return (
    <div className={styles.container}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="KritB's Blogs - Dev Blogs" />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F102814651%3Fs%3D200%26v%3D4`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className={styles.header}></header>
      <main>
        {children}
        <BadgeGroup />
      </main>
    </div>
  );
}
