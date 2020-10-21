import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { isAfter } from "date-fns";

import EventList from "components/EventList";
import HighlightedEventList from "components/HighlightedEventList";
import "./Home.scss";
import { getNextOrLastFormattedDate } from "utils/date";

const Home = ({ eventsState, getEvents, getHighlightedEvents }) => {
    const { events, highlightedEvents } = eventsState;

    const compareDates = (eventA, eventB) => {
        const bestDateEventA = new Date(
            getNextOrLastFormattedDate(eventA.tickets.map(({ date }) => date))
        );
        const bestDateEventB = new Date(
            getNextOrLastFormattedDate(eventB.tickets.map(({ date }) => date))
        );
        if (isAfter(bestDateEventA, bestDateEventB)) return 1;
        if (isAfter(bestDateEventB, bestDateEventA)) return -1;

        return 0;
    };

    const orderedEvents = events.sort(compareDates);
    const orderedHighlightedEvents = highlightedEvents.sort(compareDates);

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
                    <EventList events={orderedEvents} />
                </div>
            </div>
            <div className="col-lg-4">
                <h2>Today's Highlight</h2>
                <hr />
                <HighlightedEventList
                    highlightedEvents={orderedHighlightedEvents}
                />
            </div>
        </div>
    );
};

export default Home;
