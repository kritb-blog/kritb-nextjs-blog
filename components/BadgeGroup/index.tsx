import { Badge, Theme } from "@kritb-blog/ui-components";
import { StyledBadgeGroup } from "./styles";

const BadgeGroup = () => {
  return (
    <StyledBadgeGroup>
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
    </StyledBadgeGroup>
  );
};

export default BadgeGroup;
