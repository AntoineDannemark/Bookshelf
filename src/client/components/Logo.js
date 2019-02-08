import React, {Component} from 'react';
class Logo extends Component {
    render(){
        return(
        <div className='logo'>
            <img src={require("../../styles/images/bshelf2.png")} />
        </div>
        );
    }
}
export default Logo;
