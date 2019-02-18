import React from "react";

import Inputsignin from "./InputSignIn";
import Submitbutton from "./Submitbutton";

const Logform = props => (
    <div className="logformbackground">
        <form className="logform">
            <Inputsignin />
            <Submitbutton jeClique={props.jeClique} />
        </form>
    </div>
);

export default Logform;
