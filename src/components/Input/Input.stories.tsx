import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import   Input  from "./Input";
import {FacebookIcon} from "../Icons/FacebookIcon";

export default {
    title: "Input",
    component: Input,

} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Primary = Template.bind({});

Primary.args = {
    placeholder: "Enter text...",
};
export const Error = Template.bind({});
Error.args = {
    placeholder: "Enter text...",
    error:true,
    errorMessage: "Error message",
};