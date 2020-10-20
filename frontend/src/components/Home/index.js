import { connect } from "react-redux";

import Home from "./Home";
import { getEventsAction } from "redux/actions/events";

const mapStateToProps = (state) => {
    return {
        eventsState: state.events,
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        getEvents: () => dispatch(getEventsAction()),
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);
