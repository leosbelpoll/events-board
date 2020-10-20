import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "components/Home";
import Header from "components/Header";
import PageNotFound from "components/PageNotFound";

const Routes = () => {
    return (
        <div className="app-component">
            <Router>
                <Header />
                <div className="container">
                    <Switch>
                        <Route path="/" component={Home} exact />
                        <Route component={PageNotFound} />
                    </Switch>
                </div>
            </Router>
        </div>
    );
};

export default Routes;
