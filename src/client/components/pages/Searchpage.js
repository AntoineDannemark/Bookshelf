import React from "react";
import "../../../styles/style.css";
import DisplayResearchResult from "../DisplayResearchResult";
import Enteterecherche from "../entetes/Enteterecherche";
import Searchtextarea from "../Searchtextarea";
import Submitbutton from "../Submitbutton";
import CoachNavbar from "../navbar/CoachNavbar";
import JuniorNavbar from "../navbar/JuniorNavbar";

class Searchpage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {coach: true};
    }
    render() {
        return (
            <div>
                {this.state.coach ? <CoachNavbar /> : <JuniorNavbar />}
                <Enteterecherche />
                <div className="logformbackground">
                    <Searchtextarea />
                    <Submitbutton />
                    <DisplayResearchResult />
                </div>
            </div>
        );
    }
}

export default Searchpage;
