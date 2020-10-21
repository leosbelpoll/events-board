import React from "react";
import { NavLink } from "react-router-dom";

import { getEnv } from "utils/env";
import { APP_NAME } from "configs";

import "./Header.scss";

const Header = ({ eventsState }) => {
    const { loading, error } = eventsState;

    return (
        <div className="header-component" data-testid="header">
            <nav>
                <span className="title">
                    <NavLink to="/">{getEnv(APP_NAME)}</NavLink>
                </span>
                {loading && (
                    <span className="badge badge-info">Loading ....</span>
                )}
                {error && (
                    <span className="badge badge-danger">
                        Ooops, an error ocurred!
                    </span>
                )}
            </nav>
        </div>
    );
};

export default Header;
