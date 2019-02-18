import React, {Component} from "react";

import "../../../styles/style.css";

import EnteteAddBook from "../entetes/EnteteAddBook";
import SubmitButton from "../Submitbutton";
import CoachNavbar from "../navbar/CoachNavbar";
import JuniorNavbar from "../navbar/JuniorNavbar";
import NoAccess from "../NoAccess";

class AddBookPage extends Component {
    constructor() {
        super();
        this.state = {
            booktitle: "",
            bookisbn: "",
            author: "",
            booklanguage: "",
            bookformat: "",
            bookowner: "",
            errors: {},
            coach: true,
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

        const userData = {
            booktitle: this.state.booktitle,
            bookisbn: this.state.bookisbn,
            author: this.state.author,
            booklanguage: this.state.booklanguage,
            bookformat: this.state.bookformat,
            bookowner: this.state.bookowner,
        };

        console.log(userData);
    };

    render() {
        if (this.state.coach === false) {
            return (
                <div>
                    <NoAccess />
                </div>
            );
        }
        return (
            <div>
                {this.state.coach ? <CoachNavbar /> : <JuniorNavbar />}
                <EnteteAddBook />
                <div className="logformbackground">
                    <form className="addbookform" onSubmit={this.handleSubmit}>
                        <input
                            className="inputtext"
                            placeholder={"Titre du livre"}
                            type="text"
                            id="booktitle"
                            onChange={this.handleFullNameChange}
                            error={this.state.errors}
                        />
                        <input
                            className="inputtext"
                            placeholder={"Code isbn du livre"}
                            type="text"
                            id="bookisbn"
                            onChange={this.handleFullNameChange}
                            error={this.state.errors}
                        />
                        <input
                            className="inputtext"
                            placeholder={"Nom de l'auteur"}
                            type="text"
                            id="author"
                            onChange={this.handleFullNameChange}
                            error={this.state.errors}
                        />
                        <select
                            className="inputtext"
                            ref={select => (this.bookformat = select)}
                            name="bookformat">
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
                            id="bookowner"
                            onChange={this.handleFullNameChange}
                            error={this.state.errors}
                        />
                        <select
                            className="inputtext"
                            ref={select => (this.bookformat = select)}
                            name="bookformat">
                            <option value="paper">{"Format papier"}</option>
                            <option value="numeric">
                                {"Format numérique"}
                            </option>
                        </select>

                        <SubmitButton />
                    </form>
                </div>
            </div>
        );
    }
}
export default AddBookPage;
