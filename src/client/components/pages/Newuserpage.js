import React from "react";
import "../../../styles/style.css";
import EnteteNewUser from "../EnteteNewUser";
import InputTextArea from "../InputTextArea";
import Submitbutton from "../Submitbutton";

class Newuserpage extends React.Component {
    render() {
        return (
            <div>
                <EnteteNewUser />
                <InputTextArea />
                <InputTextArea />
                <InputTextArea />
                <InputTextArea />
                <InputTextArea />
                <InputTextArea />
                <Submitbutton />
            </div>
        );
    }
}

export default Newuserpage;
