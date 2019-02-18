import React from "react";

const Submitbutton = props => (
    <div>
        <input
            onClick={() => props.jeClique()}
            className="submitbutton"
            type="submit"
        />
    </div>
);

export default Submitbutton;
