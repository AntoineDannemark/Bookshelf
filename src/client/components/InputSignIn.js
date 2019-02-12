import React from "react";

const InputSignIn = ({onChange, errors}) => (
    <div>
        <input
            type="email"
            id="username"
            onChange={onChange().bind(this)}
            error={errors.email}
            placeholder="youremail@wtf.com"
            required={true}
        />
        <input
            type="text"
            id="password"
            onChange={onChange().bind(this)}
            error={errors.password}
            placeholder="Your password"
            required={true}
        />
    </div>
);

export default InputSignIn;
