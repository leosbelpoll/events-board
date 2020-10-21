import { connect } from "react-redux";

import Header from "./Header";

const mapStateToProps = (state) => {
    return {
        eventsState: state.events,
    };
};

export default connect(mapStateToProps)(Header);
