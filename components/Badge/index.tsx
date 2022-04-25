import { FunctionComponent } from "react";
import { BadgeTypes } from "./constants";
import styles from "./style.module.scss";

interface Props {
  targetUrl?: string;
  type: BadgeTypes;
}

const Badge: FunctionComponent<Props> = (props) => {
  const getBadgeImage = () => {
    switch (props.type) {
      case BadgeTypes.GITHUB:
        return "/icons/github.svg";
      case BadgeTypes.LINKEDIN:
        return "/icons/linkedin.svg";
    }
  };

  return (
    <div className={styles.badgeContainer}>
      <a href={props.targetUrl} target="_blank">
        <img src={getBadgeImage()} />
      </a>
    </div>
  );
};

export default Badge;
