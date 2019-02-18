import React from "react";
const NoteSelect = () => (
    <div>
        <label htmlFor="Note">{"Notez le livre"} </label>
        <select name="note" className="booknote">
            <option value="0">{"0"}</option>
            <option value="1">{"1"}</option>
            <option value="2">{"2"}</option>
            <option value="3">{"3"}</option>
            <option value="4">{"4"}</option>
            <option value="5">{"5"}</option>
        </select>
    </div>
);

export default NoteSelect;
