import React from "react";
import "../../../styles/style.css";

import EnteteRemoveUser from "../entetes/EnteteRemoveUser";
import UserListDisplay from "../UserListDisplay";
import Submitbutton from "../Submitbutton";

class RemoveUserPage extends React.Component {
    render() {
        return (
            <div>
                <EnteteRemoveUser />
                <UserListDisplay />
                <Submitbutton />
            </div>
        );
    }
}

export default RemoveUserPage;
