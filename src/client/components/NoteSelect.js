import React, {Component} from 'react';
class NoteSelect extends Component {
    render(){
        return(
                <div>
                    <select name="note">
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                </div>
        );
    }
}
export default NoteSelect;