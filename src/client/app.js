/* becodeorg/bookshelf
 *
 * /src/client/app.js - Client entry point
 *
 * coded by leny@BeCode
 * started at 18/01/2019
 */

import * as React from "react";
import ReactDOM from "react-dom";
import Home from "./components/Home";
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import "../styles/style.css";

ReactDOM.render(
    <Router>
        <Home />
    </Router>,
    document.querySelector("#app"),
);
