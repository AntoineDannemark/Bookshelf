import React, {Component} from "react";

import EnteteAddBook from "../EnteteAddBook";
import InputTextArea from "../InputTextArea";
import SubmitButton from "../Submitbutton";

class AddBookPage extends Component {
    render() {
        return (
            <div>
                <EnteteAddBook />
                <InputTextArea />
                <InputTextArea />
                <InputTextArea />
                <InputTextArea />
                <InputTextArea />
                <InputTextArea />
                <SubmitButton />
            </div>
        );
    }
}
export default AddBookPage;
