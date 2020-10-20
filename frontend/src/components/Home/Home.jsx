import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import { getNextFormattedDate } from "utils/date";
import "./Home.scss";

const Home = ({ eventsState, getEvents, getHighlightedEvents }) => {
    const { events, highlightedEvents, loading, error } = eventsState;

    useEffect(() => {
        getEvents();
        getHighlightedEvents();
    }, [getEvents, getHighlightedEvents]);

    if (loading) {
        return <p>Loading ...</p>;
    }

    if (error) {
        return <p>Ooops, an error ocurred!</p>;
    }

    return (
        <div className="row">
            <div className="col-md-8">
                <div className="row">
                    {events
                        ? events.map((event) => {
                              const nextDate = getNextFormattedDate(
                                  event.dates,
                                  "MMM do, yyyy @ HH:MM"
                              );

                              if (nextDate) {
                                  return (
                                      <div
                                          className="col-lg-4 event-card"
                                          key={event.id}
                                      >
                                          <div className="card">
                                              <img
                                                  src={event.eventImage}
                                                  className="card-img-top"
                                                  alt={event.title}
                                                  style={{
                                                      height: "14rem",
                                                      objectFit: "cover",
                                                  }}
                                              />
                                              <div className="card-body">
                                                  <h6 className="card-date">
                                                      {nextDate}
                                                  </h6>
                                                  <h5 className="card-title">
                                                      {event.title}
                                                  </h5>
                                                  <Link
                                                      to={`/events/${event.id}`}
                                                      className="btn btn-primary"
                                                  >
                                                      View
                                                  </Link>
                                              </div>
                                          </div>
                                      </div>
                                  );
                              }
                          })
                        : "No events to show"}
                </div>
            </div>
            <div className="col-lg-4">
                <h2>Today's Highlight</h2>
                <hr />
                {highlightedEvents ? (
                    <div class="list-group">
                        {highlightedEvents.map(
                            ({ id, title, dates, description, location }) => {
                                const MAX_LENGTH = 30;

                                return (
                                    <Link
                                        to={`/events/${id}`}
                                        class="list-group-item list-group-item-action"
                                    >
                                        <div class="d-flex w-100 justify-content-between">
                                            <h5 class="mb-1">
                                                {title.substring(0, MAX_LENGTH)}
                                                {title.length > MAX_LENGTH &&
                                                    "..."}{" "}
                                                <small className="highlighted-event-date">
                                                    {getNextFormattedDate(
                                                        dates,
                                                        "MMM do @ yyyy"
                                                    )}
                                                </small>
                                            </h5>
                                        </div>
                                        <p class="mb-1">
                                            {description.substring(
                                                0,
                                                MAX_LENGTH
                                            )}{" "}
                                            {description.length > MAX_LENGTH &&
                                                "..."}
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
                    ""
                )}
            </div>
        </div>
    );
};

export default Home;
