import React from "react";
import {ComponentStory, ComponentMeta} from "@storybook/react";
import {Header} from "../components/Header/Header";
import Link from "../components/Link/Link";
import Button from "../components/Button/Button";

export default {
    title: "Example/Header",
    component: Header,
    // parameters: {
    // // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    //     layout: 'fullscreen',
    // },
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} >
    <>
        <Button variant={"flat"} size={"S"} color={"black"}>Events</Button>
        <Button variant={"flat"} size={"S"} color={"black"}>Events</Button>
        <Button variant={"flat"} size={"S"} color={"black"}>Events</Button>
    </>
</Header>;

export const LoggedIn = Template.bind({});
LoggedIn.args = {
    accountElements: <>
        {/*<span className="welcome">*/}
        {/*    Welcome, <b>Joe Doe</b>!*/}
        {/*</span>*/}
        <Button size={"S"}>out</Button>
    </>
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {
    accountElements: <div style={{display:"flex"}}><Button /*style={{width:46,height:40}}*/ size={"S"} variant={"flat"}>Login</Button> <Button /*style={{width:89,height:40}} */variant={"solid"} size={"S"}>SignUp</Button></div>
};
