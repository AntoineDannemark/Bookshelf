import React from "react";
import ReactDOM from "react-dom";
import "../styles/style.css";
import {Route, BrowserRouter as Router, Switch} from "react-router-dom";
// import App from "./app";
import Home from "./components/Home";
import EnteteAddBook from "./components/EnteteAddBook";
import errorPage from "";

class App extends React.Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/add" component={EnteteAddBook} />
                    <Route component={errorPage} />
                </Switch>
            </Router>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("app"));
