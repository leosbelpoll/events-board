import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

import TicketsTable from "components/TicketsTable";
import PageNotFound from "components/PageNotFound";
import "./EventDetail.scss";

const EventDetail = ({ eventsState, getEvent }) => {
    const { loading, error, currentEvent } = eventsState;
    const { title, location, description, tickets, eventImage } =
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

    return (
        <div className="row">
            {currentEvent ? (
                <>
                    <div className="col-lg-8">
                        <h1>
                            {title}
                            <span className="location">{location}</span>
                        </h1>
                        <p className="description">{description}</p>
                    </div>
                    <div className="col-lg-4">
                        <img
                            src={eventImage}
                            alt={title}
                            className="rounded mx-auto d-block event-image"
                        />
                        <TicketsTable tickets={tickets} />
                    </div>
                </>
            ) : (
                "No events to show"
            )}
        </div>
    );
};

export default EventDetail;
