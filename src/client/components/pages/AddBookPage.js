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
                            placeholder={"Titre du livre"}
                            type="text"
                            id="title"
                            onChange={this.onChange}
                            error={this.state.errors}
                        />
                        <input
                            className="inputtext"
                            placeholder={"Code isbn du livre"}
                            type="text"
                            id="isbn"
                            onChange={this.onChange}
                            error={this.state.errors}
                        />
                        <input
                            className="inputtext"
                            placeholder={"Nom de l'auteur"}
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
                                {"Livre en français"}
                            </option>
                            <option value="english">
                                {"Livre en anglais"}
                            </option>
                        </select>
                        <input
                            className="inputtext"
                            placeholder={"Propriétaire du livre"}
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
                            <option value="false">{"Format papier"}</option>
                            <option value="true">
                                {"Format numérique"}
                            </option>
                        </select>
                        <button type="submit">submit</button>
                        {/* <SubmitButton /> */}
                    </form>
                </div>
            </div>
        );
    }
}
export default AddBookPage;
