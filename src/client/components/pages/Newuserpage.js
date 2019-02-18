import React from "react";
import "../../../styles/style.css";
import EnteteNewUser from "../entetes/EnteteNewUser";
import InputTextArea from "../InputTextArea";
import Submitbutton from "../Submitbutton";
import CoachNavbar from "../navbar/CoachNavbar";
import JuniorNavbar from "../navbar/JuniorNavbar";
import NoAccess from "../NoAccess";

class Newuserpage extends React.Component {
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
                {this.state.coach ? <CoachNavbar /> : <JuniorNavbar />}
                <EnteteNewUser />
                <div className="logformbackground">
                    <InputTextArea placeholder="Nom" />
                    <InputTextArea placeholder="Prenom" />
                    <InputTextArea placeholder="Email" />
                    <InputTextArea placeholder="Password" />
                    <InputTextArea placeholder="Promotion" />
                    <select
                        className="inputtext"
                        ref={select => (this.bookformat = select)}
                        name="bookformat">
                        <option value="Junior">{"Utilisateur Junior"}</option>
                        <option value="Coach">{"Coach Admin"}</option>
                    </select>
                    <Submitbutton />
                </div>
            </div>
        );
    }
}

export default Newuserpage;
