import React from "react";
import "../../../styles/style.css";

import EnteteRemoveBook from "../entetes/EnteteRemoveBook";
import BookListDisplay from "../BookListDisplay";
import Submitbutton from "../Submitbutton";
import Navbar from "../navbar/Navbar";

class Newuserpage extends React.Component {
    render() {
        return (
            <div>
                <Navbar />
                <EnteteRemoveBook />
                <BookListDisplay />
                <Submitbutton />
            </div>
        );
    }
}

export default Newuserpage;
