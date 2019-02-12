import React, {Component} from "react";
import {Route, Switch} from "react-router-dom";

import Home from "./components/Home";
import EnteteAddBook from "./components/EnteteAddBook";
import NotFound from "./components/NotFound";

import "../styles/style.css";

export default class App extends Component {
    render() {
        return (
            <div className="App">
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/add" component={EnteteAddBook} />
                    <Route component={NotFound} />
                </Switch>
            </div>
        );
    }
}
