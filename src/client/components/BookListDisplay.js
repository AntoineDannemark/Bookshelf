import React, {Component} from "react";
import BookData from "../../datas/booklist.json";
class BookListDisplay extends Component {
    render() {
        return (
            <div className="centeredDropDown">
                <p className="white">{"Liste de tous les Livres"}</p>
                <select className="movementselect">
                    {BookData.map(bookdetail => {
                        return <option> {bookdetail.name} </option>;
                    })}
                </select>
            </div>
        );
    }
}
export default BookListDisplay;
