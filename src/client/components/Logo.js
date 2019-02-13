import React, {Component} from "react";
const logo = require("../../styles/images/bshelf600.png");

class Logo extends Component {
    render() {
        return (
            <div className="logo">
                <img src={logo} />
            </div>
        );
    }
}
export default Logo;
