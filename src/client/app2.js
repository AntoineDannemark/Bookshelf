import React, {Component} from "react";
import {Route, Switch} from "react-router-dom";

import Login from "./components/Login";
import NotFound from "./components/NotFound";
import AddBookPage from "./components/pages/AddBookPage";
import BookMovementPage from "./components/pages/BookMovementPage";
import NewUserPage from "./components/pages/Newuserpage";
import RemoveBookPage from "./components/pages/RemoveBookPage";
import RemoveUserPage from "./components/pages/RemoveUserPage";
import Reviewpage from "./components/pages/ReviewPage";
import SearchPage from "./components/pages/Searchpage";
import Navbar from "./components/navbar/Navbar";

import "../styles/style.css";

class App extends Component {
    render() {
        return (
            <div className="App">
                <Switch>
                    <Route exact path="/" component={Login} />
                    {/* <PrivateRoute exact path="/add" component={Add} /> */}
                    <Route path="/home" />
                    <Route path="/addbook" component={AddBookPage} />
                    <Route path="/movement" component={BookMovementPage} />
                    <Route path="/newuser" component={NewUserPage} />
                    <Route path="/removebook" component={RemoveBookPage} />
                    <Route path="/removeuser" component={RemoveUserPage} />
                    <Route path="/review" component={Reviewpage} />
                    <Route path="/search" component={SearchPage} />
                    <Route path="/navbar" component={Navbar} />
                    <Route component={NotFound} />
                </Switch>
            </div>
        );
    }
}

export default App;