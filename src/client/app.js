import React from "react";
import ReactDOM from "react-dom";
import "../styles/style.css";
import {Route, BrowserRouter as Router, Switch} from "react-router-dom";

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
    render() {
        return (
            <Router>
                <div>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/addbook" component={AddBookPage} />
                        <Route path="/search" component={Searchpage} />
                        <Route path="/newuser" component={Newuserpage} />
                        <Route path="/movement" component={BookMovementPage} />
                        <Route path="/review" component={ReviewPage} />
                        <Route path="/bookdelete" component={RemoveBookPage} />
                        <Route path="/userdelete" component={RemoveUserPage} />
                    </Switch>
                </div>
            </Router>
        );
    }
}

ReactDOM.render(<Routing />, document.getElementById("app"));
