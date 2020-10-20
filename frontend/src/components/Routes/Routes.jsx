import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "components/Home";

const Routes = () => {
    return (
        <div className="app-component">
            <Router>
                <Route path="/" component={Home} exact />
            </Router>
        </div>
    );
};

export default Routes;
