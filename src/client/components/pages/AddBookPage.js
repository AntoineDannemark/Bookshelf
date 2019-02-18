import React, {Component} from "react";

import "../../../styles/style.css";

import EnteteAddBook from "../entetes/EnteteAddBook";
import SubmitButton from "../Submitbutton";
import CoachNavbar from "../navbar/CoachNavbar";
import JuniorNavbar from "../navbar/JuniorNavbar";
import NoAccess from "../NoAccess";

import axios from "axios";

class AddBookPage extends Component {
    constructor() {
        super();
        this.state = {
            title: "",
            isbn: "",
            author: "",
            language: "",
            ebook: "",
            owner: "",
            picture: "",
            errors: {},
            // coach: "",
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange = e => {
        this.setState({[e.target.id]: e.target.value}, () => {
            console.log(this.state);
        });
    };

    onSubmit = e => {
        e.preventDefault();

        const bookData = {
            title: this.state.title,
            isbn: this.state.isbn,
            author: this.state.author,
            language: this.state.language,
            ebook: this.state.ebook,
            owner: this.state.owner,
            picture: this.state.picture,
        };
        console.log(bookData);

        axios
            .post("http://localhost/api/books", bookData)
            .then(res => {
                if (res.data) {
                    console.log(res.data);
                } else {
                    console.log("Login failed");
                }
            })
            .catch(err => {
                console.log(err);
            });
    };

    render() {
        // if (this.state.coach === false) {
        //     return (
        //         <div>
        //             <NoAccess />
        //         </div>
        //     );
        // }
        return (
            <div>
                {this.state.coach ? <CoachNavbar /> : <JuniorNavbar />}
                <EnteteAddBook />
                <div className="logformbackground">
                    <form className="addbookform" onSubmit={this.onSubmit}>
                        <input
                            className="inputtext"
                            placeholder={"Title"}
                            type="text"
                            id="title"
                            onChange={this.onChange}
                            error={this.state.errors}
                        />
                        <input
                            className="inputtext"
                            placeholder={"ISBN"}
                            type="text"
                            id="isbn"
                            onChange={this.onChange}
                            error={this.state.errors}
                        />
                        <input
                            className="inputtext"
                            placeholder={"Author"}
                            type="text"
                            id="author"
                            onChange={this.onChange}
                            error={this.state.errors}
                        />
                        <select
                            className="inputtext"
                            id="language"   
                            onChange={this.onChange}
                            name="language">
                            <option value="french">
                                {"French"}
                            </option>
                            <option value="english">
                                {"English"}
                            </option>
                        </select>
                        <input
                            className="inputtext"
                            placeholder={"Owner"}
                            type="text"
                            id="owner"
                            onChange={this.onChange}
                            error={this.state.errors}
                        />
                        <select
                            className="inputtext"
                            id="ebook"
                            name="bookformat"
                            onChange={this.onChange}>
                            <option value="false">{"Printed"}</option>
                            <option value="true">
                                {"Ebook"}
                            </option>
                        </select>
                        <input
                            className="inputtext"
                            placeholder={"Picture URL"}
                            type="text"
                            id="picture"
                            onChange={this.onChange}
                            error={this.state.errors}
                        />
                        <button type="submit">submit</button>
                        {/* <SubmitButton /> */}
                    </form>
                </div>
            </div>
        );
    }
}
export default AddBookPage;
