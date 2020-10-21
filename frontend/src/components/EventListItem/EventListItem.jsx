import React from "react";
import { Link } from "react-router-dom";
import { isPast } from "date-fns";

import "./EventListItem.scss";
import { getNextOrLastFormattedDate } from "utils/date";

const EventListItem = ({ id, title, tickets, eventImage }) => {
    const FULL_DATE_FORMAT = "MMM do, yyyy @ HH:mm";
    const dates = tickets.map(({ date }) => new Date(date));
    const nextDate = getNextOrLastFormattedDate(dates, FULL_DATE_FORMAT);
    const nextDateToAnalize = getNextOrLastFormattedDate(dates);

    return (
        <div className="col-lg-4 event-card" key={id}>
            <div className="card">
                <img
                    src={eventImage}
                    className="card-img-top"
                    alt={title}
                    style={{
                        height: "14rem",
                        objectFit: "cover",
                    }}
                />
                <div className="card-body">
                    <h6
                        className={
                            isPast(new Date(nextDateToAnalize))
                                ? "card-date past-date"
                                : "card-date"
                        }
                    >
                        {nextDate}
                    </h6>
                    <h5 className="card-title">{title}</h5>
                    <Link to={`/events/${id}`} className="btn btn-success">
                        View
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default EventListItem;
