import {
    GET_EVENTS_FETCH,
    GET_EVENTS_SUCCESS,
    GET_EVENTS_ERROR,
} from "redux/actions/actionTypes";

const initialState = {
    events: [],
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
                events: payload,
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
        default:
            return state;
    }
}
