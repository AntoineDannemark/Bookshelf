import React from "react";
import "../../../styles/style.css";

import EnteteWriteReview from "../entetes/EnteteWriteReview";
import InputTextArea from "../InputTextArea";
import BookListDisplay from "../BookListDisplay";
import NoteSelect from "../NoteSelect";
import Submitbutton from "../Submitbutton";

class ReviewPage extends React.Component {
    render() {
        return (
            <div>
                <EnteteWriteReview />
                <BookListDisplay />
                <InputTextArea />
                <NoteSelect />
                <Submitbutton />
            </div>
        );
    }
}

export default ReviewPage;
