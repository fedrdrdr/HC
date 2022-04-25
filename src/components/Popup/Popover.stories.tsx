import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import  Popover  from "./Popover";
import {FacebookIcon} from "../Icons/FacebookIcon";
import {LinkedInIcon} from "../Icons/LinkedInIcon";

export default {
    title: "Popover",
    component: Popover,

} as ComponentMeta<typeof Popover>;

const Template: ComponentStory<typeof Popover> = (args) =>
    <div><Popover {...args} /></div>;

export const Primary = Template.bind({});

// Primary.args = {
//    avatar:
// };