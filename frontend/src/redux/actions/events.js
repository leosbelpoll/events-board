import {
    GET_EVENTS_FETCH,
    GET_EVENTS_SUCCESS,
    GET_EVENTS_ERROR,
    GET_EVENT_FETCH,
    GET_EVENT_SUCCESS,
    GET_EVENT_ERROR,
    CREATE_EVENT_FETCH,
    CREATE_EVENT_SUCCESS,
    CREATE_EVENT_ERROR,
    GET_HIGHLIGHTED_EVENTS_FETCH,
    GET_HIGHLIGHTED_EVENTS_SUCCESS,
    GET_HIGHLIGHTED_EVENTS_ERROR,
} from "redux/actions/actionTypes";
import {
    getEvent,
    getEvents,
    getHighlightedEvents,
    createEvent,
} from "utils/api";

// Get events

export const getEventsFetch = () => ({
    type: GET_EVENTS_FETCH,
});

export const getEventsSuccess = (events) => ({
    type: GET_EVENTS_SUCCESS,
    payload: events,
});

export const getEventsError = (error) => ({
    type: GET_EVENTS_ERROR,
    payload: error,
});

export const getEventsAction = () => {
    return (dispatch) => {
        dispatch(getEventsFetch());
        getEvents()
            .then((response) => {
                dispatch(getEventsSuccess(response.data));
            })
            .catch((error) => {
                dispatch(getEventsError(error));
            });
    };
};

// Get highlighted events

export const getHighlightedEventsFetch = () => ({
    type: GET_HIGHLIGHTED_EVENTS_FETCH,
});

export const getHighlightedEventsSuccess = (events) => ({
    type: GET_HIGHLIGHTED_EVENTS_SUCCESS,
    payload: events,
});

export const getHighlightedEventsError = (error) => ({
    type: GET_HIGHLIGHTED_EVENTS_ERROR,
    payload: error,
});

export const getHighlightedEventsAction = () => {
    return (dispatch) => {
        dispatch(getHighlightedEventsFetch());
        getHighlightedEvents()
            .then((response) => {
                dispatch(getHighlightedEventsSuccess(response.data));
            })
            .catch((error) => {
                dispatch(getHighlightedEventsError(error));
            });
    };
};

// Get single event

export const getEventFetch = () => ({
    type: GET_EVENT_FETCH,
});

export const getEventSuccess = (event) => ({
    type: GET_EVENT_SUCCESS,
    payload: event,
});

export const getEventError = (error) => ({
    type: GET_EVENT_ERROR,
    payload: error,
});

export const getEventAction = (id) => {
    return (dispatch) => {
        dispatch(getEventFetch());
        getEvent(id)
            .then((response) => {
                dispatch(getEventSuccess(response.data));
            })
            .catch((error) => {
                dispatch(getEventError(error));
            });
    };
};

// Create single event

export const createEventFetch = () => ({
    type: CREATE_EVENT_FETCH,
});

export const createEventSuccess = (event) => ({
    type: CREATE_EVENT_SUCCESS,
    payload: event,
});

export const createEventError = (error) => ({
    type: CREATE_EVENT_ERROR,
    payload: error,
});

export const createEventAction = (eventOptions) => {
    return (dispatch) => {
        dispatch(createEventFetch());
        createEvent(eventOptions)
            .then((response) => {
                dispatch(createEventSuccess(response.data));
            })
            .catch((error) => {
                dispatch(createEventError(error));
            });
    };
};
