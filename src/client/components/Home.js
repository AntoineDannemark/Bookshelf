import React from "react";

import "../../styles/style.css";
import Logo from "./Logo";
import Slogan from "./Slogan";
import Logform from "./Logform";

class Home extends React.Component {
    render() {
        return (
            <div>
                <Logo />
                <Slogan />
                <Logform />
            </div>
        );
    }
}

export default Home;
