import { format, compareAsc, isFuture } from "date-fns";

const DEFAULT_DATE_FORMAT = "MM/dd/yyyy HH:mm";

export const getNextFormattedDate = (
    dates,
    formatString = DEFAULT_DATE_FORMAT
) => {
    const nextDates = dates
        .map((date) => new Date(date))
        .filter((date) => isFuture(date))
        .sort(compareAsc);
    return nextDates && nextDates.length && format(nextDates[0], formatString);
};

export const getLastFormattedDate = (
    dates,
    formatString = DEFAULT_DATE_FORMAT
) => {
    const nextDates = dates.map((date) => new Date(date)).sort(compareAsc);
    return (
        nextDates &&
        nextDates.length &&
        format(nextDates[nextDates.length - 1], formatString)
    );
};

export const getNextOrLastFormattedDate = (
    dates,
    formatString = DEFAULT_DATE_FORMAT
) => {
    let date = getNextFormattedDate(dates, formatString);

    if (!date) {
        date = getLastFormattedDate(dates, formatString);
    }

    return date;
};

export const getDates = (dates) => {
    return dates.map((date) => new Date(date)).sort(compareAsc);
};

export const getFormattedDate = (
    stringDate,
    formatString = DEFAULT_DATE_FORMAT
) => {
    const date = new Date(stringDate);
    return format(date, formatString);
};
