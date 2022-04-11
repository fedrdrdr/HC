import React, {ReactElement} from "react";
import classes from "./Footer.module.css";
import {LogoDark} from "../Icons/LogoDark";
import {LogoLight} from "../Icons/LogoLight";

export interface FooterProps {
    contactsInfo?: ReactElement;
    productInfo?: ReactElement;
    companyInfo?: ReactElement;
    rightsInfo?:ReactElement;
    className?:string;
}
const Footer = ({contactsInfo, companyInfo, productInfo, rightsInfo,className}:FooterProps) => {
    return(
        <div className={classes.container}>
            <footer className={classes.footer}>
                <div className={classes.content__box1}>
                    <div className={classes.logo}>
                        <LogoLight/>
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
            </footer>
        </div>
    );
};
export default Footer;