import { format, compareAsc, isFuture } from "date-fns";

export const getNextFormattedDate = (
    dates,
    formatString = "MM/dd/yyyy HH:MM"
) => {
    const nextDates = dates
        .map((date) => new Date(date))
        .filter((date) => isFuture(date))
        .sort(compareAsc);
    return nextDates && nextDates.length && format(nextDates[0], formatString);
};

export const getNextDates = (dates) => {
    return dates
        .map((date) => new Date(date))
        .filter((date) => isFuture(date))
        .sort(compareAsc);
};

export const getFormattedDate = (
    stringDate,
    formatString = "MM/dd/yyyy HH:MM"
) => {
    const date = new Date(stringDate);
    return format(date, formatString);
};
