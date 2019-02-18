import React, {Component} from "react";
import BookData from "../../datas/booklist.json";
import axios from "axios";

// console.log(books)

class BookListDisplay extends Component {
    constructor(props) {
        super(props);
        this.state = {books: []};
    }

    getBooks = () => {
        axios
            .get("http://localhost/api/books")
            .then(res => {
                console.log(res.data);
                const books = res.data.map(book =>  book["title"]);
                console.log(books);
            })
            .catch(err => {
                console.log(err);
            });
    };
    render() {
        return (
            <div className="select">
                <h3>{"Liste de tous les livres"}</h3>
               {this.getBooks()}
                {/* <select className="inputtext">
                    {books.map(book=> {
                        return <option> {book.title} </option>;
                    })}
                </select> */}
            </div>
        );
    }
}
export default BookListDisplay;
