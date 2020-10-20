import { format, compareAsc, isFuture } from "date-fns";

export const getNextDate = (stringDates, formatString = "MM/dd/yyyy HH:MM") => {
    const nextDates = stringDates
        .map((stringDate) => new Date(stringDate))
        .filter((date) => isFuture(date))
        .sort(compareAsc);
    return nextDates && nextDates.length && format(nextDates[0], formatString);
};
