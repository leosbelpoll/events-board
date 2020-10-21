import React from "react";
import { NavLink } from "react-router-dom";

import { getEnv } from "utils/env";

import "./Header.scss";

const Header = ({ eventsState }) => {
    const { loading, error } = eventsState;

    return (
        <div className="header-component">
            <nav>
                <span className="title">
                    <NavLink to="/">{getEnv("APP_NAME")}</NavLink>
                </span>
                {loading && <span class="badge badge-info">Loading ....</span>}
                {error && (
                    <span class="badge badge-danger">
                        Ooops, an error ocurred!
                    </span>
                )}
            </nav>
        </div>
    );
};

export default Header;
