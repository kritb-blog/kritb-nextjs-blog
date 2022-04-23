import { IsometricGrid } from "@kritb-blog/react-isometric-grid";
import clsx from "clsx";
import { getDate, getDaysInMonth, getMonth } from "date-fns";
import { FunctionComponent, useCallback, useState } from "react";
import { getFirstWeekDayFromMonth } from "../../utils/date";
import useWindowDimensions from "../hooks/useWindowDimension";
import { MONTH_NAME } from "./constants";
import styles from "./style.module.scss";

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
      return index >= firstWeekDayMonth &&
        index - firstWeekDayMonth < getDaysInMonth(currentMonth) ? (
        <span
          className={clsx(styles.dateTile, {
            [styles.today]: dateNumber === getDate(new Date()),
          })}
        >
          {dateNumber}
        </span>
      ) : null;
    },
    [currentMonth]
  );

  return (
    <div className={styles.calendarContainer}>
      <IsometricGrid
        className={styles.grid}
        opts={{
          numOfCol: 7,
          numOfRow: 5,
          blockSize: windowDimensions.height / 10,
        }}
        renderTile={renderTile}
      />
      <div className={clsx("isometric", styles.monthSelector)}>
        <h2 className={styles.monthName}>{MONTH_NAME[currentMonth]}</h2>
      </div>
    </div>
  );
};

export default Calendar;
