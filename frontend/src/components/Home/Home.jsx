import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";

import EventList from "components/EventList";
import HighlightedEventList from "components/HighlightedEventList";
import "./Home.scss";

const Home = ({ eventsState, getEvents, getHighlightedEvents }) => {
    const { events, highlightedEvents } = eventsState;

    useEffect(() => {
        getEvents();
        getHighlightedEvents();
    }, [getEvents, getHighlightedEvents]);

    return (
        <div className="row">
            <div className="col-md-8">
                <div className="row">
                    <div className="col mb-4">
                        <NavLink
                            to="/events/create"
                            className="btn btn-primary add-event-button"
                        >
                            + Add event
                        </NavLink>
                    </div>
                </div>
                <div className="row">
                    <EventList events={events} />
                </div>
            </div>
            <div className="col-lg-4">
                <h2>Today's Highlight</h2>
                <hr />
                <HighlightedEventList highlightedEvents={highlightedEvents} />
            </div>
        </div>
    );
};

export default Home;
