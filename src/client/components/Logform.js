import React from "react";

import Inputsignin from "./InputSignIn";
import Submitbutton from "./Submitbutton";

const Logform = ({handleChange, handleSubmit, errors}) => (
    <div className="logformbackground">
        <form className="logform" handleSubmit={handleSubmit}>
            <Inputsignin handleChange={handleChange} errors={errors} />
            {/* <button type="submit">{"SUBMIT"}</button> */}
            <Submitbutton />
        </form>
    </div>
);

export default Logform;
