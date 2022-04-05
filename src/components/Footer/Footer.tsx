import React from "react";

const logo = require("../../stories/assets/logo.svg") as string;


const Footer: React.FC = () => {
    return(
        <div>
            <div>
                <img src={logo} alt="alt" />
            </div>
            <div>
                We use our social media to share useful stuff and updates, so why not join?
            </div>
        </div>
    )
}
export default Footer;