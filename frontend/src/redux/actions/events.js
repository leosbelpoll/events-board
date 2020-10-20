import {
    GET_EVENTS_FETCH,
    GET_EVENTS_SUCCESS,
    GET_EVENTS_ERROR,
    GET_EVENT_FETCH,
    GET_EVENT_SUCCESS,
    GET_EVENT_ERROR,
} from "redux/actions/actionTypes";
import { getEvent, getEvents } from "utils/api";

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

export const getEventFetch = () => ({
    type: GET_EVENT_FETCH,
});

export const getEventSuccess = (events) => ({
    type: GET_EVENT_SUCCESS,
    payload: events,
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
