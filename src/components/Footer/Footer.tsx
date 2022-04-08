import React, {ReactElement} from "react";
import classes from "./Footer.module.css";
import  {ReactComponent as Logo}from "../../stories/assets/logo_light.svg";

export interface FooterProps {
    contactsInfo?: ReactElement;
    productInfo?: ReactElement;
    companyInfo?: ReactElement;
    rightsInfo?:ReactElement;
}
const Footer = ({contactsInfo, companyInfo, productInfo, rightsInfo}:FooterProps) => {
    return(
        <footer>
        <div className={classes.container}>
            <div className={classes.content__box1}>
            <div>
                <Logo className={classes.logo}/>
            </div>
            <div className={classes.content__box_description}>
                We use our social media to share useful stuff and updates, so why not join?
            </div>
                <div className={classes.content__boxRow}>
                    {contactsInfo}
                </div>
            </div>
            <div className={classes.content__box2}>
                {productInfo}
            </div>
            <div className={classes.content__box2}>
                {companyInfo}
            </div>
            <div className={classes.content__box3}>
                {rightsInfo}
            </div>
        </div>
        </footer>
    );
};
export default Footer;