import React from "react";
import ReactDOM from "react-dom";
import "../styles/style.css";
import {Route, BrowserRouter as Router, Switch} from "react-router-dom";
import EnteteAddBook from "./components/EnteteAddBook";
import Home from "./components/Home";
import Newuserpage from "./components/Newuserpage";
import Searchpage from "./components/Searchpage";

class Routing extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/add" component={EnteteAddBook} />
                        <Route path="/search" component={Searchpage} />
                        <Route path="/newuser" component={Newuserpage} />
                    </Switch>
                </div>
            </Router>
        );
    }
}

ReactDOM.render(<Routing />, document.getElementById("app"));
