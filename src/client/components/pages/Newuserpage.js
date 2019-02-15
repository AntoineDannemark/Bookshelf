import React from "react";
import "../../../styles/style.css";
import EnteteNewUser from "../entetes/EnteteNewUser";
import InputTextArea from "../InputTextArea";
import Submitbutton from "../Submitbutton";
import Navbar from "../navbar/Navbar";

class Newuserpage extends React.Component {
    render() {
        return (
            <div>
                <Navbar />
                <EnteteNewUser />
                <InputTextArea />
                <InputTextArea />
                <InputTextArea />
                <InputTextArea />
                <InputTextArea />
                <InputTextArea />
                {/* TODO checkbox JR/Coach */}
                <Submitbutton />
            </div>
        );
    }
}

export default Newuserpage;
