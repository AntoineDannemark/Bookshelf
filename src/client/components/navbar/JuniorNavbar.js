import React, {Component} from "react";
import {Route, Link} from "react-router-dom";

import "../../../styles/style.css";

import Search from "../pages/Searchpage";
import Review from "../pages/ReviewPage";
import Adduser from "../pages/Newuserpage";
import Removeuser from "../pages/RemoveUserPage";
import Movement from "../pages/BookMovementPage";
import Addbook from "../pages/AddBookPage";
import Removebook from "../pages/RemoveBookPage";

class JuniorNavbar extends Component {
    render() {
        return (
            <div className="nav">
                <ul>
                    <li>
                        <Link to="/search">{"Recherche de livres"}</Link>
                    </li>
                    <li>
                        <Link to="/review">{"Ecrire une revue"}</Link>
                    </li>
                </ul>

                <Route path="/search" Component={Search} />
                <Route path="/review" Component={Review} />
                <Route path="/newuser" Component={Adduser} />
                <Route path="/removeuser" Component={Removeuser} />
                <Route path="/movement" Component={Movement} />
                <Route path="/addbook" Component={Addbook} />
                <Route path="/removebook" Component={Removebook} />
            </div>
        );
    }
}
export default JuniorNavbar;