import React from "react";

import Inputsignin from "./InputSignIn";
import Submitbutton from "./Submitbutton";

const Logform = ({onChange, onSubmit, errors}) => (
    <div className="logformbackground">
        <form className="logform" onSubmit={onSubmit}>
            <Inputsignin onChange={onChange} errors={errors} />
            {/* <button type="submit">{"SUBMIT"}</button> */}
            <Submitbutton />
        </form>
    </div>
);

export default Logform;
