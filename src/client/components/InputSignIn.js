import React from "react";

const InputSignIn = () => (
    <div>
        <input
            className="inputtext"
            type="email"
            id="username"
            placeholder="youremail@wtf.com"
            required={true}
        />
        <input
            className="inputtext"
            type="text"
            id="password"
            placeholder="Your password"
            required={true}
        />
    </div>
);

export default InputSignIn;
