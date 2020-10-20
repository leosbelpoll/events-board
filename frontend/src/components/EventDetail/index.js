import { connect } from "react-redux";

import EventDetail from "./EventDetail";
import { getEventAction } from "redux/actions/events";

const mapStateToProps = (state) => {
    return {
        eventsState: state.events,
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        getEvent: (id) => dispatch(getEventAction(id)),
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(EventDetail);
