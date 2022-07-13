import { Grid } from "@kritb-blog/ui-components";
import { getDaysInMonth, getMonth, getWeeksInMonth } from "date-fns";
import { FunctionComponent, useCallback, useState } from "react";
import { getFirstWeekDayFromMonth } from "../../utils/date";
import DateTile from "../DateTile";
import useWindowDimensions from "../hooks/useWindowDimension";
import { MONTH_NAME } from "./constants";
import { StyledCalendarContainer, StyledMonthSelector } from "./styles";

// TODO: Move this component to ui-components
const Calendar: FunctionComponent = () => {
  const today = new Date();
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [currentMonth, setCurrentMonth] = useState<number>(getMonth(today));
  const windowDimensions = useWindowDimensions();
  const firstWeekDayMonth = getFirstWeekDayFromMonth(2022, currentMonth);
  //   const onMonthChanged = (offset: number) => () => {
  //     setCurrentMonth(currentMonth + offset);
  //   };
  const onDateSelected = (selectedDate: Date) => {
    setSelectedDate(selectedDate);
  };
  const renderTile = useCallback(
    (index: number) => {
      return index >= firstWeekDayMonth &&
        index - firstWeekDayMonth < getDaysInMonth(currentMonth) ? (
        <DateTile
          index={index}
          currentMonth={currentMonth}
          onClick={onDateSelected}
        />
      ) : null;
    },
    [currentMonth]
  );

  return (
    <StyledCalendarContainer>
      <StyledMonthSelector>
        <h2>{MONTH_NAME[currentMonth]}</h2>
      </StyledMonthSelector>
      <Grid
        opts={{
          numOfCol: 7,
          numOfRow: getWeeksInMonth(today),
          blockSize: windowDimensions.height / 10,
        }}
        renderTile={renderTile}
      />
      {selectedDate.toDateString()}
    </StyledCalendarContainer>
  );
};

export default Calendar;
