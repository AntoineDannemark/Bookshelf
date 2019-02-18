import React from "react";

// import Submitbutton from "./Submitbutton";
import Inputsignin from "./InputSignIn";

const Logform = ({onChange, handleClick, logout, getUsers, errors}) => (
    <div className="logformbackground">
        <form noValidate className="logform">
            <Inputsignin onChange={onChange} errors={errors} />
            <button onClick={handleClick()}>{"Login"}</button>
            <button onClick={logout()}>{"Logout"}</button>
            <button onClick={getUsers()}>{"Check"}</button>
            {/* <Submitbutton  /> */}
        </form>
    </div>
);

export default Logform;
