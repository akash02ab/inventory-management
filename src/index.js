import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./redux/store/store";
import Main from "./components/Main";
import "./styles/index.css";

ReactDOM.render(
    <Provider store={store}>
        <Main />
    </Provider>,
    document.getElementById("root")
);
