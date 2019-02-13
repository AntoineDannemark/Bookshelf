import React from "react";

// import Submitbutton from "./Submitbutton";
import Inputsignin from "./InputSignIn";

const Logform = ({onChange, onSubmit, errors}) => (
    <div className="logformbackground">
        <form className="logform" onSubmit={onSubmit}>
            <Inputsignin onChange={onChange} errors={errors} />
            <button type="submit">{"SUBMIT"}</button>
            {/* <Submitbutton  /> */}
        </form>
    </div>
);

export default Logform;
