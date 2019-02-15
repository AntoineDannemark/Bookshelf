import React, {Component} from "react";

import BookListDisplay from "../BookListDisplay";
import EnteteEmpruntRetour from "../entetes/EnteteEmpruntRetour";
import UserListDisplay from "../UserListDisplay";
import SubmitButton from "../Submitbutton";
import Navbar from "../navbar/Navbar";

class BookMovementPage extends Component {
    render() {
        return (
            <div>
                <form>
                    <Navbar />
                    <EnteteEmpruntRetour />
                    <BookListDisplay />
                    <UserListDisplay />
                    <select
                        ref={select => (this.bookformat = select)}
                        name="bookformat">
                        <option value="emprunt">{"Emprunt"}</option>
                        <option value="retour">{"Retour"}</option>
                    </select>
                    <SubmitButton />
                </form>
            </div>
        );
    }
}
export default BookMovementPage;
