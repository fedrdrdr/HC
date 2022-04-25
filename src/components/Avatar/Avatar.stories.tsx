import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import {FacebookIcon} from "../Icons/FacebookIcon";
import {LinkedInIcon} from "../Icons/LinkedInIcon";
import Avatar from "./Avatar";
import avatar from "../../../public/avatar.svg";

export default {
    title: "Avatar",
    component: Avatar,

} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) =>
    <Avatar {...args} src={avatar} alt={""}/>;

export const Default = Template.bind({});

Default.args = {
    src:avatar,
    size:"m",
};
