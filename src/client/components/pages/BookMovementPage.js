import React, {Component} from "react";

import BookListDisplay from "../BookListDisplay";
import EnteteEmpruntRetour from "../entetes/EnteteEmpruntRetour";
import UserListDisplay from "../UserListDisplay";
import SubmitButton from "../Submitbutton";
import CoachNavbar from "../navbar/CoachNavbar";
import JuniorNavbar from "../navbar/JuniorNavbar";
import NoAccess from "../NoAccess";

class BookMovementPage extends Component {
    constructor(props) {
        super(props);
        this.state = {coach: true};
    }
    render() {
        if (this.state.coach === false) {
            return (
                <div>
                    <NoAccess />
                </div>
            );
        }
        return (
            <div>
                <form>
                    {this.state.coach ? <CoachNavbar /> : <JuniorNavbar />}
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
