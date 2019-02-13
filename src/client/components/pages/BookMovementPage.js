import React, {Component} from "react";

import BookListDisplay from "../BookListDisplay";
import EnteteEmpruntRetour from "../entetes/EnteteEmpruntRetour";
import UserListDisplay from "../UserListDisplay";
import SubmitButton from "../Submitbutton";

class BookMovementPage extends Component {
    render() {
        return (
            <div>
                <EnteteEmpruntRetour />
                <BookListDisplay />
                <UserListDisplay />
                {/* TODO ajouter case cocher sortie/retour */}
                <SubmitButton />
            </div>
        );
    }
}
export default BookMovementPage;
