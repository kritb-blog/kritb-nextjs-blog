import { Grid } from "@kritb-blog/ui-components";
import { getMonth } from "date-fns";
import { FunctionComponent, useCallback, useState } from "react";
import { getFirstWeekDayFromMonth } from "../../utils/date";
import DateTile from "../DateTile";
import useWindowDimensions from "../hooks/useWindowDimension";
import { MONTH_NAME } from "./constants";
import { StyledCalendarContainer, StyledMonthSelector } from "./styles";

// TODO: Move this component to ui-components
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
    (index: number) => <DateTile index={index} currentMonth={currentMonth} />,
    [currentMonth]
  );

  return (
    <StyledCalendarContainer>
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
    </StyledCalendarContainer>
  );
};

export default Calendar;
