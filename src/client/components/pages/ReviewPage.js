import React from "react";
import "../../../styles/style.css";

import EnteteWriteReview from "../entetes/EnteteWriteReview";
import InputTextArea from "../InputTextArea";
import BookListDisplay from "../BookListDisplay";
import NoteSelect from "../NoteSelect";
import Submitbutton from "../Submitbutton";
import CoachNavbar from "../navbar/CoachNavbar";
import JuniorNavbar from "../navbar/JuniorNavbar";

class ReviewPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            score: "",
            user: "",
            comment: "",
            book: "",
            // coach: true
        };
        this.onChange = this.onChange.bind(this);
    }

    onChange = e => {
        this.setState({[e.target.id]: e.target.value}, () => {
            console.log(this.state);
        });
    };

    onClick = e => {
        e.preventDefault();
        e.stopPropagation();
        e.nativeEvent.stopImmediatePropagation();

        const reviewData = {
            score: this.state.score,
            user: this.state.user,
            comment: this.state.comment,
            book: this.state.book,
        };

        axios
            .post("http://localhost/api/reviews", reviewData)
            .then(res => {
                if (res.data) {
                    console.log(res.data);
                } else {
                    console.log("Failed to create review");
                }
            })
            .catch(err => {
                console.log(err);
            });
    };

    render() {
        return (
            <div>
                <form>
                    {this.state.coach ? <CoachNavbar /> : <JuniorNavbar />}
                    <EnteteWriteReview />
                    <div className="logformbackground">
                        <div>
                            <BookListDisplay onChange={() => this.onChange}/>
                        </div>
                        <div>
                            <InputTextArea placeholder="Ecrire une revue" onChange={this.onChange()} />
                            <NoteSelect onChange={this.onChange()}/>
                            <Submitbutton onClick={() => this.onClick()} />
                        </div>
                    </div>
                </form> 
            </div>
        );
    }
}

export default ReviewPage;
