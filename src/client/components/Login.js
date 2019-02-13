import React from "react";

import Logo from "./Logo";
import Slogan from "./entetes/Slogan";
import Logform from "./Logform";

import "../../styles/style.css";

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            errors: {},
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange = e => {
        this.setState({[e.target.id]: e.target.value}, () => {
            console.log(this.state);
        });
    };

    onSubmit = e => {
        e.preventDefault();

        const userData = {
            username: this.state.username,
            password: this.state.password,
        };

        console.log(userData);
    };

    render() {
        return (
            <div>
                <Logo />
                <Slogan />
                <Logform
                    onChange={() => this.onChange}
                    onSubmit={() => this.onSubmit}
                    errors={this.state.errors}
                />
            </div>
        );
    }
}

export default Login;
