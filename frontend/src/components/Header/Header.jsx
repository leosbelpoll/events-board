import React from "react";
import { NavLink } from "react-router-dom";

import { getEnv } from "utils/env";

import "./Header.scss";

const Header = (props) => {
    return (
        <div className="header-component">
            <nav>
                <span className="title">
                    <NavLink to="/">{getEnv("APP_NAME")}</NavLink>
                </span>
            </nav>
        </div>
    );
};

export default Header;
