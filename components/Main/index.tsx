import { FunctionComponent } from "react";
import { NotionPageViewModel } from "../../services/notion/types";

interface Props {
  pages: NotionPageViewModel[];
}
const Main: FunctionComponent<Props> = (props) => {
  if (!props.pages && props.pages.length === 0) return <div>No posts</div>;
  return (
    <div>
      {props.pages.map((page, index) => (
        <span key={`post-${index}`}>{page.name}</span>
      ))}
    </div>
  );
};

export default Main;
