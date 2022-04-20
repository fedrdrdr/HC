import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import   Checkbox  from "./Checkbox";
import {FacebookIcon} from "../Icons/FacebookIcon";
import {LinkedInIcon} from "../Icons/LinkedInIcon";
import CheckboxesType from "@storybook/addon-knobs/dist/components/types/Checkboxes";

export default {
    title: "Checkbox",
    component: Checkbox,

} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = (args) => <Checkbox {...args} />;

export const Default= Template.bind({});

Default.args = {

    // startIcon:<LinkedInIcon/>
};
