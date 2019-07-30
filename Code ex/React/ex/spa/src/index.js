import React from "react";
import ReactDOM from "react-dom";
import Main from "./Main";
<<<<<<< HEAD
import "bootstrap/dist/css/bootstrap.min.css";
=======
>>>>>>> 771bd1a67c49b157c3d2a016503af3f8c30e3e50

import "./index.scss";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<Main />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
