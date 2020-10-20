import axios from "axios";
import { API_URL } from "configs";
import { getEnv } from "utils/env";

const BASE_PATH = getEnv(API_URL);
const EVENTS_URL = "/events";

export const getEvents = () => axios.get(`${BASE_PATH}${EVENTS_URL}`);

export const getHighlightedEvents = () =>
    axios.get(`${BASE_PATH}${EVENTS_URL}/featured`);

export const getEvent = (id) => axios.get(`${BASE_PATH}${EVENTS_URL}/${id}`);
