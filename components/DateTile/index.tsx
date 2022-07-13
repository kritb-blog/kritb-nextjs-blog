import { getDate } from "date-fns";
import { FunctionComponent } from "react";
import { getFirstWeekDayFromMonth } from "../../utils/date";
import {
  StyledDateTile,
  StyledDisabledDateTile,
  StyledTodayTile,
} from "./styles";

interface Props {
  index: number;
  currentMonth: number;
  onClick?: (selectedDate: Date) => void;
}

const DateTile: FunctionComponent<Props> = ({
  index,
  currentMonth,
  onClick,
}) => {
  const firstWeekDayMonth = getFirstWeekDayFromMonth(2022, currentMonth);
  const today = getDate(new Date());
  const dateNumber = index - firstWeekDayMonth + 1;
  const shouldDisableAction = dateNumber > today;
  const onTileClick = () => {
    onClick(new Date(2022, currentMonth, dateNumber));
  };
  const TileComponent =
    dateNumber < today
      ? StyledDateTile
      : dateNumber === today
      ? StyledTodayTile
      : StyledDisabledDateTile;
  return (
    <TileComponent onClick={shouldDisableAction ? null : onTileClick}>
      {dateNumber}
    </TileComponent>
  );
};

export default DateTile;
