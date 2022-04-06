import React from "react";
import classes from "./Footer.module.css";
import  {ReactComponent as Logo}from "../../stories/assets/logo_light.svg";
import Link from "../Link/Link";


const Footer = () => {
    return(
        <div className={classes.container}>
            <div className={classes.content__box}>
            <div>
                <Logo className={classes.logo}/>
            </div>
            <div className={classes.content__box_description}>
                We use our social media to share useful stuff and updates, so why not join?
            </div>
                <div className={classes.content__boxRow}>
                    <div className={classes.content__box_social}>
                        <div className={classes.contact__item}>LinkedIn</div>
                        <div className={classes.contact__item}>Facebook</div>
                    </div>
                    <div className={classes.content__box_social}>
                        <div className={classes.contact__item}><Link color={"white"}>Twitter</Link></div>
                        <div className={classes.contact__item}>Instagram</div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Footer;