import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import TicketsTable from "components/TicketsTable";
import { getFormattedDate } from "utils/date";
import "./EventForm.scss";

const EventDetail = ({ createEvent }) => {
    const DATE_VALUE = getFormattedDate(new Date(), "yyyy-MM-dd");
    const TIME_VALUE = getFormattedDate(new Date(), "HH:mm");
    const [validationError, setValidationError] = useState();
    const [tickets, setTickets] = useState([]);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState("");
    const [location, setLocation] = useState("");
    const [date, setDate] = useState(DATE_VALUE);
    const [time, setTime] = useState(TIME_VALUE);
    const [price, setPrice] = useState("0");
    const history = useHistory();

    const addTicket = (e) => {
        e.preventDefault();

        setTickets((prevTickets) => [
            {
                date: `${date || DATE_VALUE} ${time || TIME_VALUE}`,
                price: price || 0,
            },
            ...prevTickets,
        ]);
    };

    const removeTicket = (e, index) => {
        e.preventDefault();
        setTickets((prevTickets) => prevTickets.filter((_, i) => i !== index));
    };

    const onSubmit = (e) => {
        e.preventDefault();

        setValidationError("");

        if (!tickets.length) {
            setValidationError("Add at least one date, time and price");
            return;
        }

        if (!validationError) {
            createEvent({
                event: {
                    title,
                    eventImage: image,
                    description,
                    tickets,
                    location,
                },
            });

            // TODO: listen by right response
            history.push("/");
        }
    };

    return (
        <form onSubmit={onSubmit}>
            {validationError && (
                <div className="alert alert-danger" role="alert">
                    {validationError}
                </div>
            )}
            <div className="row">
                <div className="col-lg-7">
                    <input
                        type="text"
                        className="event-title"
                        placeholder="Title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                    <textarea
                        placeholder="Description"
                        className="event-description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                    ></textarea>
                </div>
                <div className="col-lg-5">
                    <input
                        type="text"
                        className="event-img-url"
                        placeholder="Image url"
                        value={image}
                        onChange={(e) => setImage(e.target.value)}
                        required
                    />
                    <input
                        type="text"
                        className="event-location"
                        placeholder="Location"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        required
                    />
                    <div className="row">
                        <div className="col-3">
                            <input
                                type="date"
                                className="event-date"
                                value={date}
                                onChange={(e) => setDate(e.target.value)}
                            />
                        </div>
                        <div className="col-3">
                            <input
                                type="time"
                                className="event-time"
                                value={time}
                                onChange={(e) => setTime(e.target.value)}
                            />
                        </div>
                        <div className="col-3">
                            <input
                                type="number"
                                className="event-price"
                                placeholder="Price"
                                value={price}
                                min="0"
                                onChange={(e) => setPrice(e.target.value)}
                            />
                        </div>
                        <div className="col-2">
                            <button
                                className="btn btn-success add-ticket-button"
                                onClick={addTicket}
                            >
                                Add
                            </button>
                        </div>
                    </div>
                    <TicketsTable tickets={tickets} onRemove={removeTicket} />
                    <button className="btn btn-lg btn-primary float-right mt-4">
                        Create
                    </button>
                </div>
            </div>
        </form>
    );
};

export default EventDetail;
