import React, {Component} from "react";
import BookData from "../../datas/booklist.json";
class BookListDisplay extends Component {
    render() {
        return (
            <div>
                <p className="white">{"Liste de tous les Livres"}</p>
                <select>
                    {BookData.map(bookdetail => {
                        return <option> {bookdetail.name} </option>;
                    })}
                </select>
            </div>
        );
    }
}
export default BookListDisplay;
