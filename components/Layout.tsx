import Head from "next/head";
import clsx from "clsx";
import Badge from "./Badge";
import styles from "./layout.module.scss";
import { BadgeTypes } from "./Badge/constants";

export const siteTitle = "KritB's Blog";

export default function Layout({
  children,
}: {
  children: React.ReactNode;
  home?: boolean;
}) {
  const renderBadgeGroup = () => {
    return (
      <>
        <div className={styles.githubBadge}>
          <Badge
            targetUrl="https://github.com/zestzero"
            type={BadgeTypes.GITHUB}
          />
        </div>
        <div className={styles.linkedInBadge}>
          <Badge
            targetUrl="https://github.com/zestzero"
            type={BadgeTypes.LINKEDIN}
          />
        </div>
      </>
    );
  };

  return (
    <div className={styles.container}>
      <Head>
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
      <div className={clsx("isometric", styles.bgColor)} />
      <main>{children}</main>
      {renderBadgeGroup()}
    </div>
  );
}
