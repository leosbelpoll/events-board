import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "components/Home";
import EventDetail from "components/EventDetail";
import Header from "components/Header";
import PageNotFound from "components/PageNotFound";
import EventForm from "components/EventForm";

const Routes = () => {
    return (
        <div className="app-component">
            <Router>
                <Header />
                <div className="container-fluid">
                    <Switch>
                        <Route path="/" component={Home} exact />
                        <Route
                            path="/events/create"
                            children={<EventForm />}
                            exact
                        />
                        <Route
                            path="/events/:id"
                            children={<EventDetail />}
                            exact
                        />
                        <Route component={PageNotFound} />
                    </Switch>
                </div>
            </Router>
        </div>
    );
};

export default Routes;
