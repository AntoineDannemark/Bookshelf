import React, {Component} from "react";
import BookData from "../../datas/booklist.json";
class BookListDisplay extends Component {
    render() {
        return (
            <div className="select">
                <h3>{"Liste de tous les livres"}</h3>
                <select className="inputtext">
                    {BookData.map(bookdetail => {
                        return <option> {bookdetail.name} </option>;
                    })}
                </select>
            </div>
        );
    }
}
export default BookListDisplay;
