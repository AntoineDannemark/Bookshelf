import React from "react";
import "../../../styles/style.css";

import EnteteWriteReview from "../entetes/EnteteWriteReview";
import InputTextArea from "../InputTextArea";
import BookListDisplay from "../BookListDisplay";
import NoteSelect from "../NoteSelect";
import Submitbutton from "../Submitbutton";
import CoachNavbar from "../navbar/CoachNavbar";
import JuniorNavbar from "../navbar/JuniorNavbar";

class ReviewPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {coach: true};
    }
    render() {
        return (
            <div>
                {this.state.coach ? <CoachNavbar /> : <JuniorNavbar />}
                <EnteteWriteReview />
                <div className="logformbackground">
                    <div>
                        <BookListDisplay />
                    </div>
                    <div>
                        <InputTextArea placeholder="Ecrire une revue" />
                        <NoteSelect />
                        <Submitbutton />
                    </div>
                </div>
            </div>
        );
    }
}

export default ReviewPage;
