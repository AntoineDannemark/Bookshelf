import React, {Component} from "react";
class BookMovementCheckbox extends Component {
    render() {
        return (
            <div>
                <form method="post" action="traitement.php">
                    <p>
                        <input type="checkbox" name="Emprunt" id="Emprunt" />{" "}
                        <label htmlFor="Emprunt">{"Emprunt"}</label>
                        <br />
                        <input type="checkbox" name="Retour" id="Retour" />{" "}
                        <label htmlFor="Retour">{"Retour"}</label>
                        <br />
                    </p>
                </form>
            </div>
        );
    }
}
export default BookMovementCheckbox;
