import React, {Component} from "react";
import Submitbutton from "./Submitbutton";
import Inputsignin from "./Inputsignin";
class Logform extends Component {
    render() {
        return (
            <div className="logformbackground">
                <form className="logform" onSubmit={this.handleSubmit}>
                    <Inputsignin />
                    <Submitbutton />
                </form>
            </div>
        );
    }
}
export default Logform;
