import React, {Component} from 'react';
class Logform extends Component {
    render(){
        return(
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
        );
    }
}
export default Logform;