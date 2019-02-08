import React, {Component} from 'react';
import Submitbutton from './Submitbutton';
import Inputtext from './Inputtext';
class Logform extends Component {
    render(){
        return(
                <div className='logformbackground'>
                    <form className='logform' onSubmit={this.handleSubmit}>
                        <Inputtext />
                        <Inputtext />
                        <Submitbutton />
                    </form>
                </div>
        );
    }
}
export default Logform;