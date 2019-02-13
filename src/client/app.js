import React, {Component} from "react";
import {Route, Switch} from "react-router-dom";

import Login from "./components/Login";
import EnteteAddBook from "./components/EnteteAddBook";
import NotFound from "./components/NotFound";

import "../styles/style.css";

class App extends Component {
    render() {
        return (
            <div className="App">
                <Switch>
                    <Route exact path="/" component={Login} />
                    {/* <PrivateRoute exact path="/add" component={Add} /> */}
                    <Route path="/add" component={EnteteAddBook} />
                    <Route component={NotFound} />
                </Switch>
            </div>
        );
    }
}

export default App;
