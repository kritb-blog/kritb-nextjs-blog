import Head from "next/head";
import clsx from "clsx";
import { Badge } from "@kritb-blog/ui-components";
import styles from "./layout.module.scss";

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
            badgeImageUrl="/icons/github.svg"
            size={24}
            badgeName="Github"
          />
        </div>
        <div className={styles.linkedInBadge}>
          <Badge
            badgeImageUrl="/icons/linkedin.svg"
            size={24}
            badgeName="Github"
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
