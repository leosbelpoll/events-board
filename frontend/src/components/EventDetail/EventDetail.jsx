import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

import { getFormattedDate, getNextDates } from "utils/date";
import PageNotFound from "components/PageNotFound";
import "./EventDetail.scss";

const EventDetail = ({ eventsState, getEvent }) => {
    const { loading, error, currentEvent } = eventsState;
    const { title, location, description, dates, eventImage } =
        currentEvent || {};
    let { id } = useParams();

    useEffect(() => {
        getEvent(id);
    }, [getEvent, id]);

    if (loading) {
        return <p>Loading ...</p>;
    }

    if (error) {
        return <PageNotFound />;
    }

    const getTable = () => {
        const eventDates = getNextDates(dates);

        return (
            <table class="table dates-table">
                <thead>
                    <tr>
                        <th scope="col">Date</th>
                        <th scope="col">Time</th>
                    </tr>
                </thead>
                <tbody>
                    {eventDates &&
                        eventDates.map((date) => (
                            <tr>
                                <td>
                                    {getFormattedDate(date, "MMM do, yyyy")}
                                </td>
                                <td>{getFormattedDate(date, "HH:MM")}</td>
                            </tr>
                        ))}
                </tbody>
            </table>
        );
    };

    return (
        <div className="row">
            {currentEvent ? (
                <>
                    <div class="col-lg-8">
                        <h1>
                            {title}
                            <span className="location">{location}</span>
                        </h1>
                        <p className="description">{description}</p>
                    </div>
                    <div class="col-lg-4">
                        <img
                            src={eventImage}
                            alt={title}
                            class="rounded mx-auto d-block event-image"
                        />
                        {getTable()}
                    </div>
                </>
            ) : (
                "No events to show"
            )}
        </div>
    );
};

export default EventDetail;
