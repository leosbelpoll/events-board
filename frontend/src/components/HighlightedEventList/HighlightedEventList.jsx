import React from "react";
import { Link } from "react-router-dom";

import { getNextOrFirstFormattedDate } from "utils/date";
import "./HighlightedEventList.scss";

const HighlightedEventList = ({ highlightedEvents }) => {
    return (
        <>
            {highlightedEvents && highlightedEvents.length ? (
                <div className="list-group">
                    {highlightedEvents.map(
                        ({ id, title, tickets, description, location }) => {
                            const MAX_LENGTH = 30;
                            const SUFIX_SYMBOL = "...";
                            const FULL_DATE_FORMAT = "MMM do @ yyyy";
                            const dates = tickets.map(
                                ({ date }) => new Date(date)
                            );

                            return (
                                <Link
                                    to={`/events/${id}`}
                                    className="list-group-item list-group-item-action"
                                    key={id}
                                >
                                    <div className="d-flex w-100 justify-content-between">
                                        <h5 className="mb-1">
                                            {title.substring(0, MAX_LENGTH)}
                                            {title.length > MAX_LENGTH &&
                                                SUFIX_SYMBOL}{" "}
                                            <small className="highlighted-event-date">
                                                {getNextOrFirstFormattedDate(
                                                    dates,
                                                    FULL_DATE_FORMAT
                                                )}
                                            </small>
                                        </h5>
                                    </div>
                                    <p className="mb-1">
                                        {description.substring(0, MAX_LENGTH)}{" "}
                                        {description.length > MAX_LENGTH &&
                                            SUFIX_SYMBOL}
                                    </p>
                                    <small className="float-right">
                                        {location}
                                    </small>
                                </Link>
                            );
                        }
                    )}
                </div>
            ) : (
                <div className="col">
                    <span>No highlighted events to show</span>
                </div>
            )}
        </>
    );
};

export default HighlightedEventList;
