import { IsometricGrid } from "@kritb-blog/react-isometric-grid";
import clsx from "clsx";
import { getDaysInMonth, getMonth } from "date-fns";
import { FunctionComponent, useState } from "react";
import { getFirstWeekDayFromMonth } from "../../utils/date";
import useWindowDimensions from "../hooks/useWindowDimension";
import { MONTH_NAME } from "./constants";
import styles from "./style.module.css";

const Calendar: FunctionComponent = () => {
  const [currentMonth, setCurrentMonth] = useState<number>(
    getMonth(new Date())
  );
  const windowDimensions = useWindowDimensions();
  const firstWeekDayMonth = getFirstWeekDayFromMonth(2022, currentMonth);
//   const onMonthChanged = (offset: number) => () => {
//     setCurrentMonth(currentMonth + offset);
//   };
  return (
    <div className={styles.calendarContainer}>
      <div className={clsx("isometric", styles.monthSelector)}>
        <h2 className={styles.monthName}>{MONTH_NAME[currentMonth]}</h2>
      </div>
      <IsometricGrid
        className={styles.grid}
        opts={{
          numOfCol: 7,
          numOfRow: 5,
          blockSize: windowDimensions.height / 10,
        }}
        renderTile={(index: number) =>
          index >= firstWeekDayMonth &&
          index - firstWeekDayMonth < getDaysInMonth(currentMonth) ? (
            <span className={styles.dateTile}>
              {index - firstWeekDayMonth + 1}
            </span>
          ) : null
        }
      />
    </div>
  );
};

export default Calendar;
