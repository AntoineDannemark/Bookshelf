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
        this.state = {
            coach: true,
        };
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
                {this.state.coach ? <CoachNavbar /> : <JuniorNavbar />}
                <EnteteEmpruntRetour />
                <div
                    className="logformbackground
                ">
                    <form>
                        <BookListDisplay />
                        <UserListDisplay />
                        <div className="selectwrapper">
                            <select
                                className="inputtext"
                                ref={select => (this.bookformat = select)}
                                name="bookformat">
                                <option value="emprunt">{"Emprunt"}</option>
                                <option value="retour">{"Retour"}</option>
                            </select>
                        </div>
                        <SubmitButton />
                    </form>
                </div>
            </div>
        );
    }
}
export default BookMovementPage;
