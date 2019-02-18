import React from "react";

const Input = ({onChange, errors}) => (
        <input
            className="inputtext"
            type="email"
            id="email"
            onChange={onChange}
            error={errors.email}
            placeholder="youremail@wtf.com"
            required={true}
        />
);

export default Input;
