import React from "react";
import ReactDOM from "react-dom";
import "../styles/style.css";
import {Route, BrowserRouter as Router, Switch} from "react-router-dom";
// import App from "./app";
import Home from "./components/Home";
import EnteteAddBook from "./components/EnteteAddBook";

class Routing extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/add" component={EnteteAddBook} />
                    </Switch>
                </div>
            </Router>
        );
    }
}

ReactDOM.render(<Routing />, document.getElementById("app"));
