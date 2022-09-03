import { Badge, Theme } from "@kritb-blog/ui-components";
import styles from "./styles.module.scss";

const BadgeGroup = () => {
  return (
    <div className={styles.badgeGroup}>
      <Badge
        badgeImageUrl="/icons/github.svg"
        targetUrl="https://github.com/zestzero"
        size={Theme.IconSize.L}
        badgeName="Github"
      />
      <Badge
        badgeImageUrl="/icons/linkedin.svg"
        targetUrl="https://www.linkedin.com/in/krit-bannachaisirisuk/"
        size={Theme.IconSize.L}
        badgeName="Github"
      />
    </div>
  );
};

export default BadgeGroup;
