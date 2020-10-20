import {
    GET_EVENTS_FETCH,
    GET_EVENTS_SUCCESS,
    GET_EVENTS_ERROR,
} from "redux/actions/actionTypes";
import { getEvents } from "utils/api";

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
