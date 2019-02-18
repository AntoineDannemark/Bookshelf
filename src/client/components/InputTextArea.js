import React, {Component} from "react";

const InputTextArea = ({onChange}) => (
    <div>
        <input
            className="inputtext"
            type="text"
            placeholder={this.props.placeholder}
            onChange={onChange} 
        />
    </div>
)

export default InputTextArea;
