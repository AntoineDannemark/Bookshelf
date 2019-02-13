import React, {Component} from "react";
import {Route, Switch} from "react-router-dom";

import Login from "./components/Login";
import EnteteAddBook from "./components/EnteteAddBook";
import NotFound from "./components/NotFound";

<<<<<<< HEAD
import AddBookPage from "./components/pages/AddBookPage";
import BookMovementPage from "./components/pages/BookMovementPage";
import Home from "./components/Home";
import Newuserpage from "./components/pages/Newuserpage";
import RemoveBookPage from "./components/page/RemoveBookPage";
import RemoveUserPage from "./components/RemoveUserPage";
import ReviewPage from "./components/ReviewPage";
import Searchpage from "./components/Searchpage";

class Routing extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         useremail: "",
    //         userpassword: "",
    //     };
    //     this.handleClick = this.handleClick.bind(this);
    // }
=======
import "../styles/style.css";

class App extends Component {
>>>>>>> pull_antoine
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
