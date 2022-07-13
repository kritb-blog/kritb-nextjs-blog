import { getDate, getDaysInMonth } from "date-fns";
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
}

const DateTile: FunctionComponent<Props> = ({ index, currentMonth }) => {
  const firstWeekDayMonth = getFirstWeekDayFromMonth(2022, currentMonth);
  const today = getDate(new Date());
  const dateNumber = index - firstWeekDayMonth + 1;
  const TileComponent =
    dateNumber < today
      ? StyledDateTile
      : dateNumber === today
      ? StyledTodayTile
      : StyledDisabledDateTile;
  return index >= firstWeekDayMonth &&
    index - firstWeekDayMonth < getDaysInMonth(currentMonth) ? (
    <TileComponent>{dateNumber}</TileComponent>
  ) : null;
};

export default DateTile;
