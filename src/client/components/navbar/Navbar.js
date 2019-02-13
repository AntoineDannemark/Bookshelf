import React, {Component} from "react";
import {Route, Link} from "react-router-dom";

import Search from "../pages/Searchpage";
import Review from "../pages/ReviewPage";
import Adduser from "../pages/Newuserpage";
import Removeuser from "../pages/RemoveUserPage";

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
                </ul>

                <Route path="/search" Component={Search} />
                <Route path="/review" Component={Review} />
                <Route path="/newuser" Component={Adduser} />
                <Route path="/removeuser" Component={Removeuser} />
            </div>
        );
    }
}
export default Navbar;
