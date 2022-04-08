import {ComponentMeta, ComponentStory} from "@storybook/react";
import Button from "../components/Button/Button";
import React, {ReactElement} from "react";
import Footer from "../components/Footer/Footer";
import classes from "../components/Footer/Footer.module.css";
import Link from "../components/Link/Link";
import {ReactComponent as Linkedin} from "../../public/linkedin.svg";
import {ReactComponent as Facebook} from "../../public/facebook.svg";
import {ReactComponent as Twitter} from "../../public/twitter.svg";
import {ReactComponent as Instagram} from "../../public/instagram.svg";
export default {
    title: "Footer",
    component: Footer,
} as ComponentMeta<typeof Footer>;
const Template: ComponentStory<typeof Footer> =(args) => <Footer {...args}/>;

export const Primary = Template.bind({});
Primary.args = {
    contactsInfo:
    <>
        <div className={classes.content__box_social}>
            <div className={classes.contact__item}><Link color={"white"} startIcon={<Linkedin/>} nonUnderline>LinkedIn</Link></div>
            <div className={classes.contact__item}><Link color={"white"} startIcon={<Facebook/>} nonUnderline>Facebook</Link></div>
        </div>
        <div className={classes.content__box_social}>
            <div className={classes.contact__item}><Link color={"white"} startIcon={<Twitter/>} nonUnderline>Twitter</Link></div>
            <div className={classes.contact__item}><Link color={"white"} startIcon={<Instagram/>} nonUnderline>Instagram</Link></div>
        </div>
    </>,
    productInfo: <>
                    <div className={classes.item} style={{color:"#A8A8A8"}}>Product</div>
                    <div className={classes.item}><Link color={"white"} nonUnderline>Event catalog</Link></div>
                    <div className={classes.item}><Link color={"white"} nonUnderline>Features</Link></div>
                    <div className={classes.item}><Link color={"white"} nonUnderline>Pricing</Link></div>
                    <div className={classes.item}><Link color={"white"} nonUnderline>Learning</Link></div>
                </>,
    companyInfo: <>
        <div className={classes.item} style={{color:"#A8A8A8"}}>Company</div>
        <div className={classes.item}><Link color={"white"} nonUnderline>About us</Link></div>
        <div className={classes.item}><Link color={"white"} nonUnderline>Contacts</Link></div>
    </>,
    rightsInfo:<>
        <div>
            <div className={classes.content__box_description}> It’s not fun but it’s important. Check out Evvve Privacy Policy</div>
            <div><Link className={classes.item} color={"white"} nonUnderline>Terms of Service</Link></div>
        </div>
        <div>
            <div><Link className={classes.item} color={"white"} nonUnderline>Honeycomb</Link></div>
            <div className={classes.content__box_description}>©Evvve, 2022</div>
        </div>
    </>,
};
