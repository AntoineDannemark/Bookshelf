import React from "react";
import "../../../styles/style.css";
import Enteterecherche from "../entetes/Enteterecherche";
import Submitbutton from "../Submitbutton";
import CoachNavbar from "../navbar/CoachNavbar";
import JuniorNavbar from "../navbar/JuniorNavbar";

class Searchpage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {coach: true};
        // this.handleChange = this.handleChange.bind(this);
    }
    render() {
        return (
            <div>
                {this.state.coach ? <CoachNavbar /> : <JuniorNavbar />}
                <Enteterecherche />
                <div className="logformbackground">
                    <input
                        className="inputtext"
                        type="text"
                        id="booksearch"
                        placeholder="mots clé"
                        required={true}
                    />
                    <Submitbutton />
                    {/* TODO remplacer booklistdisplay */}
                    <p className="evidence">{"créer la liste des résultats"}</p>
                </div>
            </div>
        );
    }
}

export default Searchpage;
