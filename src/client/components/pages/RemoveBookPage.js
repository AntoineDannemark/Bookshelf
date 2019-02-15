import React from "react";
import "../../../styles/style.css";

import EnteteRemoveBook from "../entetes/EnteteRemoveBook";
import BookListDisplay from "../BookListDisplay";
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
                <EnteteRemoveBook />
                <BookListDisplay />
                <Submitbutton />
            </div>
        );
    }
}

export default Newuserpage;
