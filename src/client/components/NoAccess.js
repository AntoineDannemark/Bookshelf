import React from "react";
import JuniorNavbar from "../components/navbar/JuniorNavbar";

const NoAccess = () => (
    <div>
        <JuniorNavbar />
        <p className="noaccess">{"Vous n'avez pas accès à cette page"}</p>
    </div>
);

export default NoAccess;
