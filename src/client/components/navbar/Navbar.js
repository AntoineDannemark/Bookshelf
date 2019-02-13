import React, {Component} from "react";
import {Route, Link} from "react-router-dom";

import Search from "../pages/Searchpage";
import Review from "../pages/ReviewPage";
import Adduser from "../pages/Newuserpage";
import Removeuser from "../pages/RemoveUserPage";
import Movement from "../pages/BookMovementPage";
import Addbook from "../pages/AddBookPage";
import Removebook from "../pages/RemoveBookPage";

class Navbar extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li>
                        <Link to="/search">{"Recherche"}</Link>
                    </li>
                    <li>
                        <Link to="/review">{"Revue"}</Link>
                    </li>
                    <ul>
                        <li>
                            <Link to="newuser"> {"Add user"} </Link>
                        </li>
                        <li>
                            <Link to="removeuser"> {"Delete user"} </Link>
                        </li>
                    </ul>
                    <li>
                        <Link to="/movement">{"Mouvements"}</Link>
                    </li>
                    <li>
                        <Link to="/addbook">{"Add book"}</Link>
                    </li>
                    <li>
                        <Link to="/removebook">{"Delete book"}</Link>
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
export default Navbar;
