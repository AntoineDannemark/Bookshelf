import React from "react";

// import Submitbutton from "./Submitbutton";
import Inputsignin from "./InputSignIn";

const Logform = ({onChange, handleClick, getUsers, errors}) => (
    <div className="logformbackground">
        <form noValidate className="logform">
            <Inputsignin onChange={onChange} errors={errors} />
            <button onClick={handleClick()}>{"BOUTON DE MEEEEERDE"}</button>
            <button onClick={getUsers()}>{"BOUTON DE MEEEEERDE"}</button>
            {/* <Submitbutton  /> */}
        </form>
    </div>
);

export default Logform;
