import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import configureStore from "redux-mock-store";

import Header from "../index";
import mockedStore from "./mockedStore";
import mockedLoadingStore from "./mockedLoadingStore";
import mockedErrorStore from "./mockedErrorStore";
import { getEnv } from "utils/env";
import { APP_NAME } from "configs";

const mockStore = configureStore([]);
let store;

beforeEach(() => {
    store = mockStore({
        ...mockedStore,
    });
});

it("renders without crashing", () => {
    ReactDOM.render(
        <Provider store={store}>
            <Router>
                <Header />
            </Router>
        </Provider>,
        document.createElement("div")
    );
});

test("contains the app name", () => {
    const { getByTestId } = render(
        <Provider store={store}>
            <Router>
                <Header />
            </Router>
        </Provider>
    );
    const welcomeText = getByTestId("header");
    expect(welcomeText).toHaveTextContent(getEnv(APP_NAME));
});

test("contains Loading state", () => {
    store = mockStore({
        ...mockedLoadingStore,
    });
    const { getByTestId } = render(
        <Provider store={store}>
            <Router>
                <Header />
            </Router>
        </Provider>
    );
    const welcomeText = getByTestId("header");
    expect(welcomeText).toHaveTextContent("Loading ....");
});

test("contains Error state", () => {
    store = mockStore({
        ...mockedErrorStore,
    });
    const { getByTestId } = render(
        <Provider store={store}>
            <Router>
                <Header />
            </Router>
        </Provider>
    );
    const welcomeText = getByTestId("header");
    expect(welcomeText).toHaveTextContent("Ooops, an error ocurred!");
});
