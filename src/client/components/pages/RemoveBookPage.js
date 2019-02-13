import React from "react";
import "../../../styles/style.css";

import EnteteRemoveBook from "../EnteteRemoveBook";
import BookListDisplay from "../BookListDisplay";
import Submitbutton from "../Submitbutton";

class Newuserpage extends React.Component {
    render() {
        return (
            <div>
                <EnteteRemoveBook />
                <BookListDisplay />
                <Submitbutton />
            </div>
        );
    }
}

export default Newuserpage;
