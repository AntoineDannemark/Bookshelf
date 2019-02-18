import React from "react";

import Logo from "./Logo";
import Slogan from "./entetes/Slogan";
import Logform from "./Logform";

import "../../styles/style.css";

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            errors: {},
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        console.log("click happened");
    }

    render() {
        return (
            <div>
                <Logo />
                <Slogan />
                <Logform jeClique={this.handleClick} />
            </div>
        );
    }
}

export default Login;
