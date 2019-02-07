import React, {Component} from "react";
import {Route, Link} from "react-router-dom";
import "../../styles/style.css";

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
                <div className='logo'>
                    <img src={require("../../styles/images/bshelf2.png")} />
                </div>

                <div>
                    <p className="library">
                        Your <span className="blue">code</span> library
                    </p>
                </div>

                <div className='logformbackground'>
                    <form className='logform' onSubmit={this.handleSubmit}>
                        <div>
                            <input type="text" placeholder='youremail@wtf.com' />
                        </div>
                        <div>
                            <input type="text" placeholder= 'Your password' />
                        </div>
                        <div className='positionrelative'>
                            <input className='logsubmitbutton' type="submit" value="Submit" />
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}
