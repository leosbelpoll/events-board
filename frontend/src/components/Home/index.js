import { connect } from "react-redux";

import Home from "./Home";
import {
    getEventsAction,
    getHighlightedEventsAction,
} from "redux/actions/events";

const mapStateToProps = (state) => {
    return {
        eventsState: state.events,
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        getEvents: () => dispatch(getEventsAction()),
        getHighlightedEvents: () => dispatch(getHighlightedEventsAction()),
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);
