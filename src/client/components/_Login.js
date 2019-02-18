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
    }

    handelChange = e => {
        this.setState({[e.target.id]: e.target.value});
    };

    handleSubmit = e => {
        e.preventDefault();
    };

    render() {
        return (
            <div>
                <Logo />
                <Slogan />
                <Logform
                    handleChange={() => this.handelChange}
                    handleSubmit={() => this.handleSubmit}
                    errors={this.state.errors}
                />
            </div>
        );
    }
}

export default Login;
