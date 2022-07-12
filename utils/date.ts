import { getDay } from "date-fns";

/**
 * Get day of week from month
 * @param year Year
 * @param month Month
 * @returns Week day (0 is Sunday)
 */
export const getFirstWeekDayFromMonth = (
  year: number,
  month: number
): number => {
  return getDay(new Date(year, month, 1));
};
