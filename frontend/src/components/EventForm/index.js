import { connect } from "react-redux";

import EventForm from "./EventForm";
import { createEventAction } from "redux/actions/events";

const mapStateToProps = (state) => {
    return {
        eventsState: state.events,
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        createEvent: (eventData) => dispatch(createEventAction(eventData)),
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(EventForm);
