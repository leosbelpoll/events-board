import React, { useEffect } from "react";

import { getNextDate } from "utils/date";
import "./Home.scss";

const Home = ({ eventsState, getEvents }) => {
    const { events, loading, error } = eventsState;

    useEffect(() => {
        getEvents();
    }, [getEvents]);

    if (loading) {
        return <p>Loading ...</p>;
    }

    if (error) {
        return <p>Ooops, an error ocurred!</p>;
    }

    return (
        <div className="row">
            {events
                ? events.map((event) => {
                      const nextDate = getNextDate(
                          event.dates,
                          "MMM do, yyyy @ HH:MM"
                      );

                      if (nextDate) {
                          return (
                              <div className="col-md-4" key={event.id}>
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
                                          <a
                                              href="#"
                                              className="btn btn-primary"
                                          >
                                              View
                                          </a>
                                      </div>
                                  </div>
                              </div>
                          );
                      }
                  })
                : "No events to show"}
        </div>
    );
};

export default Home;
