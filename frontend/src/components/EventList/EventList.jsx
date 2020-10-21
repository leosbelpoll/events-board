import React from "react";

import EventListItem from "components/EventListItem";
import "./EventList.scss";

const EventList = ({ events }) => {
    return (
        <>
            {events && events.length ? (
                events.map((event) => {
                    return <EventListItem {...event} key={event.id} />;
                })
            ) : (
                <div className="col">
                    <span>No events to show</span>
                </div>
            )}
        </>
    );
};

export default EventList;
