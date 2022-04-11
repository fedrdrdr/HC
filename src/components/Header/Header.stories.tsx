import React from "react";
import {ComponentStory, ComponentMeta} from "@storybook/react";
import {Header} from "./Header";
import Link from "../Link/Link";
import Button from "../Button/Button";

export default {
    title: "Example/Header",
    component: Header,
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} >
    <>
        <Button variant={"flat"} size={"S"} color={"black"}>Events</Button>
        <Button variant={"flat"} size={"S"} color={"black"}>Events</Button>
        <Button variant={"flat"} size={"S"} color={"black"}>Events</Button>
        <Button variant={"flat"} size={"S"} color={"black"}>Events</Button>
        <Button variant={"flat"} size={"S"} color={"black"}>Events</Button>
        <Button variant={"flat"} size={"S"} color={"black"}>Events</Button>
    </>
</Header>;

export const LoggedIn = Template.bind({});
LoggedIn.args = {
    accountElements: <>
        <Button size={"S"}>out</Button>
    </>
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {
    accountElements: <div style={{display:"flex"}}><Button /*style={{width:46,height:40}}*/ size={"S"} variant={"flat"}>Login</Button> <Button /*style={{width:89,height:40}} */variant={"solid"} size={"S"}>SignUp</Button></div>
};
