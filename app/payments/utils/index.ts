import { DateTime } from "luxon";

export const convertDateFromISO = (date: string) => {
  const dt = DateTime.fromISO(date);
  const formattedDate = dt.toFormat("yyyy-LL-dd");
  return formattedDate;
};
