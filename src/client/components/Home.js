import React, {Component} from "react";
import {Route, Link} from "react-router-dom";
import "../../styles/style.css";
import Logo from './Logo';
import Slogan from './Slogan';
import Logform from "./Logform";

export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
    
        // this.handleChange = this.handleChange.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);
      }
    //   handleChange(event) {
    //     this.setState({value: event.target.value});
    //   }
    
    //   handleSubmit(event) {
    //     alert('Submitted: ' + this.state.value);
    //     event.preventDefault();
    //   }
    render() {
        return (
            <div className="main">
                <Logo />
                <Slogan />
                <Logform />
            </div>
        );
    }
}
