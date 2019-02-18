import React, {Component} from "react";
class InputTextArea extends Component {
    render() {
        return (
            <div>
                <input
                    className="inputtext"
                    type="text"
                    placeholder={this.props.placeholder}
                />
            </div>
        );
    }
}
export default InputTextArea;
