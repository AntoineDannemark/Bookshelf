import React from "react";

import Logo from "./Logo";
import Slogan from "./Slogan";
import Logform from "./Logform";

import axios from "axios";

import "../../styles/style.css";

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            errors: {},
        };
        this.onChange = this.onChange.bind(this);
        this.logout = this.logout.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.getUsers = this.getUsers.bind(this);
    }

    onChange = e => {
        this.setState({[e.target.id]: e.target.value}, () => {
            console.log(this.state);
        });
    };

    logout = e => {
        e.preventDefault();
        e.stopPropagation();
        e.nativeEvent.stopImmediatePropagation();

        axios
        .post("http://localhost/api/users/logout")
        .then(res => {
            if (res.data) {
                console.log(res.data);
            } else {
                console.log("Login failed");
            }
        })
        .catch(err => {
            console.log(err);
        });
    }

    handleClick = e => {
        e.preventDefault();
        e.stopPropagation();
        e.nativeEvent.stopImmediatePropagation();

        const userData = {
            email: this.state.email,
            password: this.state.password,
        };

        axios
            .post("http://localhost/api/users/login", userData)
            .then(res => {
                if (res.data) {
                    console.log(res.data);
                } else {
                    console.log("Login failed");
                }
            })
            .catch(err => {
                console.log(err);
            });
    };

    getUsers = e => {
        e.preventDefault();

        axios
            .get("http://localhost/api/users")
            .then(res => {
                if (res.data) {
                    console.log(res.data);
                } else {
                    console.log("Login failed");
                }
            })
            .catch(err => {
                console.log(err);
            });
    };

    render() {
        return (
            <div>
                <Logo />
                <Slogan />
                <Logform
                    onChange={() => this.onChange}
                    handleClick={() => this.handleClick}
                    logout={() => this.logout}
                    getUsers={() => this.getUsers}
                    errors={this.state.errors}
                />
            </div>
        );
    }
}

export default Login;
