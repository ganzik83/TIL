import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Carlist from "./Carlist";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<Carlist />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
