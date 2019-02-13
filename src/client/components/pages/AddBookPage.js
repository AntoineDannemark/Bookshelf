import React, {Component} from "react";

import EnteteAddBook from "../entetes/EnteteAddBook";
import InputTextArea from "../InputTextArea";
import SubmitButton from "../Submitbutton";

class AddBookPage extends Component {
    render() {
        return (
            <div>
                <EnteteAddBook />
                {/* titre livre */}
                <InputTextArea />
                {/* ISBN */}
                <InputTextArea />
                {/* Nom auteur */}
                <InputTextArea />
                {/* Prenom auteur */}
                <InputTextArea />
                {/* Text language */}
                <InputTextArea />
                {/* Format de livre */}
                <InputTextArea />
                {/* Propriétaire */}
                <InputTextArea />
                <SubmitButton />
            </div>
        );
    }
}
export default AddBookPage;
