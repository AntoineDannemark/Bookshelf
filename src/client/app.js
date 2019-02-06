/* becodeorg/bookshelf
 *
 * /src/client/app.js - Client entry point
 *
 * coded by leny@BeCode
 * started at 18/01/2019
 */

import * as React from "react";
import ReactDOM from "react-dom";
import Signup from "./components/Signup";
import "../styles/style.css";

ReactDOM.render(<Signup />, document.querySelector("#app"));
