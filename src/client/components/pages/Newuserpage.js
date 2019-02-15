import React from "react";
import "../../../styles/style.css";
import EnteteNewUser from "../entetes/EnteteNewUser";
import InputTextArea from "../InputTextArea";
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
