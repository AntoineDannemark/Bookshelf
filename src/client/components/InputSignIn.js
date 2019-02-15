import React from "react";

const InputSignIn = ({handleChange, errors}) => (
    <div>
        <input
            type="email"
            id="username"
            handleChange={handleChange().bind(this)}
            error={errors.email}
            placeholder="youremail@wtf.com"
            required={true}
        />
        <input
            type="text"
            id="password"
            handleChange={handleChange().bind(this)}
            error={errors.password}
            placeholder="Your password"
            required={true}
        />
    </div>
);

export default InputSignIn;
