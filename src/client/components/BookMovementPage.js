import React, {Component} from "react";

import BookListDisplay from "./BookListDisplay";
import EnteteEmpruntRetour from "./EnteteEmpruntRetour";
import UserListDisplay from "./UserListDisplay";

class BookMovementPage extends Component {
    render() {
        return (
            <div>
                <EnteteEmpruntRetour />
                <BookListDisplay />
                <UserListDisplay />
            </div>
        );
    }
}
export default BookMovementPage;
