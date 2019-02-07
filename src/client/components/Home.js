import React, {Component} from "react";
import {Route, Link} from "react-router-dom";
import '../../styles/style.css';

export default class Home extends React.Component {
    render() {
        return (
            <div className='main'>
                <img src={require("../../styles/images/bshelf2.png")} />
                <div>
                    <p className="library">
                        Your <span className="blue">code</span> library
                    </p>
                </div>
                <div id="signbuttonscontainer">
                    <button className="signbuttons" type="button">
                        Sign In
                    </button>
                </div>
            </div>
        );
    }
}
