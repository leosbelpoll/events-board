import {
    GET_EVENTS_FETCH,
    GET_EVENTS_SUCCESS,
    GET_EVENTS_ERROR,
    GET_EVENT_FETCH,
    GET_EVENT_SUCCESS,
    GET_EVENT_ERROR,
} from "redux/actions/actionTypes";

const initialState = {
    events: [],
    currentEvent: null,
    loading: false,
    error: null,
};

export default function (state = initialState, { type, payload }) {
    switch (type) {
        case GET_EVENTS_FETCH: {
            return {
                ...state,
                loading: true,
                error: null,
            };
        }
        case GET_EVENTS_SUCCESS: {
            return {
                ...state,
                events: payload.events,
                loading: false,
                error: null,
            };
        }
        case GET_EVENTS_ERROR: {
            return {
                ...state,
                loading: false,
                error: payload,
            };
        }
        case GET_EVENT_FETCH: {
            return {
                ...state,
                loading: true,
                error: null,
            };
        }
        case GET_EVENT_SUCCESS: {
            return {
                ...state,
                currentEvent: payload.event,
                loading: false,
                error: null,
            };
        }
        case GET_EVENT_ERROR: {
            return {
                ...state,
                loading: false,
                error: payload,
            };
        }
        default:
            return state;
    }
}
