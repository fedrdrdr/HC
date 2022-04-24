import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import  Textarea  from "./Textarea";
import {FacebookIcon} from "../Icons/FacebookIcon";
import {LinkedInIcon} from "../Icons/LinkedInIcon";

export default {
    title: "Textarea",
    component: Textarea,

} as ComponentMeta<typeof Textarea>;

const Template: ComponentStory<typeof Textarea> = (args) =>
    <div style={{width:300}}><Textarea {...args} /></div>;

export const Primary = Template.bind({});

Primary.args = {
    placeholder: "Enter text...",
    // startIcon:<LinkedInIcon/>
};
export const Error = Template.bind({});
Error.args = {
    placeholder: "Enter text...",
    error:true,
    errorMessage: "Error message",
};