import React from "react";

const InputSignIn = ({onChange, errors}) => (
    <div>
        <input
            className="inputtext"
            type="email"
            id="email"
            onChange={onChange}
            error={errors.email}
            placeholder="youremail@wtf.com"
            required={true}
        />
        <input
            className="inputtext"
            type="text"
            id="password"
            onChange={onChange}
            placeholder="Your password"
            required={true}
        />
    </div>
);

export default InputSignIn;
