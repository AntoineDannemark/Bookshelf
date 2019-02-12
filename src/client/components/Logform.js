import React from "react";

import Submitbutton from "./Submitbutton";
import Inputsignin from "./Inputsignin";

const Logform = ({handleSubmit}) => (
    <div className="logformbackground">
        <form className="logform" onSubmit={handleSubmit}>
            <Inputsignin />
            <Submitbutton />
        </form>
    </div>
);

export default Logform;
