import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import  Button  from "./Button";
import {LinkedInIcon} from "../Icons/LinkedInIcon";
import {DatabaseIcon} from "../Icons/DatabaseIcon";

export default {
    title: "Button",
    component: Button,
} as ComponentMeta<typeof Button>;


const Template: ComponentStory<typeof Button> = (args) => <Button {...args}/>;

export const Primary = Template.bind({});
Primary.args = {
    children: "Button",
    size: "M",
    // icon: '/img/broadcast_icon.svg' || '/img/broadcast_icon.svg'
};

export const With_StartIcon = Template.bind({});
With_StartIcon.args = {
    children: "Button",
    size: "M",
    startIcon:<LinkedInIcon/>
    // icon: '/img/broadcast_icon.svg' || '/img/broadcast_icon.svg'
};
export const With_IconEnd = Template.bind({});
With_IconEnd.args = {
    children: "Button",
    size: "M",
    endIcon:<LinkedInIcon/>
    // icon: '/img/broadcast_icon.svg' || '/img/broadcast_icon.svg'
};










// import React from 'react';
// import { ComponentStory, ComponentMeta } from '@storybook/react';

// import { Button } from './Button';

// // More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
// export default {
//   title: 'Example/Button',
//   component: Button,
//   // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
//   argTypes: {
//     backgroundColor: { control: 'color' },
//   },
// } as ComponentMeta<typeof Button>;

// // More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
// const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

// export const Primary = Template.bind({});
// // More on args: https://storybook.js.org/docs/react/writing-stories/args
// Primary.args = {
//   primary: true,
//   label: 'Button',
// };

// export const Secondary = Template.bind({});
// Secondary.args = {
//   label: 'Button',
// };

// export const Large = Template.bind({});
// Large.args = {
//   size: 'large',
//   label: 'Button',
// };

// export const Small = Template.bind({});
// Small.args = {
//   size: 'small',
//   label: 'Button',
// };

