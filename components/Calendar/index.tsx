import { Grid, IsometricPlane } from "@kritb-blog/ui-components";
import { getDate, getDaysInMonth, getMonth } from "date-fns";
import { FunctionComponent, useCallback, useState } from "react";
import { getFirstWeekDayFromMonth } from "../../utils/date";
import useWindowDimensions from "../hooks/useWindowDimension";
import { MONTH_NAME } from "./constants";
import {
  StyledCalendarContainer,
  StyledDateTile,
  StyledMonthSelector,
  StyledTodayTile,
} from "./styles";

const Calendar: FunctionComponent = () => {
  const [currentMonth, setCurrentMonth] = useState<number>(
    getMonth(new Date())
  );
  const windowDimensions = useWindowDimensions();
  const firstWeekDayMonth = getFirstWeekDayFromMonth(2022, currentMonth);
  //   const onMonthChanged = (offset: number) => () => {
  //     setCurrentMonth(currentMonth + offset);
  //   };
  const renderTile = useCallback(
    (index: number) => {
      const dateNumber = index - firstWeekDayMonth + 1;
      const TileComponent =
        dateNumber === getDate(new Date()) ? StyledTodayTile : StyledDateTile;
      return index >= firstWeekDayMonth &&
        index - firstWeekDayMonth < getDaysInMonth(currentMonth) ? (
        <TileComponent>{dateNumber}</TileComponent>
      ) : null;
    },
    [currentMonth]
  );

  return (
    <StyledCalendarContainer>
      <IsometricPlane>
        <Grid
          opts={{
            numOfCol: 7,
            numOfRow: 5,
            blockSize: windowDimensions.height / 10,
          }}
          renderTile={renderTile}
        />
        <StyledMonthSelector>
          <h2>{MONTH_NAME[currentMonth]}</h2>
        </StyledMonthSelector>
      </IsometricPlane>
    </StyledCalendarContainer>
  );
};

export default Calendar;
