import React from "react";

import Inputsignin from "./InputSignIn";
import Submitbutton from "./Submitbutton";

const Logform = ({onChange, handleClick, logout, getUsers, errors}) => (
    <div className="logformbackground">
        <form noValidate className="logform">
            <Inputsignin onChange={onChange()} errors={errors} />
            <button onClick={handleClick()}>{"Login"}</button>
            <button onClick={logout()}>{"Logout"}</button>
            <button onClick={getUsers()}>{"Check"}</button>
            {/* <Submitbutton  /> */}
        </form>
    </div>
);

export default Logform;
