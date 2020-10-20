import React from "react";
import { NavLink } from "react-router-dom";

const PageNotFound = () => {
    return (
        <div className="page-not-found-component">
            <div className="text-center">
                <h2 className="big-title big-title-error">Sorry</h2>
                <h4>
                    <i className="glyphicon glyphicon-exclamation-sign"></i> The
                    page you are looking for doesn't exist
                </h4>
                <h6>Click the button to go home</h6>
                <br />
                <NavLink to="/" className="btn btn-primary btn-lg">
                    <i className="glyphicon glyphicon-play"></i> Events
                </NavLink>
            </div>
        </div>
    );
};

export default PageNotFound;
