import { connect } from "react-redux";

import EventForm from "./EventForm";
import { createEventAction } from "redux/actions/events";

const mapDispatchToProps = (dispatch) => {
    return {
        createEvent: (eventData) => dispatch(createEventAction(eventData)),
    };
};

export default connect(null, mapDispatchToProps)(EventForm);
