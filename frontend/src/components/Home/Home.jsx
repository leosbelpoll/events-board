import React, { useEffect } from "react";

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
        <>
            <h1>Events board</h1>
            {events && events.map((event) => <p>{event.title}</p>)}
        </>
    );
};

export default Home;
