import React from "react";
import "../../../styles/style.css";

import EnteteRemoveUser from "../entetes/EnteteRemoveUser";
import UserListDisplay from "../UserListDisplay";
import Submitbutton from "../Submitbutton";
import CoachNavbar from "../navbar/CoachNavbar";
import JuniorNavbar from "../navbar/JuniorNavbar";
import NoAccess from "../NoAccess";

class RemoveUserPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {coach: false};
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
                <EnteteRemoveUser />
                <UserListDisplay />
                <Submitbutton />
            </div>
        );
    }
}

export default RemoveUserPage;
