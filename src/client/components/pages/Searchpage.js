import React from "react";
import "../../../styles/style.css";
import DisplayResearchResult from "../DisplayResearchResult";
import Enteterecherche from "../entetes/Enteterecherche";
import Searchtextarea from "../Searchtextarea";
import Submitbutton from "../Submitbutton";

class Searchpage extends React.Component {
    render() {
        return (
            <div>
                <Enteterecherche />
                <Searchtextarea />
                <Submitbutton />
                <DisplayResearchResult />
            </div>
        );
    }
}

export default Searchpage;
